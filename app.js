/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
var sections=document.querySelectorAll("section");
var text=[];
var Idarray=[];
for(var section of sections)
{
    text.push(section.querySelector('h2').innerText);
    Idarray.push(section.id);
}

var navbar=document.getElementById('navbar__list');
let i=0;
for(var TextElement of text)
{
    var node=document.createElement("li");
    var node2=document.createElement("a")
    node2.href=`#${Idarray[i]}`;
    node.appendChild(node2);
    node2.textContent=TextElement;
    node2.classList.add("menu__link");
    navbar.appendChild(node);
    i+=1;
}
var ElementNavbar=navbar.querySelectorAll('a');
a.addEventListener("click", function(event) { 
    event.preventDefault(); // prevent default action l.e redirecting 
}); 

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/



// Scroll to section on link click


// Set sections as active

