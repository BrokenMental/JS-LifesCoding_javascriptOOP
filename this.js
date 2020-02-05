/*
- 객체, this
- 객체 : 서로 연관된 변수와 함수를 그룹핑 해서 이름을 붙인것.
- this : 현재 속해있는 객체를 가리키는 예약어.
- this를 사용하는 이유
    : 객체가 내부적으로 갖고있는 상태를 참조할수 있기 때문이다.
*/

// 객체명은 kim, k 둘 다 될수 있다.
var kim = k = {
    name: 'kim',
    first: 10,
    second: 20,

    /*
    sum:function(){
        // this를 사용하지 않을경우 객체 명을 활용한다.
        return kim.first + kim.second;
    }
    */
    sum: function(){
        return this.first + this.second;
    }
}

//console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second)", kim.sum()); // k.sum() 사용해도 동일한 결과가 나온다.