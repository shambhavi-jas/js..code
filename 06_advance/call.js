function setname(name){
    this.name=name;
}
function details(name, e,p){
    setname.call(this,name);
    this.email=e;
    this.password=p;
}
const u1=new details("sam","abc@gmail.com","123");
console.log(u1);