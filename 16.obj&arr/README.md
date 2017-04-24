# javascript 中 Object 和 Array 的深浅复制

#### 1.什么是深复制和浅复制

​	顾名思义，深复制和浅复制必然是在现有数据的基础上拷贝了一份一模一样的数据，由于在将对象实例复制给变量时，变量保存是对象实例在内存中的地址，而不是对象实例本身，这个时候复制就有了复制实例和复制引用两种情况，这也是深复制和浅复制的本质区别。深复制复制的是对象实例，而浅复制复制的是对象引用。

​	浅复制代码实例：	

```javascript
const person1 = {name : "Wes",age : 32};
const person2 = person1;
console.log(person1, person2);
//Object {name: "Wes", age: 32} Object {name: "Wes", age: 32}
person2.age = 30;
console.log(person1, person2);
//Object {name: "Wes", age: 30} Object {name: "Wes", age: 30}
```
​	更改 person2 对象的age属性时，person1 对象的age属性也跟着变化，在复制过程中 person2 只复制person1 的引用，person2 和 person1 指向同一对象实例，因此改变 person2 的 age 属性时 person1 的 age 属性也跟着变化。

#### 2.数组实现深复制的几种情况

​	

​	

