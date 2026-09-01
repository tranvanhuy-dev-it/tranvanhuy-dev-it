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
          <!-- Subtle Glow -->
          <div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

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
            <h3 class="text-lg sm:text-xl font-bold text-white light:text-slate-900 flex items-center gap-2">
              <span>{{ isVi ? 'Thẻ Hồ Sơ Dev Card' : 'Developer Profile Card' }}</span>
              <span class="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 light:text-blue-700 border border-blue-500/30">
                1-Click Export
              </span>
            </h3>
          </div>

          <!-- Minimalist & High-Impact Dev Card Area -->
          <div
            id="dev-card-element"
            class="relative rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-slate-950 via-[#0b1329] to-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden"
          >
            <!-- Sleek Ambient Lighting -->
            <div class="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div class="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <!-- Left Side: Profile & Key Highlights -->
              <div class="flex-1 min-w-0 space-y-4">
                <!-- Avatar + Name -->
                <div class="flex items-center gap-3.5">
                  <div class="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20 shrink-0">
                    <div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-300 font-mono font-bold text-lg">
                      TVH
                    </div>
                  </div>

                  <div>
                    <h4 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Trần Văn Huy
                    </h4>
                    <p class="text-xs sm:text-sm font-mono text-cyan-400 font-medium">
                      Software Developer • Full-Stack & AI
                    </p>
                  </div>
                </div>

                <!-- 3 Clear High-Impact Bullet Highlights -->
                <div class="space-y-2 text-xs sm:text-sm">
                  <!-- Education -->
                  <div class="flex items-center gap-2 text-slate-200">
                    <span class="text-base">🎓</span>
                    <span><strong>ĐH Bách Khoa Đà Nẵng (DUT)</strong> • <span class="text-cyan-300 font-mono font-semibold">GPA 3.5/4.0</span></span>
                  </div>

                  <!-- Work Experience -->
                  <div class="flex items-center gap-2 text-slate-200">
                    <span class="text-base">💼</span>
                    <span>Software Developer Intern @ <strong>MakeAI (DTG)</strong></span>
                  </div>

                  <!-- Tech Stack -->
                  <div class="flex items-center gap-2 text-slate-300 pt-1">
                    <span class="text-base">⚡</span>
                    <div class="flex flex-wrap gap-1.5 font-mono text-xs">
                      <span class="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-amber-300">Spring Boot</span>
                      <span class="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-300">Next.js / Vue 3</span>
                      <span class="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-blue-300">PostgreSQL</span>
                      <span class="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-purple-300">Agentic AI</span>
                    </div>
                  </div>
                </div>

                <!-- Contact row -->
                <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
                  <span class="flex items-center gap-1.5 text-slate-300">
                    <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>tranvanhuy064206@gmail.com</span>
                  </span>
                  <span class="flex items-center gap-1.5 text-cyan-400">
                    <span>github.com/tranvanhuy-dev-it</span>
                  </span>
                </div>
              </div>

              <!-- Right Side: Minimalist QR Code Box -->
              <div class="flex flex-col items-center justify-center p-3 rounded-2xl bg-white text-slate-900 shadow-xl shrink-0">
                <QrcodeVue
                  ref="cardQrRef"
                  value="https://www.tranvanhuy.io.vn"
                  :size="105"
                  level="H"
                  render-as="canvas"
                  class="block mx-auto"
                />
                <div class="text-center mt-1.5">
                  <span class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    {{ isVi ? 'QUÉT XEM PORTFOLIO' : 'SCAN FOR PORTFOLIO' }}
                  </span>
                  <span class="text-[10px] font-mono font-extrabold text-blue-600 block">
                    tranvanhuy.io.vn
                  </span>
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p class="text-xs text-slate-400 light:text-slate-600">
              {{ isVi ? 'Tải thẻ PNG tinh gọn để gửi nhanh cho nhà tuyển dụng.' : 'Download this clean PNG card to share with recruiters.' }}
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
              <span>{{ isGenerating ? (isVi ? 'Đang xuất ảnh...' : 'Exporting...') : (isVi ? 'Tải Thẻ PNG (1-Click)' : 'Download Card (PNG)') }}</span>
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

