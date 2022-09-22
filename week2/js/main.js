document.getElementById("myButton").onclick = function() {
    let myPhrase = document.getElementById("myText").value;

    let reverse = myPhrase.split('').reverse().join('');

    document.getElementById("output").innerHTML = "Output: " + reverse;
}

document.getElementById("myButtonCap").onclick = function() {
    let myCapPhrase = document.getElementById("myPhrase").value;

    let capOutput = myCapPhrase.replace(/\b\w/g, function(c) {
        return c.toUpperCase()
    });

    document.getElementById("capOutput").innerHTML = "Output: " + capOutput;
}