function MyNew(context){
    console.log(context,arguments,[...arguments].slice(1),'ss')
    let obj = {}
    obj.__proto__ = context.prototype
    let res = context.apply(obj,[...arguments].slice(1))
    return typeof res === 'object' ? res : obj
}

function Person(name,age){
    this.name=name
    this.age=age
}
Person.prototype.sayHi=function(){
    console.log(`Hi！我是${this.name},我今年${this.age}岁啦` )
   }

let p2=MyNew(Person,'李四',16)
p2.sayHi()