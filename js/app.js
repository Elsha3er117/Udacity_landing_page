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


//Define Global Variables
const sections = document.querySelectorAll(`.landing__container`);
const ul = document.querySelector("#uls");
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



// Begin Main Functions
sections.forEach((theElement) => {

    const section_nav = theElement.getAttribute('data-nav');
    const lis = document.createElement(`li`);
    const links = document.createElement(`a`);
    const node = document.createTextNode(section_nav);


    links.addEventListener(`click`, () => {
        theElement.scrollIntoView({ behavior: "smooth" });
    })

    links.appendChild(node);
    lis.appendChild(links);
    fragment.appendChild(lis);

});
ul.appendChild(fragment);


// build the nav


// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener(`scroll`, () => {
    sections.forEach((sec) => {
        const react = sec.getBoundingClientRect();
        if (react.top >= -100 && react.top <= 200) {
            sections.forEach((remove) => {
                remove.style.background = "white";

            })
            sec.style.background = "red"
            const allLinks = document.querySelectorAll(`a`);
            allLinks.forEach((link) => {
                if (sec.getAttribute(`data-nav`) == link.textContent) {
                    allLinks.forEach((remove) => {
                        remove.style.background = "white";
                    });

                    link.style.background = "red";
                }
            })

        }
    })
});


