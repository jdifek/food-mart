document.addEventListener('DOMContentLoaded', function () {
	const cartItemsContainer = document.getElementById('cart-items')
	const cartCountElement = document.getElementById('cart-count')
	const cartTotalElement = document.getElementById('cart-total')
	const cartTotalHeaderElement = document.getElementById('cart-total-header')

	const MAX_QUANTITY = 9

	// Get Cart from localStorage
	function loadCart() {
		const cart = JSON.parse(localStorage.getItem('cart')) || []
		renderCart(cart)
	}

	window.loadCart = loadCart

	// Render Cart
	function renderCart(cart) {
		cartItemsContainer.innerHTML = ''
		let total = 0

		cart.forEach((item, index) => {
			const listItem = document.createElement('li')
			listItem.classList.add(
				'list-group-item',
				'd-flex',
				'justify-content-between',
				'lh-sm'
			)

			listItem.innerHTML = `
        <div class="d-flex flex-column justify-content-between cart-items">
          <h6 class="my-0">${item.name}</h6>
          <small class="text-body-secondary">Quantity: <span class="item-quantity">${
						item.quantity
					}</span></small>
        </div>
        <div>
				<div class="mb-2">
          <span class="text-body-secondary price">$${
						item.price * item.quantity
					}</span>
          <button class="btn delete-btn btn-danger remove-item" data-index="${index}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
					</div>
					<div class="d-flex justify-content-end">
					  <button class="btn btn-sm btn-secondary ms-2 decrement-item" data-index="${index}">-</button>
          <button class="btn btn-sm btn-secondary ms-2 increment-item" data-index="${index}">+</button>
					</div>
        </div>
      `

			cartItemsContainer.appendChild(listItem)
			total += item.price * item.quantity
		})

		// Update total price & quantity
		cartCountElement.textContent = cart.reduce(
			(sum, item) => sum + item.quantity,
			0
		)
		cartTotalElement.textContent = `$${total}`
		cartTotalHeaderElement.textContent = `$${total}`
	}

	// Update quantity in cart
	function updateQuantity(index, change) {
		const cart = JSON.parse(localStorage.getItem('cart')) || []
		if (cart[index]) {
			const newQuantity = cart[index].quantity + change
			if (newQuantity > MAX_QUANTITY) {
				alert(`Maximum quantity for this item is ${MAX_QUANTITY}`)
				return
			}
			if (newQuantity <= 0) {
				cart.splice(index, 1) // Remove item if quantity is 0 or less
			} else {
				cart[index].quantity = newQuantity
			}
			localStorage.setItem('cart', JSON.stringify(cart))
			loadCart()
		}
	}

	// Remove product from Cart
	function removeFromCart(index) {
		const cart = JSON.parse(localStorage.getItem('cart')) || []
		cart.splice(index, 1)
		localStorage.setItem('cart', JSON.stringify(cart))
		loadCart()
	}

	// Handle click events
	cartItemsContainer.addEventListener('click', function (event) {
		const button = event.target.closest('button')
		if (!button) return

		const index = button.dataset.index
		if (button.classList.contains('remove-item')) {
			removeFromCart(index)
		} else if (button.classList.contains('increment-item')) {
			updateQuantity(index, 1)
		} else if (button.classList.contains('decrement-item')) {
			updateQuantity(index, -1)
		}
	})

	loadCart()
})
