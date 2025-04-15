//function can also work as objects
// function mul(num){
//     return num*5;
// }
// mul.pow=5

// console.log(mul(6));
// console.log(mul.pow);
// console.log(mul.prototype);





//declaration of function in all prototype...
// function user(name,score){
//     this.name=name;
//     this.score=score;
// }
// user.prototype.incre=function(){
//     this.score++;
// }
// user.prototype.printme=function(){
//     console.log(`score is ${this.score}`);
// }
// const chai=new user("chai",10);
// const tea=new user("tea",20);

// chai.printme();
// chai.incre();
// chai.printme();





//wanting a function for all string without writing too much...
//eg
// let name1="harry   "
// let name2="sam   "
// console.log(name1.truelength); //should work as  ....console.log(name1.trim().length);

let hero=["thor","spider"];
let heropower={
    thor:"hammer",
    spider:"sling",
    getpower:function(){
        console.log(`spidy is${this.spider}`);
    }
}
Object.prototype.sam_hi=function(){
    console.log("object function is created btw HI>>>SAM")
}
heropower.sam_hi();
hero.sam_hi();
Array.prototype.austin_hi=function(){
    console.log("array function is created btw HI>>>AUSTIN")
}
hero.austin_hi();
//////heropower.austin_hi();//not work