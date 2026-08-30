<template>
  <section id="hero" class="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-14 pb-8 sm:pt-24 sm:pb-20 px-4 sm:px-6 overflow-hidden">
    <!-- Subtle ambient background glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl bg-blue-600/30"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full opacity-15 blur-3xl bg-cyan-500/20"></div>
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto min-w-0">
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-w-0 w-full">
        
        <!-- Left: Introduction & CTAs (7 cols) -->
        <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left fade-left min-w-0 w-full">
          
          <!-- Single clean status badge -->
          <div class="inline-flex items-center mb-3 max-w-full">
            <span class="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium bg-blue-600/10 border border-blue-500/20 text-blue-400 leading-none">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span class="whitespace-nowrap">{{ store.personal.availability }}</span>
            </span>
          </div>

          <!-- Name Heading -->
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white light:text-slate-900 leading-[1.15] break-words">
            {{ store.personal.name }}
          </h1>

          <!-- Professional Role Subtitle -->
          <div class="mt-2 sm:mt-2.5 flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 flex-wrap text-sm sm:text-lg lg:text-xl font-medium tracking-tight break-words">
            <span class="text-white light:text-slate-900 font-bold">
              {{ store.locale === 'vi' ? 'Lập trình viên' : 'Software Developer' }}
            </span>
            <span class="text-slate-600 font-normal">|</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 font-mono font-semibold">
              Full-Stack & Applied AI
            </span>
          </div>

          <!-- Consolidated Rich Bio & Career Objective -->
          <div class="mt-3.5 sm:mt-4 space-y-2 text-slate-300 light:text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl min-w-0 w-full break-words">
            <p class="break-words">
              {{ store.locale === 'vi' 
                  ? 'Tôi là sinh viên năm 3 ngành Công nghệ Thông tin (Khoa học Dữ liệu & AI) tại Trường Đại học Bách Khoa – ĐH Đà Nẵng (GPA 3.5/4.0), đồng thời là Lập trình viên tại Digital Twin Group (MakeAI). Chuyên sâu về kiến trúc Java (Spring Boot), React & Next.js, framework Python (Frappe), và tích hợp Agentic AI (OpenClaw) vào tự động hóa quy trình nghiệp vụ số.' 
                  : 'I am a 3rd-year Information Technology student (Data Science & AI) at Da Nang University of Technology (GPA 3.5/4.0), and a Software Developer at Digital Twin Group (MakeAI). Focused on Java (Spring Boot), React & Next.js, Python (Frappe), and Agentic AI workflow automation.' 
              }}
            </p>
            <p class="text-slate-300 light:text-slate-600 break-words">
              <strong class="text-white light:text-slate-900 font-semibold">{{ store.locale === 'vi' ? 'Mục tiêu nghề nghiệp:' : 'Career Objective:' }}</strong>
              {{ ' ' + store.personal.objective }}
            </p>
          </div>

          <!-- Quick Highlight Badges (Ultra compact on mobile to stay in 1 clean row) -->
          <div class="mt-4 flex flex-nowrap sm:flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono max-w-full overflow-x-auto no-scrollbar">
            <span class="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-850/90 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-slate-200 light:text-slate-700 whitespace-nowrap shadow-sm hover:border-blue-500/50 transition-colors shrink-0">
              <span>🎓</span>
              <span class="sm:hidden">DUT 3.5</span>
              <span class="hidden sm:inline">DUT — GPA 3.5/4.0</span>
            </span>
            <span class="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-850/90 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-slate-200 light:text-slate-700 whitespace-nowrap shadow-sm hover:border-blue-500/50 transition-colors shrink-0">
              <span>🏢</span>
              <span class="sm:hidden">MakeAI</span>
              <span class="hidden sm:inline">Digital Twin Group (MakeAI)</span>
            </span>
            <span class="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-850/90 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-slate-200 light:text-slate-700 whitespace-nowrap shadow-sm hover:border-blue-500/50 transition-colors shrink-0">
              <span>📍</span>
              <span class="sm:hidden">Đà Nẵng</span>
              <span class="hidden sm:inline">Đà Nẵng, Việt Nam</span>
            </span>
          </div>

          <!-- Unified Action Row: Primary CTA + Download CV + Socials -->
          <div class="mt-6 sm:mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 min-w-0 w-full">
            <a
              href="#projects"
              @click.prevent="scrollTo('#projects')"
              class="btn-primary text-xs sm:text-sm px-4 sm:px-5 py-2.5 inline-flex items-center justify-center gap-1.5 sm:gap-2 flex-1 sm:flex-initial text-center"
              id="hero-view-projects"
            >
              <span>{{ store.ui.viewProjects || 'Xem dự án' }}</span>
              <span>→</span>
            </a>

            <a
              :href="store.personal.cv"
              download
              class="btn-outline text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 inline-flex items-center justify-center gap-1.5 sm:gap-2 flex-1 sm:flex-initial text-center"
              id="hero-download-cv"
            >
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span>{{ store.ui.downloadCv || 'Tải CV' }}</span>
            </a>

            <!-- Social Links -->
            <div class="flex items-center gap-1.5 w-full sm:w-auto justify-center lg:justify-start mt-1 sm:mt-0">
              <a
                v-for="(url, platform) in store.personal.socials"
                :key="platform"
                :href="url"
                target="_blank"
                rel="noopener"
                class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-850/80 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                :aria-label="platform"
              >
                <IconGithub v-if="platform === 'github'" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                <IconLinkedin v-else-if="platform === 'linkedin'" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                <IconFacebook v-else-if="platform === 'facebook'" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              </a>
              <a
                :href="`mailto:${store.personal.email}`"
                class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-850/80 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <!-- Right: Developer Terminal / Executive Profile Card (5 cols) -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end fade-right w-full min-w-0">
          <div class="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden font-mono text-[11px] sm:text-xs">
            
            <!-- Terminal Header -->
            <div class="px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-1.5 sm:gap-2">
                <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span class="text-slate-400 text-[10px] sm:text-[11px]">tranvanhuy.ts</span>
              <span class="text-slate-600 text-[9px] sm:text-[10px]">UTF-8</span>
            </div>

            <!-- Terminal Code Body -->
            <div class="p-3.5 sm:p-5 space-y-2 sm:space-y-3 leading-relaxed text-slate-300 overflow-x-auto">
              <div>
                <span class="text-purple-400">const</span> <span class="text-blue-400">developer</span>: <span class="text-yellow-400">SoftwareEngineer</span> = {
              </div>
              
              <div class="pl-3 sm:pl-4 space-y-1 sm:space-y-1.5">
                <div>
                  <span class="text-slate-400">name:</span> <span class="text-emerald-300">'Trần Văn Huy'</span>,
                </div>
                <div>
                  <span class="text-slate-400">role:</span> <span class="text-emerald-300">'Full-Stack & Applied AI'</span>,
                </div>
                <div>
                  <span class="text-slate-400">education:</span> <span class="text-emerald-300">'Bach Khoa Da Nang (DUT)'</span>,
                </div>
                <div>
                  <span class="text-slate-400">internship:</span> <span class="text-emerald-300">'Digital Twin Group (MakeAI)'</span>,
                </div>
                <div>
                  <span class="text-slate-400">gpa:</span> <span class="text-amber-300">3.5</span>,
                </div>
                <div>
                  <span class="text-slate-400">coreStack:</span> [
                  <div class="pl-3 sm:pl-4 text-cyan-300 break-words sm:break-normal">
                    'Spring Boot', 'Next.js', 'Python', 'PostgreSQL'
                  </div>
                  ],
                </div>
                <div>
                  <span class="text-slate-400">focus:</span> <span class="text-emerald-300">'Agentic AI & Clean Architecture'</span>
                </div>
              </div>

              <div>};</div>

              <!-- Live Execution Status Bar -->
              <div class="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-800 text-[10px] sm:text-[11px] flex items-center justify-between text-slate-400">
                <span class="text-emerald-400 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
                  <span>Ready for new projects</span>
                </span>
                <span class="text-slate-500">Da Nang, VN</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'

