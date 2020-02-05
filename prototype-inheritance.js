/*
- 객체 상속 : javascript 는 기본적인 객체지향 언어들이 갖고있는 '클래스 - 클래스' 상속 뿐만이 아닌, '객체 - 객체' 상속이 가능하다. 객체 상속 시 prototype link를 지정 해준다고 한다.
- 객체 상속 사용방법1 : 자식객체.__proto__ = 부모객체 를 사용한다(기본 문법이 아니지만 많은곳에서 사용되는 중).
- 객체 상속 사용방법2 : 자식객체 = Object.create(부모객체)를 사용한다.
*/

var superObj = {superVal:'super'}
var subObj1 = {subVal:'sub'}

// subObj : 자식 객체, superObj : 부모 객체
subObj1.__proto__ = superObj;

console.log('subObj1.subVal =>', subObj1.subVal); // sub
console.log('subObj1.superVal =>', subObj1.superVal); // super

subObj1.superVal = 'sub'; // 자식 객체에서 상속받았던 값을 바꾼것, 부모 객체에는 영향을 주지 않는다.
console.log('superObj.superVal =>', superObj.superVal); // super
console.log('subObj1.superVal =>', subObj1.superVal); // sub


var subObj2 = Object.create(superObj);
subObj2.subVal = 'sub';
console.log('subObj2.subVal =>', subObj2.subVal); // sub
console.log('subObj2.superVal =>', subObj2.superVal); // super

subObj2.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal); // super
console.log('subObj2.superVal =>', subObj2.superVal); // sub

// subObj2.__proto__ === superObj // true