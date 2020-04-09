/*
//함수도 데이터 타입의 일종이기 때문에 값처럼 주고 받을 수 있다.
function func() {
    console.log("func 호출됨");
}
var f1 = func;
var f2 = f1;
func();
f1();
f2();
*/


/*
//함수는 매개변수로 함수를 받을 수 있다.
function func(callback) {
    console.log( typeof (callback) );
    // 넘어온 함수 실행하기
    callback();
}

function myCall() {
    console.log("myCall 호출됨");
}
//func(myCall()); > TypeError: callback is not a function, callback 함수에는 () 괄호를 붙이지 않는다.
func(myCall);
*/


/*
//또 함수는 익명 함수를 전달 받을 수 있다.
function func(callback) {
    console.log( typeof (callback) );
    // 넘어온 함수 실행하기
    callback();
}
 
var aFunc = function () {
    console.log("익명함수 호출됨")
}

func(aFunc);
*/

/*
//함수는 함수의 결과로 함수를 리턴할 수 있다.
function func () {
    function cb() {
        console.log("리턴된 함수 실행");
    }
    return cb; //cb() 리턴
}
func(); // 값 : func함수 안에 있는 cb함수, 출력 없음
func()(); // 출력 : "리턴된 함수 실행", func() 안의 cb() 리턴
 
var myCb = func(); // myCb 변수에 func() 값인 cb함수를 전달한다.
console.log(typeof (myCb)); // 출력 : "function"
myCb(); // 출력 : "리턴된 함수 실행"
*/


/*
//return문에 직접 익명함수를 정의하여 반환할 수 있다.
function func1 () {
    return function () { 
        console.log("리턴된 함수 실행1"); 
    };
}
func1()();
 
var myCb1 = func1();
myCb1();
*/

//출처 : https://deftkang.tistory.com/20
/////////////////////////////////////////

/*
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}

doHomework('math', function() {
    alert('Finished my homework');
});

////////////////////////////////////
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}
function consoleFinished(){
    console.log('Finished my homework');
}
doHomework('math', consoleFinished);
*/

//출처 : https://medium.com/@oasis9217/%EB%B2%88%EC%97%AD-javascript-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%BD%9C%EB%B0%B1%EC%9D%B4-%EB%AD%94%EB%8D%B0-65bb82556c56