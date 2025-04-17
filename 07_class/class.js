// class user{
//     constructor(un,e,pw){
//         this.un=un;
//         this.e=e;
//         this.pw=pw;
//     }
//     encrypt(){
//         return `${this.pw}abc`;
//     }
//     change(){
//         return `${this.un.toUpperCase()}`;
//     }
// }
// const sam=new user("sam","abc.com","123");
// console.log(sam.encrypt()); 
// console.log(sam.change()); 
 
//behind scene.....
function user(n,e,p){
        this.un=n;
        this.e=e;
        this.pw=p;
}
user.prototype.encrypt=function(){
    return`${this.pw}zy`;
}
user.prototype.change=function(){
    return`${this.un.toUpperCase()}`;
}
const sam=new user("sam","abc.com","123");
console.log(sam.encrypt()); 
console.log(sam.change()); 