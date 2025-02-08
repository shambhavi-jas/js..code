let a=10;
const b=20;
var c=30;

if(true){
    let a=10;
    const b=20;
    var c=1000;
}

console.log(a)
console.log(b)
console.log(c) // here value has changed this is called block scope and gloabl scope

//*NOTE= in browser console ,scope is different from node environment here...