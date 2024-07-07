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
        const tips = [
            "Eat a balanced diet rich in fruits and vegetables.",
            "Exercise regularly to maintain good physical health.",
            "Get enough sleep each night to recharge your body and mind.",
            "Stay hydrated by drinking plenty of water throughout the day."
        ];

        displayHealthTip(tips);
    });

    function displayHealthTip(tips) {
        const randomIndex = Math.floor(Math.random() * tips.length);
        healthTipsDiv.innerHTML = `<p>${tips[randomIndex]}</p>`;
    }
});
