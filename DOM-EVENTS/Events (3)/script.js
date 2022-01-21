const ELEMENT=document.getElementById("myBtn");

// ELEMENT.addEventListener('click',function () {
//     document.getElementById("test").innerHTML=Date();

//   });


// function displayDate(){
//     document.getElementById("test").innerHTML=Date();
// }
let p1=7;
let p2=4;

ELEMENT.addEventListener('click',function() {
    myFunction(p1,p2);
  });

// ELEMENT.addEventListener('click',OtherFunction);



function myFunction(a,b){
    document.getElementById("test").innerHTML=a*b;
}

// function OtherFunction(){
//     alert("Other Function Happend");
// }