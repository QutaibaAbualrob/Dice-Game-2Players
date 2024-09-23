




var img1 = document.querySelector("section .containerIMG #img1");
var img2 = document.querySelector("section .containerIMG #img2");
var header = document.querySelector(".containerH1 h1");

var n1 = Math.floor((Math.random()*6)) + 1;
var n2 = Math.floor((Math.random()*6)) + 1;



if(n1 === n2){
    
    header.innerHTML="Draw!! ✔";
 }
 else if(n1 > n2){
 
    header.innerHTML="Player 1 WON!!😁";
 }
 else if(n2 > n1){
     header.innerHTML="Player 2 WON!!😎";
 }

 

//img 1 Choices
if(n1 === 1){
    img1.setAttribute("src", "./images/dice1.png");
   
}
else if(n1 === 2){
    img1.setAttribute("src", "./images/dice2.png");
}

else if(n1 === 3){
    img1.setAttribute("src", "./images/dice4.png");
}

else if(n1 === 4){
    img1.setAttribute("src", "./images/dice4.png");
}

else if(n1 === 5){
    img1.setAttribute("src", "./images/dice5.png");
}

else if(n1 === 6){
    img1.setAttribute("src", "./images/dice6.png");
}



//img 2 Choices
if(n2 === 1){
    img2.setAttribute("src", "./images/dice1.png");
   
}
else if(n2 === 2){
    img2.setAttribute("src", "./images/dice2.png");
}

else if(n2 === 3){
    img2.setAttribute("src", "./images/dice4.png");
}

else if(n2 === 4){
    img2.setAttribute("src", "./images/dice4.png");
}

else if(n2 === 5){
    img2.setAttribute("src", "./images/dice5.png");
}

else if(n2 === 6){
    img2.setAttribute("src", "./images/dice6.png");
}


//Header Choices

