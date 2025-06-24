document.addEventListener('DOMContentLoaded', () => {
  const promises = [
    fetch('/website/pages/header.html')
      .then(res => res.text())
      .then(html => document.getElementById('header').innerHTML = html),

    fetch('/website/pages/footer.html')
      .then(res => res.text())
      .then(html => document.getElementById('footer').innerHTML = html)
  ];

  // Conditionally include special section only on about.html
  if (window.location.pathname.endsWith('general-inquiry.html')) {
    promises.push(
      fetch('/website/pages/general-inquiry-form.html')
        .then(res => res.text())
        .then(html => {
          const container = document.getElementById('general-inquiry-form');
          if (container) container.innerHTML = html;
        })
    );
  }

  if (window.location.pathname.endsWith('enterprise-inquiry.html')) {
    promises.push(
      fetch('/website/pages/enterprise-inquiry-form.html')
        .then(res => res.text())
        .then(html => {
          const container = document.getElementById('enterprise-inquiry-form');
          if (container) container.innerHTML = html;
        })
    );
  }

  Promise.all(promises).then(() => {
    document.body.classList.add('fade-in');
  });
});
