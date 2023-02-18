const boxing = document.querySelector(".boxing"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
    boxing.classList.add("active");
});

signupHeader.addEventListener("click", () => {
    boxing.classList.remove("active");
});
