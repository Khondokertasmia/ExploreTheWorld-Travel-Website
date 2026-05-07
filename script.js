const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(function(card) {

            const countryName = card.querySelector("h3").textContent.toLowerCase();

            if (countryName.includes(searchValue)) {
                card.style.display = "block";
            }

            else {
                card.style.display = "none";
            }

        });

    });

}


// Japan local time
function updateJapanTime() {

    const japanTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const timeElement = document.getElementById("japanTime");

    if (timeElement) {
        timeElement.textContent = japanTime;
    }
}

setInterval(updateJapanTime, 1000);

updateJapanTime();


// Budget calculator
function calculateBudget() {

    const days = Number(document.getElementById("days").value);

    const hotel = Number(document.getElementById("hotel").value);

    const food = Number(document.getElementById("food").value);

    const transport = Number(document.getElementById("transport").value);

    const total = days * (hotel + food + transport);

    const totalCost = document.getElementById("totalCost");

    if (totalCost) {

        totalCost.textContent =
        "Estimated cost: $" + total + " USD";
    }
}