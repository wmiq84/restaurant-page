// index.js
// import odinImage from "./odin.png";
   
// const image = document.createElement("img");
// image.src = odinImage;
   
// document.body.appendChild(image);


import "./styles.css";
import "./home.js";
import "./menu.js";
import "./about.js";

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

loadHome();

const content = document.querySelector("#content");

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

function switchTab(event) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    switch(event.target.id) {
        case "home":
            loadHome();
            break;
        case "menu":
            loadMenu();
            break;
        case "about":
            loadAbout();
            break;
    }
}

home.addEventListener('click', switchTab);
menu.addEventListener('click', switchTab);
about.addEventListener('click', switchTab);
