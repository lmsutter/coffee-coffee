//cart page 
let cartData = JSON.parse(localStorage.getItem('cart'))

let totalCalc = () => {
  let total 
  let totalElement = document.querySelector('#cart-total')
  
  for(item in cartData) {
    let cost = parseInt(cartData[item].cost.replace(/[$]+/g, ""))
    let count = parseInt(cartData[item].count)
    console.log(cost * count)
  } 
  totalElement.textContent = total
}


window.addEventListener('load', () => {
  let content = document.querySelector('.content')
  contentHTML = ''
  for (item in cartData) {
    contentHTML = contentHTML + `
        <div class="cart-item">
          <img class="cart-img" src="${cartData[item].imgURL}" alt="${cartData[item].name}">
          <h2 class="cart-header">${cartData[item].name}</h2>
          <p class="cart-cost">Cost: ${cartData[item].cost}</p>
          <div class="cart-amount"><span>Amount: </span><span class="cart-amount-count">${cartData[item].count}</span></div>
          <span class="cart-arrows">
            <i class="cart-increase fas fa-2x fa-caret-up"></i>
            <i class="cart-decrease fas fa-2x fa-caret-down"></i>
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
  cartData = {...cartData, name: item}
  e.target.closest('.cart-item').querySelector('.cart-amount-count').textContent = cartData[name].count
  localStorage.setItem('cart', JSON.stringify(cartData))

  totalCalc()
}


let incButtons = document.querySelectorAll('.cart-increase')
let decButtons = document.querySelectorAll('.cart-decrease')

incButtons.forEach(each => each.addEventListener("click", (e) => counter(e, 'inc')))
decButtons.forEach(each => each.addEventListener('click', (e) => counter(e, 'dec')))
})


