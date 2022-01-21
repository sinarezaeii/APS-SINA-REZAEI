const DIV1 = document.getElementById("myDiv");

const pElement = document.getElementById("myP1");

const ButtonElement=document.getElementById("myBtn");

// DIV1.addEventListener('click',function(){
//   alert("You Clicked on DIV");
// },true);




// pElement.addEventListener('click',function(){
//   alert("You Clicked on P");
// },false);



ButtonElement.addEventListener('click',RemoveEventFromDIV);



function RemoveEventFromDIV(){
  DIV1.removeEventListener('mousemove',RandomeNumber);
}




DIV1.addEventListener('mousemove',RandomeNumber);


function RandomeNumber(){

  document.getElementById("test").innerHTML= Math.random();

}