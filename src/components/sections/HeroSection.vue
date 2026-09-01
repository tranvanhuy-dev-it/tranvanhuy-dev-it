<template>
  <section id="hero" class="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 overflow-hidden">
    <!-- Subtle ambient background glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl bg-blue-600/30"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full opacity-15 blur-3xl bg-cyan-500/20"></div>
    </div>

    <!-- Main Content Grid (Centered in mobile viewport) -->
    <div class="relative z-10 w-full max-w-6xl mx-auto min-w-0 my-auto">
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-w-0 w-full">
        
        <!-- Left: Introduction & CTAs (7 cols on lg, full width on mobile) -->
        <div
          class="flex flex-col items-center lg:items-start text-center lg:text-left fade-left min-w-0 w-full"
          :class="store.personal.avatar ? 'lg:col-span-7' : 'lg:col-span-7 max-w-xl lg:max-w-none mx-auto lg:mx-0'"
        >
          
          <!-- Status badge -->
          <div class="inline-flex items-center mb-5 sm:mb-6 max-w-full">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-blue-600/10 border border-blue-500/25 text-blue-400 leading-none shadow-sm">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span class="whitespace-nowrap">{{ store.personal.statusTag || store.personal.availability }}</span>
            </span>
          </div>

          <!-- Name Heading -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white light:text-slate-900 leading-[1.15] break-words">
            {{ store.personal.name }}
          </h1>

          <!-- Professional Role Subtitle (Always on one line) -->
          <div class="mt-3.5 sm:mt-4 flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 flex-nowrap whitespace-nowrap text-[13px] sm:text-base md:text-lg lg:text-xl font-medium tracking-tight">
            <span class="text-white light:text-slate-900 font-bold shrink-0">
              {{ store.locale === 'vi' ? 'Lập trình viên' : 'Software Developer' }}
            </span>
            <span class="text-slate-600 font-normal shrink-0">|</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 font-mono font-semibold shrink-0">
              {{ store.personal.roleSubtitle || (store.locale === 'vi' ? 'Full-Stack & Kỹ thuật AI' : 'Full-Stack & AI Engineering') }}
            </span>
          </div>

          <!-- Dynamic Live Typewriter Tagline -->
          <div class="mt-3 flex items-center justify-center lg:justify-start gap-1.5 font-mono text-xs sm:text-sm text-cyan-300 light:text-blue-600 bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 px-3 py-1 rounded-md shadow-sm">
            <span class="text-slate-500 font-semibold select-none">&gt;</span>
            <span class="font-medium">{{ currentTagline }}</span>
            <span class="w-1.5 h-3.5 bg-cyan-400 animate-pulse inline-block"></span>
          </div>

          <!-- Refined Value Statement -->
          <div class="mt-5 sm:mt-6 text-slate-300 light:text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-2xl min-w-0 w-full break-words">
            <p class="break-words">
              {{ store.personal.statement || (store.locale === 'vi' 
                  ? 'Sinh viên CNTT ĐH Bách Khoa (GPA 3.5) & Full-Stack Developer tại Digital Twin Group (MakeAI), chuyên phát triển các hệ thống Spring Boot, Next.js và giải pháp tự động hóa với AI.' 
                  : 'IT Student at Bach Khoa Da Nang (GPA 3.5) & Full-Stack Developer at Digital Twin Group (MakeAI), specializing in Spring Boot, Next.js, and practical AI automation.') 
              }}
            </p>
          </div>

          <!-- Buttons: perfectly aligned rows on mobile, side-by-side on desktop -->
          <div class="mt-7 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-none">
            <a
              href="#projects"
              @click.prevent="scrollTo('#projects')"
              class="w-full sm:w-auto h-11 sm:h-10 px-5 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-500 border border-blue-500/30 shadow-lg shadow-blue-500/25 transition-all text-center"
              id="hero-view-projects"
            >
              <svg class="w-4 h-4 shrink-0 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              <span>{{ store.ui.viewProjects || 'Xem dự án' }}</span>
            </a>

            <a
              :href="store.personal.cv"
              download
              class="w-full sm:w-auto h-11 sm:h-10 px-5 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 text-slate-200 hover:text-white light:text-slate-700 light:hover:text-slate-900 bg-slate-850/80 hover:bg-slate-800 light:bg-white light:hover:bg-slate-100 border border-slate-700/80 hover:border-slate-600 light:border-slate-300 transition-all text-center"
              id="hero-download-cv"
            >
              <svg class="w-4 h-4 shrink-0 text-slate-400 light:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span>{{ store.ui.downloadCv || 'Tải CV' }}</span>
            </a>

            <button
              type="button"
              @click="showDevCard = true"
              class="w-full sm:w-auto h-11 sm:h-10 px-4 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 text-cyan-300 hover:text-cyan-200 light:text-cyan-700 light:hover:text-cyan-900 bg-cyan-500/10 hover:bg-cyan-500/20 light:bg-cyan-50 light:hover:bg-cyan-100 border border-cyan-500/30 hover:border-cyan-500/50 light:border-cyan-300 transition-all cursor-pointer text-center"
            >
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="16" rx="3" stroke-width="2"/>
                <circle cx="9" cy="10" r="2" stroke-width="2"/>
                <path d="M15 8h2M15 12h2M7 16h10" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>{{ store.ui.devCardBtn || 'Dev ID Card' }}</span>
            </button>
          </div>

          <!-- Social Links -->
          <div class="flex items-center justify-center lg:justify-start gap-2.5 w-full mt-5 sm:mt-6">
            <a
              v-for="(url, platform) in store.personal.socials"
              :key="platform"
              :href="url"
              target="_blank"
              rel="noopener"
              class="w-10 h-10 rounded-xl bg-slate-850/90 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm"
              :aria-label="platform"
            >
              <IconGithub v-if="platform === 'github'" class="w-4 h-4 fill-current" />
              <IconLinkedin v-else-if="platform === 'linkedin'" class="w-4 h-4 fill-current" />
              <IconFacebook v-else-if="platform === 'facebook'" class="w-4 h-4 fill-current" />
            </a>
            <a
              :href="`mailto:${store.personal.email}`"
              class="w-10 h-10 rounded-xl bg-slate-850/90 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-500 text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="Email"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>

        </div>

        <!-- Right: Developer Terminal or Avatar (Hidden on mobile if no avatar, 5 cols on lg) -->
        <div
          class="fade-right w-full min-w-0"
          :class="store.personal.avatar ? 'flex lg:col-span-5 justify-center lg:justify-end' : 'hidden lg:flex lg:col-span-5 justify-center lg:justify-end'"
        >
          <!-- If avatar exists -->
          <div v-if="store.personal.avatar" class="relative group max-w-xs sm:max-w-sm">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
              <img :src="store.personal.avatar" :alt="store.personal.name" class="w-full h-auto object-cover aspect-square" />
            </div>
          </div>

          <!-- If no avatar: Developer Terminal Card (Visible only on lg+ desktop) -->
          <div v-else class="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden font-mono text-[11px] sm:text-xs">
            
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

    <!-- Bottom Scroll Indicator (Anchors the 1-screen mobile view) -->
    <div class="relative z-10 w-full flex justify-center pt-3 pb-1 fade-up">
      <a
        href="#about"
        @click.prevent="scrollTo('#about')"
        class="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors group cursor-pointer"
        aria-label="Scroll to about"
      >
        <span class="text-[10px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100 font-medium">
          {{ store.locale === 'vi' ? 'Khám phá' : 'Scroll' }}
        </span>
        <div class="w-4 h-6.5 rounded-full border border-slate-700/80 group-hover:border-cyan-400/80 flex items-start justify-center p-0.5 transition-colors">
          <div class="w-1 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </a>
    </div>

    <!-- Dev Card Generator Modal -->
    <DevCardModal
      :is-open="showDevCard"
      @close="showDevCard = false"
    />
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useSoundEffects } from '@/composables/useSoundEffects'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import DevCardModal from '@/components/ui/DevCardModal.vue'

const store = usePortfolioStore()
const sound = useSoundEffects()
const showDevCard = ref(false)

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
  sound.playClick()
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
