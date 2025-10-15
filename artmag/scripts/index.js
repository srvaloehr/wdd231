
import { initNav } from './nav.js'; 
// short script: persist name to localStorage from form submission
const form = document.getElementById('signup');
if (form) {
  form.addEventListener('submit', (e) => {
    // allow native validation to run; no preventDefault so /thankyou.html receives params
    const name = form.name.value.trim();
    if (name) localStorage.setItem('artmag_user', name);
  });
}
