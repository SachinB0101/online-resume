const resumeData = {
    personalInfo: {
        name: "Sachin Bhatt",
        title: "Senior Software Engineer",
        headshot: "headshot.jpg",
        contact: {
            email: "sachin.bhatt0101@gmail.com",
            phone: "(204) 951-7612",
            location: "Winnipeg, Manitoba",
            linkedIn: "linkedin.com/in/sachin-bhatt-5333b7217",
            github: "github.com/SachinB0101"
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

    projects: [
        {
            id: 1,
            title: "Event Announcement Service",
            description: "A full-stack serverless event notification service enabling user subscriptions and event publishing using AWS.",
            technologies: ["AWS CloudFront", "API Gateway", "Lambda", "DynamoDB", "SNS", "S3", "CodePipeline"],
            features: [
                "Developed a fully serverless event notification platform supporting user subscriptions and event creation.",
                "Implemented REST APIs to subscribe users, create events, and fetch existing events.",
                "Utilized DynamoDB with TTL for automatic data cleanup and SNS for real-time notifications.",
                "Deployed frontend using CloudFront CDN with automated CI/CD via CodePipeline."
            ],
            githubUrl: "https://github.com/SachinB0101/event-announcement-project",
            liveUrl: "https://d3lnqu8pzyn695.cloudfront.net",
            date: "2024"
        },
        {
            id: 2,
            title: "Cloud Dictionary Application",
            description: "A serverless cloud terminology dictionary with search, autocomplete, and efficient backend lookups.",
            technologies: ["React", "AWS Amplify", "Lambda", "DynamoDB", "API Gateway"],
            features: [
                "Built a cloud technology dictionary application with responsive UI and term search.",
                "Implemented efficient autocomplete search using a 500ms debounce.",
                "Created backend using Lambda + API Gateway; DynamoDB stores definitions.",
                "Supports batch data upload for large-scale bulk insertion."
            ],
            githubUrl: "https://github.com/SachinB0101/serverless-cloud-dictionary",
            liveUrl: "https://main.d1utiqi17bjp3v.amplifyapp.com",
            date: "2024"
        },
        {
            id: 3,
            title: "Task Management App (Android)",
            description: "An Android application to manage daily tasks with add, edit, and completion features using modern Android components.",
            technologies: ["Kotlin", "Room Database", "SharedPreferences", "XML (Android Layouts)"],
            features: [
                "Designed and implemented a task management app with task creation, editing, and completion tracking.",
                "Integrated Room Database for persistent local data storage.",
                "Used SharedPreferences for efficient user data handling and preferences.",
                "Created intuitive XML-based layouts leveraging Android’s modern UI components."
            ],
            githubUrl: "https://github.com/SachinB0101/Get-It-Done-App",
            liveUrl: "",
            date: "2024"
        },
        {
            id: 4,
            title: "Note Management Website (Full Stack)",
            description: "A secure full-stack note management platform with user authentication, enabling users to store and retrieve notes efficiently.",
            technologies: ["React", "Node.js", "MongoDB Atlas"],
            features: [
                "Developed a full-stack note management application with user authentication and authorization.",
                "Built a responsive React.js front-end for an improved and dynamic user experience.",
                "Implemented RESTful APIs in Node.js for backend functionality.",
                "Integrated MongoDB Atlas for scalable and cloud-based data storage."
            ],
            githubUrl: "https://github.com/SachinB0101/keeperApp",
            liveUrl: "",
            date: "2024"
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
