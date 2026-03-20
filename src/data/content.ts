export const portfolioData = {
    personal: {
        name: "Abhishek Hulage",
        title: "Software Engineer",
        location: "Pune, Maharashtra",
        email: "hulageabhishek@gmail.com",
        phone: "+91-7558312273",
        linkedin: "https://linkedin.com/in/abhishek-hulage",
        github: "https://github.com/rohan-hulage",
        summary: "Software Engineer with experience in building enterprise applications. Skilled in Java, Spring Boot, REST API development, and microservices architecture, along with experience in AI-driven automation using Copilot Agents and Amazon Q Business. Passionate about building scalable backend systems and leveraging AI to automate business workflows and improve productivity."
    },
    experience: [
        {
            role: "Junior Software Engineer",
            company: "Jet2 Travel Technologies Pvt Ltd.",
            period: "July 2024 - Present",
            description: [
                "Developed enterprise business applications using Power Apps to support internal operations and streamline business processes.",
                "Automated complex workflows using Power Automate, significantly reducing manual tasks and improving operational efficiency.",
                "Built and experimented with Copilot agents, Amazon Q Business and AI-driven assistants to enable enterprise knowledge search and to automate knowledge retrieval.",
                "Participated in the complete software development lifecycle (SDLC) including requirement gathering, solution design, development, testing, deployment, and post-implementation support."
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "Persistent Systems",
            period: "January 2023 - May 2023",
            description: [
                "Contributed to backend development using Java and Spring Boot, implementing REST APIs for enterprise applications.",
                "Strengthened backend development practices using JUnit for testing and Git for version control. Collaborated with development teams in an Agile environment, following standard SDLC practices."
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
        backend: [
            "Java", "Spring Boot", "Spring MVC", "Hibernate/JPA", "REST APIs", "Microservices", 
            "OOP", "MySQL", "React", "TypeScript", "HTML", "CSS"
        ],
        cloudAi: [
            "AWS", "Copilot Agents", "Amazon Q Business", "Power Apps", "Power Automate", 
            "SharePoint", "Microsoft Dynamics 365"
        ],
        tools: [
            "Git", "GitHub", "Maven", "Gradle", "CI/CD", "Azure DevOps", "JSON", "Kafka", 
            "SDLC", "API Integration"
        ]
    },
    projects: [
        {
            title: "Bank Account Management System",
            description: "Designed and developed a full-stack banking application with Spring Boot (backend) and React with TypeScript (frontend). Implemented features like account creation, balance inquiry, fund transfers, credit/debit transactions, and transaction history retrieval. Built RESTful APIs with proper exception handling and integrated MySQL for data persistence following microservices principles. Created a responsive front-end UI using React, HTML, and CSS for seamless user interaction.",
            tech: ["Spring Boot", "Spring REST API", "Java", "MySQL", "Hibernate/JPA", "Microservices", "Maven", "React", "TypeScript", "HTML", "CSS", "Postman", "GitHub", "OOP"],
            link: ""
        },
        {
            title: "Marathi Biodata Generator",
            description: "Developed a responsive Biodata Generator web application using React and TypeScript, featuring real-time document preview and phonetic typing support for multiple languages. Implemented client-side PDF export functionality using html2canvas and jsPDF, ensuring high-quality, printable output directly from the browser.",
            tech: ["React.js", "TypeScript", "Vite", "jsPDF", "html2canvas", "CSS", "Responsive Web Design"],
            link: "https://marathi-biodata.vercel.app/"
        }
    ]
};
