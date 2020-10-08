function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  let input = document.getElementById('password');
  let toggle = document.getElementById('togglePassword');

  toggle.addEventListener('click', function () {
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
});
