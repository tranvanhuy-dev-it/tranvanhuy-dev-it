<template>
  <Teleport to="body">
    <Transition name="fade-modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
        @click.self="emit('close')"
        @keydown.esc="emit('close')"
        tabindex="-1"
      >
        <!-- Modal Card -->
        <div
          class="relative w-full max-w-md bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 text-center overflow-hidden transition-all duration-300 transform scale-100"
        >
          <!-- Background Glow Effect -->
          <div class="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

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

          <!-- Header -->
          <div class="mb-5">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 text-cyan-400 light:text-cyan-700 text-xs font-mono mb-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>{{ isVi ? 'QUÉT MÃ TRUY CẬP' : 'SCAN TO VISIT' }}</span>
            </div>
            <h3 class="text-xl font-bold text-white light:text-slate-900 tracking-tight">
              {{ isVi ? 'Mã QR Portfolio' : 'Portfolio QR Code' }}
            </h3>
            <p class="text-xs text-slate-400 light:text-slate-600 mt-1">
              {{ isVi ? 'Dùng camera điện thoại hoặc Zalo để quét và mở website trên di động' : 'Scan with your smartphone camera or QR scanner to view on mobile' }}
            </p>
          </div>

          <!-- QR Box with Laser Scan Line -->
          <div class="relative inline-block mx-auto p-4 rounded-2xl bg-white shadow-xl border-4 border-slate-800 light:border-slate-200">
            <div class="relative overflow-hidden rounded-xl">
              <QrcodeVue
                ref="qrCodeRef"
                :value="qrUrl"
                :size="200"
                level="H"
                render-as="canvas"
                class="block mx-auto"
              />

              <!-- Laser Scanner Line Animation -->
              <div class="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_8px_#06b6d4] animate-scan pointer-events-none"></div>
            </div>

            <!-- Mini Logo badge in center or underneath -->
            <div class="mt-2 pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold text-slate-700">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              <span>www.tranvanhuy.io.vn</span>
            </div>
          </div>

          <!-- URL preview & Copy pill -->
          <div class="mt-5 flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-850/80 light:bg-slate-100 border border-slate-800 light:border-slate-200">
            <span class="text-xs font-mono text-cyan-300 light:text-cyan-800 truncate px-1">
              {{ qrUrl }}
            </span>
            <button
              @click="copyUrl"
              class="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 light:bg-white light:hover:bg-slate-200 text-slate-200 light:text-slate-800 border border-slate-700 light:border-slate-300 transition-colors shrink-0 cursor-pointer"
            >
              {{ copied ? (isVi ? '✓ Đã chép' : '✓ Copied') : (isVi ? 'Sao chép' : 'Copy') }}
            </button>
          </div>

          <!-- Action buttons -->
          <div class="grid grid-cols-2 gap-3 mt-4">
            <button
              @click="downloadQr"
              class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 light:bg-slate-100 light:hover:bg-slate-200 text-slate-200 hover:text-white light:text-slate-800 border border-slate-700 light:border-slate-300 text-xs font-medium transition-colors cursor-pointer"
            >
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{{ isVi ? 'Tải ảnh QR' : 'Download QR' }}</span>
            </button>

            <a
              :href="qrUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold shadow-lg shadow-cyan-500/20 transition-colors"
            >
              <span>{{ isVi ? 'Mở trực tiếp' : 'Open Link' }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  url: {
    type: String,
    default: 'https://www.tranvanhuy.io.vn'
  }
})

const emit = defineEmits(['close'])
const store = usePortfolioStore()

const isVi = computed(() => store.locale === 'vi')
const qrUrl = computed(() => props.url || 'https://www.tranvanhuy.io.vn')
const qrCodeRef = ref(null)
const copied = ref(false)

function copyUrl() {
  navigator.clipboard.writeText(qrUrl.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

function downloadQr() {
  try {
    // QrcodeVue with render-as="canvas" renders an HTMLCanvasElement
    const canvas = qrCodeRef.value?.$el?.querySelector('canvas') || qrCodeRef.value?.$el
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      // Fallback if canvas is wrapped
      const el = document.querySelector('.fade-modal canvas') || document.querySelector('canvas')
      if (el) {
        triggerDownload(el.toDataURL('image/png'))
      }
      return
    }
    triggerDownload(canvas.toDataURL('image/png'))
  } catch (err) {
    console.error('Failed to download QR code', err)
  }
}

function triggerDownload(dataUrl) {
  const link = document.createElement('a')
  link.download = 'tranvanhuy-portfolio-qr.png'
  link.href = dataUrl
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
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

@keyframes scan-laser {
  0% {
    top: 0%;
    opacity: 0.8;
  }
  50% {
    top: 96%;
    opacity: 1;
  }
  100% {
    top: 0%;
    opacity: 0.8;
  }
}

.animate-scan {
  animation: scan-laser 2.4s ease-in-out infinite;
}
</style>
