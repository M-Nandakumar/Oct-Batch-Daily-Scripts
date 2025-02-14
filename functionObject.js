function greet(){
    console.log('hello')
}
console.log(greet)

console.log(greet,typeof greet)

// functions are Objects in Javascript;

function identifyDataType(value) {
    if(value===null)return'Null'
    if(Array.isArray(value))return'Array'
}
res = identifyDataType([10,20,30])
console.log(res)

console.log(Array.isArray(null))
