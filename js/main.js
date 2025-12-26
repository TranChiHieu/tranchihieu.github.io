// main.js

// Fetch data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // === Hero Section ===
    const heroName = document.querySelector('.hero-title');
    const heroAvatar = document.querySelector('.hero-title-wrap img');
    const heroBio = document.querySelector('.hero-text h2');

    if (heroName) heroName.textContent = `Hello, I'm ${data.personalInfo.name}.`;
    if (heroAvatar) heroAvatar.src = data.personalInfo.avatar;
    if (heroBio) heroBio.textContent = data.personalInfo.bio;

    // === About Section ===
    const aboutName = document.querySelector('.about-thumb h3');
    if (aboutName) aboutName.textContent = data.personalInfo.name;

    // === Projects Section ===
    const projectsContainer = document.querySelector('#section_4 .row');
    if (projectsContainer) {
      // Xóa project template hiện có
      projectsContainer.innerHTML = '';

      data.projects.forEach(project => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 col-md-6 col-12';

        colDiv.innerHTML = `
          <div class="projects-thumb">
            <div class="projects-info">
              <small class="projects-tag">${project.technologies.join(', ')}</small>
              <h3 class="projects-title">${project.name}</h3>
            </div>
            <a href="${project.images[0]}" class="popup-image">
              <img src="${project.images[0]}" class="projects-image img-fluid" alt="${project.name}">
            </a>
            <p>${project.shortDescription}</p>
            <a href="${project.liveUrl}" target="_blank">Live Demo</a> |
            <a href="${project.sourceCode}" target="_blank">Source Code</a>
          </div>
        `;

        projectsContainer.appendChild(colDiv);
      });
    }
  })
  .catch(err => console.error('Error loading data.json:', err));