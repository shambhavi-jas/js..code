# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-pnrgdwrl?file=3-DigitalClock%2Fchaiaurcode.js)

## solution 

```javascript
const clock=document.getElementById("clock");

setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);
```