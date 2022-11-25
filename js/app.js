// build the nav
const sections = document.querySelectorAll("section");
const text = [];
const Idarray = [];
for (const section of sections) {
    text.push(section.querySelector('h2').innerText);
    Idarray.push(section.id);
}

const navbar = document.getElementById('navbar__list');
let i = 0;
for (const TextElement of text) {
    const node = document.createElement("li");
    const node2 = document.createElement("a")
    node2.href = `#${Idarray[i]}`;
    node.appendChild(node2);
    node2.textContent = TextElement;
    node2.classList.add("menu__link");
    navbar.appendChild(node);
    i += 1;
}
const ElementNavbar = navbar.querySelectorAll('a');
// Add class 'active' to section when near top of viewport
i = 1;

window.onscroll = function () {
    for (element of ElementNavbar) {
        const result = element.href.substring(element.href.length, element.href.search("#"));
        const distance = document.querySelector(result).getBoundingClientRect().top.toFixed();
        if (distance >= -20 && distance <= 100) {
            document.querySelector(result).classList.add("your-active-class");
            // Add underline to navbar
            for (nav of ElementNavbar) {
                if (nav.href.substring(nav.href.length, nav.href.search("#")) == result) {
                    nav.classList.add("texttransform");
                } else {
                    nav.classList.remove("texttransform");
                }

            }
        }
        else
            document.querySelector(result).classList.remove("your-active-class")
    }
}



// Scroll to anchor ID using scrollTO event

for (element of ElementNavbar) {
    element.addEventListener("click", function (event) {
        event.preventDefault(); // prevent default action l.e redirecting 
        const result = event.target.href.substring(event.target.href.length, event.target.href.search("#"));
        window.scrollTo({
            behavior: "smooth",
            top: document.querySelector(result).offsetTop,
        });

    })

}


