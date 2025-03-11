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
  });