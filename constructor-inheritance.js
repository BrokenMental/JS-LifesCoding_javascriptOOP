/*
- 함수 상속 : 함수를 활용해서 생성한 객체의 __proto__는 부모 함수의 prototype을 바라본다, 부모 함수의 prototype에 존재하는 constructor는 부모 함수를 바라본다.
- 객체 상속에서 제공하는 기능을 함수 상속에서 구현하는것이 가능하긴 하나 객체 상속보다 복잡하고 선언 위치, 선언 방법에 따라 원하는대로 실행되지 않을 수 있다.
*/

// constructor function
function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return this.first + this.second;
}

// 자식 함수
function PersonPlus(name, first, second, third){
    //Person(name, first, second); // 이런식으로 하면 평범한 Person 함수를 호출하는게 된다.
    
    Person.call(this, name, first, second); // 여기서 call()은 class와 같은 객체에서 사용되는 super()같은 역할을 한다. 이 상태는 부모(Person counstructor function)의 프로퍼티만 호출한 상태, 부모의 프로퍼티는 바라보지 않는다.
    this.third = third;
}

PersonPlus.prototype.avg = function(){
    return (this.first + this.second + this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
/*
console.log("kim.sum()", kim.sum()); // kim.sum is not a function 에러
이 상태에서는 Person을 상속받는 PersonPlus 함수를 주체로 kim 객체를 생성했지만, Person의 prototype.sum은 상속받지 않는다. 
따라서 아래처럼 PersonPlus.prototype의 prototype이 Person.prototype을 바라보게 만들어준다.
*/

// kim.sum을 찾게하는 두가지 방법
//PersonPlus.prototype.__proto__ = Person.prototype; // 이렇게 하면 PersonPlus.prototype의 __proto__가 Person.prototype을 바라본다.
PersonPlus.prototype = Object.create(Person.prototype); // 이렇게 하면 Person.prototype이라는 __proto__ 객체가 새롭게 생성된다.
console.log("kim.constructor", kim.constructor); // function Person(~){~}, 위와 같이 Object.create로 prototype을 연결할 경우, 자신이 아닌 부모의 constructor를 바라보는 문제가 있다.

PersonPlus.prototype.constructor = PersonPlus; // 부모의 constructor가 아닌 자신의 constructor를 바라보게 다시한번 지정해주면 문제가 해결된다.

//var kim = new PersonPlus('kim', 10, 20, 30); // kim의 선언위치와 Object.create() 사용 위치에 따라서 prototype을 활용한 선언에 문제가 발생할 수 있다.
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
