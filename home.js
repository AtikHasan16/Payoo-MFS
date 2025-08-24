// Log out button functionality
document.getElementById("log-out").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./index.html";
});
// function for input field ID capture
function idValue(id) {
  const idValue = document.getElementById(id).value;
  return idValue;
}
// function for inner Text capture capture
function getIdInnerText(id) {
  const idInnerText = document.getElementById(id).innerText;
  return idInnerText;
}
// function for replacing available balance with new value
function setInnerText(value) {
  const mainBalance = (document.getElementById("main-balance").innerText =
    value);
  return mainBalance;
}

// add money section
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getAddAmount = parseInt(idValue("add-amount"));
    const mainBalance = parseInt(getIdInnerText("main-balance"));
    const accNumber = idValue("acc-number");
    const pin = parseInt(idValue("pin"));
    const validPin = 2121;
    // number and pin validation
    if (getAddAmount <= 0 || getAddAmount > mainBalance) {
      alert("Please provide a valid amount");
      return;
    } else if (accNumber.length != 11) {
      alert("Account Number Invalid");
      return;
    } else if (pin !== validPin) {
      alert("Your Pin is Invalid");
      return;
    }
    // adding calculation
    let newTotalBalance = mainBalance + getAddAmount;
    setInnerText(newTotalBalance);
  });

// withdraw-money section
document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getWithdrawAmount = idValue("withdraw-amount");
    const mainBalance = getIdInnerText("main-balance");
    const agentNumber = idValue("agent-number");
    const pin = parseInt(idValue("withdraw-pin"));
    const validPin = 2121;
    if (getWithdrawAmount <= 0 || getWithdrawAmount > mainBalance) {
      alert("Provide a valid amount");
      return;
    } else if (agentNumber.length != 11) {
      alert("Account Number Invalid");
    } else if (pin !== validPin) {
      alert("Your Pin is Invalid");
      return;
    }

    let newTotalBalance = mainBalance - getWithdrawAmount;
    setInnerText(newTotalBalance);
  });

// Transfer Money section

// manual window toggling
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
