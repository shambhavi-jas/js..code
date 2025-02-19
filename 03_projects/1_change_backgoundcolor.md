# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## solution 

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