document.addEventListener("DOMContentLoaded", function() {
    const sicknessList = document.getElementById('sickness-list');
    const remedyDisplay = document.getElementById('remedy-display');
    const healthTipsBtn = document.getElementById('health-tips-btn');
    const healthTipsDiv = document.getElementById('health-tips');
    const actionButtons = document.querySelectorAll('.action-button');

    sicknessList.addEventListener('click', function(event) {
        const selectedSickness = event.target;
        const remedy = selectedSickness.getAttribute('data-remedy');
        if (remedy) {
            displayRemedy(selectedSickness, remedy);
        }
    });

    function displayRemedy(selectedSickness, remedy) {
        // Clear previous selections
        const previousSelected = sicknessList.querySelector('.selected');
        if (previousSelected) {
            previousSelected.classList.remove('selected');
        }

        // Display selected sickness in bold
        selectedSickness.classList.add('selected');

        // Display remedy
        remedyDisplay.innerHTML = `<p>${remedy}</p>`;
        remedyDisplay.style.display = 'block';
    }

    healthTipsBtn.addEventListener('click', function() {
        const healthTips = [
    { tip: "Drink plenty of water to stay hydrated.", img: "images/water.jpg" },
    { tip: "Eat a balanced diet rich in fruits and vegetables.", img: "images/diet2.jpg" },
    { tip: "Exercise regularly to maintain a healthy body.", img: "images/exercise.jpg" },
    { tip: "Get enough sleep to rejuvenate your body.", img: "images/sleep2.jpg" },
    { tip: "Practice mindfulness and reduce stress.", img: "images/hygiene.jpg" }
        ];

        displayHealthTip(tips);
    });

        function displayHealthTip() {
    const randomIndex = Math.floor(Math.random() * healthTips.length);
    const selectedTip = healthTips[randomIndex];

    const healthTipElement = document.getElementById('healthTip');
    const healthImageElement = document.getElementById('healthImage');

    healthTipElement.textContent = selectedTip.tip;
    healthImageElement.src = selectedTip.img;
    healthImageElement.classList.remove('hidden');
        const randomIndex = Math.floor(Math.random() * tips.length);
        healthTipsDiv.innerHTML = `<p>${tips[randomIndex]}</p>`;
    }
});
