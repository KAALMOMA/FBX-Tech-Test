document.addEventListener('DOMContentLoaded', () => {
  fetch('/website/json/courses.json')
    .then(res => res.json())
    .then(courses => {
      const container = document.getElementById('courses-container');

      courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';

        // Course Title with Link
        const titleDiv = document.createElement('div');
        titleDiv.className = 'course-title';
        titleDiv.innerHTML = `
          <a class="course-anchor" href="${course.link}" target="_blank">
            ${course.title}
            <img class="icon-external-link" src="/website/images/icon-external-link0.svg" />
          </a>
        `;
        courseDiv.appendChild(titleDiv);

        // Subtitle
        const subtitle = document.createElement('div');
        subtitle.className = 'course-subtitle';
        subtitle.textContent = course.subtitle;
        courseDiv.appendChild(subtitle);

        // Colored Divider (optional)
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-div-small';
        courseDiv.appendChild(colorDiv);

        // Sections (e.g., Assembly, Programming)
        course.sections.forEach(section => {
          const sectionTitle = document.createElement('div');
          sectionTitle.className = 'subsection';
          sectionTitle.textContent = section.name;
          courseDiv.appendChild(sectionTitle);

          const modulesContainer = document.createElement('div');
          modulesContainer.className = 'modules';

          section.modules.forEach(module => {
            const moduleDiv = document.createElement('a');
            moduleDiv.className = 'module';
            moduleDiv.href = module.link;
            moduleDiv.target = '_blank';

            const gear = document.createElement('img');
            gear.className = 'gear';
            gear.src = '/website/images/gear.png';

            const moduleTitle = document.createElement('div');
            moduleTitle.className = 'module-title';
            moduleTitle.textContent = module.title;

            const linkIcon = document.createElement('div');
            linkIcon.innerHTML = `<img class="icon-external-link" src="/website/images/icon-external-link0.svg" />`;

            moduleDiv.appendChild(gear);
            moduleDiv.appendChild(moduleTitle);
            moduleDiv.appendChild(linkIcon);

            modulesContainer.appendChild(moduleDiv);
          });

          courseDiv.appendChild(modulesContainer);
        });

        container.appendChild(courseDiv);
      });
    })
    .catch(err => console.error('Error loading courses:', err));
});
