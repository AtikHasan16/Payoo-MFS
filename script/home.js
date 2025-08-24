// Log out button functionality
document.getElementById("log-out").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = ("../index.html");
});

function idValue(id) {
  const idValue = document.getElementById(id).value;
  return idValue;
}

function getIdInnerText(id) {
  const idInnerText = document.getElementById(id).innerText;
  return idInnerText;
}

function setInnerText(value) {
  const mainBalance = (document.getElementById("main-balance").innerText =
    value);
  return mainBalance;
}

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log('hello')

    const getAddAmount = parseInt(idValue("add-amount"));
    const mainBalance = parseInt(getIdInnerText("main-balance"));
    const accNumber = idValue("acc-number");
    const pin = parseInt(idValue("pin"));
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
    let newTotalBalance = mainBalance + getAddAmount;

    //*** Need support session help
    // let newMailBalance = idInnerText("main-balance");
    // newTotalBalance = newMailBalance;
    // document.getElementById("main-balance").innerText = newTotalBalance;
    setInnerText(newTotalBalance);
  });

// *** Need support session session help
// why I can not use function inside this event with styles?
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
