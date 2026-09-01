<template>
  <Teleport to="body">
    <Transition name="fade-modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
        @click.self="emit('close')"
        @keydown.esc="emit('close')"
        tabindex="-1"
      >
        <div
          class="relative w-full max-w-2xl bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 rounded-3xl p-5 sm:p-7 shadow-2xl text-left overflow-hidden transition-all duration-300"
        >
          <!-- Ambient Glow Background -->
          <div class="absolute -top-24 -right-24 w-52 h-52 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-52 h-52 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

          <!-- Close Button -->
          <button
            @click="emit('close')"
            class="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-800 bg-slate-800/60 light:bg-slate-100 hover:bg-slate-800 transition-colors cursor-pointer z-10"
            :title="isVi ? 'Đóng' : 'Close'"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Header -->
          <div class="mb-4">
            <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 text-cyan-400 light:text-cyan-700 text-[11px] font-mono mb-1">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>{{ isVi ? 'THẺ HỒ SƠ DEV CARD' : 'DEVELOPER PROFILE CARD' }}</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white light:text-slate-900">
              {{ isVi ? 'Thẻ Profile Tóm Tắt (Dev ID)' : 'Digital Developer Card' }}
            </h3>
          </div>

          <!-- Pixel-Perfect Developer ID Card -->
          <div
            id="dev-card-element"
            class="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-950 via-[#0a1122] to-slate-950 text-white border border-cyan-500/30 shadow-2xl overflow-hidden"
          >
            <!-- Background Glow Gradients -->
            <div class="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/15 via-blue-500/10 to-transparent rounded-tr-full pointer-events-none"></div>

            <div class="relative z-10">
              <div class="flex flex-col sm:flex-row items-center justify-between gap-5">
                <!-- Left Side: Profile Details & Competencies -->
                <div class="flex-1 min-w-0 space-y-3.5 w-full">
                  
                  <!-- Header: Avatar, Name & Role -->
                  <div class="flex items-center gap-3.5">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 p-0.5 shadow-lg shadow-cyan-500/20 shrink-0 flex items-center justify-center">
                      <div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-300 font-mono font-bold text-base tracking-wider">
                        TVH
                      </div>
                    </div>

                    <div class="min-w-0">
                      <div class="flex items-center gap-2 flex-wrap">
                        <h4 class="text-lg sm:text-xl font-bold text-white tracking-tight">
                          Trần Văn Huy
                        </h4>
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>MakeAI</span>
                        </span>
                      </div>
                      <p class="text-xs text-cyan-300 font-mono mt-0.5">
                        Software Developer | Full-Stack & Applied AI
                      </p>
                    </div>
                  </div>

                  <!-- 2 Balanced Information Boxes (Symmetrical & Non-overflowing) -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <!-- Education Box -->
                    <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm flex flex-col justify-between h-[82px]">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Education</span>
                        <span class="text-[11px] font-mono font-bold text-cyan-400">GPA 3.5 / 4.0</span>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-slate-100 truncate">ĐH Bách Khoa Đà Nẵng (DUT)</p>
                        <p class="text-[11px] text-slate-400 font-mono truncate">Khoa học Dữ liệu & AI</p>
                      </div>
                    </div>

                    <!-- Experience Box -->
                    <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm flex flex-col justify-between h-[82px]">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Experience</span>
                        <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">MakeAI (DTG)</span>
                      </div>
                      <div>
                        <p class="text-xs font-bold text-slate-100 truncate">Software Developer Intern</p>
                        <p class="text-[11px] text-purple-300 font-mono truncate">Full-Stack & Applied AI</p>
                      </div>
                    </div>
                  </div>

                  <!-- Tech Stack: Pure Tech Icons -->
                  <div>
                    <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-1.5">Tech Stack</span>
                    <div class="flex items-center gap-2 flex-wrap">
                      <!-- Java / Spring -->
                      <div class="group relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all" title="Java Spring Boot">
                        <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21.93 11.23c-.76-4.52-4.14-8.08-8.62-8.99-4.88-.99-9.52 1.63-11.13 6.08-1.78 4.93.38 10.37 5.09 12.63 4.29 2.06 9.54.99 12.64-2.58.55-.63.29-1.63-.49-1.92-.7-.26-1.46.06-1.84.71-2.22 3.8-7.39 4.79-10.82 2.07-3.41-2.71-4.15-7.75-1.59-11.36 2.55-3.59 7.62-4.48 11.26-1.97 1.48 1.02 2.53 2.53 2.94 4.25.18.77.92 1.28 1.7 1.16.82-.12 1.34-.84 1.16-1.68zM12.5 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c1.47 0 2.78-.71 3.6-1.81.42-.56.24-1.37-.36-1.72-.56-.33-1.29-.11-1.64.44-.39.6-.98.99-1.6.99-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5c.83 0 1.55.4 2 1.03.4.56 1.18.73 1.76.38.56-.34.75-1.1.37-1.68-.97-1.33-2.46-2.13-4.13-2.13z"/>
                        </svg>
                      </div>

                      <!-- Next.js / React -->
                      <div class="group relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all" title="Next.js / React">
                        <svg class="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.568l-5.32-6.852v6.852H10.5V6.432h2.074l5.32 6.852V6.432h2.074v11.136h-2.074zM6.432 17.568V6.432h2.074v11.136H6.432z"/>
                        </svg>
                      </div>

                      <!-- Vue 3 -->
                      <div class="group relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all" title="Vue.js 3">
                        <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M2 3h3.5L12 14.5 18.5 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12.5 6.5 3z"/>
                        </svg>
                      </div>

                      <!-- PostgreSQL / SQL -->
                      <div class="group relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all" title="PostgreSQL Database">
                        <svg class="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-2h-2v2H9v-4h1.5v-2H9V7h4c1.66 0 3 1.34 3 3 0 1.13-.63 2.11-1.56 2.63.96.48 1.56 1.48 1.56 2.62v1.25H13zm0-7.5h-2v2h2c.55 0 1-.45 1-1s-.45-1-1-1zm.5 4.5h-2.5v2h2.5c.55 0 1-.45 1-1s-.45-1-1-1z"/>
                        </svg>
                      </div>

                      <!-- Python / Frappe -->
                      <div class="group relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all" title="Python & Frappe">
                        <svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.9 1a5.4 5.4 0 0 0-5.4 5.4v2.7h5.4v.9H4.7A4.7 4.7 0 0 0 0 14.7a4.7 4.7 0 0 0 4.7 4.7h2.7v-2.7a5.4 5.4 0 0 1 5.4-5.4h3.6v-.9H11.9A5.4 5.4 0 0 0 11.9 1zm-1.8 1.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm2 8.5v2.7h-3.6a4.7 4.7 0 0 0-4.7 4.7 4.7 4.7 0 0 0 4.7 4.7h7.2a4.7 4.7 0 0 0 4.7-4.7v-2.7h-5.4v-.9h7.2a5.4 5.4 0 0 0 5.4-5.4v-2.7h-2.7v2.7a5.4 5.4 0 0 1-5.4 5.4h-3.6v-.9h3.6a.9.9 0 1 1 0-1.8zm1.8 9.1a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z"/>
                        </svg>
                      </div>

                      <!-- Docker -->
                      <div class="group relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all" title="Docker Containerization">
                        <svg class="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zM23.79 11.23c-.347-.234-.997-.333-1.85-.308-.182-.416-.44-.8-.762-1.134-.34-.354-.766-.606-1.246-.736l-.37-.1-1.42 1.42a.186.186 0 00-.054.131v.004c.003.023.007.045.01.068.188 1.107-.156 2.228-.905 3.004-.77.798-1.868 1.248-2.983 1.226H1.722a.486.486 0 00-.486.486v.297c0 .546.06 1.09.18 1.62.915 4.07 4.542 7.02 8.71 7.02 5.093 0 9.42-3.666 10.37-8.77.307-.13.914-.42 1.458-1.077.564-.68.643-1.442.643-1.442a2.383 2.383 0 00-.807-.639z"/>
                        </svg>
                      </div>

                      <!-- Agentic AI -->
                      <div class="group relative flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all" title="Agentic AI & LLMs">
                        <svg class="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>

                <!-- Right Side: White QR Pass Card -->
                <div class="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-slate-900 shadow-xl shrink-0 self-center">
                  <QrcodeVue
                    ref="cardQrRef"
                    value="https://www.tranvanhuy.io.vn"
                    :size="105"
                    level="H"
                    render-as="canvas"
                    class="block mx-auto"
                  />
                  <div class="text-center mt-2">
                    <span class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      {{ isVi ? 'QUÉT XEM HỒ SƠ' : 'SCAN TO VISIT' }}
                    </span>
                    <span class="text-[10px] font-mono font-extrabold text-blue-600 block">
                      tranvanhuy.io.vn
                    </span>
                  </div>
                </div>
              </div>

              <!-- Card Footer: Single Clean Balanced Row (No wrapping / no clutter) -->
              <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono gap-2">
                <div class="flex items-center gap-3 sm:gap-4 truncate">
                  <span class="flex items-center gap-1.5 text-slate-300 truncate">
                    <svg class="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span class="truncate">tranvanhuy064206@gmail.com</span>
                  </span>
                  <span class="hidden md:flex items-center gap-1.5 text-slate-400 shrink-0">
                    <svg class="w-3.5 h-3.5 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Da Nang, VN</span>
                  </span>
                </div>

                <a
                  href="https://github.com/tranvanhuy-dev-it"
                  target="_blank"
                  rel="noopener"
                  class="text-cyan-400 hover:text-cyan-300 font-semibold shrink-0"
                >
                  github.com/tranvanhuy-dev-it
                </a>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p class="text-xs text-slate-400 light:text-slate-600">
              {{ isVi ? 'Lưu thẻ hình ảnh PNG để đính kèm email hoặc gửi vào nhóm tuyển dụng.' : 'Download this image card to attach to emails or share with hiring teams.' }}
            </p>

            <button
              @click="downloadCardPng"
              :disabled="isGenerating"
              class="btn-primary w-full sm:w-auto px-6 py-2.5 flex items-center justify-center gap-2 cursor-pointer text-xs font-semibold shadow-md shadow-blue-500/20"
            >
              <svg v-if="!isGenerating" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span v-if="isGenerating" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>{{ isGenerating ? (isVi ? 'Đang tạo...' : 'Generating...') : (isVi ? 'Tải Thẻ PNG (1-Click)' : 'Download Card (PNG)') }}</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useSoundEffects } from '@/composables/useSoundEffects'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const store = usePortfolioStore()
