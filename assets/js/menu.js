const buttonResponsiveMenu = document.querySelector('[data-js="button-responsive-menu"]')
const menuItems = document.querySelector('[data-js="menu-items"]')

buttonResponsiveMenu.addEventListener('click', e => {
  if(e.target){
    menuItems.classList.toggle('hide')
  }
})

menuItems.addEventListener('click', e => {
  if(menuItems.children){
    menuItems.classList.toggle('hide')
  }
})