// Password Generator --OOP -Classes and Objects 

const generateBtn = document.getElementsByClassName("generate-btn")[0];
const passwordValues = document.querySelectorAll(".password-value");

class Password {
  constructor(length) {
    this.length = length;
    this.chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }
    generate() {
    let password = "";
    for (let i = 0; i < this.length; i++) {
        const randomIndex = Math.floor(Math.random() * this.chars.length);
        password += this.chars[randomIndex];
    }
    return password;
  }
}

generateBtn.addEventListener("click", () => {
  const weakPassword = new Password(6);
  const mediumPassword = new Password(10);
  const strongPassword = new Password(16);
  passwordValues[0].textContent = weakPassword.generate();
    passwordValues[1].textContent = mediumPassword.generate();
    passwordValues[2].textContent = strongPassword.generate();
});
    