const store = usePortfolioStore()

// Typewriter Implementation with instant display and clean loop
const currentTagline = ref('Software Developer & Full-Stack Engineer')
const taglines = computed(() => {
  return store.personal.taglines || [
    'Software Developer',
    'Full-Stack & Backend Engineer',
    'Applied AI & Automation Solutions',
    'Java Spring Boot & Next.js'
  ]
})

let timer = null
let tagIndex = 0
let charIndex = 0
let isDeleting = false

function tick() {
  const list = taglines.value
  if (!list || list.length === 0) return

  const fullText = list[tagIndex % list.length]

  if (isDeleting) {
    currentTagline.value = fullText.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentTagline.value = fullText.substring(0, charIndex + 1)
    charIndex++
  }

  let speed = isDeleting ? 40 : 80

  if (!isDeleting && charIndex === fullText.length) {
    speed = 2200 // pause at end
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    tagIndex++
    speed = 400 // pause before new word
  }

  timer = setTimeout(tick, speed)
}

onMounted(() => {
  if (taglines.value.length > 0) {
    currentTagline.value = taglines.value[0]
    charIndex = taglines.value[0].length
    timer = setTimeout(() => {
      isDeleting = true
      tick()
    }, 2000)
  }
})

onUnmounted(() => {
  clearTimeout(timer)
})

watch(() => store.locale, () => {
  clearTimeout(timer)
  tagIndex = 0
  charIndex = taglines.value[0]?.length || 0
  currentTagline.value = taglines.value[0] || ''
  isDeleting = false
  timer = setTimeout(() => {
    isDeleting = true
    tick()
  }, 2000)
})

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
