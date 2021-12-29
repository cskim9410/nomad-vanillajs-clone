const images = [
    "img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png", "img7.png"
];

const bgImage = document.createElement("img")

const chosenImage = images[Math.floor(Math.random()*images.length)]

bgImage.src = `img/${chosenImage}`

bgImage.classList.add("bgImage")
document.body.append(bgImage)


