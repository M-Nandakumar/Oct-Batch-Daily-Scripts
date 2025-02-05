// 1.fuction declaration : Hoisted
function greet1(name){
    return `Hello,${name}`
}
console.log(greet1('nanda'));
//2.fuction expression  : non-Hoisted
let greet2 = function (name){
    return `Hello,${name}`
}
console.log(greet2('kumar'));
//3.arrow fuction   : callbacks
let greet3 = (name)=>{
    return `Hello,${name}`
}
console.log(greet3('Arjun'));