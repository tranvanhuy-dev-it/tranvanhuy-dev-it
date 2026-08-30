<template>
  <section id="about" class="relative pt-4 pb-12 sm:pt-8 sm:pb-20 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.aboutTitle || (store.locale === 'vi' ? 'Về tôi' : 'About Me')"
        :subtitle="store.ui.aboutSubtitle || (store.locale === 'vi' ? 'Giới thiệu' : 'About')"
      />

      <!-- Story Narrative & Career Objective (Full Width) -->
      <div class="glass-card p-6 sm:p-10 rounded-2xl border border-slate-800/80 light:border-slate-200 mt-4 sm:mt-6 fade-up">
        <div class="space-y-4 text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
          <template v-if="Array.isArray(store.personal.aboutStory)">
            <p v-for="(p, idx) in store.personal.aboutStory" :key="idx" class="leading-relaxed">
              {{ p }}
            </p>
          </template>
          <p v-else class="leading-relaxed">
            {{ store.personal.aboutStory }}
          </p>

          <!-- Objective block -->
          <div v-if="store.personal.objective" class="mt-6 pt-5 border-t border-slate-800/80 light:border-slate-200">
            <div class="p-4 sm:p-5 rounded-xl bg-blue-600/5 light:bg-blue-50/50 border border-blue-500/20">
              <span class="text-cyan-400 light:text-blue-600 font-mono font-semibold text-xs uppercase tracking-wider block mb-1">
                {{ store.ui.objectiveLabel || (store.locale === 'vi' ? 'Mục tiêu nghề nghiệp' : 'Career Objective') }}:
              </span>
              <p class="text-sm sm:text-base text-slate-200 light:text-slate-800 leading-relaxed font-medium">
                {{ store.personal.objective }}
              </p>
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
