<template>
  <section id="experience" class="relative py-7 sm:py-20 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.expTitle || 'Experience'"
        :subtitle="store.ui.expSubtitle || 'Work Experience'"
        :description="store.ui.expDesc || 'My professional career and development roles'"
      />

      <!-- Executive Timeline Layout -->
      <div class="relative mt-4 sm:mt-10 max-w-4xl mx-auto pl-4 sm:pl-10 border-l-2 border-slate-800 light:border-slate-300 space-y-4 sm:space-y-10">
        
        <div
          v-for="(exp, i) in store.experiences"
          :key="exp.id"
          class="relative group fade-up"
          :style="`animation-delay: ${i * 100}ms`"
        >
          <!-- Timeline Node / Dot perfectly centered on the 2px left border -->
          <div
            class="absolute -left-[25px] sm:-left-[49px] top-4 sm:top-6 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-200"
            :class="i === 0 
              ? 'bg-blue-600 border-blue-400 shadow-[0_0_12px_rgba(37,99,235,0.6)] ring-4 ring-blue-500/20' 
              : 'bg-slate-900 border-slate-700 group-hover:border-blue-500 group-hover:bg-blue-600'"
          ></div>

          <!-- Experience Card -->
          <div class="glass-card-hover p-3.5 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 transition-all">
            
            <!-- Header: Position, Company, Period & Status -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-5 pb-2.5 sm:pb-4 border-b border-slate-800/80 light:border-slate-200">
              <div class="space-y-0.5 sm:space-y-1 min-w-0">
                <h3 class="text-sm sm:text-lg font-bold text-white light:text-slate-900 leading-snug break-words">
                  {{ exp.position }}
                </h3>
                
                <p class="text-xs sm:text-sm font-semibold text-cyan-400 light:text-blue-600 flex items-center gap-1.5">
                  <span>🏢</span>
                  <span>{{ exp.company }}</span>
                </p>
              </div>

              <!-- Time Badge -->
              <div class="flex items-center sm:flex-col sm:items-end justify-between sm:justify-start gap-1 shrink-0 font-mono text-xs pt-1 sm:pt-0">
                <span class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-800/90 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-slate-300 light:text-slate-700 font-semibold text-[10px] sm:text-xs">
                  {{ exp.period }}
                </span>
                <span class="text-slate-500 light:text-slate-400 text-[10px] sm:text-[11px]">
                  {{ exp.duration }}
                </span>
              </div>
            </div>

            <!-- Bullet Responsibilities -->
            <ul class="space-y-2 mb-3.5 sm:mb-6 text-xs sm:text-sm text-slate-300 light:text-slate-700">
              <li
                v-for="desc in exp.description"
                :key="desc"
                class="flex items-start gap-2 leading-relaxed"
              >
                <span class="text-blue-400 mt-0.5 shrink-0 font-bold">✓</span>
                <span>{{ desc }}</span>
              </li>
            </ul>

            <!-- Tech Stack Pills -->
            <div class="pt-2.5 sm:pt-4 border-t border-slate-800/80 light:border-slate-200">
              <span class="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-500 light:text-slate-400 block mb-1.5 font-semibold">
                {{ store.locale === 'vi' ? 'Công nghệ ứng dụng:' : 'Technologies Used:' }}
              </span>
              <div class="flex flex-wrap gap-1 sm:gap-1.5">
                <span
                  v-for="tech in exp.tech"
                  :key="tech"
                  class="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/70 light:border-slate-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
</script>
