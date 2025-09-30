let gender=prompt("please enter your gender","male");
let age=parseInt(prompt("enter age",21));
let ticketPrice=parseFloat(prompt("enter ticket price",180));
if(age<=5){
  ticketPrice=0;
}else{
  if(age>=65){
    ticketPrice=ticketPrice*0.3;
  }
  else if(age>5 && age<=8){
  ticketPrice/=2;
  } 
  if(gender=="female"){
    ticketPrice=ticketPrice*0.5;
  }}
alert(`final ticket price: ${ticketPrice}`);