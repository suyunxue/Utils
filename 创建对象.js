//创建对象
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// instanceof操作符
// 查看右边的对象是否在左边对象的原型链上
// 不同环境下是不同的
[1,2] instanceof Array === true
new Object() instanceof Array === false;


// 实现继承
Student.prototype = Person.prototype;//方式1
//这样继承很奇怪，因为这里我们的student只是一个类，我们并没有实例化，给person传任何参数都是不合理的	
Student.prototype = new Person();//方式2
//方式3
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Person;

(!Object.create){
	Object.create = function(proto) {
		function F () {};
		F.prototype = proto;
		return new F;
	}
}


// 函数名相当于指针，所以没有重载

//arguments没有传递值的命名参数被自动赋予undefined值，这就好像定义的变量但是没有初始化一样
//模拟重载
function Person() {
	var args = arguments;
	//&&防止空对象
	if(typeof args[0] === 'object' && args[0]) {
		if(args[0].name) {
			this.name = args[0].name;
		}
		if(args[0].age) {
			this.age = args[0].age;
		}
	}else {
		if(args[0]) {
			this.name = args[0];
		}
		if(args[1]) {
			this.age = args[1];
		}
	}
}
