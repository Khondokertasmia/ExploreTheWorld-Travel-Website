const searchInput = document.getElementById("searchInput");

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