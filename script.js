document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!email || !emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").textContent = "Your message has been submitted successfully.";
    document.getElementById("contactForm").reset();
  }
});
