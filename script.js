// script.js
document.addEventListener("DOMContentLoaded", function() {
    const phoneSelect = document.getElementById("phone");
    const registeredNumbers = ["8897149692", "8978089696", "8074140869", ]; // Replace with actual 500 numbers

    registeredNumbers.forEach(number => {
        let option = document.createElement("option");
        option.value = number;
        option.textContent = number;
        phoneSelect.appendChild(option);
    });

    const voteForm = document.getElementById("voteForm");
    const message = document.getElementById("message");
    let votes = JSON.parse(localStorage.getItem("votes")) || {};

    voteForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const phone = phoneSelect.value;
        const candidate = document.querySelector("input[name='candidate']:checked");

        if (!phone) {
            message.textContent = "Please select your phone number.";
            return;
        }
        if (!candidate) {
            message.textContent = "Please select a candidate.";
            return;
        }
        if (votes[phone]) {
            message.textContent = "You have already voted!";
            return;
        }

        votes[phone] = candidate.value;
        localStorage.setItem("votes", JSON.stringify(votes));
        message.textContent = "Your vote has been recorded successfully!";
    });
});
