<template>
  <section id="education" class="relative py-7 sm:py-20 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.eduTitle || 'Education'"
        :subtitle="store.ui.eduSubtitle || 'Academic Background'"
        :description="store.ui.eduDesc || 'University education, qualifications, and certifications'"
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 mt-4 sm:mt-8">
        <!-- Education Main Card (8 cols) -->
        <div
          v-for="(edu, i) in store.education"
          :key="edu.id"
          class="lg:col-span-8 glass-card-hover p-3.5 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 fade-up flex flex-col sm:flex-row items-start gap-3 sm:gap-6"
          :style="`animation-delay: ${(i + 1) * 80}ms`"
        >
          <!-- Left side: Type Icon & Date / GPA -->
          <div class="flex sm:flex-col items-center sm:items-start justify-between w-full sm:w-auto sm:min-w-[150px] gap-3 shrink-0">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl shrink-0 overflow-hidden bg-slate-800/90 light:bg-slate-100 border border-slate-700/80 light:border-slate-300">
              <img v-if="edu.logo" :src="edu.logo" :alt="edu.school" class="w-full h-full object-contain p-1.5" />
              <span v-else class="text-2xl">{{ edu.type === 'degree' ? '🎓' : '📜' }}</span>
            </div>
            <div class="text-right sm:text-left">
              <span class="text-xs font-mono text-slate-400 light:text-slate-600 block">{{ edu.period }}</span>
              <span v-if="edu.gpa" class="inline-block text-xs px-2.5 py-0.5 rounded-md font-mono mt-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-medium">
                GPA {{ edu.gpa }}
              </span>
              <span v-else class="inline-block text-xs px-2.5 py-0.5 rounded-md font-mono mt-1 bg-green-500/10 border border-green-500/30 text-green-400 font-medium">
                ✓ Completed
              </span>
            </div>
          </div>

          <!-- Divider -->
          <div class="hidden sm:block w-px self-stretch bg-slate-800 light:bg-slate-200"></div>

          <!-- Right side: Content -->
          <div class="flex-grow w-full">
            <p class="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 mb-1.5">
              {{ edu.school }}
            </p>
            <h3 class="text-white light:text-slate-900 font-bold text-base sm:text-lg mb-2 leading-snug">
              {{ edu.degree }}
            </h3>
            <p class="text-slate-300 light:text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
              {{ edu.description }}
            </p>
            <div class="flex flex-wrap gap-2 text-[11px] font-mono">
              <span class="px-2.5 py-0.5 rounded-md bg-slate-850/80 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-slate-300 light:text-slate-700 font-medium">Data Science</span>
              <span class="px-2.5 py-0.5 rounded-md bg-slate-850/80 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-slate-300 light:text-slate-700 font-medium">Artificial Intelligence</span>
              <span class="px-2.5 py-0.5 rounded-md bg-slate-850/80 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-slate-300 light:text-slate-700 font-medium">Software Engineering</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Academic Highlights Box (4 cols) -->
        <div v-if="store.academicFocus" class="lg:col-span-4 glass-card p-4 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 flex flex-col justify-between">
          <div>
            <div class="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
              {{ store.academicFocus.tag }}
            </div>
            <h4 class="text-sm sm:text-base font-bold text-white light:text-slate-900 mb-3 leading-snug">
              {{ store.academicFocus.title }}
            </h4>
            
            <ul class="space-y-2 mb-4">
              <li
                v-for="point in store.academicFocus.points"
                :key="point"
                class="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700 leading-relaxed"
              >
                <span class="text-cyan-400 light:text-blue-600 font-bold shrink-0">▸</span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-3 border-t border-slate-800/80 light:border-slate-200 flex items-center gap-2 text-xs text-slate-400 light:text-slate-600 font-mono">
            <span class="text-emerald-400 animate-pulse">●</span>
            <span>{{ store.academicFocus.subtitle }}</span>
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
