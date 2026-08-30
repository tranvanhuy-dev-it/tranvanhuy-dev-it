<template>
  <section id="skills" class="relative py-7 sm:py-20 px-4 sm:px-6 bg-slate-900/40 light:bg-slate-100/60 border-y border-white/5 light:border-black/5">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.skillsTitle || 'Tech Stack'"
        :subtitle="store.ui.skillsSubtitle || 'Technologies & Tools'"
        :description="store.ui.skillsDesc || 'Production-tested technologies, frameworks, databases, and infrastructure I work with'"
      />

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-5 sm:mb-9 fade-up">
        <button
          v-for="cat in store.skillCategories"
          :key="cat.id"
          class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer flex items-center justify-center"
          :class="store.activeSkillCategory === cat.id ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-800/70 hover:bg-slate-800 text-slate-300 border border-slate-700/80 light:bg-white light:text-slate-700 light:border-slate-200 light:hover:bg-slate-50'"
          @click="store.setActiveSkillCategory(cat.id)"
          :id="`skill-tab-${cat.id}`"
        >
          <span>{{ cat.label }}</span>
        </button>
      </div>

      <!-- Skills Bento Grid -->
      <TransitionGroup name="skill-list" tag="div" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl mx-auto">
        <div
          v-for="(skill, i) in store.activeSkills"
          :key="skill.name"
          class="glass-card-hover p-3 sm:p-4 rounded-xl flex items-center gap-2.5 sm:gap-3.5 fade-up border border-slate-800/80 light:border-slate-200 group"
          :style="`animation-delay: ${i * 35}ms`"
        >
          <!-- Skill Logo -->
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg p-1.5 flex items-center justify-center bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-200 group-hover:scale-105 transition-transform shrink-0">
            <img v-if="skill.logo" :src="skill.logo" :alt="skill.name" class="w-full h-full object-contain" />
            <span v-else class="text-xs font-mono font-bold text-cyan-400">•</span>
          </div>

          <!-- Name & Applied Scope -->
          <div class="min-w-0 flex-1">
            <span class="block font-semibold text-white light:text-slate-900 text-xs sm:text-sm truncate group-hover:text-blue-400 transition-colors">
              {{ skill.name }}
            </span>
            <span class="block text-[10px] sm:text-[11px] font-mono text-cyan-400/90 light:text-blue-600 truncate mt-0.5">
              {{ skill.focus }}
            </span>
          </div>
        </div>
      </TransitionGroup>

      <!-- Infrastructure / Deployment Credibility Callout -->
      <div class="mt-8 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-slate-900/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 max-w-3xl mx-auto text-center fade-up">
        <div class="flex items-center justify-center gap-2 text-xs font-mono font-semibold text-cyan-400 light:text-blue-600 mb-1.5 uppercase tracking-wider">
          <span>{{ store.locale === 'vi' ? 'Kinh nghiệm Triển khai Thực tế' : 'Deployment & Production Experience' }}</span>
        </div>
        <p class="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
          {{ store.locale === 'vi' 
              ? 'Từng đóng gói và triển khai ứng dụng thực tế trên Linux Server (Ubuntu VPS), cấu hình Nginx Reverse Proxy, SSL, Docker Compose và phát hành ứng dụng lên Vercel / Cloudflare DNS.'
              : 'Hands-on experience deploying full-stack apps to Linux cloud servers (Ubuntu VPS), configuring Nginx Reverse Proxy, SSL certificates, Docker Compose, and Vercel edge deployment.'
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
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
