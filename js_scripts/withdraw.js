document.getElementById("wit-button").addEventListener("click", function () {
  if (isNaN(parseInt(document.getElementById("withdraw").value))) {
    window.alert("enter valid number");
    document.getElementById("deposit").value = "";
    return;
  }
  if (
    parseInt(document.getElementById("withdraw").value) >
    parseInt(document.getElementById("bal-display").innerText)
  ) {
    window.alert("cannot withdraw more than balance");
  } else {
    updateDisplay("wit-display", "withdraw", "wit-display", true);

    updateDisplay("bal-display", "withdraw", "bal-display", false);

    window.alert("withdraw Successful");
    document.getElementById("withdraw").value = "";
  }
});
