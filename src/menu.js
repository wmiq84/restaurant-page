export function loadMenu() {
    const content = document.querySelector("#content");

    content.style.backgroundColor = "orange";

    const title = document.createElement('h1');
    title.textContent = "Menu";

    const headline  = document.createElement('p');
    headline.textContent = "Pancakes are today's special.";

    content.appendChild(title);
    content.appendChild(headline);
}
