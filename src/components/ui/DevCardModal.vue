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

          <!-- Visible Card Area (Scrollable on small screens) -->
          <div class="overflow-x-auto pb-1 scrollbar-thin">
            <div
              id="dev-card-element"
              class="relative min-w-[620px] rounded-2xl p-6 bg-[#080d1a] text-white border border-slate-800 shadow-2xl overflow-hidden font-sans"
              style="width: 620px;"
            >
              <!-- Subtle Executive Ambient Gradient -->
              <div class="absolute top-0 right-1/4 w-72 h-40 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute bottom-0 left-10 w-60 h-32 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

              <div class="relative z-10">
                <!-- Symmetrical Landscape Row -->
                <div class="flex flex-row items-center justify-between gap-6">
                  <!-- Left Side: Profile Details & Competencies -->
                  <div class="flex-1 min-w-0 space-y-3.5">
                    
                    <!-- Header: Avatar, Name & Role -->
                    <div class="flex items-center gap-3.5">
                      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-md shrink-0 flex items-center justify-center">
                        <div class="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center text-cyan-300 font-mono font-bold text-base tracking-wider">
                          TVH
                        </div>
                      </div>

                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <h4 class="text-xl font-bold text-white tracking-tight whitespace-nowrap">
                            Trần Văn Huy
                          </h4>
                          <span class="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1 shrink-0">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>MakeAI</span>
                          </span>
                        </div>
                        <p class="text-xs text-slate-400 font-mono mt-0.5 whitespace-nowrap">
                          Software Developer • Full-Stack & AI Solutions
                        </p>
                      </div>
                    </div>

                    <!-- 2 Balanced Information Boxes -->
                    <div class="grid grid-cols-2 gap-3">
                      <!-- Education Box -->
                      <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between h-[84px]">
                        <div class="flex items-center justify-between">
                          <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Education</span>
                          <span class="text-[11px] font-mono font-bold text-cyan-400">GPA 3.5 / 4.0</span>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-slate-100 whitespace-nowrap">ĐH Bách Khoa Đà Nẵng (DUT)</p>
                          <p class="text-[11px] text-slate-400 font-mono whitespace-nowrap">Khoa học Dữ liệu & AI</p>
                        </div>
                      </div>

                      <!-- Experience Box -->
                      <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between h-[84px]">
                        <div class="flex items-center justify-between">
                          <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Experience</span>
                          <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/20">DTG</span>
                        </div>
                        <div>
                          <p class="text-xs font-bold text-slate-100 whitespace-nowrap">Software Developer Intern</p>
                          <p class="text-[11px] text-slate-400 font-mono whitespace-nowrap">Full-Stack & AI Solutions</p>
                        </div>
                      </div>
                    </div>

                    <!-- Core Tech Stack: High-Precision Vector SVG Logos -->
                    <div>
                      <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-1.5 font-semibold">Core Tech Stack</span>
                      <div class="flex items-center gap-2">
                        <!-- Java -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5" title="Java">
                          <svg class="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.85 16.84c0 .03-.02.06-.02.08-1.54.49-2.73.9-2.73 1.57 0 .84 1.83 1.15 4.19 1.15 2.5 0 4.67-.34 4.67-1.28 0-.69-1.22-1.07-2.67-1.52zm.12 2.87c-2.82 0-5.11-.47-5.11-1.63 0-1.12 1.95-1.67 3.66-2.12-.5-.73-.89-1.61-.89-2.61 0-.69.21-1.34.56-1.89-1.28-.27-2.18-.75-2.18-1.46 0-.82 1.34-1.29 3.09-1.5-.33-.6-.52-1.3-.52-2.07 0-2.31 1.66-4.03 4.25-4.43.34 1.05.21 2.22-.38 3.1-.38.56-.95.96-1.59 1.19.49.52.8 1.23.8 2.01 0 .28-.05.55-.13.8 1.54.06 2.76.47 2.76 1.2 0 .6-.83 1.03-1.93 1.28.32.48.51 1.06.51 1.69 0 1.09-.56 2.04-1.28 2.73 1.84.45 3.96 1.02 3.96 2.14 0 1.24-2.45 1.6-5.24 1.6z"/>
                          </svg>
                        </div>

                        <!-- Spring Boot -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5" title="Spring Boot">
                          <svg class="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.93 11.23c-.76-4.52-4.14-8.08-8.62-8.99-4.88-.99-9.52 1.63-11.13 6.08-1.78 4.93.38 10.37 5.09 12.63 4.29 2.06 9.54.99 12.64-2.58.55-.63.29-1.63-.49-1.92-.7-.26-1.46.06-1.84.71-2.22 3.8-7.39 4.79-10.82 2.07-3.41-2.71-4.15-7.75-1.59-11.36 2.55-3.59 7.62-4.48 11.26-1.97 1.48 1.02 2.53 2.53 2.94 4.25.18.77.92 1.28 1.7 1.16.82-.12 1.34-.84 1.16-1.68z"/>
                          </svg>
                        </div>

                        <!-- Next.js -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5" title="Next.js">
                          <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.572 0C5.18 0 0 5.18 0 11.572s5.18 11.571 11.572 11.571a11.52 11.52 0 0 0 8.016-3.238l-9.527-12.28v9.919H8.388V6.526h2.176l9.697 12.56a11.514 11.514 0 0 0 2.883-7.514C23.144 5.18 17.963 0 11.572 0m4.664 6.526h1.673v6.699h-1.673z"/>
                          </svg>
                        </div>

                        <!-- Vue 3 -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5" title="Vue 3">
                          <svg class="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.197 1.608l.001-.004h-4.225L12 6.6 9.027 1.604H4.803h-.002l7.199 12.467 7.197-12.463z"/>
                            <path fill="#38BDF8" d="M14.973 1.608L12 6.756 9.027 1.608H0l12 20.784L24 1.608h-9.027z"/>
                          </svg>
                        </div>

                        <!-- PostgreSQL -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5" title="PostgreSQL">
                          <svg class="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.002 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.72 17.755c-.21.077-.442.115-.678.115-.815 0-1.573-.42-1.986-1.103l-1.025-1.708h-2.066l-1.025 1.708c-.413.683-1.171 1.103-1.986 1.103-.236 0-.468-.038-.678-.115-1.066-.391-1.687-1.464-1.472-2.544.184-.925.867-1.666 1.77-1.924l2.122-.606V9.827c0-1.89 1.407-3.46 3.29-3.642.18-.017.362-.026.544-.026.182 0 .364.009.544.026 1.883.182 3.29 1.752 3.29 3.642v2.852l2.122.606c.903.258 1.586.999 1.77 1.924.215 1.08-.406 2.153-1.472 2.544z"/>
                          </svg>
                        </div>

                        <!-- Python -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5" title="Python">
                          <svg class="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#38BDF8" d="M11.914 0C5.825 0 6.2 2.656 6.2 2.656l.007 2.752h5.815v.825H3.88S0 5.797 0 11.905c0 6.108 3.398 5.895 3.398 5.895h2.029v-2.846s-.11-3.398 3.33-3.398h5.733s3.188.051 3.188-3.132V3.132S18.064 0 11.914 0zM8.7 1.799a1.008 1.008 0 1 1 0 2.016 1.008 1.008 0 0 1 0-2.016z"/>
                            <path fill="#FACC15" d="M12.086 24c6.089 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.815v-.825h8.142s3.88.436 3.88-5.672c0-6.108-3.398-5.895-3.398-5.895h-2.029v2.846s.11 3.398-3.33 3.398H9.51s-3.188-.051-3.188 3.132v5.295S5.936 24 12.086 24zm3.214-1.799a1.008 1.008 0 1 1 0-2.016 1.008 1.008 0 0 1 0 2.016z"/>
                          </svg>
                        </div>

                        <!-- Docker -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 p-1.5" title="Docker">
                          <svg class="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zM23.79 11.23c-.347-.234-.997-.333-1.85-.308-.182-.416-.44-.8-.762-1.134-.34-.354-.766-.606-1.246-.736l-.37-.1-1.42 1.42a.186.186 0 00-.054.131v.004c.003.023.007.045.01.068.188 1.107-.156 2.228-.905 3.004-.77.798-1.868 1.248-2.983 1.226H1.722a.486.486 0 00-.486.486v.297c0 .546.06 1.09.18 1.62.915 4.07 4.542 7.02 8.71 7.02 5.093 0 9.42-3.666 10.37-8.77.307-.13.914-.42 1.458-1.077.564-.68.643-1.442.643-1.442a2.383 2.383 0 00-.807-.639z"/>
                          </svg>
                        </div>

                        <!-- AI Chip -->
                        <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-purple-400 font-mono text-xs font-bold" title="AI Solutions">
                          AI
                        </div>
                      </div>
                    </div>

                  </div>

                  <!-- Right Side: White QR Pass Card (Using SVG for 100% Guaranteed Capture) -->
                  <div class="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white text-slate-900 shadow-xl shrink-0 self-center">
                    <QrcodeVue
                      value="https://www.tranvanhuy.io.vn"
                      :size="110"
                      level="H"
                      render-as="svg"
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

                <!-- Card Footer: Single Clean Balanced Row -->
                <div class="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div class="flex items-center gap-5">
                    <!-- Email -->
                    <span class="flex items-center gap-1.5 text-slate-300">
                      <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span>tranvanhuy064206@gmail.com</span>
                    </span>
                    <!-- Location -->
                    <span class="flex items-center gap-1.5 text-slate-400">
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

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    sound.playModalOpen()
  }
})

// Direct DOM Capture with html-to-image (2.5x Retina, 100% Identical to Screen)
async function downloadCardPng() {
  sound.playClick()
  isGenerating.value = true

  try {
    const node = document.getElementById('dev-card-element')
    if (!node) throw new Error('Card element not found')

    // Capture using html-to-image with exact dimensions
    const dataUrl = await toPng(node, {
      pixelRatio: 2.5,
      quality: 1.0,
      cacheBust: true,
      backgroundColor: '#080d1a',
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
