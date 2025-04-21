import "./styles.css";
import { renderPage } from "./home.js"
import { loadMenu } from "./menu.js"
// import { loadHome } from "./home.js"
import { component } from "./greeting.js";

// document.getElementById("home").addEventListener("click", hm)
// document.getElementById("menu").addEventListener("click", mu)

// function hm() {
//     document.getElementById("content").innerHTML = home()
// }

// function mu() {
//     document.getElementById("content").innerHTML = loadMenu()
// }
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


// loadMenu()
// hi()

// document.body.appendChild(component());
// import odinImage from "./odin.png";

// const image = document.createElement("img")
// image.src = odinImage;

// document.body.appendChild(image)

// console.log("I work!");
