// Sample data - Replace with your actual information
const resumeData = {
    personalInfo: {
        name: "Sachin Bhatt",
        title: "Senior Software Engineer",
        headshot: "headshot.jpg",
        contact: {
            email: "sachin1214bhatt@gmail.com",
            phone: "(204) 951-7612",
            location: "Winnipeg, Manitoba",
            linkedIn: "linkedin.com/in/johndoe"
        }
    },
    employment: [
        {
            id: 1,
            position: "Teaching & Support Assistant",
            company: "University of Manitoba",
            date: "May 2024 – August 2024",
            location: "Winnipeg, MB (Hybrid)",
            description: "Supported and mentored students in programming and software development.",
            details: [
                "Mentored over 50 first- and second-year students in algorithms, data structures, and debugging.",
                "Provided timely grading and constructive feedback on assignments and exams.",
                "Assisted students with programming in Java, Python, and C/C++, and guided best practices in Git and IDEs.",
                "Resolved software, hardware, and networking issues for effective coursework completion.",
                "Proctored exams to maintain academic integrity and a secure testing environment."
            ]
        }
    ],
    education: [
        {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Manitoba",
        date: "May 2019 – August 2024",
        location: "Winnipeg, MB",
        relevantCourses: [
            "Data Structures and Algorithms (COMP2140)",
            "Programming Practices (COMP2160)",
            "Object-Oriented Programming (COMP2150)",
            "Distributed Computing (COMP3010)",
            "Databases Concepts and Usage (COMP3380)"
        ]
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