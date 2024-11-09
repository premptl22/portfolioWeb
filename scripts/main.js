// Add JavaScript for interactivity like form validation or testimonial slider
document.addEventListener('DOMContentLoaded', () => {
    // Example: Adding form validation on submit
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields!');
            e.preventDefault();
        }
    });
});
