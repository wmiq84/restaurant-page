// greeting.js
const content = document.querySelector("#content");

content.style.backgroundColor = "aliceblue";

const title = document.createElement('h1');
title.textContent = "Restaurant";

const headline  = document.createElement('p');
headline.textContent = "This restaurant serves delicious pancakes.";

import pancakeImage from "../assets/pancakes.jpg";
const pancakes = document.createElement('img');
pancakes.src = pancakeImage;

content.appendChild(title);
content.appendChild(headline);
content.appendChild(pancakes);