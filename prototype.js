/*
- 함수, prototype
- 함수 : 다양한 복사본을 만들기 위한 필수적인 특징들의 묶음, 특징은 같지만 데이터가 다를 수 있다.
- 함수의 예 : 인간이라는 함수는 얼굴, 몸, 손, 다리와 같이 필수적인 특징을 갖고, 생김새, 형태, 색깔과 같이 다른 데이터를 갖는다.
- prototype : 다중 객체를 만들 때, 필요한 시점에 호출되어 메모리의 낭비를 방지한다.
*/

function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return 'prototype : ' + (this.first+this.second);
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first + this.second);
}

var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());