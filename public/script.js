// NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// HERO
document.getElementById("heroTitle").textContent = data.hero.title;
document.getElementById("heroSubtitle").textContent = data.hero.subtitle;
document.getElementById("heroLocation").textContent = data.hero.location;
document.getElementById("heroExperience").textContent = data.hero.experience;
document.getElementById("heroRole").textContent = data.hero.role;
document.getElementById("heroSummary").textContent = data.hero.summary;

document.getElementById("heroTags").innerHTML = 
  data.hero.tags.map(t => `<span class="hero-tag">${t}</span>`).join("");

// ABOUT
document.getElementById("aboutText").textContent = data.about.text;
document.getElementById("aboutHighlights").innerHTML =
  data.about.highlights.map(h => `<li>${h}</li>`).join("");

// SKILLS
document.getElementById("skillsList").innerHTML =
  data.skills.map(s => `<span class="chip">${s}</span>`).join("");

// PROJECTS
document.getElementById("projectsGrid").innerHTML =
  data.projects.map(p => `
    <div class="card">
      <h3 class="card-title">${p.title}</h3>
      <p class="card-description">${p.desc}</p>
      <div class="card-tags">
        ${p.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}
      </div>
      <a href="${p.link}" class="card-link">View Project →</a>
    </div>
  `).join("");

// EXPERIENCE
document.getElementById("experienceTimeline").innerHTML =
  data.experience.map(e => `
    <div class="timeline-item">
      <div class="timeline-date">${e.date}</div>
      <div class="timeline-card">
        <p class="timeline-role">${e.role}</p>
        <p class="timeline-company">${e.company}</p>
        <ul class="timeline-bullets">
          ${e.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");

// TESTIMONIALS
document.getElementById("testimonialsGrid").innerHTML =
  data.testimonials.map(t => `
    <div class="card">
      <p class="testimonial-quote">"${t.quote}"</p>
      <p class="testimonial-name">${t.name}</p>
      <p class="testimonial-role">${t.role}</p>
    </div>
  `).join("");

// CONTACT
document.getElementById("contactInfo").innerHTML = `
  <li><span class="contact-label">Email:</span>
      <span class="contact-value"><a href="mailto:${data.contact.email}">${data.contact.email}</a></span>
  </li>

  <li><span class="contact-label">Phone:</span>
      <span class="contact-value">${data.contact.phone}</span>
  </li>

  <li><span class="contact-label">Location:</span>
      <span class="contact-value">${data.contact.location}</span>
  </li>
`;

// FOOTER
document.getElementById("socialLinks").innerHTML =
  data.footer.socials.map(s => `
    <a class="social-link" href="${s.link}" target="_blank" rel="noopener noreferrer">
      ${s.icon}
    </a>
  `).join("");


  document.querySelectorAll('.social-icon').forEach(icon => {
  if (icon.href && icon.href !== '#') {
    icon.setAttribute('target', '_blank');
    icon.setAttribute('rel', 'noopener noreferrer');
  }
});

