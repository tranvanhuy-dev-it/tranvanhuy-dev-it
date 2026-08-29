<template>
  <section id="skills" class="relative py-14 sm:py-24 px-4 sm:px-6 bg-slate-900/40 light:bg-slate-100/60 border-y border-white/5 light:border-black/5">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.skillsTitle || 'Skills'"
        :subtitle="store.ui.skillsSubtitle || 'Technical Stack'"
        :description="store.ui.skillsDesc || 'Technologies, frameworks, databases, and tools I work with'"
      />

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 fade-up">
        <button
          v-for="cat in store.skillCategories"
          :key="cat.id"
          class="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-sm font-medium transition-all duration-150 cursor-pointer"
          :class="store.activeSkillCategory === cat.id ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-800/70 hover:bg-slate-800 text-slate-300 border border-slate-700/80 light:bg-white light:text-slate-700 light:border-slate-200 light:hover:bg-slate-50'"
          @click="store.setActiveSkillCategory(cat.id)"
          :id="`skill-tab-${cat.id}`"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills Bento Grid (Centered for all counts) -->
      <TransitionGroup name="skill-list" tag="div" class="flex flex-wrap justify-center gap-2 sm:gap-3.5">
        <div
          v-for="(skill, i) in store.activeSkills"
          :key="skill.name"
          class="glass-card-hover p-2.5 sm:p-4 rounded-xl flex items-center gap-2.5 sm:gap-3.5 fade-up w-[calc(50%-0.3rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.75rem)] min-w-[130px] max-w-[240px]"
          :style="`animation-delay: ${i * 35}ms`"
        >
          <!-- Skill Logo -->
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg p-1.5 flex items-center justify-center bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-200 shrink-0">
            <img v-if="skill.logo" :src="skill.logo" :alt="skill.name" class="w-full h-full object-contain" />
            <span v-else class="text-xs font-mono font-bold text-cyan-400">⚡</span>
          </div>

          <!-- Name & Category info -->
          <div class="min-w-0 flex-1">
            <span class="block font-semibold text-white light:text-slate-900 text-xs sm:text-sm truncate">{{ skill.name }}</span>
            <span class="block text-[10px] sm:text-[11px] font-mono text-cyan-400/90 light:text-blue-600 truncate mt-0.5">
              {{ getSkillTag(skill.level) }}
            </span>
          </div>
        </div>
      </TransitionGroup>

      <!-- Clean Summary Highlights: 2 Distinct Modern Cards -->
      <div class="mt-8 sm:mt-12 grid md:grid-cols-2 gap-4 sm:gap-6 fade-up">
        <!-- Card 1: Backend Architecture -->
        <div class="glass-card p-4 sm:p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2.5 mb-3">
              <span class="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                ⚙️
              </span>
              <h4 class="text-sm sm:text-base font-bold text-white light:text-slate-900 leading-snug">
                {{ store.locale === 'vi' ? 'Kiến trúc Backend & Hệ thống' : 'Backend & System Architecture' }}
              </h4>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
              {{ store.locale === 'vi'
                ? 'Thiết kế hệ thống backend mở rộng, RESTful API chuẩn mực, mô hình hóa CSDL quan hệ và tối ưu hóa hiệu năng truy vấn.'
                : 'Designing scalable backend systems, secure RESTful APIs, relational schema modeling, and high-performance query optimization.'
              }}
            </p>
          </div>
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 light:border-slate-200">
            <span class="px-2.5 py-1 text-[11px] font-mono rounded-md bg-blue-600/10 text-blue-400 border border-blue-500/20">Clean Architecture</span>
            <span class="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/80 light:border-slate-300">RESTful API</span>
            <span class="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/80 light:border-slate-300">Database Tuning</span>
            <span class="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/80 light:border-slate-300">OAuth2 & JWT</span>
          </div>
        </div>

        <!-- Card 2: Applied AI & Automation -->
        <div class="glass-card p-4 sm:p-6 rounded-2xl border border-slate-800/80 light:border-slate-200 hover:border-slate-700 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2.5 mb-3">
              <span class="w-8 h-8 rounded-lg bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold shrink-0">
                🤖
              </span>
              <h4 class="text-sm sm:text-base font-bold text-white light:text-slate-900 leading-snug">
                {{ store.locale === 'vi' ? 'Ứng dụng AI & Tự động hóa' : 'Applied AI & Automation' }}
              </h4>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
              {{ store.locale === 'vi'
                ? 'Nghiên cứu ứng dụng Agentic AI (OpenClaw) và tự động hóa quy trình nghiệp vụ số doanh nghiệp trên nền tảng Python & Frappe.'
                : 'Building intelligent workflows with Agentic AI (OpenClaw) and automating enterprise operations using Python and Frappe.'
              }}
            </p>
          </div>
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60 light:border-slate-200">
            <span class="px-2.5 py-1 text-[11px] font-mono rounded-md bg-cyan-600/10 text-cyan-400 border border-cyan-500/20">Agentic AI Workflows</span>
            <span class="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/80 light:border-slate-300">Process Digitization</span>
            <span class="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/80 light:border-slate-300">Python Automation</span>
            <span class="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/80 light:border-slate-300">Data Analysis</span>
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

function getSkillTag(level) {
  if (level >= 85) return 'Proficient'
  if (level >= 75) return 'Advanced'
  if (level >= 65) return 'Hands-on'
  return 'Exploring'
}
</script>

<style scoped>
.skill-list-enter-active,
.skill-list-leave-active {
  transition: all 0.3s ease;
}
.skill-list-enter-from,
.skill-list-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(6px);
}
.skill-list-move {
  transition: transform 0.3s ease;
}
</style>
