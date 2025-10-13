// thankyou.js
const params = new URLSearchParams(window.location.search);
const name = params.get('name') || 'Guest';
const email = params.get('email') || '(no email)';
const msg = document.getElementById('message');
msg.textContent = `Thanks, ${name}! We'll send updates to ${email}.`;
