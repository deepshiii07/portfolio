// ---------- DATA (edit this single object to update content) ----------
const portfolioData = {
  pageTitle: "Deepshikha Bhardwaj — Portfolio",
  name: "Deepshikha Bhardwaj",
  logoText: "DB",
  role: "Software Developer",
  kicker: "Aspiring software developer",
  heroLead: "I write Java backends and ship dependable features. I pair clean APIs with purposeful UIs and automated tests.",
  contact: {
    email: "bhardwajdeepshikha50@gmail.com",
    location: "Kolkata",
    github: "https://github.com/deepshiii07",
    linkedin: "https://www.linkedin.com/in/bhardwajdeepshikha50/"
  },
  profileImage: "assets/certs/profile.jpg",
  skills: [
    "Java","Spring Boot","MySQL","React","Testing","HTML","CSS","Bootstrap",
    "API Design","Postman","Git","SQL","REST","Maven",
    "Data Structures","Algorithms"
  ],
  aboutShort: "Aspiring dev with internship experience, product modules, and a testing-first approach.",
  whatIDo: {
    title: "What I do",
    description: "I design APIs, build backend modules (Java + Spring Boot), and create clean frontends. I care about test coverage and shipping stable features.",
    tags: ["Backend Development","API Design","Integration Testing","Frontend UIs","CI/CD basics"]
  },
  highlights: {
    title: "Highlights",
    bullets: [
      "Interned at Codezeal — shipped frontend + Java/SQL registration module",
      "Built StockWise product & user modules",
      "Comfortable with Postman, Git, and deployment"
    ]
  },
  projects: [
    {
      title: "StockWise",
      description: "Inventory assistant for small businesses — product & user modules and planned AI suggestions.",
      tags: ["Java","Spring Boot","MySQL"],
      repo: "https://github.com/deepshiii07/stockwise-backend"
    },
    {
      title: "RoomieSync",
      description: "Roommate matching app — preference algorithm, profile matching and search flows.",
      tags: ["Spring Boot","React"],
      repo: "https://github.com/deepshiii07/RoomieSync"
    },
    {
      title: "Mini Projects",
      description: "Small utilities: calculator, music player, link saver — practice projects to master UI and JS logic.",
      tags: ["HTML","JavaScript"],
      repo: "https://github.com/deepshiii07/mini-projects"
    }
  ],

  // --- certificates updated: replaced CyberSecurity with sih.jpg ---
  certifications: [
    { title: "Product Management", issuer: "IIT Guwahati E-Cell", img: "assets/certs/product-management.jpg", link: "assets/certs/product-management.jpg" },
    { title: "Google Android Developer", issuer: "Eduskills", img: "assets/certs/google-android.jpg", link: "assets/certs/google-android.jpg" },
    { title: "Smart India Hackathon — Internal Round Clearance", issuer: "SIH", img: "assets/certs/sih.jpg", link: "assets/certs/sih.jpg" },
    { title: "Web Development", issuer: "Codezeal Pvt. Ltd.", img: "assets/certs/web-dev-codezeal.jpg", link: "assets/certs/web-dev-codezeal.jpg" },
    { title: "Deloitte Job Stimulation", issuer: "Deloitte", img: "assets/certs/deloitte-simulation.jpg", link: "assets/certs/deloitte-simulation.jpg" }
  ],

  education: [
    {
      title: "B.Tech in CSE",
      org: "Narula Institute of Technology",
      period: "2024–2027"
    },
    {
      title: "Diploma in CSE",
      org: "Rajkamal Saraswati Vidyamandir",
      period: "2021–2024"
    },
    {
      title: "School (Matriculation)",
      org: "Rajkamal Saraswati Vidyamandir",
      period: "2019–2021"
    }
  ]
};

