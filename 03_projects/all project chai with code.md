# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## solution 1 (backgrd color change)

```javascript
console.log(sam);
const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)            //showing from which target event is coming...
    switch(e.target.id){
      case "grey":
         body.style.backgroundColor=e.target.id;
         break;
      case "white":
         body.style.backgroundColor=e.target.id;
         break;  
      case "blue":
        body.style.backgroundColor=e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor=e.target.id;
        break;  
    }
  });
});
```

## solution 2 (bmi calcul....)

```javascript
console.log(sam);
const form =document.querySelector('form');

form .addEventListener('submit', function(e){
   e.preventDefault();          //to stop url of form to go ...directly
   const h=parseInt(document.querySelector('#height').value);
   const w=parseInt(document.querySelector('#weight').value);
   const result=document.querySelector('#results');

   if(h===''||h<0||isNaN(h)){
     result.innerHTML=`PLz enter valid height ${h}`;
   }else if(w===''||w<0||isNaN(w)){
    result.innerHTML=`PLz enter valid weight ${h}`;
  }else{
    const bmi=(w/((h*h)/10000)).toFixed(2);
    if(bmi<18.6){
      result.innerHTML=`<span>${bmi} under weight </span>`;
    }else if(bmi>18.6&&bmi<24.9){
      result.innerHTML=`<span>${bmi} normal weight </span>`;
    }else{
      result.innerHTML=`<span>${bmi} over weight </span>`;
    }
    
  }
});
```

## solution 3 (digital  clock)

```javascript
const clock=document.getElementById("clock");

setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);
```





## solution 4 (guess no....)

``` javascript
let randomno=parseInt(Math.random()*100+1);

const submit=document.getElementById("subt")
const userinput=document.getElementById("guessField")

const prev=document.querySelector(".guesses")
const rem=document.querySelector(".lastResult")
const res_msg=document.querySelector(".lowOrHi")
const start_over=document.querySelector(".resultParas")

let arr=[];
let gamestart=true;
let c=1;
const p=document.createElement('p');


if(gamestart){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const val=parseInt(userinput.value)
    //console.log(val)
    validate_no(val)
  });
}

function validate_no(no){
  if(isNaN(no)){
    alert("Plz enter valid no...")
  }else if(no<1){
    alert("Plz enter valid no more than 0...")
  }else if(no>100){
    alert("Plz enter valid no less than 100...")
  }else{
    arr.push(no)
    if(c===11){
       update(no)
       display_msg(`GAME OVER ,RANDOM.NO =${randomno}`);
       thend();
    }else{
       update(no)
       check_result(no)
    }
  }
}

function check_result(no){
  if(no===randomno){
    display_msg("You guessed right!")
    thend();
  }else if(no<randomno){
    display_msg("no is too low...")
  }else if(no>randomno){
    display_msg("no is too high...")
  }
}

function update(no){
   userinput.value=""
   prev.innerHTML+=`${no}  ,`
   c++;
   rem.innerHTML=`${11-c}`
}

function display_msg(msg){
  res_msg.innerHTML=`<h2>${msg}</h2>`;
}

function thend(){
  gamestart=false;
  userinput.value='';
  userinput.setAttribute('disabled','');
  p.classList.add('btntostart');
  p.innerHTML=`<h2 id="newstart">START THE NEW GAME</h2>`;
  start_over.append(p);
}

function newstart(){
  const btnstart=document.querySelector('#newstart');
  btnstart.addEventListener('click',function(e){
  randomno=parseInt(Math.random()*100+1);
  art=[];
  prev.innerHTML=''
  c=1;
  rem.innerHTML=`${11-c}`;
  userinput.removeAttribute('disabled');
  start_over.removeChild(p);
  gamestart=true;
  });
  
}
```


# events project 
# solution 5 (unlimited background...)
```javascript
function random_colors(){
  const hex='0123456789ABCDEF';
  let str='#'
  for(let i=0;i<6;i++){
    str+=hex[Math.floor(Math.random()*16)];
  }
  return str;
}
function bgchange(){
  document.body.style.backgroundColor=random_colors();
}


let store;
const startfunc=function(){
  if(!store){
    store=setInterval(bgchange,1000);
  }
}


const theend=function(){
  clearInterval(store);
  store=null;
}

document.querySelector("#start").addEventListener('click',
startfunc);
document.querySelector("#stop").addEventListener('click',theend);
```

# solution 6 (keyboard)
```javascript
const insert=document.querySelector("#insert");

window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
    <table>
    <tr> 
       <th>key</th>
       <th>keycode</th>
       <th>code</th>
    </tr>
    <tr> 
       <th>${e.key==""?space:e.key}</th>
       <th>${e.keyCode}</th>
       <th>${e.code}</th>
    </tr>
    </table>
    </div>
  `
});
```