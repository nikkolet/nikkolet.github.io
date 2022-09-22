const links = {
    label1: "Week1 Notes",
    url1: "week1/index.html",
    label2: "Week2 Notes",
    url2: "week2/index.html",
    label3: "week3 Notes",
    url3: "week3/index.html"
};


document.getElementById("list").innerHTML = `<li><a href=${links.url1}>${links.label1}</a></li>
<li><a href=${links.url2}>${links.label2}</a></li>`;