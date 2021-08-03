
// nav expander 
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

// more info button

let moreInfoButtons = document.querySelectorAll('.item-more-info')

moreInfoButtons.forEach( button => button.addEventListener('click', () => {
    let item = button.closest('.item')
    let infoBackground = item.querySelector('.item-info-background')
    infoBackground.classList.toggle('item-info-background-open')
    console.log(infoBackground)
}))


//add to carg
let addToCartButtons = document.querySelectorAll('.item-add-to-cart')

addToCartButtons.forEach(button => button.addEventListener('click', e => {
    let currentCart = JSON.parse(localStorage.getItem('cart'))
    if(currentCart === null) {
        currentCart = {}
    }

    let item = {}
    item.cost = button.parentNode.querySelector('.item-cost').textContent
    item.name = button.parentNode.querySelector('.item-name').textContent
    item.imgURL = button.parentNode.querySelector('.item-image').src
    
    let newCart = {...currentCart, [item.name]: item}

    localStorage.setItem('cart', JSON.stringify(newCart))
    console.log(JSON.parse(localStorage.getItem('cart')))
}))



