document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMsg = document.getElementById('error-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !subject || !message) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  errorMsg.textContent = "";
  setTimeout(() => {
    alert("📩 Your message has been sent successfully!");
  }, 100);
  this.reset();
});
