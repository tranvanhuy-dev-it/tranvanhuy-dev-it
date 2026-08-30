import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    locale: localStorage.getItem("locale") || "en", // default to English
    theme: localStorage.getItem("theme") || "light",
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
        roleSubtitle: "Software Developer | Full-Stack & Applied AI",
        statement: "Building production-oriented full-stack systems and practical AI-powered automation.",
        taglines: [
          "Software Developer",
          "Backend & Full-Stack Engineer",
          "Applied AI & Agentic Solutions",
          "Java Spring Boot & Next.js"
        ],
        aboutStory: [
          "Hi, I'm Tran Van Huy — a 3rd-year Information Technology student majoring in Data Science & Artificial Intelligence at Da Nang University of Technology (DUT - UD) with an academic GPA of 3.5/4.0.",
          "Currently, I work as a Software Developer Intern at Digital Twin Group (MakeAI), where I build production-grade enterprise modules for statutory Public Investment Management, GIS spatial mapping platforms (PostGIS), and Agentic AI (OpenClaw) workflow automations.",
          "I am passionate about engineering robust full-stack software systems — taking full ownership from database design (PostgreSQL, MySQL), backend architecture (Java Spring Boot, Python Frappe, REST APIs), and real-time STOMP WebSockets to reactive user interfaces (Next.js, TypeScript, React, Vue 3) and containerized deployment (Docker Compose, Linux).",
        ],
        bio: "Software Developer building scalable web, backend, and mobile systems with a strong focus on Data Science, Machine Learning, and Applied AI.",
        bio2: "Experienced in building robust backend architectures with Java (Spring Boot), enterprise workflows with Python (Frappe), modern frontends with Next.js & TypeScript, and integrating Agentic AI to automate business processes.",
        objective:
          "To deliver reliable, high-impact software systems as a Software Engineer, combining clean backend architecture with practical, data-driven automation.",
        location: "Da Nang, Vietnam",
        email: "tranvanhuy064206@gmail.com",
        availability: "Software Developer Intern @ Digital Twin Group (MakeAI)",
        statusTag: "Working at Digital Twin Group (MakeAI)",
        avatar: "",
        cv: "/cv.pdf",
        quickFacts: [
          { label: "Current Role", value: "Software Developer Intern" },
          { label: "Company", value: "Digital Twin Group (MakeAI)" },
          { label: "Education", value: "Bach Khoa Da Nang (DUT) — GPA 3.5/4.0" },
          { label: "Specialization", value: "Data Science & Artificial Intelligence" },
          { label: "Location", value: "Da Nang, Vietnam" },
        ],
        socials: {
          github: "https://github.com/tranvanhuy-dev-it",
          linkedin: "https://www.linkedin.com/in/huy-tran-van-5753b13b4",
          facebook: "https://facebook.com/tranvanhuy260306",
        },
      },
      stats: [
        { value: "3.5/4.0", label: "DUT GPA" },
        { value: "MakeAI", label: "Developer Intern" },
        { value: "5+", label: "Projects Completed" },
        { value: "Full-Stack", label: "Spring Boot & Next.js" },
      ],
      whatIBuild: [
        {
          icon: "🌐",
          title: "Full-Stack Web Applications",
          desc: "Modern, reactive interfaces and performant frontend architectures with Next.js, TypeScript, and Vue 3.",
          tags: ["Next.js", "TypeScript", "React", "Vue 3", "Tailwind CSS"]
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
          tags: ["Next.js", "TypeScript", "2D/3D Maps", "PostGIS", "Frappe"]
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
          engineeringDecisions: [
            {
              decision: "Spring Boot Layered Architecture",
              reason: "Ensures strict separation across Controller, Service, and Repository layers with transactional integrity for financial billing operations."
            },
            {
              decision: "Capacitor Cross-Platform Packaging",
              reason: "Leveraged 100% of Vue 3 components to package high-performance mobile apps without maintaining separate native codebases."
            },
            {
              decision: "STOMP over WebSocket Protocol",
              reason: "Implemented topic-based publish/subscribe channels between landlords and tenants with JWT-authenticated handshakes."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Automated monthly recurring billing with tiered utility calculations (electricity/water tier pricing).",
              solution: "Engineered a reliable scheduled cron service with transactional batch processing, dynamic tiered formula evaluation, and PayOS QR generation."
            },
            {
              challenge: "Mobile network drops disrupting active WebSocket chat connections.",
              solution: "Implemented heartbeat monitoring, exponential backoff auto-reconnection, and fallback unread message polling on client resume."
            }
          ]
        },
        {
          id: 6,
          title: "BIMspace - Technical Infrastructure Management",
          description:
            "A technical infrastructure management system applying interactive 3D and 2D maps to manage assets and infrastructure operations.",
          longDesc:
            "A digital solution built at Digital Twin Group (MakeAI) to manage technical infrastructure using interactive 3D and 2D maps. The system enables asset visualization and tracking on the map, and manages the operational workflows (maintenance, monitoring, inspection) related to technical infrastructure.",
          tags: ["Next.js", "TypeScript", "Frappe", "Python", "PostgreSQL", "GIS Maps"],
          category: "fullstack",
          time: "05-2026",
          demo: "#",
          image: "/bimspace.png",
          featured: true,
          internal: true,
          role: "A key project I lead at Digital Twin Group (MakeAI) as the primary developer, building on top of an existing codebase.",
          responsibilities: [
            "Developed frontend features with Next.js & TypeScript on top of the existing codebase",
            "Developed backend features on top of the existing codebase",
            "Redesigned the user interface for optimal usability",
          ],
          engineeringDecisions: [
            {
              decision: "Next.js UI & Frappe Backend Decoupling",
              reason: "Delivers smooth interactive 2D/3D spatial rendering on the client while utilizing Frappe's robust metadata-driven DocType system and permission controls."
            },
            {
              decision: "Viewport Bounding-Box Spatial Queries",
              reason: "Restricts asset queries to the visible map viewport using PostGIS spatial indexing, preventing client browser memory bloat."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Rendering large-scale infrastructure layers on interactive maps causing FPS stuttering.",
              solution: "Implemented vector tile clustering, level-of-detail (LOD) simplifications, and PostGIS GiST indexing for fast sub-viewport slicing."
            },
            {
              challenge: "Coordinating multi-department maintenance logs across distributed spatial assets.",
              solution: "Configured Frappe Workflow State Machine with strict role-based transitions, automated status alerts, and audit trails."
            }
          ]
        },
        {
          id: 7,
          title: "Public Investment Management System",
          description:
            "A system that digitizes the 10-step public investment workflow and integrates agentic AI to automate processing.",
          longDesc:
            "A digital solution built at Digital Twin Group (MakeAI) to manage the entire public investment lifecycle. It digitizes the standard 10-step public investment process and integrates agentic AI (OpenClaw) to automate workflow steps, cut processing time, and boost operational efficiency.",
          tags: [
            "Next.js",
            "TypeScript",
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
            "Re-architected the frontend interface with Next.js & TypeScript",
            "Built the Disbursement module",
            "Built the System Settings module",
            "Built the System Catalog module",
            "Built the Construction & Supervision module",
            "Built the Overview & Reports module",
            "Built the Bidding Packages module",
          ],
          engineeringDecisions: [
            {
              decision: "Agentic AI Integration with OpenClaw",
              reason: "Automates extracting key financial metrics and legal clauses from investment dossiers, reducing manual review time significantly."
            },
            {
              decision: "Modular Feature Architecture",
              reason: "Separated Disbursement, Bidding, and Supervision modules into dedicated components for isolated testing and clear operational boundaries."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Enforcing complex legal preconditions across the statutory 10-step investment lifecycle.",
              solution: "Constructed an immutable multi-stage validation engine in Python/Frappe with exhaustive logging and step-gate validations."
            },
            {
              challenge: "Ensuring accuracy and explainability in AI-assisted document parsing.",
              solution: "Designed a hybrid pipeline combining rule-based deterministic checks with OpenClaw LLM inference and mandatory human reviewer checkpoints."
            }
          ]
        },
        {
          id: 1,
          title: "Son Tra Ward Health Management",
          description:
            "A management system for medical service facilities and businesses designed for the Son Tra ward local government.",
          longDesc:
            "A digital solution built to help local authorities monitor and manage medical and health-related establishments in Son Tra ward. It integrates an interactive digital map for geolocating facilities, managing licensing information, tracking quality inspections, and enabling quick navigation.",
          tags: ["React.js", "Next.js", "Frappe", "Python", "PostGIS", "PostgreSQL"],
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
            "Designed the database schema with PostGIS spatial indices",
            "Designed & developed the backend with Python Frappe",
            "Designed the user interface using React.js & Next.js",
            "Integrated map & geolocation services with sub-10ms radius filtering",
            "Designed a PostGIS-based geospatial data system",
          ],
          engineeringDecisions: [
            {
              decision: "PostGIS Spatial Engine for Geo-indexing",
              reason: "Enables instant radius querying (ST_DWithin) and spatial polygon containment for local administrative boundaries."
            },
            {
              decision: "Field-Ready Responsive UI in React.js & Next.js",
              reason: "Optimized for mobile tablets and desktops used by municipal officers conducting on-site inspections."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Real-time radius filtering and inspection status categorization under high map panning speeds.",
              solution: "Used spatial GiST indexing and client-side GeoJSON memoization, cutting spatial lookup response times to under 10ms."
            }
          ]
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
          engineeringDecisions: [
            {
              decision: "Spring Boot + JWT Stateless Auth",
              reason: "Ensures scalable session management and fine-grained authorization for students, moderators, and admins."
            },
            {
              decision: "Hierarchical Academic Taxonomy",
              reason: "Structured categorization by university, department, and course for instant full-text filtering."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Handling multi-format file uploads while preventing malicious payloads and file corruption.",
              solution: "Implemented server-side MIME verification, upload size quotas, and unique hash-based file deduplication."
            }
          ]
        },
        {
          id: 3,
          title: "NexShop — Smart E-Commerce & POS Platform",
          description:
            "A full-stack personal project combining an online store and POS terminal, built with Next.js, TypeScript, and deployed at vattudongkha.io.vn.",
          longDesc:
            "NexShop is a personal full-stack e-commerce solution integrating an online storefront with a Point of Sale (POS) terminal. Built with Next.js (App Router), TypeScript, Prisma ORM with PostgreSQL for data storage, and Google OAuth for authentication. Features product catalog management, shopping cart, order processing, POS transaction flow, and an administrative analytics dashboard.",
          tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Google OAuth", "Tailwind CSS"],
          category: "fullstack",
          time: "12-2025 - 05-2026",
          demo: "https://vattudongkha.io.vn",
          image: "/pbl3.png",
          featured: true,
          role: "A personal project I designed and built entirely on my own, from database design to deployment.",
          responsibilities: [
            "Designed the database schema with Prisma & PostgreSQL",
            "Built the full-stack app with Next.js App Router & TypeScript",
            "Integrated Google OAuth authentication",
            "Built the POS transaction & checkout flow",
            "Designed the admin analytics dashboard",
          ],
          engineeringDecisions: [
            {
              decision: "Next.js App Router with Server Actions",
              reason: "Reduces client JavaScript footprint and provides secure, direct database transactions for shopping cart and checkout."
            },
            {
              decision: "Prisma ORM with PostgreSQL",
              reason: "Ensures type safety across the entire codebase with transactional safety during inventory deductions."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Preventing inventory race conditions between simultaneous online orders and physical POS checkouts.",
              solution: "Utilized Prisma interactive transactions ($transaction) with database row-level locking during order finalization."
            }
          ]
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
            "BIMspace (Technical Infrastructure Management): served as the primary developer, extending frontend and backend features on an existing codebase with Next.js & TypeScript.",
            "Son Tra Ward Health Management: built and owned the entire system solo during internship training — database design, backend, Next.js & React UI, map integration, and a PostGIS-based geospatial system.",
            "Public Investment Management: joined mid-project after phase 1, continued developing the 10-step public investment workflow, integrated agentic AI (OpenClaw), rebuilt frontend with Next.js & TypeScript, and delivered the Disbursement, System Settings, System Catalog, Construction & Supervision, Overview & Reports, and Bidding Packages modules.",
            "Designed database schemas, optimized SQL query performance, and implemented role-based authorization across projects.",
            "Collaborated in Agile sprint planning, daily stand-ups, and code review processes to ensure code quality.",
          ],
          tech: [
            "Next.js",
            "TypeScript",
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
        about: "About Me",
        solutions: "Solutions",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        contactBtn: "Contact Me",

        // Section Titles
        aboutTitle: "About Me",
        aboutSubtitle: "Story & Profile",
        aboutDesc:
          "Engineering philosophy, personal background, and career objectives",
        solutionsTitle: "Core Solutions",
        solutionsSubtitle: "What I Build",
        solutionsDesc:
          "Key software systems and practical engineering solutions I build and deliver",
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
        downloadCv: "Download CV",
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
        presetSubjects: [
          "Full-Time / Part-Time Job Opportunity",
          "Technical Interview Invitation",
          "Freelance / Contract Project Collaboration",
          "Web Development / Full-Stack Project Inquiry",
          "Agentic AI & Workflow Automation Consultation",
          "Networking & Tech Discussion",
          "General Question / Inquiry",
          "Other Topic",
        ],
      },
    },

    vi: {
      personal: {
        name: "Trần Văn Huy",
        title: "Software Developer",
        roleSubtitle: "Software Developer | Full-Stack & Applied AI",
        statement: "Xây dựng các hệ thống full-stack hướng production và giải pháp tự động hóa với AI ứng dụng.",
        taglines: [
          "Lập trình viên Software Developer",
          "Kỹ sư Backend & Full-Stack",
          "Giải pháp Agentic AI & Tự động hóa",
          "Java Spring Boot & Next.js"
        ],
        aboutStory: [
          "Xin chào, tôi là Trần Văn Huy — sinh viên năm 3 chuyên ngành Khoa học Dữ liệu & Trí tuệ Nhân tạo tại Trường Đại học Bách Khoa - ĐH Đà Nẵng (DUT - UD) với điểm GPA 3.5/4.0.",
          "Hiện tại, tôi đang là Software Developer Intern tại Digital Twin Group (MakeAI), trực tiếp tham gia phát triển các dự án thực tế về Quản lý Đầu tư công (chu trình 10 bước chuẩn nhà nước), nền tảng GIS bản đồ không gian (PostGIS) và tích hợp Agentic AI (OpenClaw) để tự động hóa quy trình nghiệp vụ.",
          "Tôi đam mê xây dựng các hệ thống phần mềm full-stack bền vững, làm chủ toàn diện từ thiết kế CSDL quan hệ (PostgreSQL, MySQL), kiến trúc backend (Java Spring Boot, Python Frappe, REST APIs), realtime STOMP WebSocket đến giao diện người dùng (Next.js, TypeScript, React, Vue 3) và quy trình đóng gói triển khai (Docker Compose, Linux).",
        ],
        bio: "Lập trình viên phát triển hệ thống web, backend và mobile với trọng tâm vào tính mở rộng, ổn định và hiệu năng cao.",
        bio2: "Có kinh nghiệm thực tế xây dựng kiến trúc backend với Java (Spring Boot), nghiệp vụ doanh nghiệp với Python (Frappe), giao diện hiện đại với Next.js & TypeScript, và ứng dụng Agentic AI để tự động hóa quy trình nghiệp vụ.",
        objective:
          "Trở thành một Software Engineer / Full-Stack Engineer chuyên nghiệp, kết hợp kiến trúc backend vững chắc với các giải pháp AI và dữ liệu thông minh nhằm tạo ra sản phẩm có giá trị thực tế cao.",
        location: "Đà Nẵng, Việt Nam",
        email: "tranvanhuy064206@gmail.com",
        availability: "Software Developer Intern @ Digital Twin Group (MakeAI)",
        statusTag: "Đang làm việc tại Digital Twin Group (MakeAI)",
        avatar: "",
        cv: "/cv.pdf",
        quickFacts: [
          { label: "Vị trí hiện tại", value: "Software Developer Intern" },
          { label: "Nơi công tác", value: "Digital Twin Group (MakeAI)" },
          { label: "Học vấn", value: "Đại học Bách Khoa (DUT) — GPA 3.5/4.0" },
          { label: "Chuyên ngành", value: "Khoa học Dữ liệu & Trí tuệ Nhân tạo" },
          { label: "Địa điểm", value: "Đà Nẵng, Việt Nam" },
        ],
        socials: {
          github: "https://github.com/tranvanhuy-dev-it",
          linkedin: "https://www.linkedin.com/in/huy-tran-van-5753b13b4",
          facebook: "https://facebook.com/tranvanhuy260306",
        },
      },
      stats: [
        { value: "3.5/4.0", label: "GPA Đại học Bách Khoa" },
        { value: "MakeAI", label: "Developer Intern" },
        { value: "5+", label: "Dự án thực tế" },
        { value: "Full-Stack", label: "Spring Boot & Next.js" },
      ],
      whatIBuild: [
        {
          icon: "🌐",
          title: "Ứng dụng Web Full-Stack",
          desc: "Xây dựng giao diện web hiện đại, phản hồi mượt mà và kiến trúc frontend hiệu năng cao với Next.js, TypeScript và Vue 3.",
          tags: ["Next.js", "TypeScript", "React", "Vue 3", "Tailwind CSS"]
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
          tags: ["Next.js", "TypeScript", "Bản đồ 2D/3D", "PostGIS", "Frappe"]
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
          engineeringDecisions: [
            {
              decision: "Kiến trúc phân tầng Clean/Layered trên Spring Boot",
              reason: "Phân tách rõ rệt giữa Controller, Service và Repository, đảm bảo tính toàn vẹn giao dịch tài chính (Transactional) cho các đợt phát hành hóa đơn phòng trọ."
            },
            {
              decision: "Đóng gói ứng dụng di động với Capacitor",
              reason: "Tận dụng 100% mã nguồn Vue 3 để build app di động Android/iOS mượt mà mà không phải duy trì 2 codebase riêng biệt."
            },
            {
              decision: "Giao thức STOMP qua WebSocket",
              reason: "Quản lý các topic chat riêng biệt theo từng phòng/khách thuê với xác thực JWT an toàn ngay từ bước handshake."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Tự động hóa chu kỳ xuất hóa đơn định kỳ hàng tháng với bảng giá lũy tiến bậc thang (điện/nước).",
              solution: "Thiết kế scheduled cron service xử lý batch transactional, tính toán biểu phí động và tự động tạo mã VietQR/PayOS cho từng hóa đơn."
            },
            {
              challenge: "Ứng dụng di động khi vào chế độ chạy nền hoặc rớt mạng làm ngắt kết nối WebSocket.",
              solution: "Xây dựng cơ chế heartbeat kiểm tra kết nối, tự động reconnect với exponential backoff và fallback polling tin nhắn chưa đọc khi mở lại ứng dụng."
            }
          ]
        },
        {
          id: 6,
          title: "BIMspace - Quản lý Hạ tầng Kỹ thuật",
          description:
            "Hệ thống quản lý hạ tầng kỹ thuật ứng dụng bản đồ tương tác 3D và 2D để quản lý tài sản và các nghiệp vụ vận hành hạ tầng.",
          longDesc:
            "Giải pháp số được xây dựng tại Digital Twin Group (MakeAI) nhằm quản lý hạ tầng kỹ thuật thông qua bản đồ tương tác 3D và 2D. Hệ thống hỗ trợ trực quan hóa và theo dõi tài sản trên bản đồ, đồng thời quản lý các nghiệp vụ vận hành (bảo trì, giám sát, kiểm tra) liên quan đến hạ tầng kỹ thuật.",
          tags: ["Next.js", "TypeScript", "Frappe", "Python", "PostgreSQL", "Bản đồ GIS"],
          category: "fullstack",
          time: "05-2026",
          demo: "#",
          image: "/bimspace.png",
          featured: true,
          internal: true,
          role: "Dự án trọng điểm tôi phụ trách tại Digital Twin Group (MakeAI) với vai trò lập trình viên chính, kế thừa và phát triển tiếp trên codebase sẵn có.",
          responsibilities: [
            "Phát triển frontend với Next.js & TypeScript dựa trên codebase có sẵn",
            "Phát triển backend dựa trên codebase có sẵn",
            "Thiết kế lại giao diện người dùng tối ưu trải nghiệm",
          ],
          engineeringDecisions: [
            {
              decision: "Tách rời giao diện Next.js và Backend Frappe",
              reason: "Mang lại trải nghiệm người dùng mượt mà khi tương tác bản đồ dữ liệu lớn, đồng thời tận dụng hệ thống quản lý DocType và phân quyền mạnh mẽ của Frappe."
            },
            {
              decision: "Truy vấn không gian theo khung nhìn (Viewport Bounding-Box)",
              reason: "Chỉ tải các đối tượng hạ tầng nằm trong khung nhìn hiển thị của bản đồ, giảm thiểu tiêu thụ RAM và chống tràn bộ nhớ trình duyệt."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Hiển thị hàng nghìn lớp hạ tầng kỹ thuật phức tạp trên bản đồ mà không gây giật lag FPS.",
              solution: "Áp dụng kỹ thuật gom cụm dữ liệu (Clustering), đơn giản hóa mức độ chi tiết (LOD) và đánh chỉ mục không gian GiST trên PostGIS."
            },
            {
              challenge: "Theo dõi và đồng bộ nhật ký bảo trì thiết bị giữa nhiều đơn vị liên quan.",
              solution: "Xây dựng Frappe Workflow State Machine với các bước phê duyệt chặt chẽ, tự động gửi cảnh báo và lưu vết lịch sử thao tác."
            }
          ]
        },
        {
          id: 7,
          title: "Hệ thống Quản lý Đầu tư Công",
          description:
            "Hệ thống số hóa quy trình đầu tư công 10 bước và tích hợp agentic AI để tự động hóa xử lý.",
          longDesc:
            "Giải pháp số được xây dựng tại Digital Twin Group (MakeAI) nhằm quản lý toàn bộ vòng đời đầu tư công. Hệ thống số hóa quy trình đầu tư công chuẩn 10 bước và tích hợp agentic AI (OpenClaw) để tự động hóa các bước xử lý, rút ngắn thời gian và nâng cao hiệu suất vận hành.",
          tags: [
            "Next.js",
            "TypeScript",
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
            "Tái cấu trúc và thiết kế lại giao diện hệ thống với Next.js & TypeScript",
            "Xây dựng chức năng Giải ngân",
            "Xây dựng chức năng Cài đặt hệ thống",
            "Xây dựng chức năng Danh mục hệ thống",
            "Xây dựng chức năng Thi công và Giám sát",
            "Xây dựng chức năng Tổng quan và Báo cáo",
            "Xây dựng chức năng Gói thầu",
          ],
          engineeringDecisions: [
            {
              decision: "Tích hợp tầng Agentic AI với OpenClaw",
              reason: "Tự động hóa bóc tách các chỉ số tài chính và điều khoản pháp lý từ hồ sơ dự án, giảm thiểu đáng kể thời gian rà soát thủ công."
            },
            {
              decision: "Kiến trúc mô-đun hóa độc lập",
              reason: "Tách bạch rõ các phân hệ Giải ngân, Thi công giám sát, Gói thầu và Danh mục để thuận tiện cho việc kiểm thử và mở rộng nghiệp vụ trong tương lai."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Ràng buộc pháp lý và điều kiện chuyển bước nghiêm ngặt giữa 10 giai đoạn trong vòng đời dự án.",
              solution: "Xây dựng validation engine đa tầng trong Frappe/Python với cơ chế khóa dữ liệu và lưu vết nhật ký kiểm toán (Audit Trail) bất biến."
            },
            {
              challenge: "Đảm bảo độ chính xác và tính giải trình khi AI hỗ trợ phân tích văn bản pháp lý.",
              solution: "Thiết kế pipeline kết hợp kiểm tra luật tĩnh (Rule-based) với mô hình OpenClaw AI và bắt buộc có bước xác nhận từ chuyên viên phụ trách."
            }
          ]
        },
        {
          id: 1,
          title: "Quản lý Y tế Phường Sơn Trà",
          description:
            "Hệ thống quản lý cơ sở dịch vụ y tế và kinh doanh được thiết kế cho chính quyền phường Sơn Trà.",
          longDesc:
            "Giải pháp chuyển đổi số hỗ trợ chính quyền địa phương giám sát và quản lý các cơ sở y tế tại phường Sơn Trà. Tích hợp bản đồ số tương tác định vị cơ sở, quản lý giấy phép kinh doanh, theo dõi kiểm tra chất lượng và điều hướng nhanh.",
          tags: ["React.js", "Next.js", "Frappe", "Python", "PostGIS", "PostgreSQL"],
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
            "Thiết kế cơ sở dữ liệu với PostGIS",
            "Thiết kế & phát triển backend",
            "Thiết kế giao diện người dùng với React.js & Next.js",
            "Tích hợp dịch vụ bản đồ số định vị cơ sở",
            "Thiết kế hệ thống dữ liệu không gian địa lý dựa trên PostGIS",
          ],
          engineeringDecisions: [
            {
              decision: "Sử dụng PostGIS cho lưu trữ và truy vấn không gian",
              reason: "Hỗ trợ tính toán khoảng cách thực địa (ST_DWithin) và xác định cơ sở thuộc ranh giới phường một cách chính xác tuyệt đối."
            },
            {
              decision: "Giao diện React.js & Next.js tối ưu trên thiết bị di động/tablet",
              reason: "Giúp cán bộ quản lý phường có thể tra cứu và cập nhật dữ liệu kiểm tra nhanh chóng ngay tại hiện trường."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Truy vấn lọc cơ sở theo bán kính và loại hình dịch vụ với thời gian phản hồi tức thì khi di chuyển bản đồ.",
              solution: "Tận dụng chỉ mục không gian GiST trên PostgreSQL kết hợp cache dữ liệu GeoJSON ở client, đưa tốc độ lọc xuống dưới 10ms."
            }
          ]
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
          engineeringDecisions: [
            {
              decision: "Spring Boot + JWT Stateless Auth",
              reason: "Quản lý phiên đăng nhập an toàn, phân quyền chi tiết giữa Sinh viên, Kiểm duyệt viên và Quản trị viên."
            },
            {
              decision: "Cây danh mục môn học phân cấp",
              reason: "Tổ chức tài liệu theo Trường - Khoa - Bộ môn giúp sinh viên dễ dàng tìm kiếm tài liệu chính xác."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Xử lý tải lên nhiều định dạng file tài liệu lớn và ngăn chặn tệp độc hại.",
              solution: "Xác thực MIME-type từ máy chủ, giới hạn dung lượng upload và tạo mã băm (hash) để phát hiện và loại bỏ tài liệu trùng lặp."
            }
          ]
        },
        {
          id: 3,
          title: "NexShop — Nền tảng Thương mại Điện tử & POS Thông minh",
          description:
            "Dự án cá nhân full-stack kết hợp cửa hàng online và trạm POS, xây dựng hoàn toàn bằng Next.js, TypeScript và triển khai tại vattudongkha.io.vn.",
          longDesc:
            "NexShop là nền tảng thương mại điện tử cá nhân full-stack kết hợp cửa hàng trực tuyến với hệ thống POS (Point of Sale). Xây dựng hoàn toàn bằng Next.js (App Router), TypeScript, sử dụng Prisma ORM với PostgreSQL để lưu trữ dữ liệu và Google OAuth để xác thực. Tính năng bao gồm danh mục sản phẩm, giỏ hàng, quản lý đơn hàng, luồng thanh toán POS và trang quản trị phân tích doanh thu.",
          tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Google OAuth", "Tailwind CSS"],
          category: "fullstack",
          time: "12-2025 - 05-2026",
          demo: "https://vattudongkha.io.vn",
          image: "/pbl3.png",
          featured: true,
          role: "Dự án cá nhân do tôi tự thiết kế và xây dựng hoàn toàn một mình, từ thiết kế CSDL đến triển khai thực tế.",
          responsibilities: [
            "Thiết kế cơ sở dữ liệu với Prisma & PostgreSQL",
            "Xây dựng ứng dụng full-stack với Next.js App Router & TypeScript",
            "Tích hợp xác thực Google OAuth",
            "Xây dựng luồng giao dịch & thanh toán POS",
            "Thiết kế trang quản trị phân tích doanh thu",
          ],
          engineeringDecisions: [
            {
              decision: "Next.js App Router với Server Actions",
              reason: "Giảm dung lượng bundle JavaScript phía client và bảo mật tuyệt đối các thao tác tạo đơn hàng và thanh toán."
            },
            {
              decision: "Prisma ORM với PostgreSQL",
              reason: "Đảm bảo tính an toàn kiểu dữ liệu (Type-safe) xuyên suốt từ CSDL đến UI, ngăn chặn lỗi runtime khi xử lý tồn kho."
            }
          ],
          challengesAndSolutions: [
            {
              challenge: "Đồng bộ số lượng tồn kho theo thời gian thực giữa đơn đặt online và giao dịch mua trực tiếp tại quầy POS.",
              solution: "Sử dụng Prisma interactive transaction ($transaction) với cơ chế khóa dòng (Row-level locking) khi trừ tồn kho để loại bỏ race condition."
            }
          ]
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
            "BIMspace (Quản lý Hạ tầng Kỹ thuật): đảm nhận vai trò lập trình viên chính, mở rộng frontend với Next.js & TypeScript và backend trên codebase có sẵn.",
            "Quản lý Y tế Phường Sơn Trà: tự xây dựng và làm chủ toàn bộ hệ thống trong quá trình training thực tập — thiết kế CSDL PostGIS, backend, giao diện React.js & Next.js, tích hợp bản đồ.",
            "Quản lý Đầu tư Công: tham gia dự án khi đã hoàn thành giai đoạn đầu, tiếp tục phát triển quy trình đầu tư công 10 bước, tích hợp agentic AI (OpenClaw), tái cấu trúc giao diện Next.js & TypeScript, và triển khai các chức năng Giải ngân, Cài đặt hệ thống, Danh mục hệ thống, Thi công và Giám sát, Tổng quan và Báo cáo, Gói thầu.",
            "Thiết kế cơ sở dữ liệu, tối ưu hóa hiệu năng truy vấn SQL và triển khai phân quyền bảo mật vai trò cho các dự án.",
            "Cộng tác làm việc trong môi trường Agile/Scrum, báo cáo hàng ngày và kiểm duyệt mã nguồn.",
          ],
          tech: [
            "Next.js",
            "TypeScript",
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
        about: "Về tôi",
        solutions: "Giải pháp",
        skills: "Kỹ năng",
        projects: "Dự án",
        experience: "Kinh nghiệm",
        education: "Học vấn",
        contact: "Liên hệ",
        contactBtn: "Liên hệ tôi",

        // Sections
        aboutTitle: "Về tôi",
        aboutSubtitle: "Hành trình & Mục tiêu",
        aboutDesc: "Triết lý kỹ thuật, hành trình phát triển và mục tiêu nghề nghiệp của tôi",
        solutionsTitle: "Lĩnh vực chuyên môn",
        solutionsSubtitle: "Giải pháp phần mềm",
        solutionsDesc: "Các mảng sản phẩm và năng lực kỹ thuật tôi trực tiếp xây dựng và bàn giao",
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
        downloadCv: "Tải CV",
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
          "Cơ hội việc làm chính thức / Bán thời gian",
          "Thư mời tham gia phỏng vấn tuyển dụng",
          "Hợp tác dự án Freelance / Hợp đồng",
          "Tư vấn & Phát triển ứng dụng Web / Full-Stack",
          "Tự động hóa quy trình nghiệp vụ & Agentic AI",
          "Kết nối & Trao đổi chuyên môn Công nghệ",
          "Thắc mắc chung / Cần hỗ trợ",
          "Chủ đề khác",
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
