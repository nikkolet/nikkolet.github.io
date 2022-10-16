document.getElementById("myButton").onclick = function() {



    var myFortunes = [
        "It is certain.",
        "It is decidedly so.",
        "Reply hazy, try again.",
        "Ask again later.",
        "My reply is no.",
        "My sources say no."
    ];

    var randomFortune = myFortunes[Math.floor(Math.random() * myFortunes.length)];

    document.getElementById("output").innerHTML = randomFortune;

}

document.getElementById("myDiceButton").onclick = function() {
    let result = Math.floor(Math.random() * 6) + 1;
    document.getElementById("outputDice").innerHTML = result;
}