const sound = useSoundEffects()

const isVi = computed(() => store.locale === 'vi')
const isGenerating = ref(false)
const cardQrRef = ref(null)

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    sound.playModalOpen()
  }
})

// Guaranteed 100% Reliable HTML5 Canvas 2D PNG Generator
function downloadCardPng() {
  sound.playClick()
  isGenerating.value = true

  setTimeout(() => {
    try {
      const width = 1140
      const height = 620
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')

      // 1. Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height)
      bgGrad.addColorStop(0, '#040711')
      bgGrad.addColorStop(0.5, '#0a1122')
      bgGrad.addColorStop(1, '#020617')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // 2. Card Border Neon Gradient
      ctx.lineWidth = 3
      const borderGrad = ctx.createLinearGradient(0, 0, width, height)
      borderGrad.addColorStop(0, '#06b6d4')
      borderGrad.addColorStop(0.5, '#3b82f6')
      borderGrad.addColorStop(1, '#8b5cf6')
      ctx.strokeStyle = borderGrad
      ctx.beginPath()
      ctx.roundRect(24, 24, width - 48, height - 48, 20)
      ctx.stroke()

      // 3. Ambient Glow Circles
      const glow1 = ctx.createRadialGradient(width - 150, 150, 10, width - 150, 150, 300)
      glow1.addColorStop(0, 'rgba(6, 182, 212, 0.2)')
      glow1.addColorStop(1, 'rgba(6, 182, 212, 0)')
      ctx.fillStyle = glow1
      ctx.fillRect(0, 0, width, height)

      // 4. Avatar / Monogram Box
      const avGrad = ctx.createLinearGradient(60, 60, 136, 136)
      avGrad.addColorStop(0, '#2563eb')
      avGrad.addColorStop(1, '#06b6d4')
      ctx.fillStyle = avGrad
      ctx.beginPath()
      ctx.roundRect(60, 60, 76, 76, 16)
      ctx.fill()

      ctx.fillStyle = '#030712'
      ctx.beginPath()
      ctx.roundRect(62, 62, 72, 72, 14)
      ctx.fill()

      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 28px monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('TVH', 98, 98)

      // 5. Name & Subtitle
      ctx.textAlign = 'left'
      ctx.textBaseline = 'alphabetic'
      ctx.font = 'bold 34px sans-serif'
      ctx.fillStyle = '#ffffff'
      ctx.fillText('Trần Văn Huy', 156, 92)

      // MakeAI Badge
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)'
      ctx.beginPath()
      ctx.roundRect(390, 68, 125, 28, 14)
      ctx.fill()
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.fillStyle = '#34d399'
      ctx.font = 'bold 13px monospace'
      ctx.fillText('● MakeAI', 412, 87)

      ctx.font = '16px monospace'
      ctx.fillStyle = '#38bdf8'
      ctx.fillText('Software Developer | Full-Stack & Applied AI', 156, 124)

      // 6. Academic & Experience Badges
      // Box 1: Education
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)'
      ctx.beginPath()
      ctx.roundRect(60, 165, 340, 105, 14)
      ctx.fill()
      ctx.strokeStyle = '#1e293b'
      ctx.lineWidth = 1.5
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '12px monospace'
      ctx.fillText('EDUCATION', 76, 192)
      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 13px monospace'
      ctx.fillText('GPA 3.5 / 4.0', 305, 192)

      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 16px sans-serif'
      ctx.fillText('ĐH Bách Khoa Đà Nẵng (DUT)', 76, 222)
      ctx.fillStyle = '#94a3b8'
      ctx.font = '13px monospace'
      ctx.fillText('Khoa học Dữ liệu & AI', 76, 250)

      // Box 2: Experience
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)'
      ctx.beginPath()
      ctx.roundRect(420, 165, 340, 105, 14)
      ctx.fill()
      ctx.strokeStyle = '#1e293b'
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '12px monospace'
      ctx.fillText('EXPERIENCE', 436, 192)
      ctx.fillStyle = '#34d399'
      ctx.font = 'bold 12px monospace'
      ctx.fillText('MAKEAI (DTG)', 660, 192)

      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 16px sans-serif'
      ctx.fillText('Software Developer Intern', 436, 222)
      ctx.fillStyle = '#c084fc'
      ctx.font = '13px monospace'
      ctx.fillText('Full-Stack & Applied AI', 436, 250)

      // 7. Tech Stack Badges
      ctx.fillStyle = '#94a3b8'
      ctx.font = '12px monospace'
      ctx.fillText('CORE TECH STACK', 60, 305)

      const techList = ['Java (Spring Boot)', 'Next.js 14', 'Vue 3', 'PostgreSQL', 'Python / Frappe', 'Docker', 'Agentic AI']
      let currentX = 60
      let currentY = 325

      techList.forEach(t => {
        ctx.font = '13px monospace'
        const tWidth = ctx.measureText(t).width + 20
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)'
        ctx.beginPath()
        ctx.roundRect(currentX, currentY, tWidth, 32, 6)
        ctx.fill()
        ctx.strokeStyle = '#334155'
        ctx.stroke()

        ctx.fillStyle = '#e2e8f0'
        ctx.fillText(t, currentX + 10, currentY + 21)
        currentX += tWidth + 10
      })

      // 8. QR Code Container on the right
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.roundRect(810, 60, 260, 340, 20)
      ctx.fill()

      // Direct selector from DOM
      const qrCanvas = document.querySelector('#dev-card-element canvas')
      if (qrCanvas && qrCanvas instanceof HTMLCanvasElement) {
        ctx.drawImage(qrCanvas, 840, 85, 200, 200)
      }

      ctx.textAlign = 'center'
      ctx.fillStyle = '#64748b'
      ctx.font = 'bold 12px monospace'
      ctx.fillText('SCAN TO VISIT PORTFOLIO', 940, 320)
      ctx.fillStyle = '#2563eb'
      ctx.font = 'bold 15px monospace'
      ctx.fillText('tranvanhuy.io.vn', 940, 350)

      // 9. Footer Info Bar
      ctx.textAlign = 'left'
      ctx.strokeStyle = '#1e293b'
      ctx.beginPath()
      ctx.moveTo(60, 520)
      ctx.lineTo(width - 60, 520)
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '15px monospace'
      ctx.fillText('✉ tranvanhuy064206@gmail.com', 60, 560)
      ctx.fillText('📍 Da Nang, Vietnam', 420, 560)

      ctx.fillStyle = '#38bdf8'
      ctx.textAlign = 'right'
      ctx.fillText('github.com/tranvanhuy-dev-it', width - 60, 560)

      // Safe Blob Download for 100% Reliability
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.download = 'tranvanhuy-dev-card.png'
          link.href = url
          document.body.appendChild(link)
          link.click()
          setTimeout(() => {
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
          }, 1000)
        } else {
          const link = document.createElement('a')
          link.download = 'tranvanhuy-dev-card.png'
          link.href = canvas.toDataURL('image/png')
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }
        sound.playSuccess()
        isGenerating.value = false
      }, 'image/png', 1.0)

    } catch (err) {
      console.error('Error generating Dev Card', err)
      isGenerating.value = false
    }
  }, 100)
}
</script>

<style scoped>
.fade-modal-enter-active,
.fade-modal-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
