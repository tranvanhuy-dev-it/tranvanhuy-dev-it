import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    locale: "vi", // default to Vietnamese
    theme: localStorage.getItem("theme") || "dark",
    activeSection: "hero",
    projectFilter: "all",
    activeSkillCategory: "frontend",

    skillCategoriesList: [
      {
        id: "frontend",
        labels: { en: "Frontend", vi: "Frontend" },
        icon: "🎨",
        skills: [
          {
            name: "Vue.js",
            level: 65,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
          },
          {
            name: "React",
            level: 60,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          },
          {
            name: "TypeScript",
            level: 45,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          },
          {
            name: "JavaScript",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          },
          {
            name: "Tailwind CSS",
            level: 70,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          },
          {
            name: "HTML/CSS",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          },
          {
            name: "Capacitor",
            level: 65,
            logo: "https://cdn.simpleicons.org/capacitor/119EFF",
          },
        ],
      },
      {
        id: "backend",
        labels: { en: "Backend", vi: "Backend" },
        icon: "⚙️",
        skills: [
          {
            name: ".NET (NET Framework)",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
          },
          {
            name: "Java (Spring Boot)",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
          },
          {
            name: "Python",
            level: 70,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          },
          {
            name: "REST API",
            level: 90,
            logo: "https://cdn.simpleicons.org/postman/FF6C37",
          },
          {
            name: "GraphQL",
            level: 45,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
          },
          {
            name: "Socket.io",
            level: 55,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
          },
          {
            name: "WebSocket",
            level: 50,
            logo: "https://cdn.simpleicons.org/websocket/62B5E5",
          },
        ],
      },
      {
        id: "database",
        labels: { en: "Database", vi: "Cơ sở dữ liệu" },
        icon: "🗄️",
        skills: [
          {
            name: "PostgreSQL",
            level: 80,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          },
          {
            name: "MongoDB",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
          },
          {
            name: "MySQL",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          },
          {
            name: "SQL Server",
            level: 95,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
          },
        ],
      },
      {
        id: "devops",
        labels: { en: "DevOps & Tools", vi: "DevOps & Công cụ" },
        icon: "🛠️",
        skills: [
          {
            name: "Git/GitHub",
            level: 90,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          },
          {
            name: "Docker",
            level: 55,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          },
          {
            name: "Linux",
            level: 72,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
          },
          {
            name: "Nginx",
            level: 65,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
          },
          {
            name: "CI/CD",
            level: 20,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
          },
          {
            name: "VS Code / VS",
            level: 95,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          },
          {
            name: "Antigravity",
            level: 90,
            logo: "https://cdn.simpleicons.org/googledeepmind/7c3aed",
          },
          {
            name: "IntelliJ IDEA",
            level: 85,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
          },
        ],
      },
      {
        id: "ai_ds",
        labels: { en: "AI & Data Science", vi: "AI & Khoa học dữ liệu" },
        icon: "🧠",
        skills: [
          {
            name: "Machine Learning",
            level: 40,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
          },
          {
            name: "Computer Vision",
            level: 45,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
          },
          {
            name: "Pandas",
            level: 65,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
          },
          {
            name: "NumPy",
            level: 65,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
          },
        ],
      },
    ],

    en: {
      personal: {
        name: "Trần Văn Huy",
        title: "Information Technology Student",
        taglines: [
          "Building Modern Web Applications",
          "Always Learning New Technologies",
          "Full-Stack Developer",
        ],
        bio: "Hello! I am an Information Technology student with a strong passion for developing modern web applications. I love exploring and applying technologies across the entire stack—from frontend to backend—to build meaningful products, while always prioritizing clean code quality and optimal user experiences.",
        bio2: "I am particularly interested in Digital Transformation and aim to leverage technology to solve real-world problems for businesses and the community. I proactively learn, continuously refine my skills, and build hands-on experience through academic work, personal projects, and self-study.",
        objective:
          "To become a professional Full-Stack Engineer with a specialization in AI and Data Science. I am eager to participate in real-world projects to enhance my technical skills, gain product development experience, and apply modern technologies to deliver effective digital transformation solutions for businesses and the community.",
        location: "Da Nang, Vietnam",
        email: "tranvanhuy064206@gmail.com",
        availability: "Intern at DTG - MakeAI",
        avatar: "/avt.jpg",
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
          demo: "https://smart-rent.tranvanhuy.io.vn",
          image: "/qlpt.png",
          featured: true,
        },
        {
          id: 6,
          title: "BIMspace - Technical Infrastructure Management",
          description:
            "A technical infrastructure management system applying interactive 3D and 2D maps to manage assets and infrastructure operations.",
          longDesc:
            "A digital solution built at MakeAI to manage technical infrastructure using interactive 3D and 2D maps. The system enables asset visualization and tracking on the map, and manages the operational workflows (maintenance, monitoring, inspection) related to technical infrastructure.",
          tags: ["JavaScript", "Frappe", "React.js", "Python", "PostgreSQL"],
          category: "fullstack",
          time: "05-2026",
          demo: "#",
          image: "/bimspace.png",
          featured: true,
        },
        {
          id: 1,
          title: "SonTra Health Management",
          description:
            "A management system for medical service facilities and businesses designed for the Son Tra district local government.",
          longDesc:
            "A digital solution built to help local authorities monitor and manage medical and health-related establishments in Son Tra. It integrates an interactive digital map for geolocating facilities, managing licensing information, tracking quality inspections, and enabling quick navigation.",
          tags: ["JavaScript", "Frappe", "React.js", "Python", "PostgreSQL"],
          category: "fullstack",
          time: "05-2026",
          demo: "#",
          image: "/sonTraHealth.png",
          featured: true,
        },
        {
          id: 2,
          title: "StudyHub",
          description:
            "A multimedia learning document and academic resource sharing platform for university students.",
          longDesc:
            "A collaborative hub that enables students to upload and share learning materials, lecture notes, and course resources. Features user access control, smart content moderation, and advanced search functionality.",
          tags: ["Vue 3", "Spring Boot", "MySQL", "JWT", "Vite"],
          category: "fullstack",
          time: "04-2026",
          github: "https://github.com/tranvanhuy-dev-it/StudyHub-Client",
          demo: "#",
          image: "/studyHub.png",
          featured: true,
        },
        {
          id: 3,
          title: "PBL3 - Electronic E-Commerce",
          description:
            "An e-commerce web application specializing in electronic components and equipment sales.",
          longDesc:
            "A comprehensive electronics e-commerce system featuring shopping cart integration, order placement and tracking, purchase history, and an administrative dashboard for sales and inventory analytics.",
          tags: ["Vue.js", "ASP.NET Core", "SQL Server", "Entity Framework"],
          category: "fullstack",
          time: "12-2025 - 05-2026",
          github: "https://github.com/tranvanhuy-dev-it/pbl3-web-api.git",
          demo: "#",
          image: "/pbl3.png",
          featured: true,
        },
      ],
      experiences: [
        {
          id: 4,
          company: "DTG - MakeAI",
          position: "Full-Stack Developer Intern",
          period: "05/2026 – Present",
          duration: "Internship",
          description: [
            "Developed 'BIMspace', a technical infrastructure management system applying interactive 3D and 2D maps for asset management and infrastructure operations.",
            "Developed the 'SonTra Health Management' system for local authorities to monitor and locate medical establishments using Frappe, React.js, Python, and PostgreSQL.",
            "Building a multi-platform Boarding House Management System featuring Google OAuth2, real-time chat (WebSocket), reporting, and Capacitor-based mobile app.",
            "Designed database schemas, optimized SQL query performance, and implemented role-based authorization.",
            "Collaborated in Agile sprint planning, daily stand-ups, and code review processes to ensure code quality.",
          ],
          tech: [
            "React.js",
            "Vue 3",
            "Capacitor",
            "Java (Spring Boot)",
            "Python",
            "Frappe",
            "WebSocket",
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
            "Specialization in Data Science and Artificial Intelligence",
          type: "degree",
          logo: "/dut.png",
        },
      ],
      ui: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        contactBtn: "Contact Me",

        // Sections
        aboutTitle: "About Me",
        aboutSubtitle: "My Profile",
        aboutDesc: "A brief overview of my profile and journey",
        skillsTitle: "Skills",
        skillsSubtitle: "Tech Stack",
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
      },
    },

    vi: {
      personal: {
        name: "Trần Văn Huy",
        title: "Sinh viên Công nghệ thông tin",
        taglines: [
          "Xây dựng ứng dụng Web hiện đại",
          "Luôn học hỏi công nghệ mới",
          "Lập trình viên Full-Stack",
        ],
        bio: "Xin chào! Tôi là một sinh viên ngành Công nghệ Thông tin với niềm đam mê mạnh mẽ trong việc phát triển các ứng dụng web hiện đại. Tôi thích tìm tòi và áp dụng các công nghệ fullstack từ frontend đến backend để xây dựng những sản phẩm có ý nghĩa, đồng thời luôn ưu tiên chất lượng mã nguồn sạch và trải nghiệm người dùng tối ưu.",
        bio2: "Tôi đặc biệt quan tâm đến lĩnh vực Chuyển đổi Số và hướng tới việc áp dụng công nghệ để giải quyết các bài toán thực tế cho doanh nghiệp và cộng đồng. Tôi luôn chủ động học hỏi, liên tục trau dồi kỹ năng và tích lũy kinh nghiệm thực tế qua các đề án trường học, dự án cá nhân và tự nghiên cứu.",
        objective:
          "Trở thành một Kỹ sư Full-Stack chuyên nghiệp với định hướng nghiên cứu sâu về AI và Khoa học dữ liệu. Tôi mong muốn được tham gia vào các dự án thực tế để nâng cao kỹ năng kỹ thuật, tích lũy kinh nghiệm phát triển sản phẩm và áp dụng các công nghệ hiện đại nhằm mang lại những giải pháp chuyển đổi số hiệu quả cho doanh nghiệp và cộng đồng.",
        location: "Đà Nẵng, Việt Nam",
        email: "tranvanhuy064206@gmail.com",
        availability: "Thực tập sinh tại DTG - MakeAI",
        avatar: "/avt.jpg",
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
          demo: "https://smart-rent.tranvanhuy.io.vn",
          image: "/qlpt.png",
          featured: true,
        },
        {
          id: 6,
          title: "BIMspace - Quản lý Hạ tầng Kỹ thuật",
          description:
            "Hệ thống quản lý hạ tầng kỹ thuật ứng dụng bản đồ tương tác 3D và 2D để quản lý tài sản và các nghiệp vụ vận hành hạ tầng.",
          longDesc:
            "Giải pháp số được xây dựng tại MakeAI nhằm quản lý hạ tầng kỹ thuật thông qua bản đồ tương tác 3D và 2D. Hệ thống hỗ trợ trực quan hóa và theo dõi tài sản trên bản đồ, đồng thời quản lý các nghiệp vụ vận hành (bảo trì, giám sát, kiểm tra) liên quan đến hạ tầng kỹ thuật.",
          tags: ["JavaScript", "Frappe", "React.js", "Python", "PostgreSQL"],
          category: "fullstack",
          time: "05-2026",
          demo: "#",
          image: "/bimspace.png",
          featured: true,
        },
        {
          id: 1,
          title: "Quản lý Y tế Quận Sơn Trà",
          description:
            "Hệ thống quản lý cơ sở dịch vụ y tế và kinh doanh được thiết kế cho chính quyền quận Sơn Trà.",
          longDesc:
            "Giải pháp chuyển đổi số hỗ trợ chính quyền địa phương giám sát và quản lý các cơ sở y tế tại quận Sơn Trà. Tích hợp bản đồ số tương tác định vị cơ sở, quản lý giấy phép kinh doanh, theo dõi kiểm tra chất lượng và điều hướng nhanh.",
          tags: ["JavaScript", "Frappe", "React.js", "Python", "PostgreSQL"],
          category: "fullstack",
          time: "05-2026",
          demo: "#",
          image: "/sonTraHealth.png",
          featured: true,
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
          demo: "#",
          image: "/studyHub.png",
          featured: true,
        },
        {
          id: 3,
          title: "PBL3 - Thương mại điện tử Linh kiện",
          description:
            "Ứng dụng web thương mại điện tử chuyên cung cấp linh kiện và thiết bị điện tử.",
          longDesc:
            "Hệ thống thương mại điện tử toàn diện tích hợp giỏ hàng, đặt hàng và theo dõi đơn hàng, lịch sử mua hàng và trang quản trị phân tích doanh thu và kho hàng.",
          tags: ["Vue.js", "ASP.NET Core", "SQL Server", "Entity Framework"],
          category: "fullstack",
          time: "12-2025 - 05-2026",
          github: "https://github.com/tranvanhuy-dev-it/pbl3-web-api.git",
          demo: "#",
          image: "/pbl3.png",
          featured: true,
        },
      ],
      experiences: [
        {
          id: 4,
          company: "DTG - MakeAI",
          position: "Thực tập sinh Lập trình viên Full-Stack",
          period: "05/2026 – Hiện tại",
          duration: "Thực tập thực tế",
          description: [
            "Phát triển 'BIMspace', hệ thống quản lý hạ tầng kỹ thuật ứng dụng bản đồ tương tác 3D và 2D để quản lý tài sản và các nghiệp vụ vận hành hạ tầng.",
            "Phát triển hệ thống 'Quản lý Y tế Quận Sơn Trà' giúp chính quyền giám sát các cơ sở y tế bằng Frappe, React.js, Python và PostgreSQL.",
            "Xây dựng Hệ thống Quản lý Phòng trọ Đa nền tảng tích hợp Google OAuth2, chat realtime (WebSocket), xuất báo cáo và đóng gói mobile bằng Capacitor.",
            "Thiết kế cơ sở dữ liệu, tối ưu hóa hiệu năng truy vấn SQL và triển khai phân quyền bảo mật vai trò.",
            "Cộng tác làm việc trong môi trường Agile/Scrum, báo cáo hàng ngày và kiểm duyệt mã nguồn.",
          ],
          tech: [
            "React.js",
            "Vue 3",
            "Capacitor",
            "Java (Spring Boot)",
            "Python",
            "Frappe",
            "WebSocket",
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
      ui: {
        home: "Trang chủ",
        about: "Giới thiệu",
        skills: "Kỹ năng",
        projects: "Dự án",
        experience: "Kinh nghiệm",
        education: "Học vấn",
        contact: "Liên hệ",
        contactBtn: "Liên hệ tôi",

        // Sections
        aboutTitle: "Giới thiệu",
        aboutSubtitle: "Hồ sơ của tôi",
        aboutDesc: "Tổng quan sơ lược về bản thân và hành trình phát triển",
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
      },
    },
  }),

  getters: {
    personal: (state) => state[state.locale].personal,
    stats: (state) => state[state.locale].stats,
    projects: (state) => state[state.locale].projects,
    experiences: (state) => state[state.locale].experiences,
    education: (state) => state[state.locale].education,
    ui: (state) => state[state.locale].ui,

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
