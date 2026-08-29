<template>
  <div class="relative min-h-screen bg-[#090d16] text-slate-100 selection:bg-blue-600 selection:text-white">
    <!-- Top Fixed Sub-Navbar -->
    <header class="sticky top-0 z-40 backdrop-blur-md bg-[#090d16]/90 border-b border-slate-800/80 px-4 sm:px-8 py-3">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors group"
        >
          <span class="p-1 rounded-md bg-slate-800/90 border border-slate-700 group-hover:border-slate-500 text-slate-300 group-hover:text-white transition-all">
            ←
          </span>
          <span>{{ store.locale === 'vi' ? 'Quay lại Portfolio' : 'Back to Portfolio' }}</span>
        </router-link>

        <div class="flex items-center gap-3">
          <!-- External links quick access -->
          <a
            v-if="project?.demo && project.demo !== '#'"
            :href="project.demo"
            target="_blank"
            rel="noopener"
            class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all"
          >
            <span>Live Demo</span>
            <span class="text-[10px]">↗</span>
          </a>

          <!-- Language Switcher -->
          <div class="flex items-center gap-0.5 bg-slate-800/80 border border-slate-700/80 rounded-lg p-0.5 font-mono text-[10px]">
            <button
              @click="store.setLocale('en')"
              class="px-2 py-1 rounded-md transition-all cursor-pointer"
              :class="store.locale === 'en' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'"
            >
              EN
            </button>
            <button
              @click="store.setLocale('vi')"
              class="px-2 py-1 rounded-md transition-all cursor-pointer"
              :class="store.locale === 'vi' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'"
            >
              VI
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" v-if="project">
      
      <!-- 1. Header Title & Meta -->
      <div class="mb-8 pb-6 border-b border-slate-800/80">
        <div class="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono">
          <span class="px-2.5 py-0.5 rounded bg-blue-600/15 border border-blue-500/30 text-blue-400 font-semibold uppercase">
            {{ project.category }}
          </span>
          <span v-if="project.time" class="px-2.5 py-0.5 rounded bg-slate-800/80 border border-slate-700/80 text-slate-400">
            📅 {{ project.time }}
          </span>
          <span v-if="project.featured" class="px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 font-medium">
            ★ Featured
          </span>
        </div>

        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3 leading-tight">
          {{ project.title }}
        </h1>

        <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {{ project.description }}
        </p>
      </div>

      <!-- 2. Two-Column Clean Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left / Main Column (8 cols): Image + Case Study Details -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Project Preview Image -->
          <div
            v-if="project.image"
            class="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group cursor-pointer relative"
            @click="zoomImage = true"
          >
            <div class="px-3.5 py-2 bg-slate-850 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
              </div>
              <span class="text-[11px] text-slate-500 truncate">Preview Screenshot</span>
              <span class="text-[10px] text-blue-400 group-hover:underline">🔍 Phóng to</span>
            </div>
            
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-auto object-cover max-h-[420px]"
            />
          </div>

          <!-- Section: Solution Overview -->
          <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
            <h2 class="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span class="text-blue-400">01.</span>
              <span>{{ store.locale === 'vi' ? 'Tổng quan & Giải pháp' : 'Project Solution & Overview' }}</span>
            </h2>
            <p class="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
              {{ project.longDesc || project.description }}
            </p>
          </div>

          <!-- Section: Key Responsibilities & Contributions -->
          <div class="bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6">
            <h2 class="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="text-blue-400">02.</span>
              <span>{{ store.locale === 'vi' ? 'Vai trò & Trách nhiệm đảm nhiệm' : 'Role & Key Contributions' }}</span>
            </h2>

            <div v-if="project.role" class="mb-4 pb-3 border-b border-slate-800/80">
              <span class="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">
                {{ store.locale === 'vi' ? 'Phạm vi công việc:' : 'Scope of Work:' }}
              </span>
              <p class="text-sm font-medium text-slate-200">
                {{ project.role }}
              </p>
            </div>

            <ul v-if="project.responsibilities?.length" class="space-y-2.5">
              <li
                v-for="item in project.responsibilities"
                :key="item"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
              >
                <span class="text-blue-400 mt-0.5 shrink-0 font-bold">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Internal project notice if applicable -->
          <div v-if="project.internal" class="p-4 rounded-lg bg-amber-950/20 border border-amber-800/40 text-amber-300/90 text-xs flex items-center gap-2.5">
            <span class="text-base">🔒</span>
            <span>{{ store.locale === 'vi' ? 'Dự án nội bộ tại Digital Twin Group (MakeAI) — Mã nguồn & bản phân phối được bảo mật.' : 'Enterprise internal project at Digital Twin Group (MakeAI) — Source code is private.' }}</span>
          </div>

        </div>

        <!-- Right / Sidebar Column (4 cols): Quick Specs & Action Links -->
        <div class="lg:col-span-4 space-y-5 lg:sticky lg:top-20">
          
          <!-- Actions Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              {{ store.locale === 'vi' ? 'Liên kết trực tiếp' : 'Project Links' }}
            </h3>
            
            <div class="space-y-2.5">
              <a
                v-if="project.demo && project.demo !== '#'"
                :href="project.demo"
                target="_blank"
                rel="noopener"
                class="w-full btn-primary text-xs py-2.5 px-4 justify-center"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>

              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-all"
              >
                <IconGithub class="w-4 h-4" />
                <span>{{ project.githubBackend ? 'Frontend Code' : 'Source Code' }}</span>
              </a>

              <a
                v-if="project.githubBackend"
                :href="project.githubBackend"
                target="_blank"
                rel="noopener"
                class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-all"
              >
                <IconGithub class="w-4 h-4" />
                <span>Backend Code</span>
              </a>

              <a
                v-if="project.video"
                :href="project.video"
                target="_blank"
                rel="noopener"
                class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 text-xs font-medium text-purple-300 transition-all"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
                <span>Watch Video Demo</span>
              </a>

              <div v-if="!project.github && !project.demo && !project.video" class="text-xs text-slate-500 italic text-center py-1">
                {{ store.locale === 'vi' ? 'Không có liên kết công khai.' : 'No public links available.' }}
              </div>
            </div>
          </div>

          <!-- Tech Stack Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              {{ store.locale === 'vi' ? 'Công nghệ sử dụng' : 'Tech Stack' }}
            </h3>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800 text-cyan-300 border border-slate-700"
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
          </div>

          <!-- Quick Metadata Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg space-y-3 text-xs">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              {{ store.locale === 'vi' ? 'Thông tin tóm tắt' : 'Quick Details' }}
            </h3>
            
            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-slate-400">{{ store.locale === 'vi' ? 'Thể loại' : 'Category' }}</span>
              <span class="font-semibold text-slate-200 uppercase font-mono">{{ project.category }}</span>
            </div>

            <div class="flex items-center justify-between pb-2 border-b border-slate-800">
              <span class="text-slate-400">{{ store.locale === 'vi' ? 'Thời gian' : 'Timeline' }}</span>
              <span class="font-medium text-slate-200 font-mono">{{ project.time || 'N/A' }}</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-slate-400">{{ store.locale === 'vi' ? 'Trạng thái' : 'Status' }}</span>
              <span class="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{{ store.locale === 'vi' ? 'Hoàn thành' : 'Completed' }}</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      <!-- 3. Bottom Next / Previous Project Navigation -->
      <div class="mt-14 pt-8 border-t border-slate-800 flex items-center justify-between">
        <router-link
          v-if="prevProject"
          :to="`/projects/${prevProject.id}`"
          class="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors group"
        >
          <span class="p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-slate-600 transition-colors">
            ←
          </span>
          <div class="text-left">
            <span class="text-[10px] font-mono text-slate-500 block uppercase">
              {{ store.locale === 'vi' ? 'Dự án trước' : 'Previous' }}
            </span>
            <span class="font-semibold text-slate-200 group-hover:text-blue-400 truncate max-w-[150px] sm:max-w-[200px] block">
              {{ prevProject.title }}
            </span>
          </div>
        </router-link>
        <div v-else></div>

        <router-link
          v-if="nextProject"
          :to="`/projects/${nextProject.id}`"
          class="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors group text-right"
        >
          <div class="text-right">
            <span class="text-[10px] font-mono text-slate-500 block uppercase">
              {{ store.locale === 'vi' ? 'Dự án tiếp theo' : 'Next' }}
            </span>
            <span class="font-semibold text-slate-200 group-hover:text-blue-400 truncate max-w-[150px] sm:max-w-[200px] block">
              {{ nextProject.title }}
            </span>
          </div>
          <span class="p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-slate-600 transition-colors">
            →
          </span>
        </router-link>
        <div v-else></div>
      </div>

    </main>

    <!-- Project Not Found State -->
    <div v-else class="max-w-md mx-auto text-center py-28 px-4">
      <div class="text-4xl mb-3">🔍</div>
      <h2 class="text-xl font-bold text-white mb-2">
        {{ store.locale === 'vi' ? 'Không tìm thấy thông tin dự án' : 'Project Not Found' }}
      </h2>
      <p class="text-slate-400 text-xs mb-6">
        {{ store.locale === 'vi' ? 'Vui lòng chọn một dự án khác từ trang chủ.' : 'Please pick another project from the home page.' }}
      </p>
      <router-link to="/" class="btn-primary text-xs px-5 py-2">
        ← {{ store.locale === 'vi' ? 'Về Portfolio' : 'Back to Portfolio' }}
      </router-link>
    </div>

    <!-- Image Lightbox Modal -->
    <Transition name="fade">
      <div
        v-if="zoomImage && project?.image"
        class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        @click="zoomImage = false"
      >
        <button
          @click="zoomImage = false"
          class="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800/90 border border-slate-700 text-white flex items-center justify-center text-sm cursor-pointer hover:bg-slate-700"
        >
          ✕
        </button>
        <img
          :src="project.image"
          :alt="project.title"
          class="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl border border-slate-700"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolioStore } from '@/stores/portfolioStore'
import IconGithub from '@/components/icons/IconGithub.vue'

const route = useRoute()
const store = usePortfolioStore()
const zoomImage = ref(false)

const project = computed(() => {
  const id = Number(route.params.id)
  return store.projects.find((p) => p.id === id)
})

const currentIndex = computed(() => {
  return store.projects.findIndex((p) => p.id === Number(route.params.id))
})

const prevProject = computed(() => {
  if (currentIndex.value > 0) {
    return store.projects[currentIndex.value - 1]
  }
  return null
})

const nextProject = computed(() => {
  if (currentIndex.value >= 0 && currentIndex.value < store.projects.length - 1) {
    return store.projects[currentIndex.value + 1]
  }
  return null
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

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

watch(
  () => route.params.id,
  () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
