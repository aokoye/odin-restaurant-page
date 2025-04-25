import "./styles.css";
import { renderPage } from "./home.js"
import { loadMenu } from "./menu.js"
import { loadLocation } from "./location.js"

const contentNode = document.querySelector('#content');

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

const homeBtn = document.getElementById("home")
homeBtn.addEventListener("click", homePage)
function homePage() {
    clearContent();
    contentNode.appendChild(renderPage());
}
contentNode.appendChild(renderPage())

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", foodMenu);
function foodMenu() {
    clearContent();
    contentNode.appendChild(loadMenu())
}

const locationBtn = document.getElementById("location")
locationBtn.addEventListener("click", restLocal);
function restLocal() {
    clearContent();
    contentNode.appendChild(loadLocation())
}


// loadMenu()
// hi()

// document.body.appendChild(component());
// import odinImage from "./odin.png";

// const image = document.createElement("img")
// image.src = odinImage;

// document.body.appendChild(image)

// console.log("I work!");
