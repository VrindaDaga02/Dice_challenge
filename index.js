
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimage="./dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2="./dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);



if(randomimage>randomimage2){
    document.querySelector("h1").innerHTML="🏆SODI Wins!!";
}
else if(randomimage<randomimage2){
    document.querySelector("h1").innerHTML="🏆SOPU Wins!!";
}
else{
    document.querySelector("h1").innerHTML="OOps! It's a DRAW";
}





