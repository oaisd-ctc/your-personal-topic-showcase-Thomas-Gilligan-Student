document.addEventListener("DOMContentLoaded", function () {
    fetch('../recipes.json')
        .then(response => response.json())
        .then(data => {
            const pieDir = document.getElementById("pie-directions");

            for(var i = 1; i <= 5; i++) {
                var step = document.createElement("li");
                step.textContent = data.applePie[`step${i}`];
                pieDir.appendChild(step);
            }

            const pieIng = document.getElementById("pie-ingredients");

            for(var i = 1; i<=9; i++) {
                var step = document.createElement("li");
                step.textContent = data.pieIngred[`ing${i}`];
                pieIng.appendChild(step);
            }
        })
});