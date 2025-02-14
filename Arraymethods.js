var arr1 = [10,12,13,14,15,16,17,9]
arr1.push(99)
arr1.pull(99)
console.log(arr1)

console.log("-------")

//even numbers in array
for(var i=0;i<=arr1.length-1;i++){
    if (arr1[i]%2==0)
    console.log(arr1[i])
}

console.log("---------")

//odd numbers in array
for(var i=0;i<=arr1.length-1;i++){
    if (arr1[i]%2!==0)
    console.log(arr1[i])
}