// ----------------- rendering logic -----------------
document.addEventListener('DOMContentLoaded', () => {
  // page title
  document.title = portfolioData.pageTitle || document.title;

  // header
  document.getElementById('logoText').textContent = portfolioData.logoText;
  document.getElementById('nameTitle').textContent = portfolioData.name;
  document.getElementById('roleTitle').textContent = portfolioData.role;

  // hero
  document.getElementById('kicker').textContent = portfolioData.kicker;
  document.getElementById('heroName').textContent = portfolioData.name;
  document.getElementById('heroLead').textContent = portfolioData.heroLead;

  // profile
  document.getElementById('profileName').textContent = portfolioData.name;
  document.getElementById('profileRole').textContent = portfolioData.role;
  const img = document.getElementById('profileImg');
  img.src = portfolioData.profileImage;
  img.onerror = () => img.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder';

  // meta list (email, location, + TOP socials)
  const metaList = document.getElementById('metaList');
  metaList.innerHTML = `
    <li><strong>Email</strong> <a href="mailto:${portfolioData.contact.email}" id="topEmail">${portfolioData.contact.email}</a></li>
    <li><strong>Location</strong> <span id="topLocation">${portfolioData.contact.location || ''}</span></li>
    <li class="top-socials">
      <a id="topGithub" class="social-top" href="${portfolioData.contact.github || '#'}" target="_blank" rel="noopener">
        <svg class="social-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.77 2.68 1.26 3.33.96.1-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.17a11.02 11.02 0 0 1 5.79 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.6.23 2.78.11 3.07.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.68.41.35.77 1.04.77 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.21.66.79.55C20.71 21.41 24 17.09 24 12 24 5.65 18.35.5 12 .5z" fill="currentColor"/></svg>
        GitHub
      </a>
      <a id="topLinkedIn" class="social-top" href="${portfolioData.contact.linkedin || '#'}" target="_blank" rel="noopener">
        <svg class="social-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.86v5.49H9.43V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.52v6.22zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" fill="currentColor"/></svg>
        LinkedIn
      </a>
    </li>
  `;

  // skills
  const skillCloud = document.getElementById('skillCloud');
  skillCloud.innerHTML = '';
  (portfolioData.skills || []).forEach(s=>{
    const sp = document.createElement('span'); sp.textContent = s; skillCloud.appendChild(sp);
  });

  // about
  document.getElementById('aboutShort').textContent = portfolioData.aboutShort || '';
  const what = document.getElementById('cardWhatIDo');
  what.innerHTML = `<h3>${portfolioData.whatIDo.title}</h3><p>${portfolioData.whatIDo.description}</p><div class="mini-tags">${(portfolioData.whatIDo.tags||[]).map(t=>`<span>${t}</span>`).join('')}</div>`;
  const highlights = document.getElementById('cardHighlights');
  highlights.innerHTML = `<h3>${portfolioData.highlights.title}</h3><ul>${(portfolioData.highlights.bullets||[]).map(b=>`<li class="muted">${b}</li>`).join('')}</ul>`;

  // projects
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = '';
  (portfolioData.projects || []).forEach(p=>{
    const card = document.createElement('article'); card.className = 'project-card';
    card.innerHTML = `
      <div>
        <div class="pc-top">
          <div class="pc-tag">Project</div>
          <h3>${p.title}</h3>
        </div>
        <p class="muted">${p.description}</p>
      </div>
      <div class="pc-footer">
        <div class="tags">${(p.tags||[]).map(t=>`<span>${t}</span>`).join('')}</div>
        <a class="view-pill" href="${p.repo || '#'}" target="_blank" rel="noopener">View →</a>
      </div>
    `;
    projectsGrid.appendChild(card);

    if (p.repo && p.repo !== '#') {
      card.addEventListener('click', (e)=>{ if(e.target.tagName.toLowerCase() === 'a') return; window.open(p.repo, '_blank','noopener'); });
      card.style.cursor = 'pointer';
    }
  });

  // certificates (thumbnail + view + download)
  const certGrid = document.getElementById('certGrid');
  certGrid.innerHTML = '';
  (portfolioData.certifications || []).forEach(c=>{
    const el = document.createElement('div'); el.className = 'cert-card';

    // thumbnail
    const thumb = document.createElement('img');
    thumb.className = 'cert-thumb';
    thumb.src = c.img || '';
    thumb.alt = `${c.title} — ${c.issuer}`;
    thumb.onerror = () => { thumb.style.display = 'none'; };

    // body
    const body = document.createElement('div');
    body.className = 'cert-body';
    body.innerHTML = `
      <div class="cert-title">${c.title}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-actions">
        ${ (c.link && c.link !== '#') ? `<a href="${c.link}" target="_blank" rel="noopener">View</a>` : `<span class="muted">No link</span>` }
        ${ (c.link && c.link !== '#') ? `<a href="${c.link}" download>Download</a>` : '' }
      </div>
    `;

    el.appendChild(thumb);
    el.appendChild(body);

    if (c.link && c.link !== '#') {
      el.style.cursor = 'pointer';
      el.addEventListener('click', (ev) => {
        if (ev.target.tagName.toLowerCase() === 'a') return;
        window.open(c.link, '_blank', 'noopener');
      });
    }

    certGrid.appendChild(el);
  });

  // education combined
  const educationCombined = document.getElementById('educationCombined');
  educationCombined.innerHTML = (portfolioData.education || []).map(e=>`
    <div class="edu-item" role="listitem">
      <div class="edu-year">${e.period}</div>
      <div class="edu-content"><div class="title">${e.title}</div><div class="org">${e.org}</div></div>
    </div>
  `).join('');

  // contact form -> mailto
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent('Portfolio message from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
  });
  document.getElementById('emailBtn').addEventListener('click', ()=>{ window.location.href = `mailto:${portfolioData.contact.email}`; });

  // reveal on scroll
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(n => obs.observe(n));

  // tilt for project cards
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; const y = e.clientY - rect.top;
      const rx = ((y - rect.height/2) / rect.height) * 6;
      const ry = ((x - rect.width/2) / rect.width) * -8;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
  });

  // ensure external links have noopener
  document.querySelectorAll('a[target="_blank"]').forEach(a=>a.setAttribute('rel','noopener'));
});
