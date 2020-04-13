/*
//Promise 선언
var _promise = function (param) {

	return new Promise(function (resolve, reject) {

	// 비동기를 표현하기 위해 setTimeout 함수를 사용 
		window.setTimeout(function () {

			// 파라메터가 참이면, 
			if (param) {

				// 해결됨 
				resolve("해결 완료");
			}
			// 파라메터가 거짓이면, 
			else {
				// 실패 
				reject(Error("실패!!"));
			}
		}, 3000);
	});
};

//Promise 실행
_promise(true)
.then(function (text) {
	// 성공시
	console.log(text);
}, function (error) {
	// 실패시 
	console.error(error);
});
*/


/*
let promise1 = new Promise(function (resolve, reject){
	setTimeout(function(){
		let rnum = Math.random() * 10;
		if(rnum >= 5){
			resolve(rnum);
		} else {
			reject();
		}
	}, 1000);
});

promise1.then(function(num) {
	console.log(num + 'success');
}, function() {
	console.log('error');
});
*/


/*
let promise2 = function(str){
	return new Promise(function(resolve, reject){
		if(str){
			resolve('success');
		}else{
			reject('fail');
		}
	});
}

promise2(false).then(function(result){
	console.log(result);
},function(err){
	console.log(err);
});
*/


/*
Promise.all([promise1,promise2]).then(function(val){
	console.log('1,2 all success', val);
});
*/


/*
let promise3 = new Promise(function(resolve, reject) {
	resolve(10);
});

promise3.then(function(val) {
	return val + 1; //리턴 값 : 11
}).then(function(chainval) { //chainval 값 : 11
	console.log(chainval); //출력 : 11
});
*/


let promise4 = new Promise(function(resolve, reject) {
	resolve(10);
});

promise4.then(function(val) {
	if(val > 10){
		return val;
	}else{
		throw 'error!!';
	}
}).then(function(chainval) {
	console.log(chainval);
}).catch(function(err){
	console.log(err);
}).then(function(){
	console.log('running!!');
}, function() {
	console.log('not running');
});

promise4.then(function(val) {
	return Promise.reject('error!!!!!');
}).then(function(chainval) {
	console.log(chainval);
}).catch(function(err){
	console.log(err);
}).then(function(){
	console.log('then in');
}, function() {
	console.log('not running');
});