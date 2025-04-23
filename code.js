
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