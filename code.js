
    // Search engine modal logic
    const form = document.getElementById('searchForm');
    const input = document.getElementById('searchInput');
    const modal = document.getElementById('engineModal');
    let searchQuery = '';
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      searchQuery = input.value.trim();
      if (searchQuery) {
        modal.classList.add('show');
      }
    });
  
    document.querySelectorAll('.engine-buttons button').forEach(button => {
      button.addEventListener('click', () => {
        const base = button.getAttribute('data-engine');
        const fullURL = base + encodeURIComponent(searchQuery);
        window.open(fullURL, '_blank');
        modal.classList.remove('show');
      });
    });
  
    // Close modal on outside click
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  
    // Custom socials logic
    const customSocialForm = document.getElementById('customSocialForm');
    const socialName = document.getElementById('socialName');
    const socialURL = document.getElementById('socialURL');
    const customSocialList = document.getElementById('customSocialList');
  
    customSocialForm?.addEventListener('submit', e => {
      e.preventDefault();
  
      const name = socialName.value.trim();
      const url = socialURL.value.trim();
      if (!name || !url) return;
  
      const icon = document.createElement('a');
      icon.href = url;
      icon.target = "_blank";
      icon.className = "icon custom";
      icon.title = name;
      icon.innerHTML = `<i class="fas fa-link"></i>`;
  
      customSocialList.appendChild(icon);
  
      socialName.value = '';
      socialURL.value = '';
    });
  
    // Layout/theme switcher logic
    const layoutSelect = document.getElementById('layoutSelect');
  
    layoutSelect?.addEventListener('change', () => {
      const value = layoutSelect.value;
      if (value === 'light') {
        document.body.style.background = '#f4f4f4';
        document.body.style.color = '#222';
      } else if (value === 'fancy') {
        document.body.style.background = 'linear-gradient(to right, #1f4037, #99f2c8)';
        document.body.style.color = '#fff';
      } else {
        document.body.style.background = 'radial-gradient(circle at top left, #1f1c2c, #928dab)';
        document.body.style.color = '#fff';
      }
    });

    // Live Clock
function updateClock() {
  const now = new Date();
  document.getElementById('liveClock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Background Themes
const bgSelector = document.getElementById('bgSelector');
const storedTheme = localStorage.getItem('selectedTheme');

const themes = {
  "sunset": "linear-gradient(to right, #f857a6, #ff5858)",
  "default": "radial-gradient(circle at top left, #1f1c2c, #928dab)",
  "blue-pink": "linear-gradient(to right, #2193b0, #6dd5ed)",
  "forest": "linear-gradient(to right, #1D976C, #93F9B9)",

};

// Apply stored theme on load
if (storedTheme && themes[storedTheme]) {
  document.body.style.background = themes[storedTheme];
  bgSelector.value = storedTheme;
  document.body.style.color = storedTheme === 'light' ? '#222' : '#fff';
}

bgSelector.addEventListener('change', () => {
  const selected = bgSelector.value;
  document.body.style.background = themes[selected];
  localStorage.setItem('selectedTheme', selected);
  document.body.style.color = selected === 'light' ? '#222' : '#fff';
});


const cursor = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.15;
  followerY += (mouseY - followerY) * 0.15;
  cursor.style.transform = `translate(${followerX - 9}px, ${followerY - 9}px)`;
  requestAnimationFrame(animateFollower);
}
animateFollower();
