<template>
  <section id="about" class="relative py-14 sm:py-24 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.aboutTitle || 'About Me'"
        :subtitle="store.ui.aboutSubtitle || 'Overview'"
        :description="store.ui.aboutDesc || 'Core mindset, engineering philosophy, and career direction'"
      />

      <!-- 5 What I Build Cards in responsive grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
        <div
          v-for="(item, index) in store.whatIBuild"
          :key="item.title"
          class="glass-card-hover p-5 sm:p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 flex flex-col justify-between transition-all duration-300 group fade-up"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <div>
            <!-- Card Header: Icon & Domain Title -->
            <div class="flex items-center gap-3 mb-3.5">
              <div class="w-10 h-10 rounded-xl bg-slate-800/90 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-cyan-400 light:text-blue-600 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 group-hover:border-cyan-500/50 transition-all shrink-0">
                {{ item.icon }}
              </div>
              <h3 class="text-sm sm:text-base font-bold text-white light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-blue-600 transition-colors leading-snug">
                {{ item.title }}
              </h3>
            </div>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
              {{ item.desc }}
            </p>
          </div>

          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 light:border-slate-200">
            <span
              v-for="tag in item.tags"
              :key="tag"
              class="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-850 light:bg-slate-100 text-cyan-300 light:text-blue-700 border border-slate-700/60 light:border-slate-300 group-hover:border-cyan-500/30 transition-colors"
            >
              {{ tag }}
            </span>
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
