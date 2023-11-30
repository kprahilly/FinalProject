function generateMealPlan() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const goal = document.getElementById("goal").value;
    const breakfast = document.getElementById("breakfast").value;
    const snack1 = document.getElementById("snack1").value;
    const lunch = document.getElementById("lunch").value;
    const snack2 = document.getElementById("snack2").value;
    const dinner = document.getElementById("dinner").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    const mealPlanText = `
        <html>
        <head>
            <title>Your Meal Plan</title>
            
        </head>
        <body>
            <h2>Weekly Meal Plan for ${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal for the Week:</strong> ${goal}</p>
            <h3>Meals:</h3>
            <ul>
                <li><strong>Breakfast:</strong> ${breakfast}</li>
                <li><strong>Snack 1:</strong> ${snack1}</li>
                <li><strong>Lunch:</strong> ${lunch}</li>
                <li><strong>Snack 2:</strong> ${snack2}</li>
                <li><strong>Dinner:</strong> ${dinner}</li>
            </ul>
        </body>
        </html>
    `;

    const mealPlanWindow = window.open('about:blank', 'MealPlan', 'width=600,height=400');
    mealPlanWindow.document.write(mealPlanText);
}


function printMealPlan() {
    window.print();
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("generateBtn").addEventListener("click", function () {
    generateMealPlan();
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("mealPlanForm").reset();
});

document.getElementById("printBtn").addEventListener("click", function () {
    printMealPlan();
});
