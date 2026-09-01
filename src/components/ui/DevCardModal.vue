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
          class="relative w-full max-w-2xl bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-cyan-500/10 text-left overflow-hidden transition-all duration-300"
        >
          <!-- Background Ambient Glow -->
          <div class="absolute -top-28 -right-28 w-56 h-56 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-28 -left-28 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

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
          <div class="mb-5 flex items-center justify-between gap-2">
            <div>
              <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 text-cyan-400 light:text-cyan-700 text-[11px] font-mono mb-1">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>{{ isVi ? 'THẺ HỒ SƠ DEV CARD' : 'DEVELOPER PROFILE CARD' }}</span>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-white light:text-slate-900">
                {{ isVi ? 'Thẻ Profile Tóm Tắt (Dev ID)' : 'Digital Developer Card' }}
              </h3>
            </div>
          </div>

          <!-- Interactive Card Preview Area -->
          <div
            id="dev-card-element"
            class="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-cyan-500/30 shadow-2xl overflow-hidden"
          >
            <!-- Card Ambient Cyber Gradients -->
            <div class="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/20 via-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/20 via-blue-500/10 to-transparent rounded-tr-full pointer-events-none"></div>

            <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <!-- Left side: Developer Information -->
              <div class="space-y-3 min-w-0 flex-1">
                <div class="flex items-center gap-3">
                  <!-- Monogram / Avatar badge -->
                  <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-mono font-bold text-lg shadow-lg shadow-cyan-500/20 shrink-0">
                    TVH
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <span>Trần Văn Huy</span>
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <span class="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>MakeAI</span>
                      </span>
                    </h4>
                    <p class="text-xs text-cyan-300 font-mono">
                      Software Developer | Full-Stack & Applied AI
                    </p>
                  </div>
                </div>

                <!-- Academic & Location Specs -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span class="text-[10px] text-slate-400 font-mono uppercase block">Education</span>
                    <span class="font-semibold text-slate-200 truncate block">Bach Khoa Da Nang (DUT)</span>
                    <span class="text-[11px] text-cyan-400 font-mono">GPA: 3.5/4.0</span>
                  </div>
                  <div class="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span class="text-[10px] text-slate-400 font-mono uppercase block">Focus</span>
                    <span class="font-semibold text-slate-200 truncate block">Data Science & AI</span>
                    <span class="text-[11px] text-purple-400 font-mono">Full-Stack Production</span>
                  </div>
                </div>

                <!-- Core Tech Stack Badges -->
                <div>
                  <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-1.5">Core Tech Stack</span>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="tech in ['Spring Boot', 'Next.js', 'Vue 3', 'Frappe', 'PostgreSQL', 'Agentic AI', 'Docker']"
                      :key="tech"
                      class="px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 text-[10px] font-mono border border-slate-700/80"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Right side: QR Code & Direct Scan Info -->
              <div class="flex sm:flex-col items-center justify-center p-3 rounded-2xl bg-white/95 text-slate-900 shadow-xl shrink-0 self-center sm:self-stretch">
                <QrcodeVue
                  ref="cardQrRef"
                  value="https://www.tranvanhuy.io.vn"
                  :size="105"
                  level="H"
                  render-as="canvas"
                  class="block mx-auto"
                />
                <div class="text-center mt-1.5">
                  <span class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                    {{ isVi ? 'QUÉT ĐỂ XEM HỒ SƠ' : 'SCAN TO VISIT' }}
                  </span>
                  <span class="text-[10px] font-mono font-extrabold text-blue-700 block">
                    tranvanhuy.io.vn
                  </span>
                </div>
              </div>
            </div>

            <!-- Card Footer Metadata -->
            <div class="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 font-mono gap-2">
              <div class="flex items-center gap-3">
                <span>📧 tranvanhuy064206@gmail.com</span>
                <span>📍 Da Nang, Vietnam</span>
              </div>
              <div class="text-cyan-400">
                github.com/tranvanhuy-dev-it
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p class="text-xs text-slate-400 light:text-slate-600">
              {{ isVi ? 'Lưu thẻ hình ảnh PNG để đính kèm email hoặc gửi vào nhóm tuyển dụng.' : 'Download this image card to attach to emails or share with hiring teams.' }}
            </p>

            <div class="flex items-center gap-2 w-full sm:w-auto">
              <button
                @click="downloadCardPng"
                :disabled="isGenerating"
                class="btn-primary w-full sm:w-auto px-5 py-2.5 flex items-center justify-center gap-2 cursor-pointer text-xs font-semibold"
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

