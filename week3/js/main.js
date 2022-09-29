//This is for Exercise #1

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);


document.getElementById("yesterday").onclick = function() {

    document.getElementById("yesterdayOutput").innerHTML = "Yesteray was: " + yesterday;
}

document.getElementById("today").onclick = function() {

    document.getElementById("todayOutput").innerHTML = "Today is: " + today;
}

document.getElementById("tomorrow").onclick = function() {

    document.getElementById("tomorrowOutput").innerHTML = "Tomorrow will be: " + tomorrow;
}

//This is for Exercise #2

document.getElementById("triangle").onclick = function() {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    let triangleArea = (1 / 2) * base * height

    document.getElementById("triangleOutput").innerHTML = "Area of a Triangle: " + triangleArea.toFixed(0);
}

document.getElementById("square").onclick = function() {
    let height = document.getElementById("height").value;
    let squareArea = height ** 2;

    document.getElementById("squareOutput").innerHTML = "Area of a Square: " + squareArea.toFixed(0);
}

document.getElementById("rectangle").onclick = function() {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    let rectangleArea = base * height;

    document.getElementById("rectangleOutput").innerHTML = "Area of a Rectangle: " + rectangleArea.toFixed(0);
}

document.getElementById("circle").onclick = function() {
    let radius = document.getElementById("radius").value;
    let pi = Math.PI;
    let circleArea = pi * (radius ** 2);

    document.getElementById("circleOutput").innerHTML = "Area of a Rectangle: " + circleArea.toFixed(0);
}