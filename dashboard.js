(() => {
  // This session flag is for the static demo, not server-side authorization.
  if (sessionStorage.getItem('ubusLoggedIn') !== 'true') {
    window.location.replace('index.html');
    return;
  }
  document.body.hidden = false;
  document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.removeItem('ubusLoggedIn');
    window.location.replace('index.html');
  });
  const dialog = document.getElementById('service-dialog');
  document.querySelectorAll('[data-service]').forEach(button => {
    button.addEventListener('click', () => {
      const service = button.dataset.service;
      document.getElementById('dialog-title').textContent = service;
      document.getElementById('dialog-message').textContent = service === 'Change Password'
        ? 'This account uses a fixed password. Password changes are not available.'
        : service === 'Notifications'
          ? 'Notifications are not connected yet.'
          : 'This service page is not connected yet.';
      dialog.showModal();
    });
  });
})();