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