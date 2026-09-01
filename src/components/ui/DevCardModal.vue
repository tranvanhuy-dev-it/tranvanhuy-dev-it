<template>
  <Teleport to="body">
    <Transition name="fade-modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
        @click.self="emit('close')"
        @keydown.esc="emit('close')"
        tabindex="-1"
      >
        <div
          class="relative w-full max-w-2xl bg-white light:bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-2xl text-left overflow-hidden transition-all duration-300"
        >
          <!-- Close Button -->
          <button
            @click="emit('close')"
            class="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer z-10"
            :title="isVi ? 'Đóng' : 'Close'"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Header -->
          <div class="mb-3 sm:mb-4 pr-10">
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-mono mb-1">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span>{{ isVi ? 'THẺ HỒ SƠ DEV CARD' : 'DEVELOPER PROFILE CARD' }}</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 font-sans">
              {{ isVi ? 'Thẻ Profile Kỹ Sư Phần Mềm' : 'Digital Developer Pass' }}
            </h3>
          </div>

          <!-- Visible Card Area (Ultra-Compact Sleek Developer Pass) -->
          <div class="overflow-x-auto pb-1 scrollbar-thin">
            <div
              id="dev-card-element"
              class="relative min-w-[600px] rounded-2xl p-4 sm:p-5 text-slate-900 border border-slate-200/90 shadow-sm overflow-hidden"
              style="width: 600px; background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%); font-family: 'Inter', system-ui, -apple-system, sans-serif;"
            >
              <div class="relative z-10 space-y-2.5">
                <!-- Top Row: Compact Header & Pure QR on Right -->
                <div class="flex items-center justify-between gap-3">
                  <!-- Left: Avatar, Name & Title -->
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-xl bg-slate-900 text-white shadow-sm shrink-0 flex items-center justify-center font-mono font-bold text-sm tracking-wider">
                      TVH
                    </div>

                    <div class="min-w-0">
                      <h4 class="text-lg font-extrabold text-slate-900 tracking-tight whitespace-nowrap leading-tight">
                        Trần Văn Huy
                      </h4>
                      <p class="text-[11px] text-slate-600 font-medium mt-0.5 whitespace-nowrap">
                        Software Developer • Full-Stack & AI Solutions
                      </p>
                    </div>
                  </div>

                  <!-- Top-Right: Ultra-Compact Pure QR Code -->
                  <div class="p-1 rounded-xl bg-white border border-slate-200 shrink-0 shadow-2xs" title="https://www.tranvanhuy.io.vn">
                    <QrcodeVue
                      value="https://www.tranvanhuy.io.vn"
                      :size="46"
                      level="M"
                      render-as="svg"
                      class="block shrink-0"
                    />
                  </div>
                </div>

                <!-- Middle Row: 2 Ultra-Compact Info Boxes -->
                <div class="grid grid-cols-2 gap-2.5">
                  <!-- Education Box -->
                  <div class="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between h-[66px]">
                    <div class="flex items-center justify-between gap-1 leading-none">
                      <span class="text-[9px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Education</span>
                      <span class="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/80 font-mono font-bold text-[10px] whitespace-nowrap">
                        GPA 3.5
                      </span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-900 whitespace-nowrap leading-snug">ĐH Bách Khoa Đà Nẵng (DUT)</p>
                      <p class="text-[10px] text-slate-500 font-medium whitespace-nowrap">Khoa học Dữ liệu & AI</p>
                    </div>
                  </div>

                  <!-- Experience Box -->
                  <div class="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between h-[66px]">
                    <div class="flex items-center justify-between gap-1 leading-none">
                      <span class="text-[9px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Experience</span>
                      <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-mono font-semibold text-[10px] whitespace-nowrap">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>MakeAI</span>
                      </span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-900 whitespace-nowrap leading-snug">Software Developer Intern</p>
                      <p class="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                        {{ isVi ? 'Phát triển Web App & Hệ thống AI' : 'Web Apps & AI Systems Development' }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Core Tech Stack: Ultra-Compact Single Row -->
                <div>
                  <span class="text-[9px] text-slate-400 font-mono uppercase tracking-wider block mb-1 font-semibold">Core Tech Stack</span>
                  <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap font-mono text-[10px] overflow-hidden">
                    <span class="px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs font-medium">Java</span>
                    <span class="px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs font-medium">Spring Boot</span>
                    <span class="px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs font-medium">Next.js</span>
                    <span class="px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs font-medium">Vue 3</span>
                    <span class="px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs font-medium">PostgreSQL</span>
                    <span class="px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs font-medium">Python</span>
                    <span class="px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200 shadow-2xs font-medium">Docker</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs font-bold">AI</span>
                  </div>
                </div>

                <!-- Card Footer: Slim Single Row -->
                <div class="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600 font-mono">
                  <div class="flex items-center gap-3.5 whitespace-nowrap">
                    <!-- Email -->
                    <span class="flex items-center gap-1.5 text-slate-700">
                      <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span>tranvanhuy064206@gmail.com</span>
                    </span>
                    <!-- Location -->
                    <span class="flex items-center gap-1.5 text-slate-500">
                      <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <span>Da Nang, Vietnam</span>
                    </span>
                  </div>

                  <!-- GitHub -->
                  <a
                    href="https://github.com/tranvanhuy-dev-it"
                    target="_blank"
                    rel="noopener"
                    class="text-blue-600 hover:text-blue-700 font-semibold shrink-0 flex items-center gap-1 whitespace-nowrap"
                  >
                    <span>github.com/tranvanhuy-dev-it</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p class="text-xs text-slate-500">
              {{ isVi ? 'Lưu thẻ hồ sơ để đính kèm email hoặc gửi nhanh cho nhà tuyển dụng.' : 'Save this profile card to attach to emails or share with recruiters.' }}
            </p>

            <button
              @click="downloadCardPng"
              :disabled="isGenerating"
              class="btn-primary w-full sm:w-auto px-6 py-2.5 flex items-center justify-center gap-2 cursor-pointer text-xs font-semibold shadow-sm"
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
import { toPng } from 'html-to-image'
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

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    sound.playModalOpen()
  }
})

// Direct DOM Capture with html-to-image (2.5x Retina, Slim Compact Card)
async function downloadCardPng() {
  sound.playClick()
  isGenerating.value = true

  try {
    const node = document.getElementById('dev-card-element')
    if (!node) throw new Error('Card element not found')

    const dataUrl = await toPng(node, {
      pixelRatio: 2.5,
      quality: 1.0,
      cacheBust: true,
      backgroundColor: '#f8fafc',
      width: 600,
      style: {
        width: '600px',
        minWidth: '600px',
        maxWidth: '600px',
        transform: 'none',
        margin: '0',
      }
    })

    const link = document.createElement('a')
    link.download = 'tranvanhuy-dev-card.png'
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    sound.playSuccess()
  } catch (err) {
    console.error('Error generating card image', err)
  } finally {
    isGenerating.value = false
  }
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
