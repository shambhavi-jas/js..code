class user{
    constructor(n){
        this.n=n;
    }
    logme(){
        console.log(`${this.n}`);
    }
    static createid(){
        return `123`;
    }
}
const u1=new user("sam");
//console.log(u1.createid());

class teacher extends user{
    constructor(name,p){
        super(name);
        this.p=p;
    }
}
const iphone=new teacher("iphone","4bh");
iphone.logme();
//console.log(iphone.createid());
