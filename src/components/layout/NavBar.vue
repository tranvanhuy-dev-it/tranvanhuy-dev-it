<template>
  <!-- Scroll Progress Bar -->
  <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>

  <!-- Navbar -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0c1322] text-white border-b border-slate-800/90 shadow-lg shadow-black/30 lg:bg-transparent lg:border-transparent lg:shadow-none"
    :class="scrolled ? 'lg:navbar-scrolled' : 'lg:navbar-top'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-4">
      <!-- Brand Name -->
      <a
        href="#hero"
        class="flex items-center shrink-0 group hover:opacity-90 transition-opacity"
        @click.prevent="scrollTo('#hero')"
      >
        <span class="text-base sm:text-lg font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-400 whitespace-nowrap">
          Tran Van Huy
        </span>
      </a>

      <!-- Desktop Navigation & Controls Container -->
      <div class="flex items-center gap-2 sm:gap-2.5 xl:gap-3">
        <!-- 1. Desktop Nav Links -->
        <ul class="hidden lg:flex items-center gap-0.5 xl:gap-1">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="nav-link px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-all duration-200"
              :class="activeSection === item.id ? 'nav-link-active' : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-black/5'"
              @click.prevent="scrollTo(`#${item.id}`)"
            >
              {{ store.ui[item.id] || item.label }}
            </a>
          </li>
        </ul>

        <!-- 2. CV Download Button (desktop) -->
        <a
          :href="store.personal.cv"
          download
          class="hidden xl:inline-flex items-center gap-1.5 h-8 px-3 rounded-lg text-xs font-mono font-medium text-cyan-300 light:text-blue-600 border border-slate-700/80 light:border-slate-300 bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 transition-all shrink-0 whitespace-nowrap"
        >
          <span>CV</span>
          <svg class="w-3 h-3 text-cyan-400 light:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
        </a>

        <!-- 3. Primary Contact Me CTA Button -->
        <a
          href="#contact"
          class="hidden sm:inline-flex items-center justify-center h-8 btn-primary text-xs px-3.5 rounded-lg shrink-0 whitespace-nowrap"
          @click.prevent="scrollTo('#contact')"
        >
          {{ store.ui.contactBtn || 'Contact Me' }}
        </a>

        <!-- Visual Separator -->
        <div class="hidden sm:block w-px h-4 bg-slate-700/60 light:bg-slate-300 mx-0.5"></div>

        <!-- 4. Language Selector (EN / VI) -->
        <div class="flex items-center h-8 gap-0.5 bg-slate-800/90 lg:bg-slate-800/90 light:lg:bg-slate-100 border border-slate-700/80 light:lg:border-slate-300 rounded-lg p-0.5 font-mono text-[10px] shrink-0">
          <button
            @click="store.setLocale('en')"
            class="h-full px-2 rounded-md flex items-center justify-center transition-all duration-150 cursor-pointer"
            :class="store.locale === 'en' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 light:lg:text-slate-600 hover:text-white light:lg:hover:text-slate-900'"
          >
            EN
          </button>
          <button
            @click="store.setLocale('vi')"
            class="h-full px-2 rounded-md flex items-center justify-center transition-all duration-150 cursor-pointer"
            :class="store.locale === 'vi' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 light:lg:text-slate-600 hover:text-white light:lg:hover:text-slate-900'"
          >
            VI
          </button>
        </div>

        <!-- 5. Theme Toggle -->
        <button
          @click="store.toggleTheme()"
          class="w-8 h-8 flex items-center justify-center rounded-lg text-slate-300 hover:text-white light:lg:text-slate-600 light:lg:hover:text-slate-900 bg-slate-800/80 lg:bg-slate-800/80 light:lg:bg-slate-100 border border-slate-700/80 light:lg:border-slate-300 hover:bg-slate-700 light:lg:hover:bg-slate-200 transition-all duration-150 cursor-pointer shrink-0"
          :aria-label="store.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="store.theme === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          class="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span class="w-4 h-0.5 bg-white block transition-all" :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="w-4 h-0.5 bg-white block transition-all" :class="mobileOpen ? 'opacity-0' : ''"></span>
          <span class="w-4 h-0.5 bg-white block transition-all" :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="lg:hidden mx-4 mb-4 bg-[#0c1322]/98 border border-slate-800 p-4 rounded-xl shadow-2xl backdrop-blur-xl">
        <ul class="flex flex-col gap-1.5">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
              :class="activeSection === item.id ? 'nav-link-active' : 'text-slate-300 hover:text-white hover:bg-white/5'"
              @click.prevent="() => { scrollTo(`#${item.id}`); mobileOpen = false }"
            >
              {{ store.ui[item.id] || item.label }}
            </a>
          </li>
          <li class="pt-2 border-t border-slate-800">
            <a
              :href="store.personal.cv"
              download
              class="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-cyan-300 border border-slate-700 bg-slate-800/90 hover:bg-slate-700 transition-all"
            >
              <span>{{ store.ui.downloadCv || 'Download CV' }}</span>
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const props = defineProps({
  activeSection: { type: String, default: 'hero' },
})

const store = usePortfolioStore()
const scrolled = ref(false)
const scrollProgress = ref(0)
const mobileOpen = ref(false)

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(selector) {
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function handleScroll() {
  scrolled.value = window.scrollY > 50

  // Scroll progress
  const docH = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = docH > 0 ? (window.scrollY / docH) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-scrolled {
  background: rgba(9, 13, 22, 0.9);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
html.light .navbar-scrolled {
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
}
.navbar-top {
  background: transparent;
}
.nav-link-active {
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  font-weight: 600;
}
html.light .nav-link-active {
  color: #0284c7;
  background: rgba(2, 132, 199, 0.08);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
