// login button functionality

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let mobileNumber = "01300000000";
    let pinNumber = "2121";

    const getNumber = document.getElementById("mobile-number").value;
    const getPin = document.getElementById("pin-number").value;

    if (getNumber == mobileNumber && pinNumber == getPin) {
      window.location.href = "home.html";
    } else {
      alert("Invalid credentials");
    }
  });
