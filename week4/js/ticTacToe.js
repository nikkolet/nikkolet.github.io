//Function called whenever user input tab on any box
function myFunc() {
    var a1, a2, a3, b1, b2, b3, c1, c2, c3;
    //row 1
    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    //row 2
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    //row 3
    c1 = document.getElementById("c1").value;
    c2 = document.getElementById("c2").value;
    c3 = document.getElementById("c3").value;

}

//Function to Reset Game
function resetGame() {
    //row 1
    document.getElementById("a1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("a3").value = "";
    //row 2
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b3").value = "";
    //row 3
    document.getElementById("c1").value = "";
    document.getElementById("c2").value = "";
    document.getElementById("c3").value = "";
}