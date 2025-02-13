// var keyword

{
    var a = 10
    console.log(a)
    a = 20
    console.log(a)
}
a=11+a
console.log(a)
// -------------------------------------------------------------------
//let keyword

{
    let a = 10
    console.log(a)
    a = 20
    console.log(a)
}
a=11+a
console.log(a)

// ------------------------------------------
{
    const a = 10
    console.log(a)// Variable Declaration and Scope

// var keyword
{
    var a = 10;
    console.log(a); // Output: 10
    a = 20;
    console.log(a); // Output: 20
}
// Note: var has global scope, so it can be accessed outside the block
a = 11 + a;
console.log(a); // Output: 31

// -------------------------------------------------------------------
// let keyword

{
    let b = 10;
    console.log(b); // Output: 10
    b = 20;
    console.log(b); // Output: 20
}
// Note: let has block scope, so it cannot be accessed outside the block
try {
    b = 11 + b;
    console.log(b);
} catch (error) {
    console.log("Error: b is not defined");
}

// ------------------------------------------
{
    const c = 10;
    console.log(c); // Output: 10
    // Note: const cannot be reassigned
    try {
        c = 20;
        console.log(c);
    } catch (error) {
        console.log("Error: Assignment to constant variable.");
    }
}
}
  a = 20
 console.log(a)