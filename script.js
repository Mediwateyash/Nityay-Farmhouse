// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Carousel Functionality
  let currentSlide = 0;
  
  function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
  
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
  }
  
  // Auto-play the carousel (optional)
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
  
  // Gallery and Testimonials Pagination
  let galleryItems = document.querySelectorAll('.gallery-item');
  let testimonialItems = document.querySelectorAll('.testimonial-item');
  let visibleItems = 5;
  
  function showItems(items, containerId) {
    items.forEach((item, index) => {
      if (index < visibleItems) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  
    // Hide "Load More" button if all items are visible
    const loadMoreButton = document.querySelector(`#${containerId} + .load-more`);
    if (visibleItems >= items.length) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'inline-block';
    }
  }
  
  function loadMoreGallery() {
    visibleItems += 5;
    showItems(galleryItems, 'gallery-grid');
  }
  
  function loadMoreTestimonials() {
    visibleItems += 5;
    showItems(testimonialItems, 'testimonial-grid');
  }
  
  // Initial load for gallery and testimonials
  document.addEventListener('DOMContentLoaded', () => {
    showItems(galleryItems, 'gallery-grid');
    showItems(testimonialItems, 'testimonial-grid');
  });// Book Now Modal Functionality
  const bookNowModal = document.getElementById('bookNowModal');
  const closeModal = document.querySelector('.close');
  const enquiryForm = document.getElementById('enquiryForm');
  
  // Open modal when "Book Now" is clicked
  document.querySelectorAll('a[href="#booking"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      bookNowModal.style.display = 'flex';
    });
  });
  
  // Close modal when close button is clicked
  closeModal.addEventListener('click', () => {
    bookNowModal.style.display = 'none';
  });
  
  // Close modal when clicking outside the modal
  window.addEventListener('click', (e) => {
    if (e.target === bookNowModal) {
      bookNowModal.style.display = 'none';
    }
  });
  
  // Handle form submission
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const stayType = document.getElementById('stayType').value;
    const members = document.getElementById('members').value;
  
    // Create WhatsApp message
    const message = `Hello, I would like to make a booking at Nityay Farmhouse.\n\nName: ${name}\nPhone: ${phone}\nPreferred Date: ${date}\nStay Type: ${stayType}`;
  
    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
  
    // Redirect to WhatsApp
    window.location.href = `https://wa.me/918799903365?text=${encodedMessage}`;
  
    // Close modal
    bookNowModal.style.display = 'none';
  });