document.querySelectorAll('.card__inner').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });