let randomNumber1 = Math.floor(Math.random()*6)+1
let randomDice1 = "dice"+randomNumber1+".png";
let randomImageSrc1 = "./images/"+randomDice1

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSrc1);


let randomNumber2 = Math.floor(Math.random()*6)+1
let randomDice2 = "dice"+randomNumber2+".png";
let randomImageSrc2 = "./images/"+randomDice2

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSrc2)

if(randomNumber1 >randomNumber2 ){
    document.querySelector("h1").innerHTML="Player1 won";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player2 won"
}else if(randomNumber1= randomNumber2){
    document.querySelector("h1").innerHTML="Hmm, Tie Game"
}else{
    document.querySelector("h1").innerHTML="hmm, its tie game"
}