// Direct High-Resolution HTML5 Canvas Renderer for 1-Click PNG Download
function downloadCardPng() {
  sound.playClick()
  isGenerating.value = true

  setTimeout(() => {
    try {
      const width = 1200
      const height = 660
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')

      // 1. Background gradient (Cyber Dark Slate)
      const bgGrad = ctx.createLinearGradient(0, 0, width, height)
      bgGrad.addColorStop(0, '#040711')
      bgGrad.addColorStop(0.5, '#0b1120')
      bgGrad.addColorStop(1, '#020617')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // 2. Card Border Neon Gradient
      ctx.lineWidth = 4
      const borderGrad = ctx.createLinearGradient(0, 0, width, height)
      borderGrad.addColorStop(0, '#06b6d4')
      borderGrad.addColorStop(0.5, '#3b82f6')
      borderGrad.addColorStop(1, '#a855f7')
      ctx.strokeStyle = borderGrad
      ctx.strokeRect(20, 20, width - 40, height - 40)

      // 3. Ambient Glow Circles
      const glow1 = ctx.createRadialGradient(width - 150, 150, 10, width - 150, 150, 300)
      glow1.addColorStop(0, 'rgba(6, 182, 212, 0.25)')
      glow1.addColorStop(1, 'rgba(6, 182, 212, 0)')
      ctx.fillStyle = glow1
      ctx.fillRect(0, 0, width, height)

      // 4. Avatar / Monogram Box
      ctx.fillStyle = '#0284c7'
      ctx.beginPath()
      ctx.roundRect(60, 60, 90, 90, 20)
      ctx.fill()

      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 36px monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('TVH', 105, 105)

      // 5. Name & Title
      ctx.textAlign = 'left'
      ctx.font = 'bold 42px sans-serif'
      ctx.fillStyle = '#ffffff'
      ctx.fillText('Trần Văn Huy', 175, 90)

      // Role badge
      ctx.fillStyle = 'rgba(16, 185, 129, 0.2)'
      ctx.beginPath()
      ctx.roundRect(460, 62, 190, 34, 17)
      ctx.fill()
      ctx.fillStyle = '#34d399'
      ctx.font = 'bold 16px monospace'
      ctx.fillText('● MakeAI Intern', 485, 85)

      ctx.font = '20px monospace'
      ctx.fillStyle = '#38bdf8'
      ctx.fillText('Software Developer | Full-Stack & Applied AI', 175, 135)

      // 6. Academic & Focus Badges
      // Box 1
      ctx.fillStyle = 'rgba(15, 23, 42, 0.8)'
      ctx.beginPath()
      ctx.roundRect(60, 180, 380, 110, 16)
      ctx.fill()
      ctx.strokeStyle = '#334155'
      ctx.lineWidth = 1.5
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '14px monospace'
      ctx.fillText('EDUCATION', 80, 208)
      ctx.fillStyle = '#f8fafc'
      ctx.font = 'bold 18px sans-serif'
      ctx.fillText('Bach Khoa Da Nang (DUT)', 80, 240)
      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 17px monospace'
      ctx.fillText('GPA: 3.5 / 4.0 (IT)', 80, 268)

      // Box 2
      ctx.fillStyle = 'rgba(15, 23, 42, 0.8)'
      ctx.beginPath()
      ctx.roundRect(460, 180, 380, 110, 16)
      ctx.fill()
      ctx.strokeStyle = '#334155'
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '14px monospace'
      ctx.fillText('SPECIALIZATION', 480, 208)
      ctx.fillStyle = '#f8fafc'
      ctx.font = 'bold 18px sans-serif'
      ctx.fillText('Data Science & Artificial Intelligence', 480, 240)
      ctx.fillStyle = '#c084fc'
      ctx.font = 'bold 16px monospace'
      ctx.fillText('Production Full-Stack Systems', 480, 268)

      // 7. Core Tech Stack Tags
      ctx.fillStyle = '#94a3b8'
      ctx.font = '14px monospace'
      ctx.fillText('CORE TECH STACK', 60, 330)

      const techList = ['Java (Spring Boot)', 'Next.js', 'TypeScript', 'Vue 3', 'Python (Frappe)', 'PostgreSQL', 'Agentic AI', 'Docker']
      let currentX = 60
      let currentY = 350

      techList.forEach(t => {
        ctx.font = '16px monospace'
        const tWidth = ctx.measureText(t).width + 24
        if (currentX + tWidth > 840) {
          currentX = 60
          currentY += 45
        }
        ctx.fillStyle = 'rgba(30, 41, 59, 0.9)'
        ctx.beginPath()
        ctx.roundRect(currentX, currentY, tWidth, 34, 8)
        ctx.fill()
        ctx.strokeStyle = '#475569'
        ctx.stroke()

        ctx.fillStyle = '#e2e8f0'
        ctx.fillText(t, currentX + 12, currentY + 23)
        currentX += tWidth + 12
      })

      // 8. Draw QR Code Container on the right
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.roundRect(880, 60, 260, 340, 24)
      ctx.fill()

      // Grab rendered QR canvas image from QrcodeVue
      const qrCanvas = cardQrRef.value?.$el?.querySelector('canvas') || cardQrRef.value?.$el
      if (qrCanvas && qrCanvas instanceof HTMLCanvasElement) {
        ctx.drawImage(qrCanvas, 910, 85, 200, 200)
      }

      ctx.textAlign = 'center'
      ctx.fillStyle = '#334155'
      ctx.font = 'bold 14px monospace'
      ctx.fillText('SCAN TO VISIT PORTFOLIO', 1010, 320)
      ctx.fillStyle = '#0284c7'
      ctx.font = 'bold 17px monospace'
      ctx.fillText('www.tranvanhuy.io.vn', 1010, 355)

      // 9. Footer Info Bar
      ctx.textAlign = 'left'
      ctx.strokeStyle = '#334155'
      ctx.beginPath()
      ctx.moveTo(60, 560)
      ctx.lineTo(width - 60, 560)
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '18px monospace'
      ctx.fillText('📧 tranvanhuy064206@gmail.com', 60, 600)
      ctx.fillText('📍 Da Nang, Vietnam', 460, 600)

      ctx.fillStyle = '#38bdf8'
      ctx.textAlign = 'right'
      ctx.fillText('github.com/tranvanhuy-dev-it', width - 60, 600)

      // Trigger download
      const link = document.createElement('a')
      link.download = 'tranvanhuy-dev-card.png'
      link.href = canvas.toDataURL('image/png')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      sound.playSuccess()
    } catch (err) {
      console.error('Error generating Dev Card', err)
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
