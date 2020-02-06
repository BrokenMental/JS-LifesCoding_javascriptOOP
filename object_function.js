/*
- call, bind
- call : 특정 객체에 속해있지 않은 함수를 일시적으로 특정 객체의 함수처럼 사용할 경우 사용
- call 사용 방법 : {사용될 함수}.call({포함될 객체}, {함수의 매개변수1}, ...)
- bind : 특정 객체에 속해있지 않은 함수를 특정 객체에 포함해 새로운 객체를 만들 때 사용
- bind 사용 방법 : var {새로운 객체명} = {사용될 함수}.bind({포함될 객체}, {함수의 매개변수1}, ...)
*/

var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}

function sum(perfix){
    return prefix+(this.first + this.second);
}

//(첫번째 인자 : 바라볼 객체명, 두번째, 세번째, ~ 인자 : 함수에서 사용될 매개변수)
console.log("sum.call(kim) : ", sum.call(kim, '=> ')); // 30
console.log("sum.call(lee) : ", sum.call(lee, ' : ')); // 20

var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());