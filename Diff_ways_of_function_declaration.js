// function Declaration:
function add(a,b){
    console.log(a+b);
}
add(10,5);

// function Expression:
const sub =  function(a,b){
    console.log(a-b);
}
sub(10,5);

// Arrow function;

const mul = (a,b)=>console.log(a*b);
mul(10,5);

const raj =()=>'hello world';
let res =raj();
console.log(res)

let iseven=(number)=>{
    return number%2==0
}
console.log(iseven(99));