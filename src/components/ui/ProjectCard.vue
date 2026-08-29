<template>
  <div class="glass-card-hover overflow-hidden flex flex-col h-full rounded-xl border border-slate-800/80 light:border-slate-200">
    <!-- Image / Placeholder -->
    <router-link
      :to="`/projects/${project.id}`"
      class="project-img-wrapper aspect-video relative overflow-hidden block group/img bg-slate-900 light:bg-slate-100 cursor-pointer"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-5xl"
        :style="gradientBg"
      >
        {{ categoryEmoji }}
      </div>

      <!-- Zoom hint overlay -->
      <div 
        v-if="project.image"
        class="absolute inset-0 bg-slate-950/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer"
        @click.stop.prevent="$emit('zoom-image', project.image)"
      >
        <span class="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/20 text-white text-xs font-mono font-medium flex items-center gap-1.5 shadow-lg">
          🔍 Zoom Image
        </span>
      </div>

      <!-- Featured badge -->
      <div
        v-if="project.featured"
        class="absolute top-3 right-3 px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-md shadow-sm z-10 bg-blue-600 text-white"
      >
        Featured
      </div>
    </router-link>

    <!-- Content -->
    <div class="p-4 sm:p-6 flex flex-col flex-grow justify-between">
      <div>
        <!-- Category & Period -->
        <div class="flex items-center justify-between gap-2 mb-2 text-xs font-mono">
          <span class="text-cyan-400 light:text-blue-600 font-semibold uppercase tracking-wider">
            {{ project.category }}
          </span>
          <span v-if="project.time" class="text-slate-400 light:text-slate-500 flex items-center gap-1">
            <svg class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {{ project.time }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="text-base sm:text-lg font-bold text-white light:text-slate-900 mb-2 leading-snug group-hover:text-blue-400 transition-colors">
          <router-link :to="`/projects/${project.id}`" class="hover:underline">
            {{ project.title }}
          </router-link>
        </h3>

        <!-- Description (Clean & punchy) -->
        <p class="text-slate-300 light:text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {{ project.description || project.longDesc }}
        </p>

        <!-- Role & Key Highlights (Compact & Elegant) -->
        <div
          v-if="project.role"
          class="rounded-lg p-3 mb-4 bg-slate-850/60 light:bg-slate-50 border border-slate-800 light:border-slate-200"
        >
          <div class="flex items-center gap-2 text-xs text-white light:text-slate-900 font-medium mb-1.5">
            <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-600/15 text-blue-400 border border-blue-500/30 font-semibold whitespace-nowrap shrink-0">
              {{ store.locale === 'vi' ? 'Vai trò' : 'Role' }}
            </span>
            <span class="truncate text-xs text-slate-200 light:text-slate-800">{{ project.role }}</span>
          </div>

          <ul v-if="project.responsibilities?.length" class="space-y-1 mt-2 pt-2 border-t border-slate-750 light:border-slate-200 text-xs text-slate-400 light:text-slate-600">
            <li
              v-for="item in project.responsibilities.slice(0, 3)"
              :key="item"
              class="flex items-start gap-1.5 leading-tight"
            >
              <span class="text-cyan-400 light:text-blue-600 shrink-0 text-xs">▸</span>
              <span class="truncate">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <!-- Tech Stack Tags with mini logos -->
        <div class="flex flex-wrap gap-1.5 mb-4 pt-2">
          <span
            v-for="tag in project.tags.slice(0, 5)"
            :key="tag"
            class="tech-badge inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] sm:text-xs font-mono rounded-md"
          >
            <img
              v-if="getTechLogo(tag)"
              :src="getTechLogo(tag)"
              :alt="tag"
              class="w-3.5 h-3.5 object-contain shrink-0"
              loading="lazy"
            />
            <span>{{ tag }}</span>
          </span>
        </div>

        <!-- Links & Action Buttons (1 sleek single row on mobile & desktop) -->
        <div class="flex items-center justify-between pt-3 border-t border-slate-800/80 light:border-slate-200">
          <div v-if="hasLinks" class="flex items-center gap-1.5 sm:gap-2 w-full overflow-x-auto no-scrollbar flex-nowrap">
            <template v-if="project.githubBackend">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-all py-1.5 px-2 sm:px-2.5 rounded-lg border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700 light:bg-slate-100 light:border-slate-300 whitespace-nowrap shrink-0"
              >
                <IconGithub class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>FE Code</span>
              </a>
              <a
                :href="project.githubBackend"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-all py-1.5 px-2 sm:px-2.5 rounded-lg border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700 light:bg-slate-100 light:border-slate-300 whitespace-nowrap shrink-0"
              >
                <IconGithub class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>BE Code</span>
              </a>
            </template>
            <a
              v-else-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-slate-300 hover:text-white light:text-slate-700 light:hover:text-slate-900 transition-all py-1.5 px-2.5 sm:px-3 rounded-lg border border-slate-700/80 bg-slate-800/80 hover:bg-slate-700 light:bg-slate-100 light:border-slate-300 whitespace-nowrap shrink-0"
            >
              <IconGithub class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>GitHub</span>
            </a>

            <a
              v-if="project.demo && project.demo !== '#'"
              :href="project.demo"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium transition-all py-1.5 px-2.5 sm:px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm whitespace-nowrap shrink-0"
            >
              <span>Live Demo</span>
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>

            <a
              v-if="project.video"
              :href="project.video"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium transition-all py-1.5 px-2 sm:px-2.5 rounded-lg border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-purple-200 whitespace-nowrap shrink-0"
            >
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              <span>Video</span>
            </a>

            <router-link
              :to="`/projects/${project.id}`"
              class="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-cyan-400 hover:text-cyan-300 light:text-blue-600 light:hover:text-blue-700 transition-colors py-1.5 px-2 sm:px-2.5 rounded-lg border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 shrink-0 whitespace-nowrap ml-auto"
            >
              <span>{{ store.locale === 'vi' ? 'Chi tiết' : 'Details' }}</span>
              <span>➔</span>
            </router-link>
          </div>
          <div
            v-else-if="project.internal"
            class="flex items-center justify-between gap-2 w-full pt-1"
          >
            <div class="flex items-center gap-1.5 text-xs text-slate-400 light:text-slate-600 italic">
              <svg class="w-3.5 h-3.5 shrink-0 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>{{ store.locale === 'vi' ? 'Dự án Digital Twin Group (MakeAI) — Bảo mật' : 'Digital Twin Group (MakeAI) Project — Private' }}</span>
            </div>
            <router-link
              :to="`/projects/${project.id}`"
              class="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 light:text-blue-600 light:hover:text-blue-700 transition-colors py-1.5 px-2.5 rounded-lg border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 shrink-0"
            >
              <span>{{ store.locale === 'vi' ? 'Xem chi tiết' : 'Details' }}</span>
              <span>➔</span>
            </router-link>
          </div>
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

const techLogoMap = {
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'Spring Security': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Frappe': 'https://cdn.simpleicons.org/frappe/0089FF',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'TailwindCSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  'WebSocket': 'https://cdn.simpleicons.org/websocket/62B5E5',
  'OpenClaw': 'https://cdn.simpleicons.org/openai/10A37F',
  'AI Integration': 'https://cdn.simpleicons.org/openai/10A37F',
  'Agentic AI': 'https://cdn.simpleicons.org/openai/10A37F',
  'HTML5/CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'Zustand': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'JWT': 'https://cdn.simpleicons.org/jsonwebtokens/000000',
  'Chart.js': 'https://cdn.simpleicons.org/chartdotjs/FF6384',
}

function getTechLogo(tag) {
  if (!tag) return null
  const trimmed = tag.trim()
  return techLogoMap[trimmed] || null
}
</script>
