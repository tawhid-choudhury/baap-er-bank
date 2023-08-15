document.getElementById("dep-button").addEventListener("click", function () {
  if (isNaN(parseInt(document.getElementById("deposit").value))) {
    window.alert("enter valid number");
    document.getElementById("deposit").value = "";
    return;
  }
  let sum =
    parseInt(document.getElementById("dep-display").innerText) +
    parseInt(document.getElementById("deposit").value);
  document.getElementById("dep-display").innerText = sum;

  let balance =
    parseInt(document.getElementById("bal-display").innerText) +
    parseInt(document.getElementById("deposit").value);
  document.getElementById("bal-display").innerText = balance;

  window.alert("Deposit Successful");
  document.getElementById("deposit").value = "";
});
