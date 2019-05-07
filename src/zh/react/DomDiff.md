# DOM-Diff

### DOM Diff算法简析

![image](https://img-blog.csdn.net/20180717182348969)

### diff算法
其实React的 virtual dom的性能好也离不开它本身特殊的diff算法。传统的diff算法时间复杂度达到o(n3)，而react的diff算法时间复杂度只是o(n)，react的diff能减少到o(n)依靠的是react diff的三大策略。

### 传统diff 对比 react diff
传统的diff算法追求的是“完全”以及“最小”，而react diff则是放弃了这两种追求：
在传统的diff算法下，对比前后两个节点，如果发现节点改变了，会继续去比较节点的子节点，一层一层去对比。就这样循环递归去进行对比，复杂度就达到了o(n3)，n是树的节点数，想象一下如果这棵树有1000个节点，我们得执行上十亿次比较，这种量级的对比次数，时间基本要用秒来做计数单位了。那么react究竟是如何把复杂度降低到o(n)的呢？

### React diff 三大策略
策略一（tree diff）：Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。（DOM结构发生改变-----直接卸载并重新creat）
策略二（component diff）：DOM结构一样-----不会卸载,但是会update
策略三（element diff）：所有同一层级的子节点.他们都可以通过key来区分-----同时遵循1.2两点

### 虚拟DOM树分层比较（tree diff）
两棵树只会对同一层次的节点进行比较，忽略DOM节点跨层级的移动操作。React只会对相同颜色方框内的DOM节点进行比较，即同一个父节点下的所有子节点。当发现节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。这样只需要对树进行一次遍历，便能完成整个DOM树的比较。由此一来，最直接的提升就是复杂度变为线型增长而不是原先的指数增长。

![image](https://img-blog.csdnimg.cn/20181213112349545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2NDA3ODc1,size_16,color_FFFFFF,t_70)

### 组件间的比较（component diff）
查阅的网上的很多资料，发现写的都比较难懂，根据我自己的理解，其实最核心的策略还是看结构是否发生改变。React是基于组件构建应用的，对于组件间的比较所采用的策略也是非常简洁和高效的。
如果是同一个类型的组件，则按照原策略进行Virtual DOM比较。
如果不是同一类型的组件，则将其判断为dirty component，从而替换整个组价下的所有子节点。
如果是同一个类型的组件，有可能经过一轮Virtual DOM比较下来，并没有发生变化。如果我们能够提前确切知道这一点，那么就可以省下大量的diff运算时间。因此，React允许用户通过shouldComponentUpdate()来判断该组件是否需要进行diff算法分析。

![image](https://img-blog.csdnimg.cn/20181213152745415.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2NDA3ODc1,size_16,color_FFFFFF,t_70)

如上图所示，当组件D变为组件G时，哪怕这两个组件结构相似，一旦React判断D和G是不用类型的组件，就不会比较两者的结构，而是直接删除组件D，重新创建组件G及其子节点。也就是说，如果当两个组件是不同类型但结构相似时，其实进行diff算法分析会影响性能，但是毕竟不同类型的组件存在相似DOM树的情况在实际开发过程中很少出现，因此这种极端因素很难在实际开发过程中造成重大影响。

### 元素间的比较（element diff）
当节点处于同一层级的时候，react diff 提供了三种节点操作：插入、删除、移动。

操作	描述
插入	新节点不存在于老集合当中，即全新的节点，就会执行插入操作
移动	新节点在老集合中存在，并且只做了位置上的更新，就会复用之前的节点，做移动操作（依赖于Key）
删除	新节点在老集合中存在，但节点做出了更改不能直接复用，做出删除操作

简单先看个例子：

![image](https://img-blog.csdnimg.cn/2018121410462466.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2NDA3ODc1,size_16,color_FFFFFF,t_70)

看上面的例子，得知，老集合包含节点 A、B、C、D，更新之后的新集合包括节点： B、A、D、C，然后diff算法对新老集合进行差异检测，发现B不等于A，然后就会创建B然后插入，并删除A节点，以此类推，创建并插入 A、D、C，然后移除B、C、D。
但是这些节点其实都没有发生改变，仅仅是位置上发生了变化，却要进行一大堆的繁琐低效的创建插入删除等操作，React说：“这样下去不行的，我们不如。。。”，于是React允许开发者对同一层级的同组子节点增加一个唯一的Key进行标识。

#### 案例
#### 2.1 DOM遍历
::: tip Question: 
请用递归的方式遍历树形数据结构中的每一个节点
:::
```js
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
];
// 深度优先遍历
function eachOpt(option){
	option.forEach(element => {
		console.log('element value....',element.value)
		if(Array.isArray(element.children) && element.children.length){
        	eachOpt(element.children)
      	}
   	});
}
eachOpt(options)
```
#### 2.2 DOM解析
::: tip Question:
将类似以下JSON表示的树状结构(可以无限层级)通过parseDOM函数(使用document.createElement,
document.createTextNode,appendChild等方法)生成一颗DOM树(返回一个element元素)
:::
```js
const JsonTree={
    "tagName":"ul",
    "props":{
        "className":"list",
        "data-name":"jsontree"
    },
    "tagName":"a",
    "props":{
        "href":"https://www.aliyun.com",
        "target":"_blank"
    },
    "children":"阿里云"
  } 
};

function parseDOM(jsontree){
    const {tagName,props,children}=jsontree;
    const element = document.createElement("ul")
    if(Array.isArray(children)){
        children.forEach(item=>{
            element.appendChild(parseDOM(item))
        })
    }else{
        let child = document.createText(children); 
        element.appendChild(child);
    }
    if(props){
        Object.keys(props).forEach(item=>{
            element[item]=props[item];
        })
    }
    return element;
}