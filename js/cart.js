//cart page 
let cartData = JSON.parse(localStorage.getItem('cart'))

window.addEventListener('load', () => {
  console.log('load')
  let content = document.querySelector('.content')
  contentHTML = ''
  for (item in cartData) {
    console.log(cartData[item])
    contentHTML = contentHTML + `
        <div style="color:black">
          <h2 style="color:black">${cartData[item].name}</h2>
          <img class="cart-img" src="${cartData[item].imgURL}" alt="${cartData[item].name}">
          <p>${cartData[item].cost}
        </div>
      `

  }
  content.innerHTML = contentHTML
})



  console.log(cartData.item.info)
  