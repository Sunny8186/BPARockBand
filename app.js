function toggleSizeOptions(id) {
    const sizeOptions = document.getElementById(id);
    // Toggle the visibility of the size options
    if (sizeOptions.style.display === "none" || sizeOptions.style.display === "") {
        sizeOptions.style.display = "block";
    } else {
        sizeOptions.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const cartLink = document.querySelector('.cart');
    cartLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Show the shopping cart
        showShoppingCart();
    });
   });
   
   function showShoppingCart() {
    const cartSection = document.getElementById('shopping-cart');
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        cartSection.style.display = 'block';
        updateCart();
    } else {
        cartSection.style.display = 'none';
    }
   }
   
   const menuItems = [
    { id: 1, name: 'Black Classic Hoodie', price: 15.99 },
    { id: 2, name: 'White Classic Hoodie', price: 15.99 },
    { id: 3, name: 'Red Classic Hoodie', price: 15.99 },
    { id: 4, name: 'yellow And Grey Fleece Hoodie', price: 18.00 },
    { id: 5, name: 'Red Pullover Hoodie', price: 12.99 },
    { id: 6, name: 'Yellow and Grey Classic Hoodie', price: 15.99 },
    { id: 7, name: 'Black Crew Neck T-Shirt', price: 9.99 },
    { id: 8, name: 'Red Crew Neck T-Shirt', price: 9.99 },
    { id: 9, name: 'Grey Graphic T-Shirt', price: 11.00 },
    { id: 10, name: 'Black Stainless Steel Water Bottle', price: 12.99 },
    { id: 11, name: 'White Stainless Steel Water Bottle', price: 12.99 },
    { id: 12, name: 'Aluminum Water Bottle', price: 14.00 },
    { id: 13, name: 'Steel Key Ring', price: 3.99 },
    { id: 14, name: 'Rubber Keychain Clasp', price: 2.50 },
    { id: 15, name: 'Rubber Keychain Fob', price: 2.99 },
    { id: 16, name: 'Black And Red Backpack', price: 25.99 },
    { id: 17, name: 'Graphic Drawstring Bag', price: 15.99 },
    { id: 18, name: 'Black Tote Bag', price: 19.99 },
   ];
   
   const cart = [];
   
   function addToCart(itemId) {
    const selectedItem = menuItems.find(item => item.id === itemId);
    if (selectedItem) {
        cart.push(selectedItem);
        updateCart();
    }
   }
   
   function removeFromCart(itemId) {
    const index = cart.findIndex(item => item.id === itemId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
   }
   
   function increaseQuantity(itemId) {
    const selectedItem = menuItems.find(item => item.id === itemId);
    if (selectedItem) {
        cart.push(selectedItem);
        updateCart();
    }
   }
   
   function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
   
    // Clear the cart
    cartItemsElement.innerHTML = '';
   
    // Populate the cart
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item.id);
        li.appendChild(removeButton);
        const increaseButton = document.createElement('button');
        increaseButton.textContent = 'Add another';
        increaseButton.onclick = () => increaseQuantity(item.id);
        li.appendChild(increaseButton);
        cartItemsElement.appendChild(li);
    });
   
    // Calculate and display the total
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    cartTotalElement.textContent = total.toFixed(2);
   }