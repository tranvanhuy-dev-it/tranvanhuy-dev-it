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
