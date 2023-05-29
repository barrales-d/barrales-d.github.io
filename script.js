/*Navigation Bar functions*/
const MENU_BUTTON = 1;
var navtop = document.querySelector('#nav-top');
var navlinks = document.querySelector('#nav-links');

function toggleMenu() {
    console.log('clicked');

    console.log(navtop.children[MENU_BUTTON]);
    console.log(navlinks);
    var button = navtop.children[MENU_BUTTON];
    //  Turns off the menu(hides links)
    if (navlinks.children[0].style.display === 'flex') {
        for (let i = 0; i < navlinks.children.length; i++) {
            navlinks.children[i].style.display = 'none';
        }
        navtop.style.flexDirection = 'row';
    }
    //  Turns on the menu(shows links)
    else {
        for (let i = 0; i < navlinks.children.length; i++) {
            navlinks.children[i].style.display = 'flex';
            //  activates the toggle menu function for the links buttons
            navlinks.children[i].addEventListener('click', toggleMenu);
        }
        navlinks.style.flexDirection = 'column';
    }
}

let global_cards = [];
let projectEle = document.getElementById('Projects');

window.onload = () => {
    const skill_cards = Array.from(document.getElementsByTagName('figure'));
    skill_cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = 'var(--lightblueopacity1)';
        });
        card.addEventListener('click', () => {
            card.style.overflow = 'visible';
            card.style.height = '350px';
            const card_text = card.lastElementChild;
            card_text.style.webkitLineClamp = 'unset';
            card.style.backgroundColor = 'unset';
        });
        card.addEventListener('mouseleave', () => {
            card.style.overflow = 'hidden';
            card.style.height = '300px';
            const card_text = card.lastElementChild;
            card_text.style.webkitLineClamp = '7';
            card.style.backgroundColor = 'unset';

        });
    });
  
};

