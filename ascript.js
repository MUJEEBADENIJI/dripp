// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Fetch categories and their products from JSON file and render them
    fetchCategories();
});

function fetchCategories() {
    fetch("productcat.json")
        .then(response => response.json())
        .then(data => renderCategories(data));
}

function renderCategories(categories) {
    const categoriesSection = document.getElementById("categories");
    
    categories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        const categoryName = document.createElement("h2");
        categoryName.textContent = category.name;
        categoryDiv.appendChild(categoryName);

        const productList = document.createElement("ul");
        category.products.forEach(product => {
            const listItem = document.createElement("li");
            listItem.classList.add("product"); // Add the 'product' class to each product list item

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;
            productImage.classList.add("product-image");
            listItem.appendChild(productImage);

            const productInfo = document.createElement("div");
            productInfo.classList.add("product-info");

            const productName = document.createElement("h3");
            productName.textContent = product.name;
            productInfo.appendChild(productName);

            const productPrice = document.createElement("p");
            productPrice.textContent = "₦" + product.price;
            productInfo.appendChild(productPrice);

            const productDescription = document.createElement("p");
            productDescription.textContent = product.description;
            productInfo.appendChild(productDescription);

            const purchaseButton = document.createElement("button");
            purchaseButton.textContent = "Purchase";
            purchaseButton.classList.add("purchase-button");
            // Construct WhatsApp message URL with product details
            const whatsappMessage = `Hi, I'd like to purchase ${product.name} for ₦${product.price}.`;
            const whatsappURL = `https://wa.me/2348170794157/?text=${encodeURIComponent(whatsappMessage)}`;
            // Set the purchase button's onclick attribute to redirect to the WhatsApp URL
            purchaseButton.setAttribute("onclick", `window.location.href='${whatsappURL}'`);
            productInfo.appendChild(purchaseButton);

            listItem.appendChild(productInfo);
            productList.appendChild(listItem);
        });

        categoryDiv.appendChild(productList);
        categoriesSection.appendChild(categoryDiv);
    });
}