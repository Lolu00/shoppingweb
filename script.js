// Product data
const products = [
    {
        id: 1,
        name: "Urban Explorer Backpack",
        category: "backpacks",
        price: 89.99,
        image: "https://storage.googleapis.com/a1aa/image/-Yresr7hgooi7MFWOujkneInONAbAgLQYVeQZG1kHWY.jpg",
        description: "Durable backpack perfect for city adventures"
    },
    {
        id: 2,
        name: "Business Suitcase",
        category: "suitcases",
        price: 149.99,
        image: "https://storage.googleapis.com/a1aa/image/yslxQp0IPEEZMURGABkzSZJ6hvu_y2Ef5UmnA9Sd67w.jpg",
        description: "Professional suitcase with smooth wheels"
    },
    {
        id: 3,
        name: "Travel Duffel Bag",
        category: "duffel",
        price: 59.99,
        image: "https://storage.googleapis.com/a1aa/image/O70LzLfWFDFIuAafMVm6JW2VD1UxErgfOTUvtDZq2T0.jpg",
        description: "Spacious duffel for weekend getaways"
    },
    {
        id: 4,
        name: "Hiking Backpack",
        category: "backpacks",
        price: 119.99,
        image: "https://storage.googleapis.com/a1aa/image/-Yresr7hgooi7MFWOujkneInONAbAgLQYVeQZG1kHWY.jpg",
        description: "Rugged backpack for outdoor adventures"
    },
    {
        id: 5,
        name: "Carry-On Suitcase",
        category: "suitcases",
        price: 179.99,
        image: "https://storage.googleapis.com/a1aa/image/yslxQp0IPEEZMURGABkzSZJ6hvu_y2Ef5UmnA9Sd67w.jpg",
        description: "Lightweight carry-on with TSA locks"
    },
    {
        id: 6,
        name: "Gym Duffel Bag",
        category: "duffel",
        price: 39.99,
        image: "https://storage.googleapis.com/a1aa/image/O70LzLfWFDFIuAafMVm6JW2VD1UxErgfOTUvtDZq2T0.jpg",
        description: "Water-resistant duffel for fitness gear"
    },
    {
        id: 7,
        name: "Student Backpack",
        category: "backpacks",
        price: 69.99,
        image: "https://storage.googleapis.com/a1aa/image/-Yresr7hgooi7MFWOujkneInONAbAgLQYVeQZG1kHWY.jpg",
        description: "Comfortable backpack for daily use"
    },
    {
        id: 8,
        name: "Large Suitcase",
        category: "suitcases",
        price: 199.99,
        image: "https://storage.googleapis.com/a1aa/image/yslxQp0IPEEZMURGABkzSZJ6hvu_y2Ef5UmnA9Sd67w.jpg",
        description: "Spacious suitcase for long trips"
    },
    {
        id: 9,
        name: "Weekend Duffel",
        category: "duffel",
        price: 79.99,
        image: "https://storage.googleapis.com/a1aa/image/O70LzLfWFDFIuAafMVm6JW2VD1UxErgfOTUvtDZq2T0.jpg",
        description: "Stylish duffel for short trips"
    },
    {
        id: 10,
        name: "Tactical Backpack",
        category: "backpacks",
        price: 99.99,
        image: "https://storage.googleapis.com/a1aa/image/-Yresr7hgooi7MFWOujkneInONAbAgLQYVeQZG1kHWY.jpg",
        description: "Military-style backpack with multiple compartments"
    },
    {
        id: 11,
        name: "Executive Suitcase",
        category: "suitcases",
        price: 249.99,
        image: "https://storage.googleapis.com/a1aa/image/yslxQp0IPEEZMURGABkzSZJ6hvu_y2Ef5UmnA9Sd67w.jpg",
        description: "Premium suitcase with leather accents"
    },
    {
        id: 12,
        name: "Sports Duffel Bag",
        category: "duffel",
        price: 49.99,
        image: "https://storage.googleapis.com/a1aa/image/O70LzLfWFDFIuAafMVm6JW2VD1UxErgfOTUvtDZq2T0.jpg",
        description: "Ventilated duffel for sports equipment"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

// Display cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cartItems && cartTotal) {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += `
                <div class="flex justify-between items-center mb-2">
                    <div>
                        <h3 class="font-semibold">${item.name}</h3>
                        <p class="text-sm text-gray-600">$${item.price.toFixed(2)}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });

        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Display products
function displayProducts(productsToShow = products) {
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = '';

        productsToShow.forEach(product => {
            productsGrid.innerHTML += `
                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img alt="${product.name}" class="w-full h-64 object-cover" src="${product.image}"/>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
                        <p class="text-gray-600 mb-2">${product.description}</p>
                        <p class="text-gray-800 font-bold mb-4">$${product.price.toFixed(2)}</p>
                        <button onclick="addToCart(${product.id})" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
        });
    }
}

// Filter products
function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');

    let filteredProducts = products;

    if (categoryFilter && categoryFilter.value) {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
    }

    if (priceFilter && priceFilter.value) {
        const [min, max] = priceFilter.value.split('-').map(v => v === '+' ? Infinity : parseFloat(v));
        filteredProducts = filteredProducts.filter(product => product.price >= min && (max === Infinity || product.price <= max));
    }

    displayProducts(filteredProducts);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Cart modal toggle
function toggleCartModal() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.toggle('hidden');
        if (!cartModal.classList.contains('hidden')) {
            displayCart();
        }
    }
}

// Display order summary on checkout page
function displayOrderSummary() {
    const orderItems = document.getElementById('order-items');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    if (orderItems && subtotalElement && taxElement && totalElement) {
        orderItems.innerHTML = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            subtotal += item.price;
            orderItems.innerHTML += `
                <div class="flex justify-between items-center mb-2">
                    <div>
                        <h3 class="font-semibold">${item.name}</h3>
                        <p class="text-sm text-gray-600">$${item.price.toFixed(2)}</p>
                    </div>
                    <button onclick="removeFromCart(${index}); displayOrderSummary();" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        });

        const shipping = 10.00;
        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + shipping + tax;

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('border-red-500');
                    isValid = false;
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            if (isValid) {
                if (formId === 'checkout-form') {
                    // Clear cart after successful checkout
                    cart = [];
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    alert('Order placed successfully! Thank you for shopping with Bronx Luggage.');
                    // Optionally redirect to home page
                    window.location.href = 'bronx.html';
                } else {
                    alert('Form submitted successfully!');
                    form.reset();
                }
            }
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Update cart count on load
    updateCartCount();

    // Display products if on shop page
    if (document.getElementById('products-grid')) {
        displayProducts();
    }

    // Add event listeners for filters
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Cart modal
    const cartBtn = document.getElementById('cart-btn');
    const closeCart = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCartModal);
    }

    if (closeCart) {
        closeCart.addEventListener('click', toggleCartModal);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const checkoutSection = document.getElementById('checkout-section');
            if (checkoutSection) {
                checkoutSection.classList.toggle('hidden');
            }
        });
    }

    // Form validation
    validateForm('login-form');
    validateForm('signup-form');
    validateForm('contact-form');
    validateForm('checkout-form');

    // Checkout functionality
    if (document.getElementById('checkout-form')) {
        displayOrderSummary();
    }
});
