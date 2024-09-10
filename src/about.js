export function loadAbout() {
    const content = document.querySelector("#content");

    content.style.backgroundColor = "skyblue";

    const title = document.createElement('h1');
    title.textContent = "About";

    const headline  = document.createElement('p');
    headline.textContent = "This is a very barebones project created as part of The Odin Foundation.";

    content.appendChild(title);
    content.appendChild(headline);
}
