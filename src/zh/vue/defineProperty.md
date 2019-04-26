# Object.defineProperty()  

#### Object.defineProperty()   数据更新视图
直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。

##### 1.据描述符： 拥有可写或不可写值的属性*
可选键值： 
- configurable::总开关，一旦为false，就不能再设置他的,当且仅当configurable为true时，改属性描述符才能够被改变，也能被删除 
+ enumerable: 当其值为true时，该属性才能够出现在对象的枚举属性中，默认为false 
* writable:如果为false，属性的值就不能被重写,只能为只读了, 当且仅当该属性的值为true时，该属性才能被赋值运算符改变， 默认为false。 
* value： 该属性对应的值，可以是任意有效的javascript的值（数值，对象，函数等），默认为undefined
##### 2.存取描述符： 由一对getter-setter函数功能来描述的属性*
可选键值： 
* configurable: 当且仅当configurable为true时，改属性描述符才能够被改变，也能被删除 
* enumerable: 当其值为true时，该属性才能够出现在对象的枚举属性中，默认为false 
* get: 给属性提供getter的方法，如果没有 getter 则为undefined。当我们读取某个属性的时候，其实是在对象内部调用了该 方法，此方法必须要有return语句。该方法返回值被用作属性值。默认为 undefined  computed
* set：设置属性值的方法， 如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined。也就是说，当我们设置某个属性的时候，实际上是在对象的内部调用了该方法   watch
* note：两者不能同时定义， 否则报错