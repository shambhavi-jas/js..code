class user{
    constructor(name){
        this.name=name;
    }
    logme(){
        console.log(`NAME=${this.name}`);
    }
}
class teacher extends user{
    constructor(n,e,p){
        super(n)
        this.e=e;
        this.p=p;
    }
    addcourse(){
        console.log(`added course by ${this.name}`); //name from user not n from teacher
    }
}
const sam=new teacher("sam","exb.com","123");
sam.addcourse();
sam.logme();
const austin=new user("austin");
austin.logme();