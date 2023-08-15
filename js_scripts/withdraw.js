document.getElementById("wit-button").addEventListener("click", function () {
  if (
    parseInt(document.getElementById("withdraw").value) >
    parseInt(document.getElementById("bal-display").innerText)
  ) {
    window.alert("cannot withdraw more than balance");
  } else {
    let sum =
      parseInt(document.getElementById("wit-display").innerText) +
      parseInt(document.getElementById("withdraw").value);
    document.getElementById("wit-display").innerText = sum;

    let balance =
      parseInt(document.getElementById("bal-display").innerText) -
      parseInt(document.getElementById("withdraw").value);
    document.getElementById("bal-display").innerText = balance;

    window.alert("withdraw Successful");
    document.getElementById("withdraw").value = "";
  }
});
