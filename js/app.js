let navExpander = document.querySelector('.nav-expander')
let nav = document.querySelector('.nav') 
let content = document.querySelector('.content')
let pageWrapper = document.querySelector('.page-wrapper')

navExpander.addEventListener('click', ()=> {
    nav.classList.toggle('nav-open')
    navExpander.classList.toggle('nav-expander-open')
    content.classList.toggle('blur')
    pageWrapper.classList.toggle('blur')
})
