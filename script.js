// Sample data - Replace with your actual information
const resumeData = {
    personalInfo: {
        name: "John Doe",
        title: "Senior Software Engineer",
        headshot: "headshot.jpg",
        contact: {
            email: "john.doe@example.com",
            phone: "(555) 123-4567",
            location: "San Francisco, CA",
            linkedIn: "linkedin.com/in/johndoe"
        }
    },
    employment: [
        {
            id: 1,
            position: "Senior Software Engineer",
            company: "Tech Innovations Inc.",
            date: "2020 - Present",
            description: "Lead development of enterprise-scale web applications",
            details: [
                "Led a team of 5 developers in building scalable microservices architecture",
                "Reduced application load time by 40% through performance optimization",
                "Implemented CI/CD pipelines reducing deployment time by 60%",
                "Mentored junior developers and conducted code reviews"
            ]
        },
        {
            id: 2,
            position: "Software Engineer",
            company: "Digital Solutions LLC",
            date: "2017 - 2020",
            description: "Full-stack web development for client projects",
            details: [
                "Developed responsive web applications using React and Node.js",
                "Collaborated with UX designers to implement user-friendly interfaces",
                "Integrated third-party APIs and payment processing systems",
                "Improved application performance by 25% through code optimization"
            ]
        },
        {
            id: 3,
            position: "Junior Developer",
            company: "StartUp Ventures",
            date: "2015 - 2017",
            description: "Front-end development and UI implementation",
            details: [
                "Built responsive websites using HTML5, CSS3, and JavaScript",
                "Worked with design team to implement pixel-perfect layouts",
                "Assisted in debugging and troubleshooting application issues",
                "Participated in agile development processes and sprint planning"
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Technology",
            date: "2011 - 2015",
            honors: "Magna Cum Laude"
        },
        {
            degree: "AWS Certified Solutions Architect",
            institution: "Amazon Web Services",
            date: "2020",
            honors: ""
        }
    ],
    skills: {
        "Programming Languages": ["JavaScript", "Python", "Java", "TypeScript"],
        "Frameworks & Libraries": ["React", "Node.js", "Express", "Vue.js", "Angular"],
        "Tools & Technologies": ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Jenkins"],
        "Certifications": ["AWS Solutions Architect", "Scrum Master", "Google Cloud Professional"]
    }
};

// Initialize the resume
document.addEventListener('DOMContentLoaded', function() {
    initializeResume();
    setupTimelineInteractions();
});

function initializeResume() {
    // Set personal information
    document.getElementById('name').textContent = resumeData.personalInfo.name;
    document.getElementById('title').textContent = resumeData.personalInfo.title;
    document.getElementById('headshot').src = resumeData.personalInfo.headshot;
    
    // Set contact information
    const contactInfo = resumeData.personalInfo.contact;
    document.getElementById('contactInfo').innerHTML = `
        <p>Email: ${contactInfo.email}</p>
        <p>Phone: ${contactInfo.phone}</p>
        <p>Location: ${contactInfo.location}</p>
        <p>LinkedIn: ${contactInfo.linkedIn}</p>
    `;
    
    // Populate employment timeline
    populateEmploymentTimeline();
    
    // Populate education
    populateEducation();
    
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