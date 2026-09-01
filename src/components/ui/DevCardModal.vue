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

          <!-- Visible Card Area (Light Minimalist Executive Theme) -->
          <div class="overflow-x-auto pb-1 scrollbar-thin">
            <div
              id="dev-card-element"
              class="relative min-w-[620px] rounded-2xl p-6 bg-white text-slate-900 border border-slate-200 shadow-sm overflow-hidden"
              style="width: 620px; background-color: #ffffff; font-family: 'Inter', system-ui, -apple-system, sans-serif;"
            >
              <div class="relative z-10 space-y-4">
                <!-- Top Row: Profile Details on Left, Compact QR on Top-Right -->
                <div class="flex items-start justify-between gap-4">
                  <!-- Left: Avatar, Name & Title -->
                  <div class="flex items-center gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-xl bg-slate-900 text-white shadow-sm shrink-0 flex items-center justify-center font-mono font-bold text-base tracking-wider">
                      TVH
                    </div>

                    <div class="min-w-0">
                      <h4 class="text-xl font-bold text-slate-900 tracking-tight whitespace-nowrap leading-tight">
                        Trần Văn Huy
                      </h4>
                      <p class="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                        Software Developer • Full-Stack & AI Solutions
                      </p>
                    </div>
                  </div>

                  <!-- Top-Right: Pure Compact QR Code Only -->
                  <div class="p-1.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0 shadow-sm" title="https://www.tranvanhuy.io.vn">
                    <QrcodeVue
                      value="https://www.tranvanhuy.io.vn"
                      :size="52"
                      level="M"
                      render-as="svg"
                      class="block shrink-0"
                    />
                  </div>
                </div>

                <!-- Middle Row: 2 Balanced Information Boxes -->
                <div class="grid grid-cols-2 gap-3">
                  <!-- Education Box (With GPA 3.5 nicely placed inside) -->
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between h-[82px]">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Education</span>
                      <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        GPA 3.5
                      </span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-900 whitespace-nowrap">ĐH Bách Khoa Đà Nẵng (DUT)</p>
                      <p class="text-[11px] text-slate-500 font-medium whitespace-nowrap mt-0.5">Khoa học Dữ liệu & AI</p>
                    </div>
                  </div>

                  <!-- Experience Box (With MakeAI badge & distinct non-duplicate detail) -->
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between h-[82px]">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Experience</span>
                      <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>MakeAI</span>
                      </span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-900 whitespace-nowrap">Software Developer Intern</p>
                      <p class="text-[11px] text-slate-500 font-medium whitespace-nowrap mt-0.5">
                        {{ isVi ? 'Phát triển Web App & Hệ thống AI' : 'Web Apps & AI Systems Development' }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Core Tech Stack: Single Clean Horizontal Row -->
                <div>
                  <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-1.5 font-semibold">Core Tech Stack</span>
                  <div class="flex items-center gap-1.5 flex-nowrap whitespace-nowrap font-mono text-[11px] overflow-hidden">
                    <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-medium">Java</span>
                    <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-medium">Spring Boot</span>
                    <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-medium">Next.js</span>
                    <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-medium">Vue 3</span>
                    <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-medium">PostgreSQL</span>
                    <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-medium">Python</span>
                    <span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 font-medium">Docker</span>
                    <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-bold">AI</span>
                  </div>
                </div>

                <!-- Card Footer: Single Clean Balanced Row -->
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <div class="flex items-center gap-4 whitespace-nowrap">
                    <!-- Email -->
                    <span class="flex items-center gap-1.5 text-slate-600">
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
                    class="text-blue-600 hover:text-blue-700 font-medium shrink-0 flex items-center gap-1 whitespace-nowrap"
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

// Direct DOM Capture with html-to-image (2.5x Retina, Clean Light Card)
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
      backgroundColor: '#ffffff',
      width: 620,
      style: {
        width: '620px',
        minWidth: '620px',
        maxWidth: '620px',
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
