
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
}))


//add to cart
let addToCartButtons = document.querySelectorAll('.item-add-to-cart')


addToCartButtons.forEach(button => button.addEventListener('click', e => {
    let currentCart = JSON.parse(localStorage.getItem('cart'))
    if (currentCart === null) {currentCart = {}}
    let name = button.parentNode.querySelector('.item-name').textContent
    if(currentCart[name] === undefined) {
        let item = {}
        item.name = name
        item.cost = button.parentNode.querySelector('.item-cost').textContent
        item.imgURL = button.parentNode.querySelector('.item-image').src
        item.count = 1
        
        let newCart = {...currentCart, [item.name]: item}
    
        localStorage.setItem('cart', JSON.stringify(newCart))
    } else if (currentCart[name] !== undefined) {
        let currentCount = currentCart[name].count
        let updatedItem = {...currentCart[name], count: currentCount + 1}
        localStorage.setItem('cart', JSON.stringify({...currentCart, [name]: updatedItem }))
    }
}))



