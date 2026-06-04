import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    // ===================== PERSONAL INFO =====================
    personal: {
      name: "Trần Văn Huy",
      title: "Information Technology student",
      taglines: [
        "Building Modern Web Applications",
        "Always Learning New Technologies",
        "Full-Stack Developer",
      ],
      bio: `Hello! I am an Information Technology student with a strong passion for developing modern web applications. 
      I love exploring and applying technologies across the entire stack—from frontend to backend—to build meaningful products, 
      while always prioritizing clean code quality and optimal user experiences.`,
      bio2: `I am particularly interested in Digital Transformation and aim to leverage technology 
      to solve real-world problems for businesses and the community. 
      I proactively learn, continuously refine my skills, and build hands-on experience through academic work, personal projects, and self-study.`,
      objective: `To become a professional Full-Stack Engineer with a specialization in AI and Data Science. 
      I am eager to participate in real-world projects to enhance my technical skills, 
      gain product development experience, and apply modern technologies to deliver effective digital transformation 
      solutions for businesses and the community.`,
      location: "Da Nang, Vietnam",
      email: "tranvanhuy064206@gmail.com",
      availability: "Available for Opportunities",
      avatar: "/avt.jpg", // thay bằng đường dẫn ảnh thật
      cv: "/cv.pdf",
      socials: {
        github: "https://github.com/tranvanhuy-dev-it",
        linkedin: "https://www.linkedin.com/in/huy-tran-van-5753b13b4",
        //twitter: 'https://twitter.com/yourusername',
        facebook: "https://facebook.com/tranvanhuy260306",
      },
    },

    // ===================== STATS =====================
    stats: [
      { value: "AI & DS", label: "Focus Area" },
      { value: "5+", label: "Projects Completed" },
      { value: "15+", label: "Technologies Used" },
      { value: "100%", label: "Passion & Creativity" },
    ],

    // ===================== SKILLS =====================
    skillCategories: [
      {
        id: "frontend",
        label: "Frontend",
        icon: "🎨",
        skills: [
          {
            name: "Vue.js",
            level: 95,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
          },
          {
            name: "React",
            level: 60,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          },
          {
            name: "TypeScript",
            level: 65,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          },
          {
            name: "JavaScript",
            level: 95,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          },
          {
            name: "Tailwind CSS",
            level: 90,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          },
          {
            name: "HTML/CSS",
            level: 95,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          },
        ],
      },
      {
        id: "backend",
        label: "Backend",
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
            level: 65,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
          },
          {
            name: "Socket.io",
            level: 75,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
          },
        ],
      },
      {
        id: "database",
        label: "Database",
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
        label: "DevOps & Tools",
        icon: "🛠️",
        skills: [
          {
            name: "Git/GitHub",
            level: 90,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          },
          {
            name: "Docker",
            level: 75,
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
            level: 60,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
          },
          {
            name: "VS Code / VS",
            level: 95,
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          },
          {
            name: "Antigravity (AI)",
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
        label: "AI & Data Science",
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

    // ===================== PROJECTS =====================
    projects: [
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
        // github: 'https://github.com/tranvanhuy-dev-it/SonTraHealthManagement',
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
      {
        id: 4,
        title: "HVAC Job Management System",
        description:
          "A job management and technician dispatch system for HVAC installation and maintenance services.",
        longDesc:
          "A complete workflow solution for refrigeration businesses, comprising a web-based administration panel and a mobile application for technicians to receive shifts and update progress directly from work sites.",
        tags: [".NET Core", "C#", "SQL Server", "Mobile App"],
        category: "fullstack",
        time: "12-2025 - 02-2026",
        github:
          "https://github.com/tranvanhuy-dev-it/hvac-job-management-system-dotnet-api",
        demo: "#",
        image: "/hvac.png",
        featured: false,
      },
    ],

    experiences: [
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
      // {
      //   id: 2,
      //   company: 'Câu lạc bộ Tin học / Lập trình trường',
      //   position: 'Thành viên Ban Kỹ thuật',
      //   period: '2024 – Nay',
      //   duration: 'Hoạt động ngoại khóa',
      //   description: [
      //     'Tham gia chia sẻ kinh nghiệm học tập, hướng dẫn và giải đáp thắc mắc về lập trình căn bản (C/C++, OOP) cho các bạn sinh viên khóa dưới.',
      //     'Hỗ trợ công tác tổ chức các sự kiện học thuật, kỳ thi lập trình cấp trường và các buổi workshop chia sẻ công nghệ.',
      //     'Cùng các thành viên nghiên cứu công nghệ mới, xây dựng các sản phẩm phần mềm nhỏ phục vụ các hoạt động của câu lạc bộ.'
      //   ],
      //   tech: ['C/C++', 'OOP', 'Data Structures', 'Git', 'Algorithms'],
      //   type: 'club',
      // },
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
        tech: ["Frappe", "Vue 3", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
        type: "self-study",
      },
    ],

    // ===================== EDUCATION =====================
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
      // {
      //   id: 2,
      //   school: 'Udemy / FreeCodeCamp',
      //   degree: 'Full-Stack Web Development Bootcamp',
      //   period: '2021',
      //   gpa: null,
      //   description: 'Chứng chỉ phát triển web full-stack với JavaScript, React, Node.js và MongoDB.',
      //   type: 'certificate',
      // },
      // {
      //   id: 3,
      //   school: 'AWS',
      //   degree: 'AWS Certified Cloud Practitioner',
      //   period: '2023',
      //   gpa: null,
      //   description: 'Chứng chỉ nền tảng về cloud computing và dịch vụ AWS.',
      //   type: 'certificate',
      // },
    ],

    // ===================== UI STATE =====================
    activeSection: "hero",
    projectFilter: "all",
    activeSkillCategory: "frontend",
  }),

  getters: {
    filteredProjects: (state) => {
      if (state.projectFilter === "all") return state.projects;
      return state.projects.filter((p) => p.category === state.projectFilter);
    },
    activeSkills: (state) => {
      const cat = state.skillCategories.find(
        (c) => c.id === state.activeSkillCategory,
      );
      return cat ? cat.skills : [];
    },
  },

  actions: {
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
