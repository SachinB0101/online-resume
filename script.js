import resumeData from './resumeData.js';
    
// Initialize the resume
document.addEventListener('DOMContentLoaded', function() {
    initializeResume();
    setupTimelineInteractions();
});

function initializeResume() {
    // Set personal information
    document.getElementById('name').textContent = resumeData.personalInfo.name;
    // document.getElementById('title').textContent = resumeData.personalInfo.title;
    document.getElementById('email').textContent = resumeData.personalInfo.contact.email
    document.getElementById('phone').textContent = resumeData.personalInfo.contact.phone
    document.getElementById('headshot').src = resumeData.personalInfo.headshot;
    
    // Set contact information
    const contactInfo = resumeData.personalInfo.contact;
    document.getElementById('contactInfo').innerHTML = `
        <p>Location: ${contactInfo.location}</p>
        <p>LinkedIn: ${contactInfo.linkedIn}</p>
        <p>Github: ${contactInfo.github}</p>
    `;
    
    // Populate employment timeline
    populateEmploymentTimeline();
    
    // Populate education
    populateEducation();

    // Populate projects
    populateProjects();
    setupProjectInteractions();
    
    // Populate skills
    populateSkills();
}

function populateEmploymentTimeline() {
    const timeline = document.getElementById('employmentTimeline');
    
    resumeData.employment.forEach(job => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-id', job.id);
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${job.date}</div>
            <div class="timeline-content">
                <h3>${job.position}</h3>
                <div class="company">${job.company}</div>
                <p>${job.description}</p>
                <div class="timeline-details">
                    <ul>
                        ${job.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

function populateEducation() {
    const educationList = document.getElementById('educationList');
    
    resumeData.education.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        
        educationItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <div class="institution">${edu.institution}</div>
            <div class="date">${edu.date} ${edu.honors ? `• ${edu.honors}` : ''}</div>
        `;
        
        educationList.appendChild(educationItem);
    });
}

// Add this new function for projects
function populateProjects() {
    const projectList = document.getElementById('projectList');
    
    resumeData.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <div class="project-date">${project.date}</div>
            <p class="project-description">${project.description}</p>
            
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <ul class="project-features">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <div class="project-links">
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link">GitHub</a>` : ''}
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>` : ''}
            </div>
        `;
        
        projectList.appendChild(projectItem);
    });
}
function setupProjectInteractions() {
    document.addEventListener('click', function(e) {
        const projectItem = e.target.closest('.project-item');
        if (projectItem) {
            const isActive = projectItem.classList.contains('active');
            
            // Close all other open projects
            document.querySelectorAll('.project-item.active').forEach(item => {
                if (item !== projectItem) item.classList.remove('active');
            });
            
            // Toggle current one
            if (!isActive) {
                projectItem.classList.add('active');
            } else {
                projectItem.classList.remove('active');
            }
        }
    });
}

function populateSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    
    for (const [category, skills] of Object.entries(resumeData.skills)) {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        skillCategory.innerHTML = `
            <h3>${category}</h3>
            <div class="skill-list">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(skillCategory);
    }
}

function setupTimelineInteractions() {
    document.addEventListener('click', function(e) {
        const timelineItem = e.target.closest('.timeline-item');
        
        if (timelineItem) {
            const details = timelineItem.querySelector('.timeline-details');
            const isActive = details.classList.contains('active');
            
            // Close all other timeline details
            document.querySelectorAll('.timeline-details.active').forEach(activeDetail => {
                if (activeDetail !== details) {
                    activeDetail.classList.remove('active');
                }
            });
            
            // Toggle current timeline details
            if (!isActive) {
                details.classList.add('active');
            } else {
                details.classList.remove('active');
            }
        }
    });
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

});
