const links = {
    w1_label: "Week1 Notes",
    w1_url: "week1/index.html",
    w2_label: "Week2 Notes",
    w2_url: "week2/index.html",
    w3_label: "week3 Notes",
    w3_url: "week3/index.html"
};


document.getElementById("list").innerHTML = `<li><a href=${links.url1}>${links.label1}</a></li>
<li><a href=${links.url2}>${links.label2}</a></li>`;