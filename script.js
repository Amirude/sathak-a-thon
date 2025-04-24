const video = document.getElementById('introVideo');
const container = document.getElementById('introVideoContainer');
const content = document.getElementById('mainContent');

// Show site when video is clicked
container.addEventListener('click', () => {
  video.pause();
  container.style.display = 'none';
  content.style.display = 'block';
});

// Or show site when video ends
video.addEventListener('ended', () => {
  container.style.display = 'none';
  content.style.display = 'block';
});
// Set your event date here (YYYY-MM-DD HH:MM:SS)
    const targetDate = new Date("2025-05-01T00:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Event Started!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
    const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.5 });

items.forEach(item => observer.observe(item));
function toggleFAQ(button) {
  const content = button.nextElementSibling;
  content.classList.toggle('hidden');
}

function filterFAQ(category) {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const itemCat = item.getAttribute('data-category');
    item.style.display = category === 'all' || category === itemCat ? 'block' : 'none';
  });
}

function searchFAQs() {
  const input = document.getElementById('faqSearch').value.toLowerCase();
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('button span').textContent.toLowerCase();
    item.style.display = question.includes(input) ? 'block' : 'none';
  });
}
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  }
  
  function filterFAQ(category) {
    const items = document.querySelectorAll('.faq-item');
    document.querySelectorAll('.faq-tags button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  
    items.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      item.style.display = (category === 'all' || itemCat === category) ? 'block' : 'none';
    });
  }
  
  function searchFAQs() {
    const input = document.getElementById('faqSearch').value.toLowerCase();
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
      const text = item.querySelector('.faq-question').textContent.toLowerCase();
      item.style.display = text.includes(input) ? 'block' : 'none';
    });
  }
  



