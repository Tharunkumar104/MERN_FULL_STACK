function play(user) {
    var arr = [1, 2, 3];
    var com = arr[Math.floor(Math.random() * arr.length)];
    comc = com.valueOf();
    let resultText = "";

    if (user == com) {
        resultText = "It's a Tie";
    }
    else if ((user == 1 && com == 3) || (user == 2 && com == 1) || (user == 3 && com == 2)) {
        resultText = "You Win";
    }
    else {
        resultText = "You Lose";
    }
    document.getElementById("result").innerText = resultText;
    document.getElementById("computer").innerText = "Computer choice: " + (com == 1 ? "Stone" : com == 2 ? "Paper" : "Scissor");
}