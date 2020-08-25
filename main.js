
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