// Clean High-Resolution Canvas 2D PNG Generator
function downloadCardPng() {
  sound.playClick()
  isGenerating.value = true

  setTimeout(() => {
    try {
      const width = 1000
      const height = 500
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')

      // 1. Background (Clean Dark Obsidian)
      const bgGrad = ctx.createLinearGradient(0, 0, width, height)
      bgGrad.addColorStop(0, '#030712')
      bgGrad.addColorStop(0.6, '#0b1329')
      bgGrad.addColorStop(1, '#030712')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // 2. Subtle Border
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)'
      ctx.beginPath()
      ctx.roundRect(24, 24, width - 48, height - 48, 20)
      ctx.stroke()

      // 3. Avatar Monogram
      const avGrad = ctx.createLinearGradient(60, 60, 140, 140)
      avGrad.addColorStop(0, '#2563eb')
      avGrad.addColorStop(1, '#06b6d4')
      ctx.fillStyle = avGrad
      ctx.beginPath()
      ctx.roundRect(60, 60, 72, 72, 16)
      ctx.fill()

      ctx.fillStyle = '#030712'
      ctx.beginPath()
      ctx.roundRect(62, 62, 68, 68, 14)
      ctx.fill()

      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 26px monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('TVH', 96, 96)

      // 4. Name & Title
      ctx.textAlign = 'left'
      ctx.textBaseline = 'alphabetic'
      ctx.font = 'bold 32px sans-serif'
      ctx.fillStyle = '#ffffff'
      ctx.fillText('Trần Văn Huy', 150, 92)

      ctx.font = '16px monospace'
      ctx.fillStyle = '#38bdf8'
      ctx.fillText('Software Developer • Full-Stack & AI', 150, 122)

      // 5. 3 Power Highlights
      ctx.font = '18px sans-serif'
      ctx.fillStyle = '#f8fafc'
      ctx.fillText('🎓  ĐH Bách Khoa Đà Nẵng (DUT)', 60, 185)
      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 16px monospace'
      ctx.fillText('• GPA 3.5 / 4.0', 370, 185)

      ctx.font = '18px sans-serif'
      ctx.fillStyle = '#f8fafc'
      ctx.fillText('💼  Software Developer Intern @ MakeAI (DTG)', 60, 230)

      // Tech Stack
      ctx.font = '18px sans-serif'
      ctx.fillStyle = '#f8fafc'
      ctx.fillText('⚡  Core Stack:', 60, 275)

      const techs = ['Spring Boot', 'Next.js', 'Vue 3', 'PostgreSQL', 'Agentic AI']
      let tx = 200
      techs.forEach(t => {
        ctx.font = '13px monospace'
        const tw = ctx.measureText(t).width + 20
        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)'
        ctx.beginPath()
        ctx.roundRect(tx, 256, tw, 28, 6)
        ctx.fill()
        ctx.strokeStyle = '#334155'
        ctx.stroke()

        ctx.fillStyle = '#38bdf8'
        ctx.fillText(t, tx + 10, 275)
        tx += tw + 10
      })

      // 6. QR Container on Right
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.roundRect(720, 60, 220, 320, 18)
      ctx.fill()

      const qrCanvas = cardQrRef.value?.$el?.querySelector('canvas') || cardQrRef.value?.$el
      if (qrCanvas && qrCanvas instanceof HTMLCanvasElement) {
        ctx.drawImage(qrCanvas, 745, 80, 170, 170)
      }

      ctx.textAlign = 'center'
      ctx.fillStyle = '#64748b'
      ctx.font = 'bold 11px monospace'
      ctx.fillText('SCAN FOR LIVE PORTFOLIO', 830, 290)

      ctx.fillStyle = '#2563eb'
      ctx.font = 'bold 14px monospace'
      ctx.fillText('www.tranvanhuy.io.vn', 830, 320)

      // 7. Footer Contact Bar
      ctx.textAlign = 'left'
      ctx.strokeStyle = '#1e293b'
      ctx.beginPath()
      ctx.moveTo(60, 420)
      ctx.lineTo(width - 60, 420)
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '14px monospace'
      ctx.fillText('✉ tranvanhuy064206@gmail.com', 60, 455)

      ctx.fillStyle = '#38bdf8'
      ctx.textAlign = 'right'
      ctx.fillText('github.com/tranvanhuy-dev-it', width - 60, 455)

      // Download trigger
      const link = document.createElement('a')
      link.download = 'tranvanhuy-dev-card.png'
      link.href = canvas.toDataURL('image/png')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      sound.playSuccess()
    } catch (err) {
      console.error('Error generating card', err)
    } finally {
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
