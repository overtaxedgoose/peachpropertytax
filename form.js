// Submits the free-review form to its Google Form in the background and shows
// a thank-you panel in its place. Without fetch, the form posts normally.
(function () {
  var form = document.querySelector('.review-form');
  if (!form || !window.fetch || !window.URLSearchParams) return;
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    fetch(form.action, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(new FormData(form)) })
      .then(function () {
        var done = document.createElement('div');
        done.className = 'review-done';
        done.innerHTML = '<h3>Thanks. We have your request.</h3><p>We will pull the record and reply within two business days. Prefer to talk in the meantime? <a href="mailto:hello@peachpropertytax.com">hello@peachpropertytax.com</a></p>';
        form.replaceWith(done);
      })
      .catch(function () {
        btn.disabled = false;
        btn.textContent = 'Request my free review';
        form.submit();
      });
  });
})();
