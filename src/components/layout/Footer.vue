<template>
  <footer class="relative pt-8 pb-12 sm:py-10 px-4 sm:px-6 border-t border-slate-800/80 light:border-slate-200 bg-slate-950/60 light:bg-slate-50">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 light:text-slate-600">
      <div class="flex items-center gap-2">
        <span>© {{ new Date().getFullYear() }}</span>
        <span class="font-semibold text-white light:text-slate-900">Trần Văn Huy</span>
        <span>·</span>
        <span>Software Developer</span>
      </div>

      <!-- Quick links -->
      <div class="flex items-center gap-4">
        <a
          href="https://github.com/tranvanhuy-dev-it"
          target="_blank"
          rel="noopener"
          class="hover:text-cyan-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/huy-tran-van-5753b13b4"
          target="_blank"
          rel="noopener"
          class="hover:text-cyan-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          :href="`mailto:${store.personal.email}`"
          class="hover:text-cyan-400 transition-colors"
        >
          Email
        </a>
        <button
          @click="showQrModal = true"
          class="hover:text-purple-400 light:hover:text-purple-600 transition-colors flex items-center gap-1 cursor-pointer"
          :title="store.locale === 'vi' ? 'Quét mã QR Portfolio' : 'Portfolio QR Code'"
        >
          <IconQrCode class="w-3.5 h-3.5" />
          <span>QR</span>
        </button>
        <button
          @click="scrollToTop"
          class="ml-2 text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors cursor-pointer"
          title="Scroll back to top"
        >
          ↑ Top
        </button>
      </div>
    </div>

    <!-- QR Code Modal Popup -->
    <QrCodeModal
      :is-open="showQrModal"
      url="https://www.tranvanhuy.io.vn"
      @close="showQrModal = false"
    />
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import IconQrCode from '@/components/icons/IconQrCode.vue'
import QrCodeModal from '@/components/ui/QrCodeModal.vue'

const store = usePortfolioStore()
const showQrModal = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
