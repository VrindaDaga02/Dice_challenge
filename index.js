
var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimage="images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);



if(randomimage>randomimage2){
    document.querySelector("h1").innerHTML="🏆Player1 Wins!!";
}
else if(randomimage<randomimage2){
    document.querySelector("h1").innerHTML="🏆Player2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="OOps! It's a DRAW";
}





