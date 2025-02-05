// 4.types of fuctions

//1.fuctions without input and without return type:
function add(){
    var a = 10;
    var b = 5;
    console.log(a+b);
}
add();

//2.fuctions with input and without return type
function sub(a,b){
    console.log(a-b);
}
sub(10,5);

//3.fuctions without input and with return type
function mul(){
    var a = 10;
    var b = 5;
  return a*b;
}
let res = mul();
console.log(res);

//4.fuctions with input and with return type
function div(a,b){
    return a/b;
}
console.log(div(10,2));
