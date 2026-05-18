window.onload = function(){

    displayCart();
    displayOrders();
};

function displayCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let box = document.getElementById("cartItems");

    if(cart.length === 0){
        box.innerHTML = "<p>No saved products in cart.</p>";
        return;
    }

    let html = "";

    cart.forEach(function(item,index){
        html += `
            <div class="data-card">
                <h3>${item}</h3>
                <button onclick="removeCartItem(${index})">Remove</button>
                <button onclick="goBuy('${item}')">Buy Now</button>
            </div>
        `;
    });

    box.innerHTML = html;
}

function removeCartItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
}

function goBuy(product){
    localStorage.setItem("selectedProduct", product);
    window.location.href = "purchase.html";
}

function displayOrders(){

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let orderBox = document.getElementById("myOrders");

    if(orders.length === 0){
        orderBox.innerHTML = "<p>No purchase orders submitted yet.</p>";
        return;
    }

    let html = "";

    orders.forEach(function(order){
        html += `
            <div class="data-card">
                <h3>${order.productName}</h3>
                <p>Buyer: ${order.farmerName}</p>
                <p>Quantity: ${order.quantity}</p>
                <p>Payment: ${order.paymentMode}</p>
            </div>
        `;
    });

    orderBox.innerHTML = html;
}