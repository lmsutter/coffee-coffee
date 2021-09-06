
// nav expander 
let navExpander = document.querySelector('.nav-expander')
let nav = document.querySelector('nav') 


navExpander.addEventListener('click', ()=> {
    nav.classList.toggle('nav-open')
    navExpander.classList.toggle('nav-expander-open')
})

// more info button

let moreInfoButtons = document.querySelectorAll('.item-more-info')

moreInfoButtons.forEach( button => button.addEventListener('click', () => {
    let item = button.closest('.item')
    let infoBackground = item.querySelector('.item-info-background')
    infoBackground.classList.toggle('item-info-background-open')
}))


function cartUpdater () {
    let cart = JSON.parse(localStorage.getItem('cart'))
    let length = 0
    for (const key in cart) {
        length += cart[key].count
    }
    
    let cartCount = document.querySelector('.cart-count')
    cartCount.style.background = length === 0 ? '#783F4E' : '#3F4F78'
    cartCount.textContent = length
}
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

    cartUpdater()
}))




window.addEventListener('load', () => {
   cartUpdater()
})

export default cartUpdater