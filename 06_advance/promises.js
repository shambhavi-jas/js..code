//node 06_advance/promises.js  use this in terminal
const p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Its a function...1st")
        resolve()
    }, 1000);
})
p1.then(function(){
    console.log("then is connected to resolve ...2nd")
})


const p2=new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({name:"chai",email:"ics.com"})
    }, 1000);
})
p2.then(function(user){
    console.log(user);
})


const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
     let error=false;
     if(!error){
        resolve({name:"sam",password:"123"})
     }else{
        reject("ERROR:something")
     }
    },1000)
})
p3.then((user)=>{
    console.log(user);
    return user.name
}).then((uname)=>{
    console.log(uname);
}).catch(function(er){
    console.log(er);
}).finally(()=>console.log("promise is either resolved or rejected"))


const p4=new Promise(function(resolve,reject){
    setTimeout(function(){
     let error=false;
     if(!error){
        resolve({name:"Javascript",password:"abc"})
     }else{
        reject("ERROR:something")
     }
    },1000)
})
async function consumep4(){
    try{
        const response=await p4
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumep4();


             //1st way
// async function getallusers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         //console.log(response);
//          const data=await response.json();
//          console.log(data);
//     }catch(error){
//         console.log("E: ",error);
//     }
    
// }
// getallusers();
                //2nd way...
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error))