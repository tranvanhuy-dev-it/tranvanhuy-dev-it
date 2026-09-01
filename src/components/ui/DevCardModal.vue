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
          class="relative w-full max-w-2xl bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 rounded-3xl p-4 sm:p-6 shadow-2xl text-left overflow-hidden transition-all duration-300"
        >
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
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 light:bg-blue-50 border border-blue-500/20 text-blue-400 light:text-blue-700 text-[11px] font-mono mb-1">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span>{{ isVi ? 'THẺ HỒ SƠ DEV ID' : 'DEVELOPER PROFILE PASS' }}</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-white light:text-slate-900">
              {{ isVi ? 'Thẻ Profile Kỹ Sư Phần Mềm' : 'Digital Developer Pass' }}
            </h3>
          </div>

          <!-- Horizontal Landscape Card Wrapper (Always horizontal on both Mobile & PC) -->
          <div class="overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
            <div
              id="dev-card-element"
              class="relative min-w-[580px] sm:min-w-full rounded-2xl p-6 bg-[#080d1a] text-white border border-slate-800/90 shadow-2xl overflow-hidden font-sans"
            >
              <!-- Subtle Executive Ambient Gradient (Natural & Non-neon) -->
              <div class="absolute top-0 right-1/4 w-72 h-40 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute bottom-0 left-10 w-60 h-32 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

              <div class="relative z-10">
                <!-- Symmetrical Landscape Row (Always Horizontal) -->
                <div class="flex flex-row items-center justify-between gap-6">
                  <!-- Left Side: Profile Details & Competencies -->
                  <div class="flex-1 min-w-0 space-y-4">
                    
                    <!-- Header: Avatar, Name & Role -->
                    <div class="flex items-center gap-3.5">
                      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-md shrink-0 flex items-center justify-center">
                        <div class="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center text-cyan-300 font-mono font-bold text-base tracking-wider">
                          TVH
                        </div>
                      </div>

                      <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                          <h4 class="text-xl font-bold text-white tracking-tight">
                            Trần Văn Huy
                          </h4>
                          <span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>MakeAI</span>
                          </span>
                        </div>
                        <p class="text-xs text-slate-400 font-mono mt-0.5">
                          Software Developer • Full-Stack & AI Solutions
                        </p>
                      </div>
                    </div>

                    <!-- 2 Balanced Information Boxes (Always 2 Columns, Elegant Slate Border) -->
                    <div class="grid grid-cols-2 gap-3">
                      <!-- Education Box -->
                      <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between h-[84px]">
                        <div class="flex items-center justify-between">
                          <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Education</span>
                          <span class="text-[11px] font-mono font-bold text-cyan-400">GPA 3.5 / 4.0</span>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-slate-100 truncate">ĐH Bách Khoa Đà Nẵng (DUT)</p>
                          <p class="text-[11px] text-slate-400 font-mono truncate">Khoa học Dữ liệu & AI</p>
                        </div>
                      </div>

                      <!-- Experience Box -->
                      <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between h-[84px]">
                        <div class="flex items-center justify-between">
                          <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Experience</span>
                          <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/20">DTG</span>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-slate-100 truncate">Software Developer Intern</p>
                          <p class="text-[11px] text-slate-400 font-mono truncate">Full-Stack & AI Solutions</p>
                        </div>
                      </div>
                    </div>

                    <!-- Tech Stack: Crisp Vector Logos (Self-contained for 100% reliable export) -->
                    <div>
                      <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-1.5 font-semibold">Core Tech Stack</span>
                      <div class="flex items-center gap-2 flex-wrap">
                        <!-- Java -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 p-1.5 hover:border-slate-600 transition-all" title="Java">
                          <svg class="w-full h-full text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.85 16.84c0 .03-.02.06-.02.08-1.54.49-2.73.9-2.73 1.57 0 .84 1.83 1.15 4.19 1.15 2.5 0 4.67-.34 4.67-1.28 0-.69-1.22-1.07-2.67-1.52zm.12 2.87c-2.82 0-5.11-.47-5.11-1.63 0-1.12 1.95-1.67 3.66-2.12-.5-.73-.89-1.61-.89-2.61 0-.69.21-1.34.56-1.89-1.28-.27-2.18-.75-2.18-1.46 0-.82 1.34-1.29 3.09-1.5-.33-.6-.52-1.3-.52-2.07 0-2.31 1.66-4.03 4.25-4.43.34 1.05.21 2.22-.38 3.1-.38.56-.95.96-1.59 1.19.49.52.8 1.23.8 2.01 0 .28-.05.55-.13.8 1.54.06 2.76.47 2.76 1.2 0 .6-.83 1.03-1.93 1.28.32.48.51 1.06.51 1.69 0 1.09-.56 2.04-1.28 2.73 1.84.45 3.96 1.02 3.96 2.14 0 1.24-2.45 1.6-5.24 1.6z"/>
                          </svg>
                        </div>

                        <!-- Spring Boot -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 p-1.5 hover:border-slate-600 transition-all" title="Spring Boot">
                          <svg class="w-full h-full text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.93 11.23c-.76-4.52-4.14-8.08-8.62-8.99-4.88-.99-9.52 1.63-11.13 6.08-1.78 4.93.38 10.37 5.09 12.63 4.29 2.06 9.54.99 12.64-2.58.55-.63.29-1.63-.49-1.92-.7-.26-1.46.06-1.84.71-2.22 3.8-7.39 4.79-10.82 2.07-3.41-2.71-4.15-7.75-1.59-11.36 2.55-3.59 7.62-4.48 11.26-1.97 1.48 1.02 2.53 2.53 2.94 4.25.18.77.92 1.28 1.7 1.16.82-.12 1.34-.84 1.16-1.68z"/>
                          </svg>
                        </div>

                        <!-- Next.js -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 p-1.5 hover:border-slate-600 transition-all" title="Next.js">
                          <svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.568l-5.32-6.852v6.852H10.5V6.432h2.074l5.32 6.852V6.432h2.074v11.136h-2.074zM6.432 17.568V6.432h2.074v11.136H6.432z"/>
                          </svg>
                        </div>

                        <!-- Vue 3 -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 p-1.5 hover:border-slate-600 transition-all" title="Vue.js 3">
                          <svg class="w-full h-full text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 3h3.5L12 14.5 18.5 3H22L12 21 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 12.5 6.5 3z"/>
                          </svg>
                        </div>

                        <!-- PostgreSQL -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 p-1.5 hover:border-slate-600 transition-all" title="PostgreSQL">
                          <svg class="w-full h-full text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-2h-2v2H9v-4h1.5v-2H9V7h4c1.66 0 3 1.34 3 3 0 1.13-.63 2.11-1.56 2.63.96.48 1.56 1.48 1.56 2.62v1.25H13z"/>
                          </svg>
                        </div>

                        <!-- Python -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 p-1.5 hover:border-slate-600 transition-all" title="Python">
                          <svg class="w-full h-full text-amber-300" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.9 1a5.4 5.4 0 0 0-5.4 5.4v2.7h5.4v.9H4.7A4.7 4.7 0 0 0 0 14.7a4.7 4.7 0 0 0 4.7 4.7h2.7v-2.7a5.4 5.4 0 0 1 5.4-5.4h3.6v-.9H11.9A5.4 5.4 0 0 0 11.9 1z"/>
                          </svg>
                        </div>

                        <!-- Docker -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 p-1.5 hover:border-slate-600 transition-all" title="Docker">
                          <svg class="w-full h-full text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185z"/>
                          </svg>
                        </div>

                        <!-- AI Badge -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 p-1 text-purple-400 font-mono text-xs font-bold" title="AI Solutions">
                          AI
                        </div>
                      </div>
                    </div>

                  </div>

                  <!-- Right Side: White QR Pass Card (Always on Right) -->
                  <div class="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white text-slate-900 shadow-xl shrink-0 self-center">
                    <QrcodeVue
                      ref="cardQrRef"
                      value="https://www.tranvanhuy.io.vn"
                      :size="110"
                      level="H"
                      render-as="canvas"
                      class="block mx-auto"
                    />
                    <div class="text-center mt-2">
                      <span class="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                        {{ isVi ? 'QUÉT XEM HỒ SƠ' : 'SCAN FOR PORTFOLIO' }}
                      </span>
                      <span class="text-[10px] font-mono font-extrabold text-blue-600 block">
                        tranvanhuy.io.vn
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Card Footer: Single Clean Balanced Row with Crisp SVG Icons -->
                <div class="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono gap-2">
                  <div class="flex items-center gap-4 truncate">
                    <!-- Email -->
                    <span class="flex items-center gap-1.5 text-slate-300 truncate">
                      <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span class="truncate">tranvanhuy064206@gmail.com</span>
                    </span>
                    <!-- Location -->
                    <span class="flex items-center gap-1.5 text-slate-400 shrink-0">
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
                    class="text-slate-300 hover:text-white font-medium shrink-0 flex items-center gap-1.5"
                  >
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>github.com/tranvanhuy-dev-it</span>
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
const cardQrRef = ref(null)

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    sound.playModalOpen()
  }
})

// Direct DOM Capture with html-to-image (2x Retina, 100% Identical to Screen)
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
      backgroundColor: '#080d1a'
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
