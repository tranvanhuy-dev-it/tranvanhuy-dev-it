<template>
  <section id="about" class="relative py-7 sm:py-20 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.aboutTitle || 'About Me'"
        :subtitle="store.ui.aboutSubtitle || 'Story & Core Capabilities'"
        :description="store.ui.aboutDesc || 'Engineering philosophy, personal background, and practical software solutions I build'"
      />

      <!-- Story Narrative & Quick Facts Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 mt-4 sm:mt-10 mb-8 sm:mb-14">
        
        <!-- Left: Story Narrative & Career Objective (7 cols) -->
        <div class="lg:col-span-7 glass-card p-5 sm:p-8 rounded-2xl border border-slate-800/80 light:border-slate-200 flex flex-col justify-between space-y-4 fade-left">
          <div class="space-y-3 sm:space-y-3.5 text-slate-300 light:text-slate-700 text-xs sm:text-sm leading-relaxed">
            <h3 class="text-base sm:text-lg font-bold text-white light:text-slate-900 mb-1">
              {{ store.locale === 'vi' ? 'Giới thiệu bản thân & Hành trình kỹ thuật' : 'About Me & Engineering Journey' }}
            </h3>
            
            <template v-if="Array.isArray(store.personal.aboutStory)">
              <p v-for="(p, idx) in store.personal.aboutStory" :key="idx" class="leading-relaxed">
                {{ p }}
              </p>
            </template>
            <p v-else class="leading-relaxed">
              {{ store.personal.aboutStory }}
            </p>

            <!-- Natural seamless objective statement -->
            <div v-if="store.personal.objective" class="pt-3 border-t border-slate-800/80 light:border-slate-200 text-slate-200 light:text-slate-800 leading-relaxed font-medium">
              <span class="text-cyan-400 light:text-blue-600 font-mono font-semibold text-[11px] uppercase tracking-wider block mb-1">
                {{ store.ui.objectiveLabel || 'Career Objective' }}:
              </span>
              <p class="text-xs sm:text-sm text-slate-300 light:text-slate-700">
                {{ store.personal.objective }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Fast-Scan Quick Facts Table (5 cols) -->
        <div class="lg:col-span-5 glass-card p-5 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 flex flex-col justify-between fade-right">
          <div>
            <h3 class="text-xs font-mono uppercase tracking-wider text-cyan-400 light:text-blue-600 font-semibold mb-4">
              {{ store.locale === 'vi' ? 'Thông tin tóm tắt' : 'Quick Profile' }}
            </h3>

            <div class="space-y-3 text-xs sm:text-sm">
              <div
                v-for="fact in store.personal.quickFacts"
                :key="fact.label"
                class="flex items-start justify-between gap-3 pb-2.5 border-b border-slate-800/70 light:border-slate-200 last:border-0 last:pb-0"
              >
                <span class="text-slate-400 light:text-slate-500 shrink-0 text-xs font-medium w-24 sm:w-28">
                  {{ fact.label }}
                </span>
                <span class="text-right font-medium text-slate-200 light:text-slate-800 break-words flex-1 leading-snug">
                  {{ fact.value }}
                </span>
              </div>
            </div>
          </div>

          <!-- Status Indicator Badge -->
          <div class="mt-5 pt-3.5 border-t border-slate-800/80 light:border-slate-200">
            <div class="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium w-full">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span class="leading-tight break-words">
                {{ store.personal.statusTag || (store.locale === 'vi' ? 'Đang làm việc tại Digital Twin Group (MakeAI)' : 'Working at Digital Twin Group (MakeAI)') }}
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Domain Solutions Section Subheading -->
      <div class="mb-4 sm:mb-6 fade-up">
        <h3 class="text-base sm:text-xl font-bold text-white light:text-slate-900">
          {{ store.locale === 'vi' ? 'Các giải pháp phần mềm tôi xây dựng' : 'Core Solutions & Capabilities' }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-400 light:text-slate-600 mt-1">
          {{ store.locale === 'vi' ? 'Năng lực lập trình thực chiến từ thiết kế hệ thống đến sản phẩm hoàn chỉnh' : 'Practical development capabilities from system architecture to production delivery' }}
        </p>
      </div>

      <!-- 5 What I Build Cards in responsive grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
        <div
          v-for="(item, index) in store.whatIBuild"
          :key="item.title"
          class="glass-card-hover p-4 sm:p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 flex flex-col justify-between transition-all duration-300 group fade-up"
          :style="{ transitionDelay: `${index * 60}ms` }"
        >
          <div>
            <!-- Card Header: Index Badge & Domain Title -->
            <div class="flex items-center gap-2.5 mb-2.5">
              <div class="w-8 h-8 rounded-lg bg-slate-850 light:bg-slate-100 border border-slate-700/80 light:border-slate-300 text-cyan-400 light:text-blue-600 flex items-center justify-center font-mono font-bold text-xs shadow-sm group-hover:border-cyan-500/50 transition-all shrink-0">
                0{{ index + 1 }}
              </div>
              <h4 class="text-sm sm:text-base font-bold text-white light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-blue-600 transition-colors leading-snug">
                {{ item.title }}
              </h4>
            </div>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-3 sm:mb-4">
              {{ item.desc }}
            </p>
          </div>

          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap gap-1.5 pt-2.5 sm:pt-3 border-t border-slate-800/60 light:border-slate-200">
            <span
              v-for="tag in item.tags"
              :key="tag"
              class="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-mono rounded-lg bg-slate-850 light:bg-slate-100 text-cyan-300 light:text-blue-700 border border-slate-700/60 light:border-slate-300 group-hover:border-cyan-500/30 transition-colors"
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
