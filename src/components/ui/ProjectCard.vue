<template>
  <div class="glass-card project-card overflow-hidden group flex flex-col h-full" :class="featured ? 'border border-purple-500/20' : ''">
    <!-- Image / Placeholder -->
    <a
      :href="targetLink"
      target="_blank"
      rel="noopener"
      class="project-img-wrapper h-48 relative overflow-hidden block group/img"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-6xl"
        :style="gradientBg"
      >
        {{ categoryEmoji }}
      </div>

      <!-- Premium Hover overlay with zoom hint -->
      <div 
        v-if="project.image"
        class="absolute inset-0 bg-black/45 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        @click.stop.prevent="$emit('zoom-image', project.image)"
      >
        <span class="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-medium tracking-wide flex items-center gap-1.5 transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
          🔍 Zoom Image
        </span>
      </div>

      <!-- Featured badge -->
      <div
        v-if="project.featured"
        class="absolute top-3 right-3 px-2 py-1 text-xs font-mono font-semibold rounded-lg z-10"
        style="background: rgba(124,58,237,0.8); color: white;"
      >
        ⭐ Featured
      </div>
    </a>

    <!-- Content -->
    <div class="p-5 flex flex-col flex-grow">
      <h3 class="text-lg font-bold text-white light:text-slate-900 mb-1.5 group-hover:text-purple-300 transition-colors">
        <a :href="targetLink" target="_blank" rel="noopener" class="hover:underline">
          {{ project.title }}
        </a>
      </h3>

      <!-- Project Period / Duration -->
      <div v-if="project.time" class="flex items-center gap-1.5 text-xs text-slate-400/80 light:text-slate-700 mb-3 font-mono">
        <svg class="w-3.5 h-3.5 opacity-70 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <span>{{ project.time }}</span>
      </div>

      <p class="text-slate-400 light:text-slate-800 text-sm mb-4 leading-relaxed whitespace-pre-wrap">
        {{ project.longDesc || project.description }}
      </p>

      <!-- My Role -->
      <div
        v-if="project.role"
        class="rounded-xl mb-5 p-4 border border-purple-500/15 bg-purple-500/[0.04] light:bg-purple-500/[0.03]"
      >
        <div class="flex items-center gap-2 mb-2">
          <svg class="w-3.5 h-3.5 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="text-xs font-mono font-semibold uppercase tracking-wider text-purple-300">
            {{ store.ui.myRoleLabel || 'My Role' }}
          </span>
        </div>
        <p class="text-xs text-slate-400 light:text-slate-700 mb-2.5 italic leading-relaxed">
          {{ project.role }}
        </p>
        <ul v-if="project.responsibilities?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
          <li
            v-for="item in project.responsibilities"
            :key="item"
            class="flex items-start gap-1.5 text-xs text-slate-300 light:text-slate-800 leading-snug"
          >
            <span class="text-cyan-400 mt-px shrink-0">✓</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-5 mt-auto">
        <span
          v-for="tag in project.tags.slice(0, 4)"
          :key="tag"
          class="px-2 py-0.5 text-xs font-mono rounded-md"
          style="background: rgba(6,182,212,0.1); color: #06b6d4; border: 1px solid rgba(6,182,212,0.2);"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex items-center justify-between pt-3 border-t border-white/5 light:border-black/5">
        <div v-if="hasLinks" class="flex gap-3">
          <template v-if="project.githubBackend">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 text-sm text-slate-400 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-colors py-1 px-2 rounded-lg hover:bg-white/5 light:hover:bg-black/5"
            >
              <IconGithub class="w-4 h-4" />
              Frontend
            </a>
            <a
              :href="project.githubBackend"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 text-sm text-slate-400 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-colors py-1 px-2 rounded-lg hover:bg-white/5 light:hover:bg-black/5"
            >
              <IconGithub class="w-4 h-4" />
              Backend
            </a>
          </template>
          <a
            v-else-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm text-slate-400 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-colors py-1 px-2 rounded-lg hover:bg-white/5 light:hover:bg-black/5"
          >
            <IconGithub class="w-4 h-4" />
            GitHub
          </a>
          <a
            v-if="project.demo && project.demo !== '#'"
            :href="project.demo"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm transition-colors py-1 px-2 rounded-lg"
            style="color: #06b6d4;"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Live Demo
          </a>
          <a
            v-if="project.video"
            :href="project.video"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-sm transition-colors py-1 px-2 rounded-lg hover:bg-white/5 light:hover:bg-black/5"
            style="color: #c084fc;"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            Demo Video
          </a>
        </div>
        <div
          v-else-if="project.internal"
          class="flex items-center gap-2 text-xs text-slate-500 light:text-slate-500 italic"
        >
          <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>{{ store.ui.internalProjectNote || 'Internal MakeAI project — source & demo not public' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import IconGithub from '@/components/icons/IconGithub.vue'

const store = usePortfolioStore()

const props = defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
})

defineEmits(['zoom-image'])

const targetLink = computed(() => {
  if (props.project.demo && props.project.demo !== '#') {
    return props.project.demo
  }
  return props.project.github || '#'
})

const categoryEmoji = computed(() => {
  const map = { frontend: '🎨', backend: '⚙️', fullstack: '🚀' }
  return map[props.project.category] || '💻'
})

const hasLinks = computed(() =>
  Boolean(
    props.project.github ||
      props.project.githubBackend ||
      (props.project.demo && props.project.demo !== '#') ||
      props.project.video
  )
)

const gradientBg = computed(() => {
  const gradients = {
    frontend: 'background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2));',
    backend: 'background: linear-gradient(135deg, rgba(6,182,212,0.2), rgba(16,185,129,0.2));',
    fullstack: 'background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(245,158,11,0.1));',
  }
  return gradients[props.project.category] || gradients.fullstack
})
</script>
