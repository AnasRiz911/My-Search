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
  sunset: 'linear-gradient(to right, #ff7e5f, #feb47b)',
  default: '#888888',
  'blue-pink': 'linear-gradient(to right, #2193b0, #ff6e7f)',
  forest: 'linear-gradient(to right, #005C4B, #0f9b0f)',
  dark: '#1a1a1a',
  pitchblack: '#000000',
  pastel: 'linear-gradient(to right, #a18cd1, #fbc2eb)',
  midnight: 'linear-gradient(to right, #232526, #414345)',
  aqua: 'linear-gradient(to right, #13547a, #80d0c7)',
  ocean: 'linear-gradient(to right, #2b5876, #4e4376)',
  lava: 'linear-gradient(to right, #ff4e50, #f9d423)',
  peach: 'linear-gradient(to right, #ed4264, #ffedbc)',
  candy: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
  ice: 'linear-gradient(to right, #83a4d4, #b6fbff)',
  berry: 'linear-gradient(to right, #8e2de2, #4a00e0)',
  neon: 'linear-gradient(to right, #00c6ff, #0072ff)',
  vintage: 'linear-gradient(to right, #e0c3fc, #8ec5fc)'
};


    bgSelector.addEventListener('change', () => {
    const selected = bgSelector.value;
    document.body.style.background = themes[selected] || '#000';
  });


  // Apply saved theme on load
const savedTheme = localStorage.getItem('selectedTheme');
if (savedTheme && themes[savedTheme]) {
  bgSelector.value = savedTheme;
  document.body.style.background = themes[savedTheme];
}

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