/*
- 클래스, 생성자, 상속, super
- es6부터 객체지향 프로그래밍이 가능하다.
- 생성자 : 클래스를 활용해서 객체가 생성될 때, 가장 처음 생성되는 메소드
- 상속 : 기본적인 틀을 두고, 그 틀에 추가, 삭제등 수정을 할 경우 상속을 통해 기본내용을 복사하여 코드의 중복을 없앤다.
- 상속이 필요한 이유
    : 아래와 같은 경우가 존재할 때, 기존 코드는 수정을 하지 않고 기능의 추가, 변경이 가능하다.    
        1. 다른 사용자가 만든 클래스, 라이브러리를 사용하면서 내부에 직접 수정, 추가를 했는데 기존의 코드가 업데이트 될 경우.
        2. 사용자가 직접 만든 클래스에 기능추가를 해야 하지만 큰 틀은 건들이고 싶지 않은 경우.
    : 동일한 기능을 활용하면서 추가 기능을 활용할 때 코드의 중복을 방지하기 위해 사용.
- super : super는 부모 클래스를 지칭하고, super()는 부모클래스의 생성자를 뜻한다.
- super 사용 이유 : 부모 클래스에서 상속받은 기능을 수정할 경우, 자식클래스에서 부모클래스의 값을 가져올경우 사용한다.
*/

class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum(){
        return this.first+this.second;
    }
}

class PersonPlus extends Person{
    /* 상속, extends Person을 사용하면서 중복되는 코드를 제거한다.
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum(){
        return 'prototype : ' + (this.first+this.second);
    }
    */
    constructor(name, first, second, third){
        super(name, first, second); // 상속받은 부모 생성자에 매개변수 입력(자식 클래스에서 활용가능)
        this.third = third;
    }

    sum(){
        return super.sum() + this.third; // super.메소드() 로 부모클래스의 메소드를 활용할 수 있다.
    }

    avg(){
        return this.sum()/2;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());