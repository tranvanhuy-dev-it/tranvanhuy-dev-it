<template>
  <section id="contact" class="relative py-7 sm:py-20 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto relative z-10">
      <SectionTitle
        :title="store.ui.contactTitle || 'Let\'s Build Something'"
        :subtitle="store.ui.contactSubtitle || 'Get In Touch'"
        :description="store.ui.contactDesc || 'I am currently open to Software Engineer and Full-Stack Developer opportunities (Intern / Junior / Full-time).'"
      />

      <!-- Unified Cohesive 2-Column Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 mt-5 sm:mt-10 items-stretch">
        
        <!-- Left Column (5 cols): Pitch, Direct Actions & Fast Info -->
        <div class="lg:col-span-5 flex flex-col justify-between glass-card p-5 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 fade-left">
          <div>
            <!-- Pitch Header -->
            <div class="mb-5 pb-4 border-b border-slate-800/80 light:border-slate-200">
              <span class="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-400 light:text-blue-600 block mb-1.5">
                {{ store.locale === 'vi' ? 'Kết nối chuyên môn' : 'Tech Networking' }}
              </span>
              <h3 class="text-lg sm:text-xl font-bold text-white light:text-slate-900 leading-snug">
                {{ store.locale === 'vi' ? 'Liên hệ & Trao đổi Công nghệ' : 'Let\'s Connect & Collaborate' }}
              </h3>
              <p class="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mt-2">
                {{ store.locale === 'vi'
                    ? 'Tôi luôn cởi mở kết nối với các lập trình viên, chia sẻ chuyên môn kỹ thuật hoặc trao đổi về các dự án phần mềm & giải pháp AI.'
                    : 'Always open to connecting with fellow engineers, sharing technical insights, or discussing impactful software and AI solutions.'
                }}
              </p>
            </div>

            <!-- Fast Contact Details -->
            <div class="space-y-3 mb-5">
              <!-- Email with Copy -->
              <div class="p-3 rounded-xl bg-slate-850/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between gap-2">
                <div class="min-w-0">
                  <p class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-400">Email</p>
                  <a :href="`mailto:${store.personal.email}`" class="text-xs sm:text-sm font-semibold text-white light:text-slate-900 hover:text-cyan-400 truncate block">
                    {{ store.personal.email }}
                  </a>
                </div>
                <button
                  @click="copyEmail"
                  class="px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-colors bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 shrink-0 cursor-pointer"
                  title="Copy email"
                >
                  {{ copied ? '✓ Copied' : 'Copy' }}
                </button>
              </div>

              <!-- Location & Status -->
              <div class="grid grid-cols-2 gap-2.5">
                <div class="p-3 rounded-xl bg-slate-850/70 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <p class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-400">Location</p>
                  <span class="text-xs font-semibold text-white light:text-slate-900 block truncate mt-0.5">
                    {{ store.personal.location }}
                  </span>
                </div>

                <div class="p-3 rounded-xl bg-slate-850/70 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <p class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-400">Status</p>
                  <span class="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5 truncate" title="Digital Twin Group (MakeAI)">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span class="truncate">{{ store.locale === 'vi' ? 'Làm việc tại DTG' : 'Working @ DTG' }}</span>
                  </span>
                </div>
              </div>

              <!-- Quick QR Scan Banner Card -->
              <div
                @click="showQrModal = true"
                class="p-2.5 sm:p-3 rounded-xl bg-slate-850/60 hover:bg-slate-850 light:bg-slate-50 light:hover:bg-slate-100 border border-slate-800 hover:border-cyan-500/50 light:border-slate-200 light:hover:border-cyan-500/50 transition-all cursor-pointer group flex items-center justify-between gap-2.5"
              >
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/10 light:bg-cyan-100 border border-cyan-500/30 flex items-center justify-center text-cyan-400 light:text-cyan-700 shrink-0 group-hover:scale-105 transition-transform">
                    <IconQrCode class="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div class="min-w-0">
                    <p class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-cyan-400 light:text-blue-600 font-semibold">
                      {{ store.locale === 'vi' ? 'Quét QR xem trên điện thoại' : 'Scan QR for Mobile View' }}
                    </p>
                    <p class="text-[11px] sm:text-xs font-semibold text-white light:text-slate-900 truncate">
                      www.tranvanhuy.io.vn
                    </p>
                  </div>
                </div>
                <div class="px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-300 light:bg-slate-200 light:text-slate-700 light:group-hover:bg-cyan-500 light:group-hover:text-slate-950 border border-slate-700 light:border-slate-300 transition-all shrink-0">
                  {{ store.locale === 'vi' ? 'Quét mã' : 'Scan QR' }}
                </div>
              </div>
            </div>
          </div>

          <!-- Direct Action Buttons Row -->
          <div class="pt-4 border-t border-slate-800/80 light:border-slate-200">
            <span class="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold block mb-2.5">
              {{ store.locale === 'vi' ? 'Kênh kết nối & Hồ sơ:' : 'Direct Links & Profile:' }}
            </span>

            <div class="grid grid-cols-2 gap-2.5">
              <a
                :href="store.personal.socials.linkedin"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-750 light:bg-slate-100 light:hover:bg-slate-200 text-slate-200 hover:text-white light:text-slate-800 light:hover:text-slate-900 border border-slate-700/80 light:border-slate-300 text-xs font-medium transition-all shadow-sm text-center"
              >
                <IconLinkedin class="w-4 h-4 fill-current text-blue-400 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                :href="store.personal.socials.github"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-850 hover:bg-slate-750 light:bg-slate-100 light:hover:bg-slate-200 text-slate-200 hover:text-white light:text-slate-800 light:hover:text-slate-900 border border-slate-700/80 light:border-slate-300 text-xs font-medium transition-all shadow-sm text-center"
              >
                <IconGithub class="w-4 h-4 fill-current text-slate-300 light:text-slate-700 shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                :href="store.personal.cv"
                download
                class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 light:bg-cyan-50 light:hover:bg-cyan-100 text-cyan-300 hover:text-cyan-200 light:text-cyan-700 light:hover:text-cyan-800 border border-cyan-500/30 light:border-cyan-400/50 text-xs font-semibold transition-all shadow-sm text-center"
              >
                <svg class="w-4 h-4 shrink-0 text-cyan-400 light:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                <span>{{ store.ui.downloadCv || 'Tải CV' }}</span>
              </a>

              <button
                type="button"
                @click="showQrModal = true"
                class="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 light:bg-purple-50 light:hover:bg-purple-100 text-purple-300 hover:text-purple-200 light:text-purple-700 light:hover:text-purple-800 border border-purple-500/30 light:border-purple-400/50 text-xs font-semibold transition-all shadow-sm text-center cursor-pointer"
                :title="store.locale === 'vi' ? 'Quét mã QR Portfolio' : 'Scan QR Portfolio'"
              >
                <IconQrCode class="w-4 h-4 shrink-0 text-purple-400 light:text-purple-600" />
                <span>{{ store.locale === 'vi' ? 'Mã QR Portfolio' : 'QR Portfolio' }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column (7 cols): Send Message Form -->
        <div class="lg:col-span-7 glass-card p-5 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 fade-right flex flex-col justify-between">
          <div>
            <div class="mb-4 pb-3 border-b border-slate-800/80 light:border-slate-200">
              <h3 class="text-base sm:text-lg font-bold text-white light:text-slate-900 flex items-center gap-2">
                <span>{{ store.ui.sendMessageTitle || 'Send a Direct Message' }}</span>
              </h3>
              <p class="text-xs text-slate-400 light:text-slate-600 mt-1">
                {{ store.locale === 'vi' ? 'Điền thông tin bên dưới để gửi tin nhắn trực tiếp đến email của tôi.' : 'Fill in the details below to deliver a message straight to my inbox.' }}
              </p>
            </div>

            <form @submit.prevent="submit" class="space-y-3.5">
              <!-- Name & Email -->
              <div class="grid sm:grid-cols-2 gap-3.5">
                <div class="space-y-1">
                  <label for="name" class="text-xs font-mono text-slate-400 light:text-slate-600">{{ store.ui.formName || 'Full Name' }}</label>
                  <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    placeholder="Recruiter Name / Company"
                    class="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-900/90 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    :class="errors.name ? 'border-red-500/80' : ''"
                  />
                  <p v-if="errors.name" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.name }}</p>
                </div>

                <div class="space-y-1">
                  <label for="email" class="text-xs font-mono text-slate-400 light:text-slate-600">{{ store.ui.formEmail || 'Email Address' }}</label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    placeholder="email@company.com"
                    class="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-900/90 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    :class="errors.email ? 'border-red-500/80' : ''"
                  />
                  <p v-if="errors.email" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Subject Dropdown -->
              <div class="space-y-1">
                <label for="subject" class="text-xs font-mono text-slate-400 light:text-slate-600">
                  {{ store.ui.formSubject || 'Subject' }}
                </label>
                <select
                  v-model="form.subject"
                  id="subject"
                  class="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-900/90 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  :class="errors.subject ? 'border-red-500/80' : ''"
                >
                  <option value="" disabled selected>
                    {{ store.locale === 'vi' ? '-- Chọn tiêu đề phù hợp --' : '-- Select a subject topic --' }}
                  </option>
                  <option
                    v-for="s in store.presetSubjects"
                    :key="s"
                    :value="s"
                    class="bg-slate-900 text-white light:bg-white light:text-slate-900 py-1"
                  >
                    {{ s }}
                  </option>
                </select>
                <p v-if="errors.subject" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.subject }}</p>
              </div>

              <!-- Message Content -->
              <div class="space-y-1">
                <label for="message" class="text-xs font-mono text-slate-400 light:text-slate-600">{{ store.ui.formMessage || 'Message Content' }}</label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="4"
                  placeholder="Hi Huy, we are impressed with your profile and would like to discuss..."
                  class="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-900/90 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  :class="errors.message ? 'border-red-500/80' : ''"
                ></textarea>
                <p v-if="errors.message" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.message }}</p>
              </div>

              <!-- Action buttons & feedback state -->
              <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div class="text-xs font-medium w-full sm:w-auto">
                  <span v-if="submitStatus === 'success'" class="text-green-400 flex items-center gap-1.5 animate-pulse">
                    {{ store.ui.formSuccess || '✓ Message sent successfully! Thank you.' }}
                  </span>
                  <div v-else-if="submitStatus === 'error'" class="text-red-400 flex flex-col gap-0.5">
                    <span class="flex items-center gap-1.5 font-semibold">
                      {{ store.ui.formError || '✗ Something went wrong. Please try again later.' }}
                    </span>
                    <span v-if="errorMessage" class="text-[11px] font-mono opacity-80 break-words">
                      ({{ errorMessage }})
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn-primary w-full sm:w-auto px-6 py-2.5 flex items-center justify-center gap-2 cursor-pointer text-xs"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>{{ isSubmitting ? (store.ui.formSending || 'Sending...') : (store.ui.formSend || 'Send Message') }}</span>
                  <svg v-if="!isSubmitting" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

    <!-- QR Code Modal Popup -->
    <QrCodeModal
      :is-open="showQrModal"
      url="https://www.tranvanhuy.io.vn"
      @close="showQrModal = false"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useContactForm } from '@/composables/useContactForm'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconQrCode from '@/components/icons/IconQrCode.vue'
import QrCodeModal from '@/components/ui/QrCodeModal.vue'

const store = usePortfolioStore()
const { form, errors, isSubmitting, submitStatus, errorMessage, submit } = useContactForm()
const copied = ref(false)
const showQrModal = ref(false)

function copyEmail() {
  navigator.clipboard.writeText(store.personal.email)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>
