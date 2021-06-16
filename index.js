let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = (Math.floor (randomNumber1)) + 1;
 
console.log (randomNumber1);


const player1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute('src', player1)




let randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = (Math.floor (randomNumber2)) + 1;
 
console.log (randomNumber2);

const player2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute('src', player2)


if (randomNumber1 > randomNumber2) {
    document.querySelector ("h1").innerHTML = "Player1 Wins"
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector ("h1").innerHTML = "Player2 Wins"
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector ("h1").innerHTML = "The game was a draw game"
}
