<template>
  <section id="about" class="relative py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <SectionTitle :title="store.ui.aboutTitle || 'About Me'" :subtitle="store.ui.aboutSubtitle || 'My Profile'"
        :description="store.ui.aboutDesc || 'A brief overview of my profile and journey'" />

      <div class="grid md:grid-cols-2 gap-12 items-center mt-4">
        <!-- Left: Avatar & decorative -->
        <div class="flex flex-col items-center fade-left">
          <!-- Avatar container -->
          <div ref="avatarRef" class="relative mb-8 cursor-pointer" @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave">
            <div class="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden relative"
              style="background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2)); border: 2px solid rgba(124,58,237,0.3);">
              <img v-if="store.personal.avatar" :src="store.personal.avatar" :alt="store.personal.name"
                class="w-full h-full object-cover" />
              <div v-else class="default-avatar w-full h-full flex flex-col items-center justify-center relative select-none">
                <!-- Subtle dot grid backdrop -->
                <div class="absolute inset-0 avatar-grid"></div>
                <!-- Monogram ring -->
                <div class="relative w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center monogram-ring">
                  <span class="text-4xl md:text-5xl font-bold gradient-text tracking-wider">
                    {{ initials }}
                  </span>
                </div>
                <span class="relative text-xs font-mono text-purple-400/80 light:text-purple-700/80 mt-4 tracking-[0.2em]">
                  &lt;HuyTran.dev /&gt;
                </span>
              </div>
            </div>
            <!-- Glowing orb decorations -->
            <div class="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-30 blur-2xl animate-pulse"
              style="background: #7c3aed;"></div>
            <div
              class="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-25 blur-xl animate-pulse animate-delay-300"
              style="background: #06b6d4;"></div>
            <!-- Status badge -->
            <div
              class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-mono font-medium glass-card border border-green-500/20 flex items-center gap-1.5"
              style="color: #4ade80;">
              <span class="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              {{ store.personal.availability }}
            </div>
          </div>

          <!-- Location -->
          <p class="text-slate-400 light:text-slate-800 text-sm flex items-center gap-2">
            <svg class="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ store.personal.location }}
          </p>
        </div>

        <!-- Right: Bio & Stats -->
        <div class="fade-right">
          <h3 class="text-2xl font-bold text-white light:text-slate-900 mb-2">
            {{ store.personal.name }}
          </h3>
          <p class="text-purple-400 font-mono mb-6">{{ store.personal.title }}</p>

          <p class="text-slate-300 light:text-slate-900 leading-relaxed mb-4">
            {{ store.personal.bio }}
          </p>
          <p class="text-slate-400 light:text-slate-800 leading-relaxed mb-8">
            {{ store.personal.bio2 }}
          </p>

          <!-- Info list -->
          <div class="glass-card divide-y divide-white/5 light:divide-black/5 mb-8 overflow-hidden">
            <div class="flex items-center gap-3 text-sm px-5 py-3.5">
              <span class="text-purple-400 font-mono w-24 shrink-0">{{ store.ui.emailLabel || 'Email' }}</span>
              <a :href="`mailto:${store.personal.email}`"
                class="text-slate-300 light:text-slate-900 hover:text-purple-400 transition-colors truncate">
                {{ store.personal.email }}
              </a>
            </div>
            <div class="flex items-center gap-3 text-sm px-5 py-3.5">
              <span class="text-purple-400 font-mono w-24 shrink-0">{{ store.ui.locationLabel || 'Location' }}</span>
              <span class="text-slate-300 light:text-slate-900">{{ store.personal.location }}</span>
            </div>
            <div class="flex items-center gap-3 text-sm px-5 py-3.5">
              <span class="text-purple-400 font-mono w-24 shrink-0">{{ store.ui.availabilityLabel || 'Status' }}</span>
              <span class="text-green-400 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                {{ store.personal.availability }}
              </span>
            </div>
          </div>

          <a :href="store.personal.cv" download class="btn-primary inline-block" id="about-download-cv">
            {{ store.ui.downloadCv || 'Download My CV' }} ↓
          </a>
        </div>
      </div>

      <!-- Career Objective -->
      <div v-if="store.personal.objective"
        class="glass-card mt-16 p-6 md:p-8 fade-up relative overflow-hidden">
        <div class="absolute left-0 top-0 bottom-0 w-1"
          style="background: linear-gradient(180deg, #7c3aed, #06b6d4);"></div>
        <h4 class="text-white light:text-slate-900 font-bold text-lg mb-3 flex items-center gap-2.5">
          <svg class="w-5 h-5 text-purple-400 shrink-0" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {{ store.ui.objectiveLabel || 'Career Objective' }}
        </h4>
        <p class="text-slate-300 light:text-slate-900 text-sm md:text-base leading-relaxed">
          {{ store.personal.objective }}
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        <div v-for="(stat, i) in store.stats" :key="stat.label" class="glass-card-hover p-6 text-center fade-up"
          :class="`animate-delay-${(i + 1) * 100}`" data-stagger>
          <div class="text-4xl font-bold gradient-text mb-2">{{ stat.value }}</div>
          <div class="text-slate-400 light:text-slate-800 text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import { use3DTilt } from '@/composables/use3DTilt'

const store = usePortfolioStore()
const { elementRef: avatarRef, handleMouseMove, handleMouseLeave } = use3DTilt(15, 1.05)

const initials = computed(() =>
  store.personal.name
    .split(' ')
    .filter(Boolean)
    .slice(-2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
)
</script>

<style scoped>
.default-avatar {
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.85));
}
html.light .default-avatar {
  background: linear-gradient(160deg, rgba(241, 245, 249, 0.95), rgba(224, 231, 255, 0.9));
}

.avatar-grid {
  background-image: radial-gradient(rgba(148, 163, 184, 0.25) 1px, transparent 1px);
  background-size: 18px 18px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 75%);
}

.monogram-ring {
  background: rgba(124, 58, 237, 0.08);
  border: 2px solid transparent;
  background-clip: padding-box;
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.35), 0 0 30px rgba(124, 58, 237, 0.2);
}
</style>
