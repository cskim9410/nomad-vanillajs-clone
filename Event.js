const title = document.querySelector("div.hello h1");

console.dir(title);

title.style.color = "blue";

function handleTitleClick() {
    title.style.color = "Green";
}

title.addEventListener("click", handleTitleClick);
