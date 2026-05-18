// HERO BACKGROUND SLIDER
const hero = document.querySelector(".hero");

const heroImages = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg"
];

let slide = 0;

function changeHeroImage(){
    hero.style.backgroundImage = `url(${heroImages[slide]})`;
    slide = (slide + 1) % heroImages.length;
}
changeHeroImage();
setInterval(changeHeroImage,3000);


// ================= LIVE WEATHER ===================
async function getWeather(){
    const weatherBox = document.getElementById("weatherResult");
    weatherBox.innerHTML = "<div class='data-card'>📡 Detecting your farm location and fetching weather...</div>";

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async(position)=>{

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

            try{
                const response = await fetch(url);
                const data = await response.json();

                let temp = data.current_weather.temperature;
                let wind = data.current_weather.windspeed;

                let farmingTip = temp > 35 ? "High heat detected — Irrigate crops in evening."
                               : temp < 15 ? "Cold condition — protect sensitive crops."
                               : "Weather normal — good day for field activity.";

                weatherBox.innerHTML = `
                    <div class="data-card">
                        <h3>📍 Live Farm Weather Report</h3>
                        <p>🌡 Temperature : ${temp} °C</p>
                        <p>🌬 Wind Speed : ${wind} km/h</p>
                        <p>🌾 Smart Farming Tip : ${farmingTip}</p>
                    </div>
                `;
            }
            catch(error){
                weatherBox.innerHTML = "<div class='data-card'>Unable to load weather currently.</div>";
            }

        });
    }else{
        weatherBox.innerHTML = "<div class='data-card'>Location permission denied.</div>";
    }
}



function showTractorData(){
    const tractor = document.getElementById("tractorSelect").value;
    const result = document.getElementById("tractorData");

    const tractors = {
        mahindra:{
            name:"Mahindra 575 DI XP Plus",
            price:"₹6.70 Lakh",
            hp:"47 HP",
            engine:"4 Cylinder",
            mileage:"7 km/hr",
            lift:"1600 KG",
            usage:"Best for Wheat, Paddy, Rotavator"
        },
        john:{
            name:"John Deere 5050D",
            price:"₹7.40 Lakh",
            hp:"50 HP",
            engine:"3 Cylinder",
            mileage:"7.5 km/hr",
            lift:"1600 KG",
            usage:"Ideal for haulage and heavy field work"
        },
        sonalika:{
            name:"Sonalika DI 745 III",
            price:"₹6.90 Lakh",
            hp:"50 HP",
            engine:"3 Cylinder",
            mileage:"6.8 km/hr",
            lift:"1800 KG",
            usage:"Best for cultivator and trolley use"
        },
        swaraj:{
            name:"Swaraj 744 FE",
            price:"₹7.10 Lakh",
            hp:"48 HP",
            engine:"3 Cylinder",
            mileage:"7 km/hr",
            lift:"1700 KG",
            usage:"Excellent all-rounder tractor"
        }
    };

    if(tractor !== ""){
        let t = tractors[tractor];

        result.innerHTML = `
            <div class="data-card">
                <h3>${t.name}</h3>
                <p>💰 Price : ${t.price}</p>
                <p>⚙ Horse Power : ${t.hp}</p>
                <p>🛠 Engine : ${t.engine}</p>
                <p>🚜 Mileage : ${t.mileage}</p>
                <p>🏋 Lift Capacity : ${t.lift}</p>
                <p>🌾 Best Usage : ${t.usage}</p>
            </div>
        `;
    }
}


// ================= NEARBY AGRI SHOPS ===================
function findLocalShops(){
    const shopBox = document.getElementById("shopResults");
    shopBox.innerHTML = "<div class='shop-card'>📍 Scanning nearby agriculture stores...</div>";

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            setTimeout(()=>{
                shopBox.innerHTML = `
                    <div class="shop-card">
                        <h3>🌱 Green Seed & Fertilizer Hub</h3>
                        <p>Approx Distance: 1.8 KM</p>
                        <p>Seeds, Urea, Pesticides, Bio Fertilizers</p>
                    </div>

                    <div class="shop-card">
                        <h3>🚜 Kisan Agro Machinery Dealer</h3>
                        <p>Approx Distance: 3.4 KM</p>
                        <p>Rotavator, Sprayer, Tractor Spare Parts</p>
                    </div>

                    <div class="shop-card">
                        <h3>🌾 Punjab Krishi Tools Point</h3>
                        <p>Approx Distance: 5.1 KM</p>
                        <p>Harvest Tools, Pumps, Pipes, Cultivators</p>
                    </div>
                `;
            },1500);

        });
    }else{
        shopBox.innerHTML = "<div class='shop-card'>Location service unavailable.</div>";
    }
}


// ================= LIVE TRACTOR MARKET PRICE ===================

function loadLivePrices(){
    const liveBox = document.getElementById("livePriceBox");

    const tractors = [
        {
            name:"Mahindra 575 DI XP Plus",
            base:670000,
            emi:"₹12,500/month"
        },
        {
            name:"John Deere 5050D",
            base:740000,
            emi:"₹13,900/month"
        },
        {
            name:"Sonalika DI 745 III",
            base:690000,
            emi:"₹12,900/month"
        },
        {
            name:"Swaraj 744 FE",
            base:710000,
            emi:"₹13,200/month"
        }
    ];

    let html = "";

    tractors.forEach((t)=>{
        let variation = Math.floor(Math.random()*15000);
        let finalPrice = t.base + variation;

        html += `
            <div class="price-card">
                <h3>${t.name}</h3>
                <p class="price">₹${finalPrice.toLocaleString()}</p>
                <p class="finance">Finance Available: ${t.emi}</p>
                <p class="finance">Status: In Market Demand</p>
            </div>
        `;
    });

    liveBox.innerHTML = html;
}

loadLivePrices();
setInterval(loadLivePrices,5000);

window.addEventListener("load", function () {
    let currentUser = localStorage.getItem("loggedInUser");

    let userNav = document.getElementById("userNav");
    let dropdown = document.getElementById("dropdown");

    if (currentUser) {
        userNav.innerHTML = "👤 " + currentUser;

        userNav.href = "#";

        userNav.onclick = function (e) {
            e.preventDefault();

            // toggle dropdown
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        };
    }
});


window.onclick = function(e){
    let dropdown = document.getElementById("dropdown");
    let userNav = document.getElementById("userNav");

    if (!userNav.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
    }
};

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}