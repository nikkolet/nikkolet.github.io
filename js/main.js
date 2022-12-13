const links = {
    w1Label: "Week1 Notes",
    w1Url: "week1/index.html",
    w2Label: "Week2 Notes",
    w2Url: "week2/index.html",
    w3Label: "week3 Notes",
    w3Url: "week3/index.html",
    w4Label: "Week4 Notes",
    w4Url: "week4/index.html",
    w5Label: "Week5 Notes",
    w5Url: "week5/index.html",
    w6Label: "week6 Notes",
    w6Url: "week6/index.html",
    w7Label: "Week7 Notes",
    w7Url: "week7/index.html",
    w8Label: "Week8 Notes",
    w8Url: "week8/index.html",
    w9Label: "week9 Notes",
    w9Url: "week9/index.html",
    w10Label: "Week10 Notes",
    w10Url: "week10/index.html",
    w11Label: "Week11 Notes",
    w11Url: "week11/index.html",
    w12Label: "week12 Notes",
    w12Url: "week12/index.html",
    w13Label: "Week13 Notes",
    w13Url: "week13/index.html",
    w14Label: "Semester Project",
    w14Url: "SemesterProject/index.html"
};


document.getElementById("list").innerHTML = `
<li><a href=${links.w1Url}>${links.w1Label}</a></li>
<li><a href=${links.w2Url}>${links.w2Label}</a></li>
<li><a href=${links.w3Url}>${links.w3Label}</a></li>
<li><a href=${links.w4Url}>${links.w4Label}</a></li>
<li><a href=${links.w5Url}>${links.w5Label}</a></li>
<li><a href=${links.w6Url}>${links.w6Label}</a></li>
<li><a href=${links.w7Url}>${links.w7Label}</a></li>
<li><a href=${links.w8Url}>${links.w8Label}</a></li>
<li><a href=${links.w9Url}>${links.w9Label}</a></li>
<li><a href=${links.w10Url}>${links.w10Label}</a></li>
<li><a href=${links.w11Url}>${links.w11Label}</a></li>
<li><a href=${links.w12Url}>${links.w12Label}</a></li>
<li><a href=${links.w13Url}>${links.w13Label}</a></li>
<li><a href=${links.w14Url}>${links.w14Label}</a></li>`;