document.getElementById("login").addEventListener("click", function () {
  if (
    document.getElementById("email").value === "abc@gmail.com" &&
    document.getElementById("password").value === "secret"
  ) {
    console.log("Valid user");
  } else {
    console.log("Inalid user");
  }
});
