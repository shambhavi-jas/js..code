// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

// const temp=Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(temp);


const u1=Object.create(null);
const chai={
    name:"ginger",
    price:500,
    available:true,
    orderchai:function(){
        console.log("chai ni bani");
    }
}
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false,
})
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//but if we use for loop...to do same thing...
for (let [key,val] of Object.entries(chai)) {
    if(typeof val!='function'){
        console.log(`${key}:${val}`);
    } 
}