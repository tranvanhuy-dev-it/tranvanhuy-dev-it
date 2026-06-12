<template>
  <section id="projects" class="relative py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.projectsTitle || 'Projects'"
        :subtitle="store.ui.projectsSubtitle || 'My Work'"
        :description="store.ui.projectsDesc || 'A selection of key projects I have built'"
      />

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 fade-up">
        <button
          v-for="f in filters"
          :key="f.value"
          class="px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          :class="store.projectFilter === f.value ? 'filter-active' : 'filter-inactive'"
          @click="store.setProjectFilter(f.value)"
          :id="`project-filter-${f.value}`"
        >
          {{ f.label }}
          <span class="ml-1.5 text-xs opacity-70">({{ getCount(f.value) }})</span>
        </button>
      </div>

      <!-- Projects Grid -->
      <TransitionGroup
        name="project-grid"
        tag="div"
        class="grid md:grid-cols-2 gap-8 mx-auto"
      >
        <ProjectCard
          v-for="project in store.filteredProjects"
          :key="project.id"
          :project="project"
          :featured="project.featured"
          class="fade-up"
          @zoom-image="zoomImageUrl = $event"
        />
      </TransitionGroup>

      <!-- Empty state -->
      <div v-if="store.filteredProjects.length === 0" class="text-center py-20 text-slate-500">
        <div class="text-5xl mb-4">📭</div>
        <p>No projects found in this category.</p>
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
import { ref } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
const zoomImageUrl = ref(null)

const filters = [
  { value: 'all', label: 'All' },
  { value: 'fullstack', label: 'Full-Stack' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
]

function getCount(filter) {
  if (filter === 'all') return store.projects.length
  return store.projects.filter(p => p.category === filter).length
}
</script>

<style scoped>
.filter-active {
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  color: white;
  box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);
}
.filter-inactive {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
}
.filter-inactive:hover {
  border-color: rgba(124, 58, 237, 0.3);
  color: white;
}

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

/* Modal Animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
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
