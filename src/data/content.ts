
export const portfolioData = {
    personal: {
        name: "Abhishek Hulage",
        title: "Software Engineer",
        location: "Pune, Maharashtra",
        email: "hulageabhishek@gmail.com",
        phone: "+91-7558312273",
        linkedin: "https://linkedin.com/in/abhishek-hulage", // Placeholder if not known
        github: "https://github.com/rohan-hulage", // Inferred from dir
        summary: "Software Engineer eager to solve real-world problems. Passionate about building efficient, maintainable, and user-centric applications with a focus on testing and automating manual tasks to improve efficiency."
    },
    experience: [
        {
            role: "Junior Software Engineer",
            company: "Jet2 Travel Technologies Pvt Ltd.",
            period: "July 2024 - Present",
            description: [
                "Developed business applications using Power Apps.",
                "Experienced in automating complex business workflows using Power Automate, enhancing operational efficiency and reducing manual efforts.",
                "Experience in designing databases using SharePoint as a backend.",
                "Involved throughout the project lifecycle, from requirement gathering and stakeholder discussions to solution design, development, deployment, and post-implementation support."
            ]
        },
        {
            role: "Associate Software Engineer Intern",
            company: "Akrity Computing",
            period: "March 2024 - May 2024",
            description: [
                "Delivered full-cycle software development and deployment for enterprise-grade applications using Ruby, Ruby on Rails, Javascript, HTML and CSS."
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "Persistent Systems",
            period: "January 2023 - May 2023",
            description: [
                "Delivered end-to-end software development and deployment support for enterprise-grade applications, applying best practices in SDLC, testing with JUnit, and version control using Git, while strengthening skills in Java and Spring Boot frameworks."
            ]
        }
    ],
    education: [
        {
            school: "Dr. D. Y. Patil Institute of Technology, Pimpri",
            degree: "BE in Computer Engineering",
            period: "August 2019 - July 2023",
            grade: "CGPA: 8.28/10.00"
        },
        {
            school: "Residential Junior College, Ahmednagar",
            degree: "HHS",
            period: "August 2017 - March 2019",
            grade: "Percentage: 71.69%"
        }
    ],
    skills: {
        technical: [
            "Java", "JavaScript", "TypeScript", "React.js", "Node.js", "Spring Boot",
            "MySQL", "Hibernate/JPA", "AWS", "Amazon Q Business", "Copilot Agents",
            "Low Code", "Power Automate", "Power Apps", "SharePoint", "Git", "Github"
        ],
        concepts: [
            "Microservices", "Object Oriented Programming (OOP)", "CRM", "REST APIs",
            "Microsoft Dynamics 365", "SDLC", "Data Structures and Algorithms"
        ]
    },
    projects: [
        {
            title: "Bank Account Management System",
            description: "Designed and developed a full-stack banking application with Spring Boot (backend) and React with TypeScript (frontend). Implemented features like account creation, balance inquiry, fund transfers, credit/debit transactions, and transaction history retrieval. Built RESTful APIs with proper exception handling and integrated MySQL for data persistence following microservices principles. Created a responsive front-end UI using React, HTML, and CSS for seamless user interaction.",
            tech: ["Spring Boot", "Spring REST API", "Java", "MySQL", "Hibernate/JPA", "Microservices", "Maven", "React", "TypeScript", "HTML", "CSS", "Postman", "GitHub", "OOP"]
        },
        {
            title: "Marathi Biodata Generator",
            description: "Developed a responsive Biodata Generator web application using React and TypeScript, featuring real-time document preview and phonetic typing support for multiple languages. Implemented client-side PDF export functionality using html2canvas and jsPDF, ensuring high-quality, printable output directly from the browser.",
            tech: ["React.js", "TypeScript", "Vite", "jsPDF", "html2canvas", "CSS", "Responsive Web Design"]
        }
    ]
};
