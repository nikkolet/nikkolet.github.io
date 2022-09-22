document.getElementById("myButton").onclick = function() {
    let myPhrase = document.getElementById("myText").value;

    let reverse = myPhrase.split('').reverse().join('');

    document.getElementById("output").innerHTML = "Output: " + reverse;
}

document.getElementById("myButtonCap").onclick = function() {
    let myCapPhrase = document.getElementById("myText").value;

    let capOutput = capitalize(myCapPhrase);

    document.getElementById("capOutput").innerHTML = "Output: " + capOutput;
}