class user{
    constructor(e,pw){
      this.email=e;
      this.password=pw;
    }
    get email(){
      return this._email.toUpperCase();
    }
    set email(val){
      this._email=val;
    }
    get password(){
      return `${this._p}sam`;
    }
    set password(value){
      this._p=value;
    }
}
const austin=new user("abc###.com","###123");
console.log(austin.email);

//old method from properties...function ...see notes
function user1(e,p){
    this._email=e;
    this._pass=p;
    Object.defineProperty(this,'email',{
         get:function(){
          return this._email.toUpperCase();
         },
         set:function(value){
           this._email=value;
         }
    })
    Object.defineProperty(this,'password',{
      get:function(){
       return `${this._pass}333`;
      },
      set:function(value){
        this._pass=value;
      }
 })
}
const austin1=new user1("abc###.com","###123");
console.log(austin1.email);
console.log(austin1.password);



//object method....
const userx={
  _email:"abc###.com",
  _pass:"345",
  get email(){
    return this._email.toUpperCase()
  },
  set email(value){
    this._email=value;
  }
}
const tea=Object.create(userx);
console.log(tea.email);
tea.email="temp.com"
console.log(tea.email);
console.log(userx.email);
