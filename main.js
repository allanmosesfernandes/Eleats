
const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');
const body = document.getElementsByTagName("BODY")[0];
/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  body.classList.toggle('overflowLock');
  menu.classList.toggle('active');
})


///====instagram on fiyah====///////

const insta = document.querySelector('.instaWrapper');
const instaKids = Array.from(insta.children);

instaKids.forEach((img,i) => i%2 === 0 ? img.classList.add('biggie') : img.classList.add('smallie'))