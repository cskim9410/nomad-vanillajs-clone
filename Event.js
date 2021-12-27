const title = document.querySelector("div.hello h1");

console.dir(title);

title.style.color = "blue";


function handleTitleClick() {
    const rancolor = ["blue", "red", "green", "yellow", "black", "brown"];

    let num = Math.floor(Math.random()*rancolor.length);
    title.style.color = rancolor[num];
}

function handleMouseEnter() {
    title.innerText = "Mouse is here"
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

