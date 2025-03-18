document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.carousel-item');
    let index = 0;
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }
    function showNextItem() {
        items[index].classList.remove('active');
        index = (index + 1) % items.length;
        items[index].classList.add('active');
    }

    setInterval(showNextItem, 3000); // Change item every 3 seconds
});
// JavaScript for Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('property-details');
    const viewDetailsLinks = document.querySelectorAll('.view-details');
    const closeButton = document.querySelector('.close-button');

    viewDetailsLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            modal.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.gallery-slider img');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    showSlide(slideIndex);
});

// Google Maps Integration (Placeholder)
function initMap() {
    const map = new google.maps.Map(document.getElementById("google-map"), {
        center: { lat: 37.7749, lng: -122.4194 }, // Example coordinates
        zoom: 10
    });
}

// Load the Google Maps script
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
document.head.appendChild(script);

// JavaScript for Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(panel => panel.style.display = 'none');

            tab.classList.add('active');
            const panel = document.getElementById(tab.getAttribute('data-tab'));
            panel.style.display = 'block';
        });
    });
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        Swal.fire("Error", "Please fill in all fields", "error");
        return;
    }

    Swal.fire("Thank You!", "Thanks for contacting us!", "success");
    document.getElementById("contactForm").reset();
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim(),
        password = document.getElementById("password").value.trim();

    if (!email || !password || !validateEmail(email) || password.length < 6) {
        Swal.fire("Error!", !email || !password ? "All fields are required!" : !validateEmail(email) ? "Enter a valid email address!" : "Password must be at least 6 characters!", "error");
        return;
    }

    Swal.fire("Success!", "Login successful!", "success");
    document.getElementById("login-form").reset();
});

const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
