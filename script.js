    function showRemedy(sickness) {
        const remedies = {
            cold: "Rest, drink plenty of fluids, and take over-the-counter cold medications.",
            headache: "Take pain relievers, rest in a quiet and dark room, and apply a cold or warm compress.",
            fever: "Stay hydrated, take fever-reducing medications, and rest.",
            stomachache: "Drink clear fluids, avoid solid food for a few hours, and eat bland foods like crackers or toast.",
            // Add more sicknesses and their remedies here
        };

        document.getElementById('remedy-text').innerText = remedies[sickness] || "No remedy found.";
    }

    function showHealthTip() {
        const tips = [
            { tip: "Drink plenty of water to stay hydrated.", image: "images/water.jpg" },
            { tip: "Exercise regularly to maintain good health.", image: "images/exercise.jpg" }, 
            { tip: "Eat a balanced diet rich in fruits and vegetables.", image: "images/diet2.jpg" },
            { tip: "Get enough sleep to rejuvenate your body.", image: "images/sleep2.jpg" }, 
            { tip: "Practice mindfulness and reduce stress.", image: "images/hygiene.jpg" }, 
            { tip: "Avoid smoking and excessive alcohol consumption.", image: "images/nosmoke.png" }, 
            // Add more health tips and images here
        ];

        // Variable to keep track of the current tip index
        let currentTipIndex = 0;

        // Function to display the next tip in the sequence
        function displayNextTip() {
          const currentTip = tips[currentTipIndex];

          
            document.getElementById('health-tip-container').innerHTML = `
            <p>${currentTip.tip}</p>
            <img src="${currentTip.image}" alt="Health Tip" style="max-width: 40%; height: 40%;">
          `;

          // Update the index to the next tip
          currentTipIndex = (currentTipIndex + 1) % tips.length;
        }

        // Call the function to display the first tip
        displayNextTip();

        // Optionally, you can set an interval to automatically change the tip every few seconds
        setInterval(displayNextTip, 10000); // Change the tip every 5 seconds
    }
