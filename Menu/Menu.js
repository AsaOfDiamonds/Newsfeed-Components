// have menu slide in from left at start using green sock
// 
 TweenMax.from('.menu', 3, {x: -200,  opacity: 0});


const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference.
  
   menu.classList.toggle('menu--open');
  
  
  
  // console.log('toggle menu, am I working?');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
