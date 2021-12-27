const h1 = document.querySelector("div.hello h1");

console.dir(h1);

h1.style.color = "blue";


function handleTitleClick() {
    const rancolor = ["blue", "red", "green", "yellow", "black", "brown"];

    let num = Math.floor(Math.random()*rancolor.length);
    h1.style.color = rancolor[num];
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here"
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone"
}

function handleResize() {
    document.body.style.backgroundColor = "tomato";
}
// document.body, title, head 는 중요한 부분이라 가능 나머지 Element는
// querySelector나 getElementById로 가져와야한다.

function handleWindowCopy() {
    alert("copier!")
}

function handleWindowOffline() {
    alert("SOS no WIFI")
}

function handleWindowOnline() {
    alert("ALL GOOD")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);