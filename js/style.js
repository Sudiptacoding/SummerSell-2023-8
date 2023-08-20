function buyProduct(product) {
    if (product === 'product1') {
        createItem('K. Accessories');
        calculateTotal(39.00)
    } else if (product === 'product2') {
        createItem('kitchen Accessories')
        calculateTotal(25.00)
    } else if (product === 'product3') {
        createItem('Home Cooker')
        calculateTotal(49.00)
    } else if (product === 'product4') {
        createItem('Sports Back Cap')
        calculateTotal(49.00)
    } else if (product === 'product5') {
        createItem('Full Jersey Set')
        calculateTotal(69.00)
    } else if (product === 'product6') {
        createItem('Sports cates')
        calculateTotal(159.00)
    } else if (product === 'product7') {
        createItem('Single Relax Chair')
        calculateTotal(185.00)
    } else if (product === 'product8') {
        createItem('Children play')
        calculateTotal(299.00)
    } else if (product === 'product9') {
        createItem('Flexible Sofa')
        calculateTotal(339.00)
    }
}
function createItem(item) {
    const ol = document.querySelector('#buy-item')
    const li = document.createElement('li');
    li.innerText = item;
    li.setAttribute('class', 'text-2xl text-[#111] font-medium py-2')
    ol.appendChild(li)
}
function calculateTotal(price) {
    Purchase(price)
    const totalPrice = document.querySelector('#total-price')
    const discount = document.querySelector('#discount')
    const total = document.querySelector('#total')
    const discountButton = document.querySelector('#discount-button')
    const discountInput = document.querySelector('#discount-input')

    totalPrice.innerText = parseInt(totalPrice.innerText) + price
    total.innerText = totalPrice.innerText

    if (totalPrice.innerText >= 200) {
        discountButton.removeAttribute("disabled")
    }
    discountButton.addEventListener('click', () => {
        if (discountInput.value === 'SELL200') {
            discount.innerText = totalPrice.innerText * 20 / 100
            total.innerText = totalPrice.innerText - discount.innerText
        }
        document.querySelector('#discount-input').value = ''
    })
}
function Purchase(btn) {
    const Purchase = document.querySelector('#Purchase')
    if (parseInt(btn) > 0) {
        Purchase.removeAttribute("disabled")
    }
}
function goToHome() {
    window.location.href = '/index.html'
}