/*
let a = 1;
let b = 'abc';
let c = true;

let test = (a, b, c) => {console.log(a, b, c)};

test(a, b, c);
test(5, false, ['a','b','c','d']);
*/


/*
let foo = () => ({ a:1, b:2, c:3 });
foo();

let param1 = 'abc';
let param2 = 'efg';
let param3 = 'hij';

let par = (a, b, ...val) => {console.log(param1, param2, val)}

par(param1, param2, param3);
*/


/*
let inval = (a = 1, b = 2) => {console.log(a+b)};

inval();
*/



const obj1 = {
      val : 'test',
      testVal : () => {console.log(this.val)}
    };
obj1.testVal();

const obj2 = {
      val: 'test',
      testVal() { console.log(this.val); }
    };
     
obj2.testVal();



/*
let btn1 = document.getElementById('btn1');
		 
btn1.addEventListener('click', () => {  
    if(this === window){
        //들어옴
        this.innerHTML = 'this is window!!';
    }
});
 
let btn2 = document.getElementById('btn2');  

btn2.addEventListener('click', function() {  
    if(this === button){
        //들어옴
        this.innerHTML = 'this is button!!';
    }
});
*/