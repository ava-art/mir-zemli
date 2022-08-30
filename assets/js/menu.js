const menu = document.querySelector('.menu')
const menuActive = document.querySelector('.menu-active')
const menuLine = document.querySelector('.menu-line')

menu.addEventListener('click', ()=>{
    menuActive.classList.toggle('menu-active_on');
    menuLine.classList.toggle('menu-line_active')
})
