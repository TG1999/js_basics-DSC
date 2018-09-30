window.alert('hi')


//CONSOLE EXAMPLES
1+1;
let x=5;
typeof(x);
typeof('123');
var json={};
typeof json;
var obj={a:1,b:2,c:3};
obj.d=4;
console.log(obj);
obj.e=[1,2,3];
console.log(obj);
obj.e[1];

// STRING + INTEGER

'1'+1//'11'
'1'+1+1//'111'
1+1+'1'//'21'
'1'+(1+1)+'1'//'121'

//DIFFERENCE BETWEEN VAR AND LET

// var is used for global hosting but let is used for local hosting
console.log(x);
var x=10;
console.log(x);

console.log(y);
let y=10;
console.log(y);
// var supports redeclaration but let doesn't support redeclaration

let x=10;
let x=5;

var x=10;
var x=5;

//EQUALITY

'1'==1 //true
'1'+'1'==11 //true
''==0 //true
[]==0//true
[]=='0'//false
'0'==0//false
'1'===1//false

