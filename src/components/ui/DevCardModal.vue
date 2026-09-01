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
          class="relative w-full max-w-2xl bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 rounded-3xl p-4 sm:p-7 shadow-2xl text-left overflow-hidden transition-all duration-300"
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
          <div class="mb-3 sm:mb-4 pr-10">
            <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 text-cyan-400 light:text-cyan-700 text-[11px] font-mono mb-1">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>{{ isVi ? 'THẺ HỒ SƠ DEV CARD' : 'DEVELOPER PROFILE CARD' }}</span>
            </div>
            <h3 class="text-base sm:text-xl font-bold text-white light:text-slate-900">
              {{ isVi ? 'Thẻ Profile Tóm Tắt (Dev ID)' : 'Digital Developer Card' }}
            </h3>
          </div>

          <!-- Horizontal Landscape Card Wrapper (Always horizontal on both Mobile & PC) -->
          <div class="overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
            <div
              id="dev-card-element"
              class="relative min-w-[560px] sm:min-w-full rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-950 via-[#0a1122] to-slate-950 text-white border border-cyan-500/30 shadow-2xl overflow-hidden"
            >
              <!-- Background Glow Gradients -->
              <div class="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/15 via-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
              <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/15 via-blue-500/10 to-transparent rounded-tr-full pointer-events-none"></div>

              <div class="relative z-10">
                <!-- Symmetrical Landscape Row (Always Horizontal) -->
                <div class="flex flex-row items-center justify-between gap-5">
                  <!-- Left Side: Profile Details & Competencies -->
                  <div class="flex-1 min-w-0 space-y-3.5">
                    
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
                          Software Developer | Full-Stack & AI Solutions
                        </p>
                      </div>
                    </div>

                    <!-- 2 Balanced Information Boxes (Always 2 Columns) -->
                    <div class="grid grid-cols-2 gap-2.5">
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
                          <p class="text-[11px] text-purple-300 font-mono truncate">Full-Stack & AI Solutions</p>
                        </div>
                      </div>
                    </div>

                    <!-- Tech Stack: High-Quality Standard Devicon Logos -->
                    <div>
                      <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-1.5">Tech Stack</span>
                      <div class="flex items-center gap-2 flex-wrap">
                        <!-- Java -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5 hover:border-amber-500/50 transition-all cursor-pointer" title="Java">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" class="w-full h-full object-contain" />
                        </div>

                        <!-- Spring Boot -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5 hover:border-emerald-500/50 transition-all cursor-pointer" title="Spring Boot">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" class="w-full h-full object-contain" />
                        </div>

                        <!-- Next.js -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5 hover:border-cyan-500/50 transition-all cursor-pointer" title="Next.js">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" class="w-full h-full object-contain invert" />
                        </div>

                        <!-- Vue 3 -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5 hover:border-emerald-500/50 transition-all cursor-pointer" title="Vue.js 3">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js 3" class="w-full h-full object-contain" />
                        </div>

                        <!-- PostgreSQL -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5 hover:border-blue-500/50 transition-all cursor-pointer" title="PostgreSQL">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="w-full h-full object-contain" />
                        </div>

                        <!-- Python -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5 hover:border-amber-500/50 transition-all cursor-pointer" title="Python">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" class="w-full h-full object-contain" />
                        </div>

                        <!-- Docker -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5 hover:border-sky-500/50 transition-all cursor-pointer" title="Docker">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" class="w-full h-full object-contain" />
                        </div>

                        <!-- AI Chip Badge -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-purple-500/40 p-1 hover:border-purple-400 transition-all cursor-pointer text-purple-400" title="AI & Agentic Systems">
                          <span class="text-xs font-mono font-bold">AI</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  <!-- Right Side: White QR Pass Card (Always on Right) -->
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

                <!-- Card Footer: Single Clean Balanced Row -->
                <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono gap-2">
                  <div class="flex items-center gap-3 sm:gap-4 truncate">
                    <span class="flex items-center gap-1.5 text-slate-300 truncate">
                      <svg class="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span class="truncate">tranvanhuy064206@gmail.com</span>
                    </span>
                    <span class="flex items-center gap-1.5 text-slate-400 shrink-0">
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
          </div>

          <!-- Bottom Action Buttons -->
          <div class="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p class="text-xs text-slate-400 light:text-slate-600">
              {{ isVi ? 'Lưu thẻ hồ sơ để đính kèm email hoặc gửi nhanh cho nhà tuyển dụng.' : 'Save this profile card to attach to emails or share with recruiters.' }}
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
              <span>{{ isGenerating ? (isVi ? 'Đang xuất thẻ...' : 'Exporting...') : (isVi ? 'Tải Thẻ Profile' : 'Download Card') }}</span>
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
      ctx.fillText('Software Developer | Full-Stack & AI Solutions', 156, 124)

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
      ctx.fillText('Full-Stack & AI Solutions', 436, 250)

      // 7. Tech Stack Badges
      ctx.fillStyle = '#94a3b8'
      ctx.font = '12px monospace'
      ctx.fillText('CORE TECH STACK', 60, 305)

      const techList = ['Java', 'Spring Boot', 'Next.js', 'Vue 3', 'PostgreSQL', 'Python', 'Docker', 'AI']
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
