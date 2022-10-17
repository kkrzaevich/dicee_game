var cube1Number = 6;
var cube2Number = 6;

function rollTheDice() {
    // Roll the dice. Hide/show cubes
    document.querySelector(".cube1 .num" + cube1Number.toString()).classList.toggle("hidden");
    document.querySelector(".cube2 .num" + cube2Number.toString()).classList.toggle("hidden");

    cube1Number = Math.floor(Math.random()*6+1);
    document.querySelector(".cube1 .num" + cube1Number.toString()).classList.toggle("hidden");
    cube2Number = Math.floor(Math.random()*6+1);
    document.querySelector(".cube2 .num" + cube2Number.toString()).classList.toggle("hidden");

    // Get who wins
    var winnerNumber;
    if (cube1Number > cube2Number) {
        winnerNumber = 1;
        document.querySelector("h1").textContent = "Player " + winnerNumber + " wins!";
        document.querySelector(".player1").children[0].innerHTML = "Player 1 <i class='fa-solid fa-flag'></i> ";
        document.querySelector(".player2").children[0].innerHTML = "Player 2";
    } else if (cube1Number === cube2Number) {
        winnerNumber = 0;
        document.querySelector("h1").textContent = "A draw :0";
        document.querySelector(".player1").children[0].innerHTML = "Player 1";
        document.querySelector(".player2").children[0].innerHTML = "Player 2";
    } else {
        winnerNumber = 2;
        document.querySelector("h1").textContent = "Player " + winnerNumber + " wins!";
        document.querySelector(".player1").children[0].innerHTML = "Player 1";
        document.querySelector(".player2").children[0].innerHTML = "Player 2 <i class='fa-solid fa-flag'></i> ";
    }

}
