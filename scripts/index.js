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

            const pieDir = document.getElementById("pie-directions");

            for(var i = 1; i <= 5; i++) {
                var step = document.createElement("li");
                step.textContent = data.applePie[`step${i}`];
                pieDir.appendChild(step);
            }
        })
});