function buyProduct(productName){
    localStorage.setItem("selectedProduct", productName);
    window.location.href = "purchase.html";
}


function filterProducts(){
    let input = document.getElementById("searchProduct").value.toLowerCase();
    let cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card){
        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
}

function addToCart(productName){

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.push(productName);

    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert(productName + " added to cart successfully!");
}

function buyProduct(productName){
    localStorage.setItem("selectedProduct", productName);
    window.location.href = "purchase.html";
}