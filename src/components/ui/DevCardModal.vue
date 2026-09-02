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
          class="relative w-full max-w-[672px] bg-white light:bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-2xl text-left transition-all duration-300"
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
              <span>{{ isVi ? 'DANH THIẾP DEV CARD' : 'DEVELOPER PASS' }}</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 font-sans">
              {{ isVi ? 'Thẻ Danh Thiếp Kỹ Sư Phần Mềm' : 'Digital Developer Business Card' }}
            </h3>
          </div>

          <!-- Visible Card Area (Unified Seamless Business Card Layout) -->
          <div class="overflow-x-auto pb-1 scrollbar-thin">
            <div
              id="dev-card-element"
              class="relative rounded-2xl bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 text-slate-900 border border-indigo-100 shadow-sm overflow-hidden flex flex-col"
              style="width: 620px; min-width: 620px; height: 354px; min-height: 354px; font-family: 'Inter', system-ui, -apple-system, sans-serif;"
            >
              <!-- Card Main Body -->
              <div class="p-6 pb-4 flex-1 flex flex-col justify-between">
                <!-- 1. Top Section: Header & Pure QR on Right -->
                <div class="flex items-center justify-between gap-4">
                  <!-- Left: Official System Logo, Name & Title -->
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-11 h-11 rounded-xl shadow-sm shrink-0 overflow-hidden">
                      <img src="/logo.png" alt="System Logo" class="w-full h-full object-cover" />
                    </div>

                    <div class="min-w-0">
                      <h4 class="text-xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap leading-tight">
                        Trần Văn Huy
                      </h4>
                      <p class="text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                        Software Developer • Full-Stack & AI Solutions
                      </p>
                      <p class="text-[11px] text-slate-500 font-medium italic mt-1 whitespace-nowrap">
                        "Turning data into scalable, intelligent software systems."
                      </p>
                    </div>
                  </div>

                  <!-- Top-Right: Pure QR Code Tile -->
                  <div class="p-1 rounded-xl bg-slate-50 border border-slate-200 shrink-0 shadow-2xs" title="https://www.tranvanhuy.io.vn">
                    <QrcodeVue
                      value="https://www.tranvanhuy.io.vn"
                      :size="56"
                      level="M"
                      render-as="svg"
                      class="block shrink-0"
                    />
                  </div>
                </div>

                <!-- 2. Middle Section: Unified Connected Panel (Education & Experience) -->
                <div class="rounded-xl bg-white/80 border border-indigo-100 grid grid-cols-2 divide-x divide-indigo-100 shadow-2xs overflow-hidden">
                  <!-- Education Column -->
                  <div class="p-3.5 flex flex-col justify-between h-[80px]">
                    <div class="flex items-center justify-between gap-1 leading-none">
                      <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Education</span>
                      <span class="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 border border-blue-200 font-mono font-bold text-[10px] whitespace-nowrap">
                        GPA 3.5
                      </span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-900 whitespace-nowrap leading-snug">University of Science and Technology - UDN</p>
                      <p class="text-[11px] text-slate-500 font-medium whitespace-nowrap mt-0.5">Data Science & Artificial Intelligence</p>
                    </div>
                  </div>

                  <!-- Experience Column -->
                  <div class="p-3.5 flex flex-col justify-between h-[80px]">
                    <div class="flex items-center justify-between gap-1 leading-none">
                      <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Experience</span>
                      <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-700 border border-cyan-200 font-mono font-semibold text-[10px] whitespace-nowrap">
                        <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                        <span>MakeAI</span>
                      </span>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-slate-900 whitespace-nowrap leading-snug">Software Developer Intern</p>
                      <p class="text-[11px] text-slate-500 font-medium whitespace-nowrap mt-0.5">
                        Web Apps & AI Systems Development
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 3. Core Expertise: Unified Strip -->
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Core Expertise</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <div class="px-2.5 py-3 rounded-lg bg-white/80 border border-indigo-100 flex items-center justify-center text-center">
                      <p class="text-[10px] font-bold text-slate-800 leading-snug">Full-Stack Web Apps</p>
                    </div>
                    <div class="px-2.5 py-3 rounded-lg bg-white/80 border border-indigo-100 flex items-center justify-center text-center">
                      <p class="text-[10px] font-bold text-slate-800 leading-snug">Data & AI Systems</p>
                    </div>
                    <div class="px-2.5 py-3 rounded-lg bg-white/80 border border-indigo-100 flex items-center justify-center text-center">
                      <p class="text-[10px] font-bold text-slate-800 leading-snug">GIS & Digital Transform.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 4. Bottom Footer Strip: Grounded Solid Base -->
              <div class="mt-auto px-5 py-2.5 bg-white/60 border-t border-indigo-100 flex items-center justify-between gap-3 text-[10.5px] text-slate-600 font-mono shrink-0">
                <div class="flex items-center gap-3 whitespace-nowrap min-w-0 overflow-hidden">
                  <!-- Email -->
                  <span class="flex items-center gap-1.5 text-slate-700">
                    <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>tranvanhuy064206@gmail.com</span>
                  </span>
                  <!-- Location -->
                  <span class="flex items-center gap-1.5 text-slate-500 shrink-0">
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
                  class="text-indigo-600 hover:text-blue-600 font-semibold shrink-0 flex items-center gap-1.5 whitespace-nowrap transition-colors"
                >
                  <svg class="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>github.com/tranvanhuy-dev-it</span>
                </a>
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

