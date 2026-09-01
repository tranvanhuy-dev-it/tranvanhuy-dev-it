import personalData from './personal.json'
import skillsData from './skills.json'
import experiencesData from './experiences.json'
import educationData from './education.json'
import whatIBuildData from './whatIBuild.json'
import statsData from './stats.json'
import uiData from './ui.json'

// Auto-scan all project JSON configs from arbitrary folder names
const projectFiles = import.meta.glob('./projects/*/project.json', { eager: true })

// Auto-scan all project images from their respective images/ subdirectories
const projectImages = import.meta.glob('./projects/*/images/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default'
})

// Map images to their folder slug
const imagesByFolder = {}
for (const path in projectImages) {
  // Path format: ./projects/[folderName]/images/[filename]
  const match = path.match(/\.\/projects\/([^/]+)\/images\//)
  if (match && match[1]) {
    const folder = match[1]
    if (!imagesByFolder[folder]) {
      imagesByFolder[folder] = []
    }
    imagesByFolder[folder].push(projectImages[path])
  }
}

// Build raw projects list with auto-attached images and metadata
const rawProjects = []
for (const path in projectFiles) {
  const config = projectFiles[path].default || projectFiles[path]
  if (config.hidden) continue

  const match = path.match(/\.\/projects\/([^/]+)\//)
  const folder = match ? match[1] : (config.slug || 'project')
  const images = imagesByFolder[folder] || []
  const coverImage = images.length > 0 ? images[0] : (config.image || '/logo.png')

  rawProjects.push({
    ...config,
    slug: folder,
    image: coverImage,
    images: images,
    // Flag to determine if the project should be displayed initially before expanding
    showInitial: config.showInitial !== undefined ? Boolean(config.showInitial) : (config.featured ?? true),
    order: config.order !== undefined ? Number(config.order) : 999
  })
}

// Sort projects dynamically by order (ascending), then featured, then id (descending)
rawProjects.sort((a, b) => {
  if (a.order !== b.order) {
    return a.order - b.order
  }
  if (a.featured && !b.featured) return -1
  if (!a.featured && b.featured) return 1
  return (b.id || 0) - (a.id || 0)
})

export function loadPortfolioData() {
  // Build localized data structure
  const buildLocaleData = (lang) => {
    return {
      personal: {
        email: personalData.email,
        location: personalData.location,
        avatar: personalData.avatar,
        cv: personalData.cv,
        website: personalData.website,
        socials: personalData.socials,
        ...personalData[lang]
      },
      stats: statsData.map(s => ({
        value: s.value,
        label: s[lang]?.label || s.value
      })),
      whatIBuild: whatIBuildData.map(w => ({
        icon: w.icon,
        tags: w.tags,
        title: w[lang]?.title || '',
        desc: w[lang]?.desc || ''
      })),
      projects: rawProjects.map(p => ({
        id: p.id,
        slug: p.slug,
        category: p.category,
        featured: p.featured,
        showInitial: p.showInitial,
        order: p.order,
        internal: p.internal,
        time: p.time,
        github: p.github,
        githubBackend: p.githubBackend,
        demo: p.demo,
        video: p.video,
        tags: p.tags,
        image: p.image,
        images: p.images,
        title: p[lang]?.title || p.title || '',
        description: p[lang]?.description || p.description || '',
        longDesc: p[lang]?.longDesc || p.longDesc || '',
        role: p[lang]?.role || p.role || '',
        responsibilities: p[lang]?.responsibilities || p.responsibilities || [],
        engineeringDecisions: p[lang]?.engineeringDecisions || p.engineeringDecisions || [],
        challengesAndSolutions: p[lang]?.challengesAndSolutions || p.challengesAndSolutions || []
      })),
      experiences: experiencesData.map(e => ({
        id: e.id,
        company: e.company,
        period: e.period,
        type: e.type,
        tech: e.tech,
        position: e[lang]?.position || '',
        duration: e[lang]?.duration || '',
        description: e[lang]?.description || []
      })),
      education: educationData.list.map(edu => ({
        id: edu.id,
        period: edu.period,
        gpa: edu.gpa,
        type: edu.type,
        logo: edu.logo,
        school: edu[lang]?.school || '',
        degree: edu[lang]?.degree || '',
        description: edu[lang]?.description || ''
      })),
      academicFocus: educationData.academicFocus[lang] || {},
      ui: uiData[lang] || {}
    }
  }

  return {
    skillCategoriesList: skillsData,
    en: buildLocaleData('en'),
    vi: buildLocaleData('vi')
  }
}
