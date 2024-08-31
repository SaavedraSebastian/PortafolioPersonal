document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = this.getAttribute('data-url');
    });
});
