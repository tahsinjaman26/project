
// Login form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get user information
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const room = document.getElementById("room").value.trim();

    // Basic demonstration only
    if (phone !== "" && password !== "" && room !== "") {

        // Hide Login Window
        document.getElementById("loginWindow").hidden = true;

        // Show Dashboard
        document.getElementById("dashboard").hidden = false;

        // Display member's room number
        document.getElementById("memberName").textContent =
            "Tahsin Jaman (Room " + room + ")";

    }

});


// Month-wise bill demonstration
function showBill() {

    const month = document.getElementById("month").value;

    let rent = 3000;
    let electricity = 450;

    if (month === "2026-11") {
        electricity = 500;
    }

    else if (month === "2026-12") {
        electricity = 400;
    }

    document.getElementById("rent").textContent = rent;

    document.getElementById("electricity").textContent = electricity;

    document.getElementById("total").textContent = rent + electricity;

    document.getElementById("status").textContent = "Unpaid";

    document.getElementById("message").textContent = "";
}


// Pay Now demonstration
function payNow() {

    document.getElementById("message").textContent =
        "Payment gateway is not connected yet.";

}


// Logout
function logout() {

    // Hide Dashboard
    document.getElementById("dashboard").hidden = true;

    // Show Login Window
    document.getElementById("loginWindow").hidden = false;

    // Clear login form
    document.getElementById("loginForm").reset();

}

