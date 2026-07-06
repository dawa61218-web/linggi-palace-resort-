// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            navMenu.style.display = 'none'; // Close menu on mobile
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = bookingForm.querySelector('input[type="text"]').value;
        const email = bookingForm.querySelector('input[type="email"]').value;
        const phone = bookingForm.querySelector('input[type="tel"]').value;
        
        // Simple validation
        if (name && email && phone) {
            // Show success message
            alert(`Thank you, ${name}! Your booking request has been received. We will contact you shortly at ${phone}.\n\nOr call us directly: +91-8415076121`);
            
            // Reset form
            bookingForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Room Button Click Handler
const roomButtons = document.querySelectorAll('.room-btn');
roomButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Please use the booking form below to make a reservation or call us at +91-8415076121');
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
const cards = document.querySelectorAll('.room-card, .amenity-card, .stat, .contact-card');
cards.forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Navbar Active Link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active styling
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #e74c3c !important;
        border-bottom: 2px solid #e74c3c;
    }
`;
document.head.appendChild(style);

// Initialize on page load
window.addEventListener('load', () => {
    console.log('Linggi Palace Resort website loaded successfully!');
    console.log('Available sections: Home, About, Rooms, Amenities, Location, Contact');
    console.log('For bookings, call: +91-8415076121');
});