function passwordStrengthChecker() {
  const passwordInput = document.getElementById('password');
  const meter = document.getElementById('password-strength-meter');
  const text = document.getElementById('password-strength-text');
  const signupButton = document.getElementById('signup');
  const disabledClasses = ['opacity-50', 'cursor-not-allowed'];

  const strength = {
    0: 'Worst',
    1: 'Bad',
    2: 'Weak',
    3: 'Good',
    4: 'Strong',
  };

  password.addEventListener('input', () => {
    const value = password.value;
    console.log(value);
    const score = checkPasswordStrength(value);
    meter.value = score;
    text.innerHTML = strength[score];
    if (score >= 3) {
      signupButton.disabled = false;
      signupButton.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
      true;
      signupButton.disabled = true;
      signupButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
  });
}

function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) {
    strength += 1;
  }

  if (password.match(/^(?=.*[A-Z])/)) {
    strength += 1;
  }

  if (password.match(/^(?=.*\d)/)) {
    strength += 1;
  }

  if (password.match(/^(?=.*[!@#$%^&*])/)) {
    strength += 1;
  }

  return strength;
}

document.addEventListener('DOMContentLoaded', () => {
  passwordStrengthChecker();
});
