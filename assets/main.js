// show & hide navbar
const navbar = document.querySelector('.nav__list'),
      navbarAction = document.querySelector('.nav__action');
let isOpen = false
navbarAction.addEventListener('click', () => {
    navbar.classList.toggle('active')
    if(isOpen){
        isOpen = false
        navbarAction.innerHTML = `<i class="ri-menu-4-line"></i>`
        document.body.style.overflow = 'auto'
    }else{
        isOpen = true
        navbarAction.innerHTML = `<i class="ri-close-line"></i>`
        document.body.style.overflow = 'hidden'
    }
})