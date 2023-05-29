/*Navigation Bar functions*/
const navtop = document.querySelector('#nav-top');
const navlinks = document.querySelector('#nav-links');

let menu_clicked = false;

function toggleMenu() {
    const links = Array.from(navlinks.children);
    menu_clicked = !menu_clicked;
    if(menu_clicked) {
        navlinks.style.display = 'flex';
    } else {
        navlinks.style.display = 'none';
    }
    links.forEach((link) => {
        if(menu_clicked) {
            link.style.display = 'flex';
        } else {
            link.style.display = 'none';
        }
        link.addEventListener('click', toggleMenu);
    });
}

window.onload = () => {
    // Projects
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

