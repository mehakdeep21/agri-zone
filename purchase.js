// Autofill selected product
window.addEventListener("load",function(){
    const product = localStorage.getItem("selectedProduct");
    document.getElementById("productName").value = product;
});

// Autofill selected product
window.addEventListener("load", function(){
    const product = localStorage.getItem("selectedProduct");
    document.getElementById("productName").value = product;
});

function submitOrder(){
    let farmer = document.getElementById("farmerName").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let product = document.getElementById("productName").value;
    let qty = document.getElementById("quantity").value;
    let brand = document.getElementById("brand").value;
    let payment = document.getElementById("payment").value;

    if(farmer === "" || mobile === "" || address === "" || qty === ""){
        document.getElementById("orderMsg").innerHTML = "Please fill all required fields.";
        return;
    }

    const orderDetails = {
        farmerName: farmer,
        mobileNumber: mobile,
        farmerAddress: address,
        productName: product,
        quantity: qty,
        preferredBrand: brand,
        paymentMode: payment
    };

    let allOrders = JSON.parse(localStorage.getItem("orders")) || [];

    allOrders.push(orderDetails);

    localStorage.setItem("agriOrders", JSON.stringify(allOrders));

    document.getElementById("orderMsg").innerHTML =
    "✅ Purchase Request Submitted Successfully.<br>Order forwarded to Agri Zone Partner Dealer Network.";

    setTimeout(()=>{
        window.location.href = "products.html";
    },2500);
}

    
function addToCart(productName){

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.push(productName);

    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert(productName + " added to cart!");
}

function buyProduct(productName){
    localStorage.setItem("selectedProduct", productName);
    window.location.href = "purchase.html";
}
