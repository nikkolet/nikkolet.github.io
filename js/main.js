const links = {
    label: "Week1 Notes",
    url: "week1/index.html"
};

document.getElementById("list").innerHTML = `<li><a href=${links.url}>${links.label}</a></li>`;