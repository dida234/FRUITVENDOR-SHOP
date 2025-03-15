// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Add to cart functionality
const cart = [];
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productCard = button.parentElement;
        const productName = productCard.querySelector("h2").innerText;
        const productPrice = productCard.querySelector("p").innerText;
        
        cart.push({ name: productName, price: productPrice });
        alert(`${productName} added to cart!`);
    });
});
