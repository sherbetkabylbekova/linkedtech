
//Show menu

const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

burgerMenu.addEventListener('click',() =>{
  mobileMenu.classList.toggle('show')
})
