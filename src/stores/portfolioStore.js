import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    locale: localStorage.getItem("locale") || "en", // default to English
    theme: localStorage.getItem("theme") || "dark",
    activeSection: "hero",
    projectFilter: "all",
    activeSkillCategory: "languages",

    skillCategoriesList: [
      {
        id: "languages",
        labels: { en: "Languages", vi: "Ngôn ngữ" },
        icon: "💻",
        skills: [
          {
            name: "Java",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          },
          {
            name: "TypeScript",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          },
          {
            name: "JavaScript",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          },
          {
            name: "Python",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          },
          {
            name: "SQL",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          },
        ],
      },
      {
        id: "backend",
        labels: { en: "Backend & Frameworks", vi: "Backend & Frameworks" },
        icon: "⚙️",
        skills: [
          {
            name: "Spring Boot",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
          },
          {
            name: "Frappe",
            level: 80,
            logo: "https://cdn.simpleicons.org/frappe/0089FF",
          },
          {
            name: "Node.js",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "REST APIs",
            level: 90,
            logo: "https://cdn.simpleicons.org/postman/FF6C37",
          },
          {
            name: "WebSocket",
            level: 70,
            logo: "https://cdn.simpleicons.org/websocket/62B5E5",
          },
        ],
      },
      {
        id: "frontend",
        labels: { en: "Frontend Development", vi: "Frontend" },
        icon: "🎨",
        skills: [
          {
            name: "React",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          },
          {
            name: "Next.js",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
          },
          {
            name: "Tailwind CSS",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          },
          {
            name: "HTML5/CSS3",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          },
        ],
      },
      {
        id: "database",
        labels: { en: "Databases & Storage", vi: "Cơ sở dữ liệu" },
        icon: "🗄️",
        skills: [
          {
            name: "PostgreSQL",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          },
          {
            name: "MySQL",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          },
          {
            name: "SQL Server",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
          },
          {
            name: "Redis",
            level: 70,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
          },
        ],
      },
      {
        id: "devops",
        labels: { en: "DevOps & Tools", vi: "DevOps & Công cụ" },
        icon: "🛠️",
        skills: [
          {
            name: "Docker",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          },
          {
            name: "Git",
            level: 90,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          },
          {
            name: "GitHub Actions",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
          },
          {
            name: "Linux",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
          },
          {
            name: "Nginx",
            level: 70,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
          },
        ],
      },
      {
        id: "exploring",
        labels: { en: "Currently Exploring", vi: "Đang mở rộng & Nghiên cứu" },
        icon: "🧠",
        skills: [
          {
            name: "Data Science & ML",
            level: 70,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
          },
          {
            name: "Rust",
            level: 60,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
          },
          {
            name: "Agentic AI & Automation",
            level: 70,
            logo: "https://cdn.simpleicons.org/openai/10A37F",
          },
          {
            name: "Distributed Systems",
            level: 65,
            logo: "https://cdn.simpleicons.org/apachekafka/white",
          },
        ],
      },
    ],

    en: {
      personal: {
        name: "Trần Văn Huy",
        title: "Software Developer",
        taglines: [
          "Software Developer",
          "Backend & Full-Stack Engineer",
          "Applied AI & Agentic Solutions",
          "Java Spring Boot & Next.js"
        ],
        bio: "Software Developer building scalable web, backend, and mobile systems with a strong focus on Data Science, Machine Learning, and Applied AI.",
        bio2: "Experienced in building robust backend architectures with Java (Spring Boot), enterprise workflows with Python (Frappe), modern frontends with React & Next.js, and integrating Agentic AI to automate business processes.",
        objective:
          "To deliver reliable, high-impact software systems as a Software Engineer, combining clean backend architecture with practical, data-driven automation.",
        location: "Da Nang, Vietnam",
        email: "tranvanhuy064206@gmail.com",
        availability: "Software Developer Intern @ Digital Twin Group (MakeAI)",
        avatar: "",
        cv: "/cv.pdf",
        socials: {
          github: "https://github.com/tranvanhuy-dev-it",
          linkedin: "https://www.linkedin.com/in/huy-tran-van-5753b13b4",
          facebook: "https://facebook.com/tranvanhuy260306",
        },
      },
      stats: [
        { value: "AI & DS", label: "Focus Area" },
        { value: "5+", label: "Projects Completed" },
        { value: "15+", label: "Technologies Used" },
        { value: "100%", label: "Passion & Creativity" },
      ],
      whatIBuild: [
        {
          icon: "🌐",
          title: "Full-Stack Web Applications",
          desc: "Modern, reactive interfaces and performant frontend architectures with React, Next.js, and Vue.",
          tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
        },
        {
          icon: "⚙️",
          title: "Scalable Backend Systems",
          desc: "RESTful APIs, authentication workflows, clean architecture, and real-time communications.",
          tags: ["Java (Spring Boot)", "Python (Frappe)", "Node.js", "PostgreSQL", "Redis"]
        },
        {
          icon: "📱",
          title: "Cross-Platform Mobile Apps",
          desc: "Hybrid applications packaged for responsive and high-performance mobile deployment.",
          tags: ["Capacitor", "Vue / React", "Mobile First"]
        },
        {
          icon: "🗺️",
          title: "GIS & Digital Transformation",
          desc: "Interactive spatial data platforms (2D/3D maps) and enterprise process automation.",
          tags: ["2D/3D Maps", "Frappe", "Process Digitization"]
        },
        {
          icon: "🤖",
          title: "Data & AI Systems",
          desc: "Data analysis pipelines and agentic AI-driven tools to automate enterprise workflows.",
          tags: ["Agentic AI (OpenClaw)", "Python", "Pandas", "NumPy"]
        }
      ],
      projects: [
        {
          id: 5,
          title: "Boarding House Management System",
          description:
            "A multi-platform system for renting, management, billing, and communication, designed for landlords and tenants.",
          longDesc:
            "A full-featured multi-platform boarding house (Quản lý phòng trọ) management system. It provides role-based access control for admins, landlords, and tenants. Key capabilities include Google OAuth2 authentication, automated invoice generation with PDF/Excel reports, real-time tenant-landlord chat via WebSockets, and room status dashboards. The mobile app is packaged using Capacitor.",
          tags: [
            "Java",
            "Spring Boot",
            "Vue 3",
            "Capacitor",
            "WebSocket",
            "PostgreSQL",
          ],
          category: "fullstack",
          time: "06-2026",
          github: "https://github.com/tranvanhuy-dev-it/QLPT_VUE_FE.git",
          githubBackend: "https://github.com/tranvanhuy-dev-it/QLPT_JAVA_BE.git",
          demo: "#",
          video:
            "https://drive.google.com/drive/folders/1pMhWNV0MlMn5DsGgoY7uKyaGYdRp9qo3?usp=sharing",
          image: "/qlpt.png",
          featured: true,
          role: "A personal project I built entirely on my own, from initial design through deployment.",
          responsibilities: [
            "Designed the database schema",
            "Designed & developed the backend (Spring Boot)",
            "Deployed and configured the system on a cloud server",
            "Integrated third-party services: Google OAuth2, PayOS, Email",
            "Designed the user interface (Web & Mobile)",
          ],
        },
        {
          id: 6,
          title: "BIMspace - Technical Infrastructure Management",
          description:
            "A technical infrastructure management system applying interactive 3D and 2D maps to manage assets and infrastructure operations.",
          longDesc:
            "A digital solution built at Digital Twin Group (MakeAI) to manage technical infrastructure using interactive 3D and 2D maps. The system enables asset visualization and tracking on the map, and manages the operational workflows (maintenance, monitoring, inspection) related to technical infrastructure.",
          tags: ["JavaScript", "Frappe", "React.js", "Python", "PostgreSQL"],
          category: "fullstack",
          time: "05-2026",
          demo: "#",
          image: "/bimspace.png",
          featured: true,
          internal: true,
          role: "A key project I lead at Digital Twin Group (MakeAI) as the primary developer, building on top of an existing codebase.",
          responsibilities: [
            "Developed frontend features on top of the existing codebase",
            "Developed backend features on top of the existing codebase",
            "Redesigned the user interface",
          ],
        },
        {
          id: 7,
          title: "Public Investment Management System",
          description:
            "A system that digitizes the 10-step public investment workflow and integrates agentic AI to automate processing.",
          longDesc:
            "A digital solution built at Digital Twin Group (MakeAI) to manage the entire public investment lifecycle. It digitizes the standard 10-step public investment process and integrates agentic AI (OpenClaw) to automate workflow steps, cut processing time, and boost operational efficiency.",
          tags: [
            "React.js",
            "Frappe",
            "Python",
            "PostgreSQL",
            "Agentic AI",
            "OpenClaw",
          ],
          category: "fullstack",
          time: "06-2026 – Present",
          demo: "#",
          featured: true,
          internal: true,
          role: "A key project I lead at Digital Twin Group (MakeAI), taking over and continuing development after the initial phase was completed.",
          responsibilities: [
            "Continued developing the 10-step public investment workflow",
            "Integrated agentic AI (OpenClaw) into the process",
            "Redesigned the system's user interface",
            "Built the Disbursement module",
            "Built the System Settings module",
            "Built the System Catalog module",
            "Built the Construction & Supervision module",
            "Built the Overview & Reports module",
            "Built the Bidding Packages module",
          ],
        },
        {
          id: 1,
          title: "Son Tra Ward Health Management",
          description:
            "A management system for medical service facilities and businesses designed for the Son Tra ward local government.",
          longDesc:
            "A digital solution built to help local authorities monitor and manage medical and health-related establishments in Son Tra ward. It integrates an interactive digital map for geolocating facilities, managing licensing information, tracking quality inspections, and enabling quick navigation.",
          tags: ["JavaScript", "Frappe", "React.js", "Python", "PostgreSQL"],
          category: "fullstack",
          time: "05-2026",
          github: "https://github.com/tranvanhuy-dev-it/SonTraHealthManagement.git",
          demo: "#",
          video:
            "https://drive.google.com/file/d/1gP-v7GsawQFA5FAzYJVfpGRxaszoP5wy/view?usp=drive_link",
          image: "/sonTraHealth.png",
          featured: true,
          role: "A personal project completed during my internship training at Digital Twin Group (MakeAI), handling the entire system on my own.",
          responsibilities: [
            "Designed the database schema",
            "Designed & developed the backend",
            "Designed the user interface",
            "Integrated map & geolocation services",
            "Designed a PostGIS-based geospatial data system",
          ],
        },
        {
          id: 2,
          title: "StudyHub",
          description:
            "A cross-media study material and academic resource sharing portal for university students.",
          longDesc:
            "A collaborative portal allowing university students to upload and share study materials, past exam resources, and lecture notes. Features robust role-based access control, smart content moderation, and advanced full-text search.",
          tags: ["Vue 3", "Spring Boot", "MySQL", "JWT", "Vite"],
          category: "fullstack",
          time: "04-2026",
          github: "https://github.com/tranvanhuy-dev-it/StudyHub-Client",
          githubBackend: "https://github.com/tranvanhuy-dev-it/StudyHub.git",
          demo: "#",
          video:
            "https://drive.google.com/file/d/1F_Zerna0wK-b3lGOQwgS15-CYAVKIY25/view?usp=drive_link",
          image: "/studyHub.png",
          featured: true,
          role: "A personal project I conceptualized, designed, and built from scratch.",
          responsibilities: [
            "Designed the database schema",
            "Designed & developed the backend",
            "Integrated Google & Email services",
            "Designed the user interface",
          ],
        },
        {
          id: 3,
          title: "NexShop — Smart E-Commerce & POS Platform",
          description:
            "A full-stack personal project combining an online store and POS terminal, built with Next.js and deployed at vattudongkha.io.vn.",
          longDesc:
            "NexShop is a personal full-stack e-commerce solution integrating an online storefront with a Point of Sale (POS) terminal. Built with Next.js (App Router), Prisma ORM with PostgreSQL for data storage, and Google OAuth for authentication. Features product catalog management, shopping cart, order processing, POS transaction flow, and an administrative analytics dashboard.",
          tags: ["Next.js", "Prisma", "PostgreSQL", "Google OAuth", "Tailwind CSS"],
          category: "fullstack",
          time: "12-2025 - 05-2026",
          demo: "https://vattudongkha.io.vn",
          image: "/pbl3.png",
          featured: true,
          role: "A personal project I designed and built entirely on my own, from database design to deployment.",
          responsibilities: [
            "Designed the database schema with Prisma & PostgreSQL",
            "Built the full-stack app with Next.js App Router",
            "Integrated Google OAuth authentication",
            "Built the POS transaction & checkout flow",
            "Designed the admin analytics dashboard",
          ],
        },
      ],
      experiences: [
        {
          id: 4,
          company: "Digital Twin Group (MakeAI)",
          position: "Full-Stack Developer Intern",
          period: "05/2026 – Present",
          duration: "Internship",
          description: [
            "BIMspace (Technical Infrastructure Management): served as the primary developer, extending frontend and backend features on an existing codebase and redesigning the UI.",
            "Son Tra Ward Health Management: built and owned the entire system solo during internship training — database design, backend, UI, map integration, and a PostGIS-based geospatial system.",
            "Public Investment Management: joined mid-project after phase 1, continued developing the 10-step public investment workflow, integrated agentic AI (OpenClaw), redesigned the UI, and delivered the Disbursement, System Settings, System Catalog, Construction & Supervision, Overview & Reports, and Bidding Packages modules.",
            "Designed database schemas, optimized SQL query performance, and implemented role-based authorization across projects.",
            "Collaborated in Agile sprint planning, daily stand-ups, and code review processes to ensure code quality.",
          ],
          tech: [
            "React.js",
            "Vue 3",
            "Agentic AI",
            "OpenClaw",
            "Java (Spring Boot)",
            "Python",
            "Frappe",
            "WebSocket",
            "PostGIS",
            "PostgreSQL",
          ],
          type: "internship",
        },
        {
          id: 1,
          company: "Da Nang University of Technology (DUT - UD)",
          position: "Project Team Lead / Full-Stack Developer",
          period: "2024 – Present",
          duration: "Academic Projects",
          description: [
            "Proactively researched and adopted state-of-the-art technologies in AI, Data Science, and Full-stack Web Development.",
            "Developed academic projects from concept to completion, applying computer science theories to practical engineering problems.",
            "Integrated modern frameworks including React.js, Vue 3, Python (Frappe Framework), Spring Boot, and .NET Core into real-world business scenarios.",
            "Managed version control via Git/GitHub, coordinated tasks, and collaborated in Agile/Scrum team environments.",
            "Analyzed database schemas (PostgreSQL, MySQL, SQL Server), optimized SQL query performance, and designed robust APIs.",
          ],
          tech: [
            "React.js",
            "Vue 3",
            "Python",
            "Spring Boot",
            ".NET Core",
            "PostgreSQL",
          ],
          type: "academic",
        },
        {
          id: 3,
          company: "Personal Projects & Open-Source Contributions",
          position: "Independent Developer",
          period: "2024 – Present",
          duration: "Self-Study & Personal Growth",
          description: [
            "Self-studied emerging tech trends using official documentation and industry-standard educational platforms.",
            "Built hands-on projects to implement theoretical concepts in real-world scenarios.",
            "Sharpened analytical thinking, problem-solving skills, and UI/UX design considerations for end-user satisfaction.",
          ],
          tech: [
            "Frappe",
            "Vue 3",
            "Spring Boot",
            "PostgreSQL",
            "Tailwind CSS",
          ],
          type: "self-study",
        },
      ],
      education: [
        {
          id: 1,
          school: "Da Nang University of Technology, The University of Da Nang",
          degree: "Bachelor of Information Technology",
          period: "2024 – Present",
          gpa: "3.5/4.0",
          description:
            "Specialization in Data Science and Artificial Intelligence (AI)",
          type: "degree",
          logo: "/dut.png",
        },
      ],
      academicFocus: {
        tag: "Academic Specialization",
        title: "Data Science & Artificial Intelligence (AI)",
        subtitle: "Bach Khoa Da Nang (DUT)",
        points: [
          "Data Science & ML: Exploratory Data Analysis, Pandas, NumPy, Scikit-learn & Deep Learning.",
          "Agentic AI & Automation: Multi-agent architectures and workflow automation (OpenClaw).",
          "Software Engineering: Scalable full-stack systems (Spring Boot, React, Next.js, PostgreSQL), Clean Architecture."
        ],
      },
      ui: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        contactBtn: "Contact Me",

        // Section Titles
        aboutTitle: "What I Build",
        aboutSubtitle: "Core Solutions",
        aboutDesc:
          "Key software systems and practical engineering solutions I build and deliver",
        about: "What I Build",
        skillsTitle: "Tech Stack",
        skillsDesc: "The tools and technologies I use to bring ideas to life",
        projectsTitle: "Projects",
        projectsSubtitle: "My Work",
        projectsDesc: "A selection of key projects I have built",
        expTitle: "Experience",
        expSubtitle: "Work Experience",
        expDesc: "My career and development journey",
        eduTitle: "Education",
        eduSubtitle: "Education",
        eduDesc: "My academic background and certifications",
        contactTitle: "Contact",
        contactSubtitle: "Get In Touch",
        contactDesc:
          "Let's connect to discuss job opportunities or collaboration!",

        // General UI
        githubBtn: "GitHub",
        demoBtn: "Live Demo",
        featuredBadge: "Featured",
        myRoleLabel: "My Role",
        internalProjectNote:
          "Internal MakeAI project — source code & live demo are not publicly available",
        timelineLabel: "Project Timeline",
        objectiveLabel: "Career Objective",
        locationLabel: "Location",
        emailLabel: "Email",
        availabilityLabel: "Status",
        downloadCv: "Download My CV",
        backToTop: "Back to top",
        hi: "Hi, I am",
        viewProjects: "View Projects",

        // Contact Form
        contactInfoTitle: "Contact Information",
        contactInfoDesc:
          "I am always open to new challenges and collaboration opportunities. Drop a message or connect with me directly!",
        socialMediaLabel: "Social Media",
        sendMessageTitle: "Send a Message",
        formName: "Full Name",
        formEmail: "Email Address",
        formSubject: "Subject",
        formMessage: "Message Content",
        formSend: "Send Message",
        formSending: "Sending...",
        formSuccess: "✓ Message sent successfully! Thank you.",
        formError: "✗ Something went wrong. Please try again later.",
        presetSubjects: [
          "💼 Software Developer Opportunity / Interview",
          "🤝 Freelance / Project Collaboration",
          "💬 General Inquiry / Technical Discussion",
        ],
        presetSubjectsShort: [
          { short: "💼 Job Opportunity", full: "💼 Software Developer Opportunity / Interview" },
          { short: "🤝 Collaboration", full: "🤝 Freelance / Project Collaboration" },
          { short: "💬 General Connect", full: "💬 General Inquiry / Technical Discussion" },
        ],
      },
    },

    vi: {
      personal: {
        name: "Trần Văn Huy",
        title: "Software Developer",
        taglines: [
          "Lập trình viên Software Developer",
          "Kỹ sư Backend & Full-Stack",
          "Giải pháp Agentic AI & Tự động hóa",
          "Java Spring Boot & Next.js"
        ],
        bio: "Lập trình viên phát triển hệ thống web, backend và mobile với trọng tâm vào tính mở rộng, ổn định và hiệu năng cao.",
        bio2: "Có kinh nghiệm thực tế xây dựng kiến trúc backend với Java (Spring Boot), nghiệp vụ doanh nghiệp với Python (Frappe), giao diện hiện đại với React & Next.js, và ứng dụng Agentic AI để tự động hóa quy trình nghiệp vụ.",
        objective:
          "Trở thành một Software Engineer / Full-Stack Engineer chuyên nghiệp, kết hợp kiến trúc backend vững chắc với các giải pháp AI và dữ liệu thông minh nhằm tạo ra sản phẩm có giá trị thực tế cao.",
        location: "Đà Nẵng, Việt Nam",
        email: "tranvanhuy064206@gmail.com",
        availability: "Software Developer Intern @ Digital Twin Group (MakeAI)",
        avatar: "",
        cv: "/cv.pdf",
        socials: {
          github: "https://github.com/tranvanhuy-dev-it",
          linkedin: "https://www.linkedin.com/in/huy-tran-van-5753b13b4",
          facebook: "https://facebook.com/tranvanhuy260306",
        },
      },
      stats: [
        { value: "AI & DS", label: "Lĩnh vực tập trung" },
        { value: "5+", label: "Dự án hoàn thành" },
        { value: "15+", label: "Công nghệ sử dụng" },
        { value: "100%", label: "Đam mê & Sáng tạo" },
      ],
      whatIBuild: [
        {
          icon: "🌐",
          title: "Ứng dụng Web Full-Stack",
          desc: "Xây dựng giao diện web hiện đại, phản hồi mượt mà và kiến trúc frontend hiệu năng cao với React, Next.js và Vue.",
          tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
        },
        {
          icon: "⚙️",
          title: "Hệ thống Backend mở rộng",
          desc: "Thiết kế RESTful API chuẩn mực, kiến trúc Clean Architecture, luồng xác thực bảo mật và truyền thông realtime.",
          tags: ["Java (Spring Boot)", "Python (Frappe)", "Node.js", "PostgreSQL", "Redis"]
        },
        {
          icon: "📱",
          title: "Ứng dụng Di động Đa nền tảng",
          desc: "Phát triển và đóng gói ứng dụng di động hybrid tiện lợi, tối ưu trải nghiệm trên mọi thiết bị.",
          tags: ["Capacitor", "Vue / React", "Mobile First"]
        },
        {
          icon: "🗺️",
          title: "GIS & Chuyển đổi số doanh nghiệp",
          desc: "Nền tảng quản lý dữ liệu không gian tương tác bản đồ 2D/3D và số hóa tự động hóa quy trình nghiệp vụ.",
          tags: ["Bản đồ 2D/3D", "Frappe", "Số hóa quy trình"]
        },
        {
          icon: "🤖",
          title: "Hệ thống Dữ liệu & Agentic AI",
          desc: "Xây dựng pipeline phân tích dữ liệu và tích hợp công cụ Agentic AI tự động hóa xử lý tác vụ doanh nghiệp.",
          tags: ["Agentic AI (OpenClaw)", "Python", "Pandas", "NumPy"]
        }
      ],
      projects: [
        {
          id: 5,
          title: "Hệ thống Quản lý Phòng trọ Đa nền tảng",
          description:
            "Hệ thống quản lý thuê trọ đa nền tảng, thanh toán hóa đơn và giao tiếp giữa chủ trọ và người thuê.",
          longDesc:
            "Một giải pháp đa nền tảng toàn diện (Web & Mobile) dành cho chủ nhà trọ và người thuê. Các tính năng chính bao gồm đăng nhập Google OAuth2, nhắn tin realtime qua WebSocket, tự động tạo hóa đơn và xuất báo cáo PDF/Excel, phân quyền chi tiết (Admin, Chủ trọ, Khách thuê). Phiên bản mobile được đóng gói bằng Capacitor.",
          tags: [
            "Java",
            "Spring Boot",
            "Vue 3",
            "Capacitor",
            "WebSocket",
            "PostgreSQL",
          ],
          category: "fullstack",
          time: "06-2026",
          github: "https://github.com/tranvanhuy-dev-it/QLPT_VUE_FE.git",
          githubBackend: "https://github.com/tranvanhuy-dev-it/QLPT_JAVA_BE.git",
          demo: "#",
          video:
            "https://drive.google.com/drive/folders/1pMhWNV0MlMn5DsGgoY7uKyaGYdRp9qo3?usp=sharing",
          image: "/qlpt.png",
          featured: true,
          role: "Dự án cá nhân do tôi trực tiếp đảm nhận toàn bộ, từ khâu thiết kế đến khi triển khai thực tế.",
          responsibilities: [
            "Thiết kế cơ sở dữ liệu",
            "Thiết kế & phát triển backend (Spring Boot)",
            "Triển khai và cấu hình hệ thống lên server cloud",
            "Tích hợp các dịch vụ bên thứ ba: Google OAuth2, PayOS, Email",
            "Thiết kế giao diện người dùng (Web & Mobile)",
          ],
        },
        {
          id: 6,
          title: "BIMspace - Quản lý Hạ tầng Kỹ thuật",
          description:
            "Hệ thống quản lý hạ tầng kỹ thuật ứng dụng bản đồ tương tác 3D và 2D để quản lý tài sản và các nghiệp vụ vận hành hạ tầng.",
          longDesc:
            "Giải pháp số được xây dựng tại Digital Twin Group (MakeAI) nhằm quản lý hạ tầng kỹ thuật thông qua bản đồ tương tác 3D và 2D. Hệ thống hỗ trợ trực quan hóa và theo dõi tài sản trên bản đồ, đồng thời quản lý các nghiệp vụ vận hành (bảo trì, giám sát, kiểm tra) liên quan đến hạ tầng kỹ thuật.",
          tags: ["JavaScript", "Frappe", "React.js", "Python", "PostgreSQL"],
          category: "fullstack",
          time: "05-2026",
          demo: "#",
          image: "/bimspace.png",
          featured: true,
          internal: true,
          role: "Dự án trọng điểm tôi phụ trách tại Digital Twin Group (MakeAI) với vai trò lập trình viên chính, kế thừa và phát triển tiếp trên codebase sẵn có.",
          responsibilities: [
            "Phát triển frontend dựa trên codebase có sẵn",
            "Phát triển backend dựa trên codebase có sẵn",
            "Thiết kế lại giao diện người dùng",
          ],
        },
        {
          id: 7,
          title: "Hệ thống Quản lý Đầu tư Công",
          description:
            "Hệ thống số hóa quy trình đầu tư công 10 bước và tích hợp agentic AI để tự động hóa xử lý.",
          longDesc:
            "Giải pháp số được xây dựng tại Digital Twin Group (MakeAI) nhằm quản lý toàn bộ vòng đời đầu tư công. Hệ thống số hóa quy trình đầu tư công chuẩn 10 bước và tích hợp agentic AI (OpenClaw) để tự động hóa các bước xử lý, rút ngắn thời gian và nâng cao hiệu suất vận hành.",
          tags: [
            "React.js",
            "Frappe",
            "Python",
            "PostgreSQL",
            "Agentic AI",
            "OpenClaw",
          ],
          category: "fullstack",
          time: "06-2026 – Hiện tại",
          demo: "#",
          featured: true,
          internal: true,
          role: "Dự án trọng điểm tôi phụ trách tại Digital Twin Group (MakeAI), tiếp nhận và phát triển tiếp sau khi dự án đã hoàn thành giai đoạn đầu.",
          responsibilities: [
            "Tiếp tục phát triển mô hình quy trình đầu tư công 10 bước",
            "Tích hợp agentic AI (OpenClaw) vào quy trình",
            "Thiết kế lại giao diện hệ thống",
            "Xây dựng chức năng Giải ngân",
            "Xây dựng chức năng Cài đặt hệ thống",
            "Xây dựng chức năng Danh mục hệ thống",
            "Xây dựng chức năng Thi công và Giám sát",
            "Xây dựng chức năng Tổng quan và Báo cáo",
            "Xây dựng chức năng Gói thầu",
          ],
        },
        {
          id: 1,
          title: "Quản lý Y tế Phường Sơn Trà",
          description:
            "Hệ thống quản lý cơ sở dịch vụ y tế và kinh doanh được thiết kế cho chính quyền phường Sơn Trà.",
          longDesc:
            "Giải pháp chuyển đổi số hỗ trợ chính quyền địa phương giám sát và quản lý các cơ sở y tế tại phường Sơn Trà. Tích hợp bản đồ số tương tác định vị cơ sở, quản lý giấy phép kinh doanh, theo dõi kiểm tra chất lượng và điều hướng nhanh.",
          tags: ["JavaScript", "Frappe", "React.js", "Python", "PostgreSQL"],
          category: "fullstack",
          time: "05-2026",
          github: "https://github.com/tranvanhuy-dev-it/SonTraHealthManagement.git",
          demo: "#",
          video:
            "https://drive.google.com/file/d/1gP-v7GsawQFA5FAzYJVfpGRxaszoP5wy/view?usp=drive_link",
          image: "/sonTraHealth.png",
          featured: true,
          role: "Dự án cá nhân tôi thực hiện trong quá trình đào tạo thực tập tại Digital Twin Group (MakeAI), đảm nhận toàn bộ hệ thống một mình.",
          responsibilities: [
            "Thiết kế cơ sở dữ liệu",
            "Thiết kế & phát triển backend",
            "Thiết kế giao diện người dùng",
            "Tích hợp dịch vụ bản đồ",
            "Thiết kế hệ thống dữ liệu không gian địa lý dựa trên PostGIS",
          ],
        },
        {
          id: 2,
          title: "StudyHub",
          description:
            "Nền tảng chia sẻ tài liệu học tập đa phương tiện và tài nguyên học thuật dành cho sinh viên đại học.",
          longDesc:
            "Cổng cộng tác cho phép sinh viên tải lên và chia sẻ tài liệu học tập, bài giảng và tài nguyên môn học. Hỗ trợ phân quyền người dùng, kiểm duyệt nội dung thông minh và tìm kiếm nâng cao.",
          tags: ["Vue 3", "Spring Boot", "MySQL", "JWT", "Vite"],
          category: "fullstack",
          time: "04-2026",
          github: "https://github.com/tranvanhuy-dev-it/StudyHub-Client",
          githubBackend: "https://github.com/tranvanhuy-dev-it/StudyHub.git",
          demo: "#",
          video:
            "https://drive.google.com/file/d/1F_Zerna0wK-b3lGOQwgS15-CYAVKIY25/view?usp=drive_link",
          image: "/studyHub.png",
          featured: true,
          role: "Dự án cá nhân tôi tự nghiên cứu, thiết kế và xây dựng hoàn chỉnh từ đầu.",
          responsibilities: [
            "Thiết kế cơ sở dữ liệu",
            "Thiết kế & phát triển backend",
            "Tích hợp dịch vụ Google & Email",
            "Thiết kế giao diện người dùng",
          ],
        },
        {
          id: 3,
          title: "NexShop — Nền tảng Thương mại Điện tử & POS Thông minh",
          description:
            "Dự án cá nhân full-stack kết hợp cửa hàng online và trạm POS, xây dựng hoàn toàn bằng Next.js và triển khai tại vattudongkha.io.vn.",
          longDesc:
            "NexShop là nền tảng thương mại điện tử cá nhân full-stack kết hợp cửa hàng trực tuyến với hệ thống POS (Point of Sale). Xây dựng hoàn toàn bằng Next.js (App Router), sử dụng Prisma ORM với PostgreSQL để lưu trữ dữ liệu và Google OAuth để xác thực. Tính năng bao gồm danh mục sản phẩm, giỏ hàng, quản lý đơn hàng, luồng thanh toán POS và trang quản trị phân tích doanh thu.",
          tags: ["Next.js", "Prisma", "PostgreSQL", "Google OAuth", "Tailwind CSS"],
          category: "fullstack",
          time: "12-2025 - 05-2026",
          demo: "https://vattudongkha.io.vn",
          image: "/pbl3.png",
          featured: true,
          role: "Dự án cá nhân do tôi tự thiết kế và xây dựng hoàn toàn một mình, từ thiết kế CSDL đến triển khai thực tế.",
          responsibilities: [
            "Thiết kế cơ sở dữ liệu với Prisma & PostgreSQL",
            "Xây dựng ứng dụng full-stack với Next.js App Router",
            "Tích hợp xác thực Google OAuth",
            "Xây dựng luồng giao dịch & thanh toán POS",
            "Thiết kế trang quản trị phân tích doanh thu",
          ],
        },
      ],
      experiences: [
        {
          id: 4,
          company: "Digital Twin Group (MakeAI)",
          position: "Thực tập sinh Lập trình viên Full-Stack",
          period: "05/2026 – Hiện tại",
          duration: "Thực tập thực tế",
          description: [
            "BIMspace (Quản lý Hạ tầng Kỹ thuật): đảm nhận vai trò lập trình viên chính, mở rộng frontend và backend trên codebase có sẵn và thiết kế lại giao diện.",
            "Quản lý Y tế Phường Sơn Trà: tự xây dựng và làm chủ toàn bộ hệ thống trong quá trình training thực tập — thiết kế cơ sở dữ liệu, backend, giao diện, tích hợp bản đồ và hệ thống dữ liệu không gian địa lý PostGIS.",
            "Quản lý Đầu tư Công: tham gia dự án khi đã hoàn thành giai đoạn đầu, tiếp tục phát triển quy trình đầu tư công 10 bước, tích hợp agentic AI (OpenClaw), thiết kế lại giao diện, và triển khai các chức năng Giải ngân, Cài đặt hệ thống, Danh mục hệ thống, Thi công và Giám sát, Tổng quan và Báo cáo, Gói thầu.",
            "Thiết kế cơ sở dữ liệu, tối ưu hóa hiệu năng truy vấn SQL và triển khai phân quyền bảo mật vai trò cho các dự án.",
            "Cộng tác làm việc trong môi trường Agile/Scrum, báo cáo hàng ngày và kiểm duyệt mã nguồn.",
          ],
          tech: [
            "React.js",
            "Vue 3",
            "Agentic AI",
            "OpenClaw",
            "Java (Spring Boot)",
            "Python",
            "Frappe",
            "WebSocket",
            "PostGIS",
            "PostgreSQL",
          ],
          type: "internship",
        },
        {
          id: 1,
          company: "Trường Đại học Bách khoa - Đại học Đà Nẵng (DUT)",
          position: "Trưởng nhóm dự án / Lập trình viên Full-Stack",
          period: "2024 – Hiện tại",
          duration: "Dự án Học tập",
          description: [
            "Chủ động nghiên cứu và áp dụng các công nghệ tiên tiến trong AI, Khoa học dữ liệu và Phát triển Full-stack.",
            "Phát triển các dự án học thuật từ ý tưởng đến hoàn thiện, áp dụng lý thuyết khoa học máy tính vào thực tiễn.",
            "Tích hợp các framework hiện đại như React.js, Vue 3, Python (Frappe), Spring Boot và .NET Core vào giải quyết bài toán.",
            "Quản lý mã nguồn bằng Git/GitHub, làm việc nhóm trong quy trình Agile/Scrum.",
            "Thiết kế cơ sở dữ liệu (PostgreSQL, MySQL, SQL Server), tối ưu truy vấn SQL và xây dựng REST API.",
          ],
          tech: [
            "React.js",
            "Vue 3",
            "Python",
            "Spring Boot",
            ".NET Core",
            "PostgreSQL",
          ],
          type: "academic",
        },
        {
          id: 3,
          company: "Dự án cá nhân & Đóng góp mã nguồn mở",
          position: "Lập trình viên độc lập",
          period: "2024 – Hiện tại",
          duration: "Tự học & Phát triển bản thân",
          description: [
            "Tự nghiên cứu các xu hướng công nghệ mới từ tài liệu chính thức và các nền tảng học lập trình.",
            "Xây dựng các dự án cá nhân thực tế để áp dụng lý thuyết vào thực tiễn.",
            "Rèn luyện tư duy phân tích, giải quyết vấn đề và cân nhắc thiết kế UI/UX nâng cao trải nghiệm người dùng.",
          ],
          tech: [
            "Frappe",
            "Vue 3",
            "Spring Boot",
            "PostgreSQL",
            "Tailwind CSS",
          ],
          type: "self-study",
        },
      ],
      education: [
        {
          id: 1,
          school: "Trường Đại học Bách khoa, Đại học Đà Nẵng",
          degree: "Cử nhân Công nghệ Thông tin",
          period: "2024 – Hiện tại",
          gpa: "3.5/4.0",
          description: "Chuyên ngành Khoa học Dữ liệu và Trí tuệ Nhân tạo (AI)",
          type: "degree",
          logo: "/dut.png",
        },
      ],
      academicFocus: {
        tag: "Định hướng chuyên môn",
        title: "Khoa học Dữ liệu & Trí tuệ Nhân tạo (AI)",
        subtitle: "Đại học Bách khoa - Đại học Đà Nẵng (DUT)",
        points: [
          "Khoa học Dữ liệu & ML: Phân tích & trực quan hóa dữ liệu (EDA), Pandas, NumPy, Scikit-learn & Deep Learning.",
          "Agentic AI & Tự động hóa: Kiến trúc Multi-agent và tích hợp mô hình AI tự động hóa quy trình (OpenClaw).",
          "Kỹ thuật phần mềm: Xây dựng hệ thống Full-stack (Spring Boot, React, Next.js, PostgreSQL), Clean Architecture."
        ],
      },
      ui: {
        home: "Trang chủ",
        about: "Chuyên môn",
        skills: "Kỹ năng",
        projects: "Dự án",
        experience: "Kinh nghiệm",
        education: "Học vấn",
        contact: "Liên hệ",
        contactBtn: "Liên hệ tôi",

        // Sections
        aboutTitle: "Lĩnh vực chuyên môn",
        aboutSubtitle: "Chuyên môn & Giải pháp",
        aboutDesc: "Các mảng sản phẩm và giải pháp công nghệ tôi trực tiếp xây dựng",
        skillsTitle: "Kỹ năng",
        skillsSubtitle: "Công nghệ sử dụng",
        skillsDesc:
          "Các công nghệ và công cụ tôi sử dụng để hiện thực hóa ý tưởng",
        projectsTitle: "Dự án",
        projectsSubtitle: "Sản phẩm của tôi",
        projectsDesc: "Một số dự án thực tế tôi đã thiết kế và xây dựng",
        expTitle: "Kinh nghiệm",
        expSubtitle: "Quá trình làm việc",
        expDesc:
          "Hành trình nghề nghiệp và tích lũy kinh nghiệm lập trình của tôi",
        eduTitle: "Học vấn",
        eduSubtitle: "Học vấn",
        eduDesc: "Quá trình học tập đại học và các chứng chỉ đạt được",
        contactTitle: "Liên hệ",
        contactSubtitle: "Gửi lời nhắn",
        contactDesc:
          "Hãy kết nối để thảo luận về cơ hội việc làm hoặc dự án hợp tác!",

        // General UI
        githubBtn: "GitHub",
        demoBtn: "Trải nghiệm",
        featuredBadge: "Nổi bật",
        myRoleLabel: "Vai trò của tôi",
        internalProjectNote:
          "Dự án nội bộ tại MakeAI — mã nguồn & demo không công khai",
        timelineLabel: "Thời gian thực hiện",
        objectiveLabel: "Mục tiêu nghề nghiệp",
        locationLabel: "Địa điểm",
        emailLabel: "Email",
        availabilityLabel: "Trạng thái",
        downloadCv: "Tải xuống CV",
        backToTop: "Trở về đầu trang",
        hi: "Xin chào, tôi là",
        viewProjects: "Xem dự án",

        // Contact Form
        contactInfoTitle: "Thông tin liên hệ",
        contactInfoDesc:
          "Tôi luôn sẵn sàng đón nhận những thử thách và cơ hội hợp tác mới. Hãy gửi tin nhắn hoặc kết nối trực tiếp với tôi!",
        socialMediaLabel: "Mạng xã hội",
        sendMessageTitle: "Gửi tin nhắn",
        formName: "Họ và tên",
        formEmail: "Địa chỉ Email",
        formSubject: "Tiêu đề",
        formMessage: "Nội dung lời nhắn",
        formSend: "Gửi lời nhắn",
        formSending: "Đang gửi...",
        formSuccess: "✓ Tin nhắn đã được gửi thành công! Cảm ơn bạn.",
        formError: "✗ Đã xảy ra lỗi. Vui lòng thử lại sau.",
        presetSubjects: [
          "💼 Thư mời tuyển dụng / Phỏng vấn",
          "🤝 Hợp tác dự án / Freelance",
          "💬 Thắc mắc chung / Trao đổi công việc",
        ],
        presetSubjectsShort: [
          { short: "💼 Thư mời tuyển dụng", full: "💼 Thư mời tuyển dụng / Phỏng vấn" },
          { short: "🤝 Hợp tác dự án", full: "🤝 Hợp tác dự án / Freelance" },
          { short: "💬 Trao đổi công việc", full: "💬 Thắc mắc chung / Trao đổi công việc" },
        ],
      },
    },
  }),

  getters: {
    personal: (state) => state[state.locale].personal,
    stats: (state) => state[state.locale].stats,
    whatIBuild: (state) => state[state.locale].whatIBuild || [],
    projects: (state) => state[state.locale].projects,
    experiences: (state) => state[state.locale].experiences,
    education: (state) => state[state.locale].education,
    academicFocus: (state) => state[state.locale].academicFocus,
    ui: (state) => state[state.locale].ui,
    presetSubjects: (state) => state[state.locale].ui.presetSubjects || [],
    presetSubjectsShort: (state) => state[state.locale].ui.presetSubjectsShort || [],

    skillCategories: (state) => {
      return state.skillCategoriesList.map((cat) => ({
        id: cat.id,
        label: cat.labels[state.locale],
        icon: cat.icon,
        skills: cat.skills,
      }));
    },

    filteredProjects: (state) => {
      const projectsList = state[state.locale].projects;
      if (state.projectFilter === "all") return projectsList;
      return projectsList.filter((p) => p.category === state.projectFilter);
    },

    activeSkills() {
      const cat = this.skillCategories.find(
        (c) => c.id === this.activeSkillCategory,
      );
      return cat ? cat.skills : [];
    },
  },

  actions: {
    setLocale(loc) {
      this.locale = loc;
      localStorage.setItem("locale", loc);
    },
    setTheme(mode) {
      this.theme = mode;
      localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("light", mode === "light");
    },
    toggleTheme() {
      this.setTheme(this.theme === "dark" ? "light" : "dark");
    },
    setProjectFilter(filter) {
      this.projectFilter = filter;
    },
    setActiveSkillCategory(id) {
      this.activeSkillCategory = id;
    },
    setActiveSection(section) {
      this.activeSection = section;
    },
  },
});
