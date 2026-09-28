(() => {
  const form = document.getElementById('userregistration');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const status = document.getElementById('login-status');
  const button = form.querySelector('[type="submit"]');

  // Local demo validation only; real access control requires a server.
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const matches = username.value === 'ocean2057.cds25@chitkara.edu.in'
      && password.value === '2645992057';

    if (matches) {
      sessionStorage.setItem('ubusLoggedIn', 'true');
      window.location.assign('dashboard.html');
      return;
    }
    sessionStorage.removeItem('ubusLoggedIn');
    status.hidden = false;
    status.style.color = matches ? '#166534' : '#E3000F';
    status.textContent = matches ? 'Login successful.' : 'Invalid username or password.';
    username.setAttribute('aria-invalid', String(!matches));
    password.setAttribute('aria-invalid', String(!matches));
    if (!matches) password.focus();
  });

  form.addEventListener('input', () => {
    status.hidden = true;
    status.textContent = '';
    username.removeAttribute('aria-invalid');
    password.removeAttribute('aria-invalid');
  });

  button.disabled = false;
})();