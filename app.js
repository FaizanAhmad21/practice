 // Example: change navbar color when scrolled
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#084298';
      } else {
        navbar.style.backgroundColor = '#0d6efd';
      }
    });