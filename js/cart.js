//cart page 

let totalCalc = () => {
  let total = 0
  let totalElement = document.querySelector('#cart-total')
  let cartData = JSON.parse(localStorage.getItem('cart'))
  
  for(item in cartData) {
    let cost = parseInt(cartData[item].cost.replace(/[$]+/g, ""))
    let count = parseInt(cartData[item].count)
    total += cost * count
  } 
  totalElement.textContent = total
}


window.addEventListener('load', () => {
  let content = document.querySelector('.content')
  let cartData = JSON.parse(localStorage.getItem('cart'))

  contentHTML = ''
  for (item in cartData) {
    contentHTML = contentHTML + `
        <div class="cart-item">
          <i class="cart-delete button-animation fa fa-trash" aria-hidden="true"></i>
          <div class="cart-delete-dialogue">Would you like to remove this item?
            <div class="cart-delete-options">
              <span class="cart-delete-yes button-animation">Yes</span>
              <span class="cart-delete-no button-animation">No</span>
            </div>
          </div>
          <img class="cart-img" src="${cartData[item].imgURL}" alt="${cartData[item].name}">
          <h2 class="cart-header">${cartData[item].name}</h2>
          <p class="cart-cost">${cartData[item].cost}</p>
          <span class="cart-incrementer">
            <button class="cart-decrease">-</button>
            <span class="cart-amount-count">${cartData[item].count}</span>
            <button class="cart-increase">+</button>
          </span>
        </div>
      `
  }
  content.innerHTML = contentHTML
  totalCalc()
  
// Increase and Decrease Cart


function counter (e, direction) {
  let name = e.target.closest('.cart-item').querySelector('.cart-header').textContent
  let amountCount = e.target.closest('.cart-item').querySelector('.cart-amount-count').textContent
  let cartData = JSON.parse(localStorage.getItem('cart'))
  let item = cartData[name]
  if(direction === 'inc') {
    item.count = item.count + 1
  } else if(direction === 'dec' && amountCount === '0') {
    return
  } else {item.count = item.count - 1}
  cartData = {...cartData, [name]: item}
  e.target.closest('.cart-item').querySelector('.cart-amount-count').textContent = cartData[name].count
  localStorage.setItem('cart', JSON.stringify(cartData))
  totalCalc()
}


let incButtons = document.querySelectorAll('.cart-increase')
let decButtons = document.querySelectorAll('.cart-decrease')

incButtons.forEach(each => each.addEventListener("click", (e) => counter(e, 'inc')))
decButtons.forEach(each => each.addEventListener('click', (e) => counter(e, 'dec')))

//delete items
let deleteButtons = document.querySelectorAll('.cart-delete')
let yesButtons = document.querySelectorAll('.cart-delete-yes')
let noButtons = document.querySelectorAll('.cart-delete-no')

yesButtons.forEach(button => button.addEventListener('click', (e) => {
  let item = e.target.closest('.cart-item');
  let name = item.querySelector('.cart-header').textContent
  let cartData = JSON.parse(localStorage.getItem('cart'))
  delete cartData[name]
  localStorage.setItem('cart', JSON.stringify(cartData))
  item.remove()
  totalCalc()
}))

noButtons.forEach(button => button.addEventListener('click', (e) => {
  e.target.parentElement.parentElement.style.display = 'none'
}))


let deleteDialogue = (e) => {
  let item = e.target.closest('.cart-item')
  let dialogue = item.querySelector('.cart-delete-dialogue')
  dialogue.style.display = "block"
}

deleteButtons.forEach(each => each.addEventListener('click', deleteDialogue))



})
