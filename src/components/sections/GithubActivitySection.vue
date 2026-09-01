<template>
  <div class="mt-12 sm:mt-16 pt-10 border-t border-slate-800/80 light:border-slate-200">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 sm:mb-8">
      <div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 light:bg-blue-50 border border-blue-500/30 text-blue-400 light:text-blue-700 text-xs font-mono mb-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{{ isVi ? 'HOẠT ĐỘNG GITHUB THỜI GIAN THỰC' : 'LIVE GITHUB ACTIVITY & METRICS' }}</span>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-white light:text-slate-900 tracking-tight">
          {{ isVi ? 'Thống kê Kỹ thuật & Mã nguồn mở' : 'Open-Source & Commit Pulse' }}
        </h3>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="refresh"
          :disabled="isRefreshing"
          class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-850 hover:bg-slate-800 light:bg-slate-100 light:hover:bg-slate-200 text-slate-200 hover:text-white light:text-slate-800 border border-slate-700/80 light:border-slate-300 text-xs font-mono transition-all cursor-pointer shadow-sm"
          :title="isVi ? 'Đồng bộ trực tiếp từ GitHub REST API' : 'Sync live from GitHub REST API'"
        >
          <svg
            class="w-3.5 h-3.5 text-cyan-400"
            :class="{ 'animate-spin': isRefreshing || loading }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>{{ isRefreshing ? (isVi ? 'Đang tải...' : 'Syncing...') : (isVi ? 'Đồng bộ Live' : 'Live Sync') }}</span>
        </button>

        <a
          href="https://github.com/tranvanhuy-dev-it"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-850 hover:bg-slate-800 light:bg-slate-100 light:hover:bg-slate-200 text-slate-200 hover:text-white light:text-slate-800 border border-slate-700/80 light:border-slate-300 text-xs font-mono transition-all group shrink-0 shadow-sm"
        >
          <svg class="w-4 h-4 fill-current text-slate-300 light:text-slate-700 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>@tranvanhuy-dev-it</span>
          <span class="text-cyan-400 group-hover:translate-x-0.5 transition-transform">→</span>
        </a>
      </div>
    </div>

    <!-- 4 Stats Cards Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
      <div class="p-4 rounded-2xl bg-slate-850/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 shadow-sm">
        <div class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">Public Repositories</div>
        <div class="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 mt-1 font-mono flex items-center gap-2">
          <span v-if="loading" class="inline-block w-8 h-8 bg-slate-700/60 rounded animate-pulse"></span>
          <span v-else>{{ stats.publicRepos }}</span>
          <span class="text-xs font-normal text-emerald-400 font-mono">Active</span>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-slate-850/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 shadow-sm">
        <div class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">Stargazers</div>
        <div class="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1 font-mono flex items-center gap-1.5">
          <span v-if="loading" class="inline-block w-8 h-8 bg-slate-700/60 rounded animate-pulse"></span>
          <span v-else>★ {{ stats.totalStars }}</span>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-slate-850/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 shadow-sm">
        <div class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">Primary Languages</div>
        <div class="text-base sm:text-lg font-bold text-cyan-400 light:text-blue-600 mt-1 truncate">
          <span v-if="loading" class="inline-block w-24 h-6 bg-slate-700/60 rounded animate-pulse"></span>
          <span v-else>{{ topTwoLanguages }}</span>
        </div>
      </div>

      <div class="p-4 rounded-2xl bg-slate-850/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 shadow-sm">
        <div class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">Followers</div>
        <div class="text-2xl sm:text-3xl font-extrabold text-purple-400 mt-1 font-mono">
          <span v-if="loading" class="inline-block w-8 h-8 bg-slate-700/60 rounded animate-pulse"></span>
          <span v-else>{{ stats.followers }}</span>
          <span class="text-xs text-slate-400 font-sans font-normal ml-1">Followers</span>
        </div>
      </div>
    </div>

    <!-- 2 Column Details: Language Distribution & Recent Push/Commit Events -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
      <!-- Left (5 cols): Language Distribution -->
      <div class="lg:col-span-5 p-5 rounded-2xl bg-slate-850/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex flex-col justify-between">
        <div>
          <h4 class="text-sm font-bold text-white light:text-slate-900 mb-3 flex items-center justify-between">
            <span>{{ isVi ? 'Phân bổ Ngôn ngữ Lập trình' : 'Codebase Language Distribution' }}</span>
            <span class="text-[11px] font-mono text-cyan-400">REST API</span>
          </h4>

          <!-- Loading state -->
          <div v-if="loading && (!stats.topLanguages || stats.topLanguages.length === 0)" class="space-y-3 py-4">
            <div class="w-full h-3 bg-slate-800 rounded animate-pulse"></div>
            <div class="w-3/4 h-3 bg-slate-800 rounded animate-pulse"></div>
            <div class="w-1/2 h-3 bg-slate-800 rounded animate-pulse"></div>
          </div>

          <div v-else>
            <!-- Multi-colored progress bar -->
            <div class="w-full h-3 rounded-full bg-slate-800 light:bg-slate-200 overflow-hidden flex mb-4">
              <div
                v-for="lang in stats.topLanguages"
                :key="lang.name"
                :style="{ width: lang.percent + '%', backgroundColor: lang.color }"
                class="h-full transition-all duration-500"
                :title="`${lang.name}: ${lang.percent}%`"
              ></div>
            </div>

            <!-- Language Pills -->
            <div class="space-y-2.5">
              <div
                v-for="lang in stats.topLanguages"
                :key="lang.name"
                class="flex items-center justify-between text-xs font-mono"
              >
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: lang.color }"></span>
                  <span class="text-slate-300 light:text-slate-700 font-medium">{{ lang.name }}</span>
                </div>
                <span class="text-slate-400 light:text-slate-500">{{ lang.percent }}%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800 light:border-slate-200 text-[11px] text-slate-400 font-mono flex items-center justify-between">
          <span>Backend & Full-Stack Core</span>
          <span class="text-emerald-400">● 100% Type-Safe</span>
        </div>
      </div>

      <!-- Right (7 cols): Recent Commits / Pushes -->
      <div class="lg:col-span-7 p-5 rounded-2xl bg-slate-850/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex flex-col justify-between">
        <div>
          <h4 class="text-sm font-bold text-white light:text-slate-900 mb-3 flex items-center justify-between">
            <span>{{ isVi ? 'Nhật ký Commit & Push Gần nhất' : 'Recent Commits & Push Stream' }}</span>
            <span class="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Live Synced</span>
            </span>
          </h4>

          <!-- Loading state -->
          <div v-if="loading && (!stats.recentEvents || stats.recentEvents.length === 0)" class="space-y-3 py-2">
            <div class="p-3 rounded-xl bg-slate-900/90 h-16 animate-pulse"></div>
            <div class="p-3 rounded-xl bg-slate-900/90 h-16 animate-pulse"></div>
          </div>

          <div v-else class="space-y-3">
            <div
              v-for="event in stats.recentEvents"
              :key="event.id"
              class="p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-200 flex items-start gap-3 hover:border-slate-700 light:hover:border-slate-300 transition-colors"
            >
              <div class="w-7 h-7 rounded-lg bg-blue-500/10 light:bg-blue-100 text-blue-400 light:text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-mono font-semibold text-cyan-300 light:text-blue-700 truncate">
                    {{ event.repo.replace('tranvanhuy-dev-it/', '') }}
                  </span>
                  <span class="text-[10px] font-mono text-slate-400 shrink-0">{{ event.time }}</span>
                </div>
                <p class="text-xs text-slate-300 light:text-slate-600 mt-1 truncate font-mono">
                  {{ event.message }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>Continuous Integration & Deployment</span>
          <a
            href="https://github.com/tranvanhuy-dev-it"
            target="_blank"
            rel="noopener"
            class="text-cyan-400 hover:text-cyan-300 font-mono text-xs inline-flex items-center gap-1"
          >
            <span>{{ isVi ? 'Xem tất cả repos' : 'View all repositories' }}</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useGithubStats } from '@/composables/useGithubStats'

const store = usePortfolioStore()
const isVi = computed(() => store.locale === 'vi')
const { stats, loading, isRefreshing, refresh } = useGithubStats()

const topTwoLanguages = computed(() => {
  if (stats.value.topLanguages && stats.value.topLanguages.length >= 2) {
    return `${stats.value.topLanguages[0].name} / ${stats.value.topLanguages[1].name}`
  }
  return stats.value.topLanguages?.[0]?.name || 'C# / Java'
})
</script>
