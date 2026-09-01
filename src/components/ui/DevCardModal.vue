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
          class="relative w-full max-w-3xl bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 rounded-3xl p-5 sm:p-8 shadow-2xl shadow-cyan-500/10 text-left overflow-hidden transition-all duration-300"
        >
          <!-- Ambient Glow Background -->
          <div class="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

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
          <div class="mb-5">
            <div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 text-cyan-400 light:text-cyan-700 text-[11px] font-mono mb-1">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>{{ isVi ? 'THẺ HỒ SƠ DEV CARD ĐIỆN TỬ' : 'DIGITAL DEVELOPER PROFILE ID' }}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white light:text-slate-900 tracking-tight">
              {{ isVi ? 'Thẻ Tóm Tắt Năng Lực (Developer Card)' : 'Executive Developer Pass' }}
            </h3>
          </div>

          <!-- Ultra-Premium Developer ID Card Preview Area -->
          <div
            id="dev-card-element"
            class="relative rounded-2xl p-5 sm:p-7 bg-gradient-to-br from-slate-950 via-[#0a1122] to-slate-950 text-white border border-cyan-500/40 shadow-2xl overflow-hidden"
          >
            <!-- Cyber Matrix Watermark & Grid Background -->
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            
            <!-- Neon Lighting Accents -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/20 via-blue-600/10 to-transparent rounded-bl-full pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600/20 via-blue-600/10 to-transparent rounded-tr-full pointer-events-none"></div>

            <div class="relative z-10">
              <!-- Top Row: Avatar, Identity, Verification & Status -->
              <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div class="flex items-center gap-3.5">
                  <!-- Monogram Hologram Avatar -->
                  <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/25 shrink-0 flex items-center justify-center">
                    <div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-300 font-mono font-extrabold text-xl tracking-wider">
                      TVH
                    </div>
                    <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold border-2 border-slate-950 shadow">
                      ✓
                    </span>
                  </div>

                  <div>
                    <div class="flex items-center gap-2">
                      <h4 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        Trần Văn Huy
                      </h4>
                      <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                        VERIFIED
                      </span>
                    </div>
                    <p class="text-xs sm:text-sm font-mono text-cyan-400 font-medium">
                      Software Developer • Full-Stack & Applied AI
                    </p>
                  </div>
                </div>

                <!-- Live Status & Affiliation Badge -->
                <div class="flex items-center gap-2 self-start sm:self-auto">
                  <div class="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 shadow-sm">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span class="font-semibold">MakeAI • Digital Twin Group</span>
                  </div>
                </div>
              </div>

              <!-- Middle Content: Credentials, Tech Stack & QR Pass -->
              <div class="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4 items-center">
                <!-- Left (8 cols): Academic, Focus & Tech Matrix -->
                <div class="md:col-span-8 space-y-3.5">
                  <!-- Academic & Specialization Cards -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Education</span>
                        <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          GPA 3.5 / 4.0
                        </span>
                      </div>
                      <p class="font-bold text-white text-xs mt-1">ĐH Bách Khoa Đà Nẵng (DUT)</p>
                      <p class="text-[11px] text-slate-400 font-mono">B.S. in Computer Science (IT)</p>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col justify-between">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Focus Areas</span>
                        <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          Production Ready
                        </span>
                      </div>
                      <p class="font-bold text-white text-xs mt-1">Data Science & AI Solutions</p>
                      <p class="text-[11px] text-slate-400 font-mono">Scalable Backend & GIS Systems</p>
                    </div>
                  </div>

                  <!-- Core Tech Stack Pills -->
                  <div>
                    <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-2">Core Tech Competencies</span>
                    <div class="flex flex-wrap gap-1.5">
                      <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-medium">Java (Spring Boot)</span>
                      <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-medium">Next.js 14 / React</span>
                      <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-medium">Vue 3 / Vite</span>
                      <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-blue-500/30 text-blue-300 text-[11px] font-mono font-medium">PostgreSQL / Redis</span>
                      <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-medium">Python (Frappe / AI)</span>
                      <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-indigo-500/30 text-indigo-300 text-[11px] font-mono font-medium">Agentic AI & Docker</span>
                    </div>
                  </div>
                </div>

                <!-- Right (4 cols): Embedded Clean QR Code Pass -->
                <div class="md:col-span-4 flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white text-slate-900 shadow-xl border border-white/20 shrink-0">
                  <QrcodeVue
                    ref="cardQrRef"
                    value="https://www.tranvanhuy.io.vn"
                    :size="115"
                    level="H"
                    render-as="canvas"
                    class="block mx-auto"
                  />
                  <div class="text-center mt-2">
                    <span class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      {{ isVi ? 'QUÉT XEM HỒ SƠ LIVE' : 'SCAN TO VIEW PORTFOLIO' }}
                    </span>
                    <span class="text-[11px] font-mono font-extrabold text-blue-600 block">
                      www.tranvanhuy.io.vn
                    </span>
                  </div>
                </div>
              </div>

              <!-- Bottom Row: Direct Contact & Serial Info -->
              <div class="mt-5 pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono gap-2">
                <div class="flex items-center gap-4">
                  <span class="flex items-center gap-1.5 text-slate-300">
                    <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>tranvanhuy064206@gmail.com</span>
                  </span>
                  <span class="flex items-center gap-1.5 text-slate-300">
                    <svg class="w-3.5 h-3.5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Da Nang, Vietnam</span>
                  </span>
                </div>

                <div class="flex items-center gap-3 text-cyan-400 font-bold">
                  <span>github.com/tranvanhuy-dev-it</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Action Modal Bar -->
          <div class="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p class="text-xs text-slate-400 light:text-slate-600">
              {{ isVi ? 'Tải thẻ định danh PNG sắc nét chuẩn 2x Retina để gửi đính kèm email hoặc CV tuyển dụng.' : 'Download this high-res 2x Retina PNG card to share with recruiters and engineering leaders.' }}
            </p>

            <div class="flex items-center gap-2 w-full sm:w-auto">
              <button
                @click="downloadCardPng"
                :disabled="isGenerating"
                class="btn-primary w-full sm:w-auto px-6 py-2.5 flex items-center justify-center gap-2 cursor-pointer text-xs font-semibold shadow-lg shadow-blue-500/25"
              >
                <svg v-if="!isGenerating" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                <span v-if="isGenerating" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>{{ isGenerating ? (isVi ? 'Đang xuất ảnh...' : 'Exporting...') : (isVi ? 'Tải Thẻ Profile PNG (1-Click)' : 'Download Profile Pass (PNG)') }}</span>
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

