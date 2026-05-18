window.addEventListener("load",displayLeaseListings);

function submitLease(){
    let owner = document.getElementById("ownerName").value;
    let mobile = document.getElementById("ownerMobile").value;
    let village = document.getElementById("village").value;
    let acres = document.getElementById("acres").value;
    let soil = document.getElementById("soilType").value;
    let water = document.getElementById("waterFacility").value;
    let duration = document.getElementById("leaseDuration").value;
    let price = document.getElementById("leasePrice").value;
    let notes = document.getElementById("notes").value;

    if(owner==="" || mobile==="" || village==="" || acres==="" || duration==="" || price===""){
        document.getElementById("leaseMsg").innerHTML = "Please fill all required fields.";
        return;
    }

    const leaseData = {
        ownerName: owner,
        ownerMobile: mobile,
        villageArea: village,
        totalAcres: acres,
        soilType: soil,
        waterFacility: water,
        leaseDuration: duration,
        leasePrice: price,
        notes: notes
    };

    let allListings = JSON.parse(localStorage.getItem("agriLeaseListings")) || [];
    allListings.push(leaseData);

    localStorage.setItem("agriLeaseListings", JSON.stringify(allListings));

    document.getElementById("leaseMsg").innerHTML =
    "✅ Your farmland has been listed successfully in Agri Zone Lease Exchange.";

    document.querySelectorAll(".lease-box input, .lease-box textarea").forEach(el=>el.value="");

    displayLeaseListings();
}

function displayLeaseListings(){
    let listingBox = document.getElementById("leaseListings");
    let allListings = JSON.parse(localStorage.getItem("agriLeaseListings")) || [];

    let html = "";

    allListings.forEach((land)=>{
        html += `
            <div class="lease-card">
                <h3>🌾 ${land.totalAcres} Acres - ${land.villageArea}</h3>
                <p><b>Owner:</b> ${land.ownerName}</p>
                <p><b>Contact:</b> ${land.ownerMobile}</p>
                <p><b>Soil:</b> ${land.soilType}</p>
                <p><b>Water:</b> ${land.waterFacility}</p>
                <p><b>Lease Duration:</b> ${land.leaseDuration}</p>
                <p><b>Expected Price:</b> ${land.leasePrice}</p>
                <p><b>Notes:</b> ${land.notes}</p>
            </div>
        `;
    });

    listingBox.innerHTML = html;
}