// Direct DOM Capture with html-to-image (2.5x Retina, 620px wide, height auto-fit to content)
async function downloadCardPng() {
  sound.playClick()
  isGenerating.value = true

  const node = document.getElementById('dev-card-element')
  const logoImg = node?.querySelector('img')
  const originalLogoSrc = logoImg?.src

  try {
    if (!node) throw new Error('Card element not found')

    // html-to-image re-fetches every <img> src itself (with a cacheBust query
    // param) instead of using the already-loaded element — on flaky mobile
    // networks that fetch can fail and it silently falls back to a blank
    // image. Inline the logo as a data URI so no network request is needed
    // during export.
    if (logoImg && !logoImg.src.startsWith('data:')) {
      try {
        const resp = await fetch(originalLogoSrc)
        const blob = await resp.blob()
        const dataUri = await new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })
        logoImg.src = dataUri
      } catch (err) {
        console.error('Failed to inline logo as data URI', err)
      }
    }

    // Wait for web fonts to finish loading — on mobile they may still be
    // fetching, causing the SVG-based capture to fall back to a different
    // font and wrap text that fits on desktop.
    if (document.fonts?.ready) {
      await document.fonts.ready
    }

    // The live node sits inside an `overflow-x-auto` container in the modal,
    // which shrinks its layout on narrow mobile viewports — the `style`
    // option passed to toPng() doesn't reliably override this during
    // capture. Capture from an off-screen clone appended directly to
    // document.body instead, so it lays out at a true, unconstrained 620px
    // on every device.
    // Note: positioning the clone off-viewport (e.g. top:-9999px) is known
    // to rasterize blank on some mobile WebKit/Chrome versions, because
    // html-to-image serializes the node into an SVG <foreignObject> which
    // gets clipped when its source element sits outside viewport bounds
    // during the intermediate image decode. Keep it inside the viewport,
    // just visually hidden instead.
    const clone = node.cloneNode(true)
    clone.style.position = 'fixed'
    clone.style.top = '0'
    clone.style.left = '0'
    clone.style.width = '620px'
    clone.style.minWidth = '620px'
    clone.style.maxWidth = '620px'
    clone.style.transform = 'none'
    clone.style.margin = '0'
    // IMPORTANT: don't use opacity/visibility to hide this clone — html-to-image
    // bakes the node's own style into the rasterized output, so a near-zero
    // opacity here previously made every exported PNG come out blank/white.
    // z-index alone (behind the modal overlay, which is already opaque) is
    // enough to keep it out of sight during the brief moment it's attached.
    clone.style.zIndex = '-1'
    clone.style.pointerEvents = 'none'
    document.body.appendChild(clone)

    // Give the browser a couple of frames to actually layout and paint the
    // freshly-appended clone before measuring/capturing it — reading
    // offsetHeight or calling toPng() immediately on some mobile browsers
    // can race the layout pass and produce a blank image.
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))

    let dataUrl
    try {
      const actualHeight = clone.offsetHeight

      dataUrl = await toPng(clone, {
        pixelRatio: 2.5,
        quality: 1.0,
        cacheBust: false,
        backgroundColor: '#ffffff',
        width: 620,
        height: actualHeight,
      })
    } finally {
      document.body.removeChild(clone)
    }

    if (!dataUrl || dataUrl.length < 100) {
      throw new Error(`Export produced an empty image (dataUrl length: ${dataUrl?.length ?? 0})`)
    }

    const link = document.createElement('a')
    link.download = 'tranvanhuy-dev-card.png'
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    sound.playSuccess()
  } catch (err) {
    console.error('Error generating card image', err)
    alert(isVi.value ? `Xuất ảnh thất bại: ${err?.message || err}` : `Export failed: ${err?.message || err}`)
  } finally {
    if (logoImg && originalLogoSrc) logoImg.src = originalLogoSrc
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
