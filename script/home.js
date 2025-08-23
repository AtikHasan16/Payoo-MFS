// Log out button functionality
document.getElementById("log-out").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.replace("../login.html");
});

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('hello')
    const bankName = document.getElementById("bank-name").value;
    const getAddAmount = parseInt(document.getElementById("add-amount").value);
    const mainBalance = parseInt(
      document.getElementById("main-balance").innerText
    );
    const accNumber = document.getElementById("acc-number").value;
    const pin = parseInt(document.getElementById("pin").value);
    const validPin = 2121;

    // number and pin validation
    if (accNumber.length != 11) {
      alert("Account Number Invalid");
      return;
    } else if (pin !== validPin) {
      alert("Your Pin is Invalid");
      return;
    }

    // adding calculation
    const newTotalBalance = mainBalance + getAddAmount;
    document.getElementById("main-balance").innerText = newTotalBalance;
  });

document.getElementById("add-money-ftr").addEventListener("click", function () {
  document.getElementById("add-money-form").style.display = "block";
  document.getElementById("cashout-form").style.display = "none";
  document.getElementById("transfer-form").style.display = "none";
});

document.getElementById("cashout-ftr").addEventListener("click", function () {
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("transfer-form").style.display = "none";
  document.getElementById("cashout-form").style.display = "block";
});
document.getElementById("transfer-ftr").addEventListener("click", function () {
  document.getElementById("add-money-form").style.display = "none";
  document.getElementById("transfer-form").style.display = "block";
  document.getElementById("cashout-form").style.display = "none";
});
