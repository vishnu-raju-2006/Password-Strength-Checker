const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) {
        strengthBar.style.width = "33%";
        strengthBar.style.backgroundColor = "red";
        strengthText.textContent = "Weak Password";
    } else if (strength === 3 || strength === 4) {
        strengthBar.style.width = "66%";
        strengthBar.style.backgroundColor = "orange";
        strengthText.textContent = "Medium Password";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "green";
        strengthText.textContent = "Strong Password";
    }
});
