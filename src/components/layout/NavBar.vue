<template>
  <!-- Scroll Progress Bar -->
  <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>

  <!-- Navbar -->
  <nav
    class="portfolio-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#090d16]/95 light:bg-blue-50/95 border-b border-slate-800/80 light:border-blue-100 shadow-md light:shadow-sm backdrop-blur-md"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-4">
      <!-- Brand Name -->
      <a
        href="#hero"
        class="flex items-center shrink-0 group hover:opacity-90 transition-opacity"
        @click.prevent="scrollTo('#hero')"
      >
        <span class="navbar-brand text-base sm:text-lg font-bold font-mono text-white whitespace-nowrap flex items-center gap-1.5">
          <span class="text-cyan-400 light:text-blue-600 font-bold">&lt;</span>
          <span class="tracking-tight">Tran Van Huy</span>
          <span class="text-cyan-400 light:text-blue-600 font-bold">/&gt;</span>
        </span>
      </a>

      <!-- Desktop Navigation & Controls Container -->
      <div class="flex items-center gap-2 sm:gap-3 xl:gap-4">
        <!-- 1. Streamlined Desktop Nav Links -->
        <ul class="hidden lg:flex items-center gap-1 xl:gap-2">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="nav-link px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-all duration-200"
              :class="activeSection === item.id ? 'nav-link-active' : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-blue-600 hover:bg-white/5 light:hover:bg-slate-100'"
              @click.prevent="scrollTo(`#${item.id}`)"
            >
              {{ store.ui[item.id] || item.label }}
            </a>
          </li>
        </ul>

        <!-- 2. Primary Contact Me CTA Button -->
        <a
          href="#contact"
          class="hidden sm:inline-flex items-center justify-center h-8 btn-primary text-xs px-4 rounded-lg shrink-0 whitespace-nowrap shadow-sm"
          @click.prevent="scrollTo('#contact')"
        >
          {{ store.ui.contactBtn || 'Contact Me' }}
        </a>

        <!-- Visual Separator -->
        <div class="hidden sm:block w-px h-4 bg-slate-700/60 light:bg-slate-300 mx-0.5"></div>

        <!-- 3. Language Selector (EN / VI) -->
        <div class="flex items-center h-8 gap-0.5 bg-slate-800/90 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 rounded-lg p-0.5 font-mono text-[10px] shrink-0">
          <button
            @click="handleLocaleChange('en')"
            class="h-full px-2 rounded-md flex items-center justify-center transition-all duration-150 cursor-pointer"
            :class="store.locale === 'en' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'"
          >
            EN
          </button>
          <button
            @click="handleLocaleChange('vi')"
            class="h-full px-2 rounded-md flex items-center justify-center transition-all duration-150 cursor-pointer"
            :class="store.locale === 'vi' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'"
          >
            VI
          </button>
        </div>

        <!-- 4. Theme Toggle (Dark / Light) -->
        <button
          @click="handleThemeToggle"
          class="w-8 h-8 flex items-center justify-center rounded-lg text-slate-300 hover:text-white light:text-slate-700 light:hover:text-slate-900 bg-slate-800/80 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 hover:bg-slate-700 light:hover:bg-slate-200 transition-all duration-150 cursor-pointer shrink-0"
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
          class="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 rounded-lg bg-slate-800/80 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 hover:bg-slate-700 light:hover:bg-slate-200 transition-colors shrink-0 cursor-pointer"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span class="w-4 h-0.5 bg-slate-200 light:bg-slate-800 block transition-all" :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="w-4 h-0.5 bg-slate-200 light:bg-slate-800 block transition-all" :class="mobileOpen ? 'opacity-0' : ''"></span>
          <span class="w-4 h-0.5 bg-slate-200 light:bg-slate-800 block transition-all" :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="lg:hidden mx-4 mb-4 bg-slate-900/95 light:bg-white border border-slate-800 light:border-slate-200 p-4 rounded-2xl shadow-2xl backdrop-blur-xl">
        <ul class="flex flex-col gap-1.5">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
              :class="activeSection === item.id ? 'bg-blue-600 text-white font-bold' : 'text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-100'"
              @click="scrollTo(`#${item.id}`)"
            >
              {{ store.ui[item.id] || item.label }}
            </a>
          </li>
        </ul>

        <div class="mt-4 pt-3 border-t border-slate-800 light:border-slate-200">
          <a
            href="#contact"
            class="btn-primary w-full py-2.5 text-xs rounded-xl flex items-center justify-center gap-2"
            @click="scrollTo('#contact')"
          >
            {{ store.ui.contactBtn || 'Contact Me' }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useSoundEffects } from '@/composables/useSoundEffects'

const props = defineProps({
  activeSection: { type: String, default: 'hero' },
})

const store = usePortfolioStore()
const sound = useSoundEffects()
const scrolled = ref(false)
const scrollProgress = ref(0)
const mobileOpen = ref(false)

// Streamlined, essential navigation items
const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(selector) {
  sound.playClick()
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  mobileOpen.value = false
}

function handleLocaleChange(loc) {
  sound.playClick()
  store.setLocale(loc)
}

function handleThemeToggle() {
  sound.playThemeToggle()
  store.toggleTheme()
}

function handleScroll() {
  scrolled.value = window.scrollY > 50

  const winScroll = document.documentElement.scrollTop || document.body.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollProgress.value = height > 0 ? (winScroll / height) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.portfolio-navbar {
  will-change: background-color, border-color, box-shadow;
}

.nav-link-active {
  color: #38bdf8;
  background-color: rgba(56, 189, 248, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.25);
  font-weight: 600;
}

:global(.light) .nav-link-active {
  color: #2563eb;
  background-color: #dbeafe;
  border: 1px solid #bfdbfe;
}

.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 2.5px;
  background: linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6);
  z-index: 100;
  transition: width 0.05s linear;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
