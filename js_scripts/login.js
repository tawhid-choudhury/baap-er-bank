document.getElementById("login").addEventListener("click", function () {
  if (
    document.getElementById("email").value === "abc@gmail.com" &&
    document.getElementById("password").value === "secret"
  ) {
    window.location.href = "http://127.0.0.1:5500/bank.html";
    console.log("Valid user");
  } else {
    window.alert("Inalid user");
  }
});
