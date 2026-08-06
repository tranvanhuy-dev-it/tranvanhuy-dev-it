<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
    <!-- Radial glow background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slow"
        style="background: radial-gradient(circle, #7c3aed, transparent);"></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse-slow animate-delay-300"
        style="background: radial-gradient(circle, #06b6d4, transparent);"></div>
    </div>

    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <!-- Greeting badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 fade-up"
        style="background: rgba(124,58,237,0.1); border: 1px solid rgba(124,58,237,0.3);">
        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        <span class="text-sm font-mono text-slate-300 light:text-purple-800">{{ store.personal.availability }}</span>
      </div>

      <!-- Name -->
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 fade-up animate-delay-100 leading-tight">
        <span class="text-white light:text-slate-900">{{ store.ui.hi || 'Hi, I am' }}</span><br />
        <span class="gradient-text">{{ store.personal.name }}</span>
      </h1>

      <!-- Typewriter tagline -->
      <div
        v-if="store.locale === 'en'"
        class="flex items-center justify-center gap-3 text-lg sm:text-2xl md:text-3xl font-semibold mb-8 fade-up animate-delay-200"
        style="min-height: 48px;">
        <span class="gradient-text">{{ displayTextEn }}</span>
        <span class="w-0.5 h-8 bg-purple-400 animate-pulse ml-0.5"></span>
      </div>
      <div
        v-else
        class="flex items-center justify-center gap-3 text-lg sm:text-2xl md:text-3xl font-semibold mb-8 fade-up animate-delay-200"
        style="min-height: 48px;">
        <span class="gradient-text">{{ displayTextVi }}</span>
        <span class="w-0.5 h-8 bg-purple-400 animate-pulse ml-0.5"></span>
      </div>

      <!-- Bio snippet -->
      <p class="text-slate-400 light:text-slate-800 text-base sm:text-lg max-w-2xl mx-auto mb-10 fade-up animate-delay-300 leading-relaxed">
        {{ store.personal.bio }}
      </p>

      <!-- CTAs -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-up animate-delay-400 w-full max-w-xs sm:max-w-none mx-auto">
        <a href="#projects" @click.prevent="scrollTo('#projects')"
          class="btn-primary text-base px-8 py-3 w-full sm:w-auto text-center" id="hero-view-projects">
          {{ store.ui.viewProjects || 'View Projects' }}
        </a>
        <a :href="store.personal.cv" download class="btn-outline text-base px-8 py-3 w-full sm:w-auto text-center"
          id="hero-download-cv">
          {{ store.ui.downloadCv || 'Download CV' }} ↓
        </a>
      </div>

      <!-- Social links -->
      <div class="flex items-center justify-center gap-5 fade-up animate-delay-500">
        <a v-for="(url, platform) in store.personal.socials" :key="platform" :href="url" target="_blank" rel="noopener"
          class="social-link" :aria-label="platform">
          <IconGithub v-if="platform === 'github'"
            class="w-5 h-5 text-slate-400 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-colors fill-current" />
          <IconLinkedin v-else-if="platform === 'linkedin'"
            class="w-5 h-5 text-slate-400 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-colors fill-current" />
          <IconFacebook v-else-if="platform === 'facebook'"
            class="w-5 h-5 text-slate-400 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-colors fill-current" />
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs text-slate-500 light:text-slate-700 font-mono">scroll</span>
      <div class="w-5 h-8 rounded-full border border-slate-600 light:border-slate-400 flex justify-center pt-1.5">
        <div class="w-1 h-2 rounded-full bg-purple-400 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useTypewriter } from '@/composables/useTypewriter'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'

const store = usePortfolioStore()
const { displayText: displayTextEn } = useTypewriter(store.en.personal.taglines)
const { displayText: displayTextVi } = useTypewriter(store.vi.personal.taglines)

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.social-link {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease;
}

.social-link:hover {
  background: rgba(124, 58, 237, 0.15);
  border-color: rgba(124, 58, 237, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(124, 58, 237, 0.3);
}
</style>
