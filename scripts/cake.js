document.addEventListener("DOMContentLoaded", function () {
    fetch('../recipes.json')
        .then(response => response.json())
        .then(data => {
            const cakeDir = document.getElementById("cake-directions");

            for(var i = 1; i <= 7; i++) {
                var step = document.createElement("li");
                step.textContent = data.strawberryCake[`step${i}`];
                cakeDir.appendChild(step);
            }

            const cakeIng = document.getElementById("cake-ingredients");

            for(var i = 1; i<=15; i++) {
                var step = document.createElement("li");
                step.textContent = data.cakeIngred[`ing${i}`];
                cakeIng.appendChild(step);
            }
        })
});