<template>
  <section id="projects" class="relative py-7 sm:py-20 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.projectsTitle || 'Featured Projects'"
        :subtitle="store.ui.projectsSubtitle || 'Engineering Portfolio'"
        :description="store.ui.projectsDesc || 'Architecture-driven full-stack systems, enterprise workflows, and AI solutions'"
      />

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-start gap-1.5 sm:gap-2 mb-5 sm:mb-8 fade-up">
        <button
          v-for="f in filters"
          :key="f.value"
          class="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer flex items-center gap-1.5"
          :class="store.projectFilter === f.value ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-800/70 hover:bg-slate-800 text-slate-300 border border-slate-700/80 light:bg-white light:text-slate-700 light:border-slate-200 light:hover:bg-slate-50'"
          @click="store.setProjectFilter(f.value)"
          :id="`project-filter-${f.value}`"
        >
          <span>{{ f.label }}</span>
          <span class="text-[11px] opacity-80 font-mono px-1.5 py-0.2 rounded-md bg-black/20 light:bg-slate-200/60">
            {{ getCount(f.value) }}
          </span>
        </button>
      </div>

      <!-- Projects Grid -->
      <TransitionGroup
        name="project-grid"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7 mx-auto"
      >
        <ProjectCard
          v-for="project in displayedProjects"
          :key="project.id"
          :project="project"
          :featured="project.featured"
          class="fade-up"
          @zoom-image="zoomImageUrl = $event"
        />
      </TransitionGroup>

      <!-- View More / Collapse Button -->
      <div
        v-if="store.filteredProjects.length > 2"
        class="mt-6 sm:mt-12 text-center fade-up"
      >
        <button
          @click="showAll = !showAll"
          class="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/90 hover:border-blue-500/60 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold shadow-lg transition-all duration-200 group cursor-pointer"
        >
          <span>
            {{ showAll 
                ? (store.locale === 'vi' ? 'Thu gọn danh sách dự án' : 'Show Less Projects') 
                : (store.locale === 'vi' ? `Xem toàn bộ ${store.filteredProjects.length} dự án` : `View All ${store.filteredProjects.length} Projects`) 
            }}
          </span>
          <span
            class="text-blue-400 font-bold transition-transform duration-200 group-hover:translate-y-0.5"
            :class="{ 'rotate-180 group-hover:-translate-y-0.5': showAll }"
          >
            ↓
          </span>
        </button>
      </div>

      <!-- Empty state -->
      <div v-if="store.filteredProjects.length === 0" class="text-center py-16 text-slate-500 font-mono text-xs">
        <p>{{ store.locale === 'vi' ? 'Không có dự án nào trong danh mục này.' : 'No projects found in this category.' }}</p>
      </div>
    </div>

    <!-- Fullscreen Image Lightbox -->
    <Transition name="lightbox">
      <div 
        v-if="zoomImageUrl" 
        class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        @click="zoomImageUrl = null"
      >
        <!-- Close button -->
        <button 
          @click="zoomImageUrl = null" 
          class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 text-lg cursor-pointer"
          aria-label="Close lightbox"
        >
          ✕
        </button>
        
        <!-- Large Image -->
        <img 
          :src="zoomImageUrl" 
          class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
          alt="Zoomed project preview"
        />
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
const zoomImageUrl = ref(null)
const showAll = ref(false)

const filters = computed(() => [
  { value: 'all', label: store.ui.filterAll || 'All' },
  { value: 'fullstack', label: store.ui.filterFullstack || 'Full-Stack' },
  { value: 'enterprise', label: store.ui.filterEnterprise || 'Enterprise' },
  { value: 'ai', label: store.ui.filterAi || 'AI & Automation' },
  { value: 'gis', label: store.ui.filterGis || 'GIS & Maps' },
])

const displayedProjects = computed(() => {
  if (showAll.value) {
    return store.filteredProjects
  }
  return store.filteredProjects.slice(0, 2)
})

function getCount(filter) {
  if (filter === 'all') return store.projects.length
  return store.projects.filter(p => {
    if (p.categories && Array.isArray(p.categories)) {
      return p.categories.includes(filter)
    }
    return p.category === filter
  }).length
}
</script>

<style scoped>
.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.4s ease;
}
.project-grid-enter-from,
.project-grid-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.project-grid-move {
  transition: transform 0.4s ease;
}

/* Lightbox Animation */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
.lightbox-enter-active img,
.lightbox-leave-active img {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.lightbox-enter-from img,
.lightbox-leave-to img {
  transform: scale(0.95);
}
</style>
