function dice_game(){
    var random_num1 = Math.floor(Math.random()*6)+1; // [1,6]
    document.querySelector(".dice .img1").setAttribute("src", 'images/dice'+random_num1+'.png');

    var random_num2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".dice .img2").setAttribute("src", 'images/dice'+random_num2+'.png');

    console.log(document.querySelector(".dice .img2").getAttribute("src"))
    console.log(random_num1)

    if(random_num1>random_num2){
        document.querySelector("h1").textContent = "Player 1 Wins"
    } else if(random_num2>random_num1){
        document.querySelector("h1").textContent = "Player 2 Wins"
    } else {
        document.querySelector("h1").textContent = "Draw"
    }
}

dice_game();


