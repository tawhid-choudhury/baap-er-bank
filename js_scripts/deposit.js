document.getElementById("dep-button").addEventListener("click", function () {
  if (isNaN(parseInt(document.getElementById("deposit").value))) {
    window.alert("enter valid number");
    document.getElementById("deposit").value = "";
    return;
  }
  updateDisplay("dep-display", "deposit", "dep-display", true);

  updateDisplay("bal-display", "deposit", "bal-display", true);

  window.alert("Deposit Successful");
  document.getElementById("deposit").value = "";
});
