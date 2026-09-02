<template>
  <div class="relative min-h-screen bg-[#090d16] light:bg-slate-50 text-slate-100 light:text-slate-800 selection:bg-blue-600 selection:text-white transition-colors duration-200 flex flex-col">
    <!-- Top Bar (mirrors ProjectDetailView header) -->
    <header class="sticky top-0 z-40 backdrop-blur-md bg-[#090d16]/95 light:bg-white/95 text-white light:text-slate-900 border-b border-slate-800/80 light:border-slate-200 px-4 sm:px-8 py-3 transition-colors shadow-md light:shadow-sm">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-colors group"
        >
          <span class="p-1 rounded-md bg-slate-800/90 light:bg-slate-100 border border-slate-700 light:border-slate-300 group-hover:border-slate-500 text-slate-300 light:text-slate-700 group-hover:text-white light:group-hover:text-slate-900 transition-all">
            ←
          </span>
          <span>{{ store.locale === 'vi' ? 'Quay lại Portfolio' : 'Back to Portfolio' }}</span>
        </router-link>

        <div class="flex items-center gap-2.5 sm:gap-3">
          <!-- Language Switcher -->
          <div class="flex items-center gap-0.5 bg-slate-800/80 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 rounded-lg p-0.5 font-mono text-[10px]">
            <button
              @click="store.setLocale('en')"
              class="px-2 py-1 rounded-md transition-all cursor-pointer"
              :class="store.locale === 'en' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'"
            >
              EN
            </button>
            <button
              @click="store.setLocale('vi')"
              class="px-2 py-1 rounded-md transition-all cursor-pointer"
              :class="store.locale === 'vi' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 light:text-slate-600 hover:text-white light:hover:text-slate-900'"
            >
              VI
            </button>
          </div>

          <!-- Theme Toggle -->
          <button
            @click="store.toggleTheme()"
            class="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-black/5 border border-slate-700/80 light:border-slate-300 bg-slate-800/80 light:bg-slate-100 transition-all duration-150 cursor-pointer shrink-0"
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
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
      <div class="max-w-lg w-full text-center glass-card rounded-2xl border border-slate-800/80 light:border-slate-200 p-8 sm:p-12">
        <div class="font-mono text-xs uppercase tracking-widest text-cyan-400 light:text-blue-600 font-semibold mb-3">
          {{ store.locale === 'vi' ? 'Lỗi 404' : 'Error 404' }}
        </div>

        <h1 class="font-mono text-6xl sm:text-7xl font-bold text-white light:text-slate-900 mb-4 tracking-tight">
          <span class="text-cyan-400 light:text-blue-600">&lt;</span>404<span class="text-cyan-400 light:text-blue-600">/&gt;</span>
        </h1>

        <p class="text-sm sm:text-base text-slate-300 light:text-slate-600 mb-8 leading-relaxed">
          {{ store.locale === 'vi'
            ? 'Trang bạn tìm không tồn tại hoặc đã bị di chuyển.'
            : "The page you're looking for doesn't exist or has been moved." }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <router-link to="/" class="btn-primary w-full sm:w-auto px-6 py-2.5 inline-flex items-center justify-center gap-2 text-xs sm:text-sm">
            <span>{{ store.locale === 'vi' ? 'Về Trang chủ' : 'Back to Home' }}</span>
          </router-link>
          <router-link
            to="/#contact"
            class="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-700/80 light:border-slate-300 bg-slate-800/80 hover:bg-slate-700 light:bg-slate-100 light:hover:bg-slate-200 text-slate-200 light:text-slate-800 text-xs sm:text-sm font-medium transition-all"
          >
            {{ store.locale === 'vi' ? 'Liên hệ' : 'Contact Me' }}
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
</script>
