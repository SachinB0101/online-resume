// resumeData.js
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
    
export default resumeData