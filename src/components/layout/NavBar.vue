<template>
  <!-- Scroll Progress Bar -->
  <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>

  <!-- Navbar -->
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'navbar-scrolled' : 'navbar-top'"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#hero"
        class="flex items-center gap-3 group hover:opacity-90 transition-opacity"
        @click.prevent="scrollTo('#hero')"
      >
        <div class="w-9 h-9 rounded-xl p-1 flex items-center justify-center bg-white shadow-md ring-1 ring-slate-200/50 dark:ring-white/20 transition-all group-hover:scale-105">
          <img src="/logo.png" alt="Tran Van Huy Logo" class="w-full h-full object-contain" />
        </div>
        <span class="text-lg font-bold font-mono gradient-text">
          Tran Van Huy
        </span>
      </a>

      <!-- Desktop & Language Navigation Container -->
      <div class="flex items-center gap-4">
        <!-- Desktop Nav Links -->
        <ul class="hidden md:flex items-center gap-1">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="activeSection === item.id ? 'nav-link-active' : 'text-slate-400 hover:text-white hover:bg-white/5 light:hover:bg-black/5'"
              @click.prevent="scrollTo(`#${item.id}`)"
            >
              {{ store.ui[item.id] || item.label }}
            </a>
          </li>
        </ul>

        <!-- Language Selector -->
        <div class="flex items-center gap-0.5 bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 rounded-xl p-0.5 font-mono text-[10px]">
          <button
            @click="store.setLocale('en')"
            class="px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer"
            :class="store.locale === 'en' ? 'bg-purple-600/80 text-white font-bold' : 'text-slate-400 light:text-slate-700 hover:text-white light:hover:text-slate-900'"
          >
            EN
          </button>
          <button
            @click="store.setLocale('vi')"
            class="px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer"
            :class="store.locale === 'vi' ? 'bg-purple-600/80 text-white font-bold' : 'text-slate-400 light:text-slate-700 hover:text-white light:hover:text-slate-900'"
          >
            VI
          </button>
        </div>

        <!-- Theme Toggle -->
        <button
          @click="store.toggleTheme()"
          class="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-black/5 transition-all duration-200 cursor-pointer"
          :aria-label="store.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="store.theme === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]">
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
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-[18px] h-[18px]">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>

        <!-- CTA Button (desktop) -->
        <a
          href="#contact"
          class="hidden md:block btn-primary text-sm px-5 py-2"
          @click.prevent="scrollTo('#contact')"
        >
          {{ store.ui.contactBtn || 'Contact' }}
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          class="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-white/5 light:hover:bg-black/5 transition-colors"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span class="w-5 h-0.5 bg-white light:bg-slate-900 block transition-all" :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="w-5 h-0.5 bg-white light:bg-slate-900 block transition-all" :class="mobileOpen ? 'opacity-0' : ''"></span>
          <span class="w-5 h-0.5 bg-white light:bg-slate-900 block transition-all" :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden mx-4 mb-4 glass-card p-4 rounded-2xl">
        <ul class="flex flex-col gap-2">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
              :class="activeSection === item.id ? 'nav-link-active' : 'text-slate-400 hover:text-white light:text-slate-800 light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-black/5'"
              @click.prevent="() => { scrollTo(`#${item.id}`); mobileOpen = false }"
            >
              {{ store.ui[item.id] || item.label }}
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
const mobileOpen = ref(false)
const scrollProgress = ref(0)

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
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
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}
.navbar-top {
  background: transparent;
}
.nav-link-active {
  color: #a855f7;
  background: rgba(124, 58, 237, 0.1);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
