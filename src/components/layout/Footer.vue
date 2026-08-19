<template>
  <footer class="relative py-12 px-4 border-t border-white/5 light:border-black/5">
    <div class="max-w-6xl mx-auto">
      <!-- Top -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <a href="#hero" class="flex items-center gap-3 group" @click.prevent="scrollToTop">
          <div class="w-9 h-9 rounded-xl p-1 flex items-center justify-center bg-white shadow-md ring-1 ring-slate-200/50 dark:ring-white/20">
            <img src="/logo.png" alt="HuyTran Logo" class="w-full h-full object-contain" />
          </div>
          <span class="text-xl font-bold font-mono gradient-text">HuyTran</span>
        </a>

        <!-- Social links -->
        <div class="flex items-center gap-4">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener"
            class="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-all duration-200 glass-card"
            :aria-label="social.name"
            :title="social.name"
          >
            <IconGithub v-if="social.platform === 'github'" class="w-5 h-5 fill-current" />
            <IconLinkedin v-else-if="social.platform === 'linkedin'" class="w-5 h-5 fill-current" />
            <IconFacebook v-else-if="social.platform === 'facebook'" class="w-5 h-5 fill-current" />
            <IconEmail v-else-if="social.platform === 'email'" class="w-5 h-5" />
          </a>
        </div>
      </div>

      <hr class="neon-line mb-8" />

      <!-- Bottom -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 light:text-slate-700">
        <p>
          © {{ new Date().getFullYear() }} | Designed by Tran Van Huy
        </p>
        <button
          @click="scrollToTop"
          class="flex items-center gap-2 text-slate-400 hover:text-white light:text-slate-800 light:hover:text-slate-900 transition-colors group"
          id="back-to-top"
        >
          <span>{{ store.ui.backToTop || 'Back to top' }}</span>
          <span class="group-hover:-translate-y-1 transition-transform">↑</span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconEmail from '@/components/icons/IconEmail.vue'

const store = usePortfolioStore()

const socials = computed(() => [
  { name: 'GitHub', platform: 'github', url: store.personal.socials.github },
  { name: 'LinkedIn', platform: 'linkedin', url: store.personal.socials.linkedin },
  { name: 'Facebook', platform: 'facebook', url: store.personal.socials.facebook },
  { name: 'Email', platform: 'email', url: `mailto:${store.personal.email}` },
])

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