// Direct High-Resolution HTML5 Canvas 2x Retina Renderer
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

      // 1. Deep Cyber Obsidian Background
      const bgGrad = ctx.createLinearGradient(0, 0, width, height)
      bgGrad.addColorStop(0, '#030712')
      bgGrad.addColorStop(0.5, '#0b1329')
      bgGrad.addColorStop(1, '#020617')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // 2. Cyber Matrix Grid Lines
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)'
      ctx.lineWidth = 1
      for (let x = 40; x < width - 40; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 40)
        ctx.lineTo(x, height - 40)
        ctx.stroke()
      }
      for (let y = 40; y < height - 40; y += 40) {
        ctx.beginPath()
        ctx.moveTo(40, y)
        ctx.lineTo(width - 40, y)
        ctx.stroke()
      }

      // 3. Ambient Lighting Glow
      const glow1 = ctx.createRadialGradient(width - 200, 150, 20, width - 200, 150, 400)
      glow1.addColorStop(0, 'rgba(6, 182, 212, 0.25)')
      glow1.addColorStop(1, 'rgba(6, 182, 212, 0)')
      ctx.fillStyle = glow1
      ctx.fillRect(0, 0, width, height)

      const glow2 = ctx.createRadialGradient(200, height - 150, 20, 200, height - 150, 400)
      glow2.addColorStop(0, 'rgba(168, 85, 247, 0.2)')
      glow2.addColorStop(1, 'rgba(168, 85, 247, 0)')
      ctx.fillStyle = glow2
      ctx.fillRect(0, 0, width, height)

      // 4. Card Outer Border with Neon Gradient
      ctx.lineWidth = 3
      const borderGrad = ctx.createLinearGradient(0, 0, width, height)
      borderGrad.addColorStop(0, '#06b6d4')
      borderGrad.addColorStop(0.5, '#3b82f6')
      borderGrad.addColorStop(1, '#a855f7')
      ctx.strokeStyle = borderGrad
      ctx.beginPath()
      ctx.roundRect(30, 30, width - 60, height - 60, 24)
      ctx.stroke()

      // 5. Avatar Monogram Squircle Badge
      const avGrad = ctx.createLinearGradient(60, 60, 150, 150)
      avGrad.addColorStop(0, '#06b6d4')
      avGrad.addColorStop(0.5, '#2563eb')
      avGrad.addColorStop(1, '#7c3aed')
      ctx.fillStyle = avGrad
      ctx.beginPath()
      ctx.roundRect(60, 60, 84, 84, 18)
      ctx.fill()

      ctx.fillStyle = '#030712'
      ctx.beginPath()
      ctx.roundRect(63, 63, 78, 78, 16)
      ctx.fill()

      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 32px monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('TVH', 102, 102)

      // 6. Name, Verification & Status
      ctx.textAlign = 'left'
      ctx.textBaseline = 'alphabetic'
      ctx.font = 'extrabold 36px sans-serif'
      ctx.fillStyle = '#ffffff'
      ctx.fillText('TRẦN VĂN HUY', 165, 95)

      // Verified badge
      ctx.fillStyle = 'rgba(6, 182, 212, 0.2)'
      ctx.beginPath()
      ctx.roundRect(475, 68, 105, 28, 14)
      ctx.fill()
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 13px monospace'
      ctx.fillText('VERIFIED', 492, 87)

      // Role subtitle
      ctx.font = '18px monospace'
      ctx.fillStyle = '#38bdf8'
      ctx.fillText('Software Developer • Full-Stack & Applied AI', 165, 128)

      // MakeAI Status Badge
      ctx.fillStyle = 'rgba(16, 185, 129, 0.15)'
      ctx.beginPath()
      ctx.roundRect(width - 360, 68, 270, 38, 12)
      ctx.fill()
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)'
      ctx.stroke()
      ctx.fillStyle = '#34d399'
      ctx.font = 'bold 14px monospace'
      ctx.fillText('● MakeAI • Digital Twin Group', width - 340, 93)

      // Divider line
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.8)'
      ctx.beginPath()
      ctx.moveTo(60, 165)
      ctx.lineTo(width - 60, 165)
      ctx.stroke()

      // 7. Academic Card & Focus Card
      // Academic Card
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)'
      ctx.beginPath()
      ctx.roundRect(60, 185, 380, 120, 16)
      ctx.fill()
      ctx.strokeStyle = '#1e293b'
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '12px monospace'
      ctx.fillText('ACADEMIC RECORD', 80, 212)
      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 14px monospace'
      ctx.fillText('GPA 3.5 / 4.0', 335, 212)

      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 18px sans-serif'
      ctx.fillText('ĐH Bách Khoa Đà Nẵng (DUT)', 80, 245)
      ctx.fillStyle = '#94a3b8'
      ctx.font = '14px monospace'
      ctx.fillText('B.S. in Computer Science & AI', 80, 275)

      // Focus Card
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)'
      ctx.beginPath()
      ctx.roundRect(460, 185, 380, 120, 16)
      ctx.fill()
      ctx.strokeStyle = '#1e293b'
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '12px monospace'
      ctx.fillText('SPECIALIZATION', 480, 212)
      ctx.fillStyle = '#c084fc'
      ctx.font = 'bold 14px monospace'
      ctx.fillText('PRODUCTION', 730, 212)

      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 18px sans-serif'
      ctx.fillText('Data Science & AI Solutions', 480, 245)
      ctx.fillStyle = '#94a3b8'
      ctx.font = '14px monospace'
      ctx.fillText('Scalable Backend & GIS Systems', 480, 275)

      // 8. Core Tech Competencies Matrix
      ctx.fillStyle = '#94a3b8'
      ctx.font = '13px monospace'
      ctx.fillText('CORE TECH STACK', 60, 340)

      const techs = [
        { name: 'Java (Spring Boot)', color: '#f59e0b' },
        { name: 'Next.js 14 / React', color: '#06b6d4' },
        { name: 'Vue 3 / Vite', color: '#10b981' },
        { name: 'PostgreSQL / Redis', color: '#3b82f6' },
        { name: 'Python (Frappe / AI)', color: '#a855f7' },
        { name: 'Agentic AI & Docker', color: '#6366f1' }
      ]

      let tx = 60
      let ty = 360
      techs.forEach(t => {
        ctx.font = '15px monospace'
        const tw = ctx.measureText(t.name).width + 30
        if (tx + tw > 840) {
          tx = 60
          ty += 48
        }
        ctx.fillStyle = 'rgba(15, 23, 42, 0.95)'
        ctx.beginPath()
        ctx.roundRect(tx, ty, tw, 36, 10)
        ctx.fill()
        ctx.strokeStyle = 'rgba(51, 65, 85, 0.9)'
        ctx.stroke()

        // Colored dot
        ctx.fillStyle = t.color
        ctx.beginPath()
        ctx.arc(tx + 14, ty + 18, 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = '#f1f5f9'
        ctx.fillText(t.name, tx + 24, ty + 24)
        tx += tw + 12
      })

      // 9. QR Pass Box on the Right
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.roundRect(870, 185, 240, 335, 20)
      ctx.fill()

      // Grab rendered QR canvas
      const qrCanvas = cardQrRef.value?.$el?.querySelector('canvas') || cardQrRef.value?.$el
      if (qrCanvas && qrCanvas instanceof HTMLCanvasElement) {
        ctx.drawImage(qrCanvas, 895, 205, 190, 190)
      }

      ctx.textAlign = 'center'
      ctx.fillStyle = '#475569'
      ctx.font = 'bold 12px monospace'
      ctx.fillText('SCAN FOR LIVE PORTFOLIO', 990, 435)

      ctx.fillStyle = '#2563eb'
      ctx.font = 'bold 16px monospace'
      ctx.fillText('www.tranvanhuy.io.vn', 990, 468)

      // 10. Footer Contact Bar
      ctx.textAlign = 'left'
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.8)'
      ctx.beginPath()
      ctx.moveTo(60, 565)
      ctx.lineTo(width - 60, 565)
      ctx.stroke()

      ctx.fillStyle = '#94a3b8'
      ctx.font = '16px monospace'
      ctx.fillText('✉ tranvanhuy064206@gmail.com', 60, 605)
      ctx.fillText('📍 Da Nang, Vietnam', 460, 605)

      ctx.fillStyle = '#38bdf8'
      ctx.font = 'bold 16px monospace'
      ctx.textAlign = 'right'
      ctx.fillText('github.com/tranvanhuy-dev-it', width - 60, 605)

      // Trigger download
      const link = document.createElement('a')
      link.download = 'tranvanhuy-developer-card.png'
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
