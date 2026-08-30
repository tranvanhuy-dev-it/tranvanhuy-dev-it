<template>
  <section id="contact" class="relative py-14 sm:py-24 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto relative z-10">
      <SectionTitle
        :title="store.ui.contactTitle || 'Contact'"
        :subtitle="store.ui.contactSubtitle || 'Get In Touch'"
        :description="store.ui.contactDesc || 'Let\'s connect to discuss software engineering roles or collaboration!'"
      />

      <div class="grid md:grid-cols-5 gap-5 sm:gap-8 mt-5 sm:mt-8 items-start">
        <!-- Column 1: Info and Socials (Span 2) -->
        <div class="md:col-span-2 space-y-4 sm:space-y-5 fade-left">
          <div class="glass-card p-3.5 sm:p-7 flex flex-col gap-3 sm:gap-5 rounded-xl sm:rounded-2xl border border-slate-800/80 light:border-slate-200">
            <div>
              <h3 class="text-base sm:text-lg font-bold text-white light:text-slate-900 flex items-center gap-2">
                <span>📫</span> {{ store.ui.contactInfoTitle || 'Contact Information' }}
              </h3>
              <p class="hidden sm:block text-slate-300 light:text-slate-700 text-xs sm:text-sm leading-relaxed mt-1.5">
                {{ store.ui.contactInfoDesc || 'I am actively seeking Software Developer opportunities. Feel free to reach out directly!' }}
              </p>
            </div>

            <div class="space-y-2 sm:space-y-3">
              <!-- Email Card with Copy button -->
              <div class="p-2.5 sm:p-3.5 rounded-lg bg-slate-850/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center justify-between gap-2">
                <div class="min-w-0">
                  <p class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-400">Email</p>
                  <a :href="`mailto:${store.personal.email}`" class="text-xs sm:text-sm font-semibold text-white light:text-slate-900 hover:text-cyan-400 truncate block">
                    {{ store.personal.email }}
                  </a>
                </div>
                <button
                  @click="copyEmail"
                  class="px-2 py-1 rounded text-[11px] font-mono font-medium transition-colors bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 shrink-0 cursor-pointer"
                  title="Copy email"
                >
                  {{ copied ? '✓' : 'Copy' }}
                </button>
              </div>

              <!-- Location & Status grid on mobile (or compact cards) -->
              <div class="grid grid-cols-1 sm:grid-cols-1 gap-2 sm:gap-3">
                <!-- Location Card -->
                <div class="p-2.5 sm:p-3.5 rounded-lg bg-slate-850/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center gap-2">
                  <div class="min-w-0">
                    <p class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-400">Location</p>
                    <span class="text-xs sm:text-sm font-semibold text-white light:text-slate-900 block truncate">
                      {{ store.personal.location }}
                    </span>
                  </div>
                </div>

                <!-- Status Card -->
                <div class="p-2.5 sm:p-3.5 rounded-lg bg-slate-850/70 light:bg-slate-50 border border-slate-800 light:border-slate-200 flex items-center gap-2">
                  <div class="min-w-0">
                    <p class="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-slate-400">Status</p>
                    <span class="text-xs sm:text-sm font-semibold text-green-400 flex items-start gap-1.5 mt-0.5 leading-snug">
                      <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse shrink-0 mt-1"></span>
                      <span class="break-words">{{ store.personal.availability }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social links -->
            <div class="border-t border-slate-800 light:border-slate-200 pt-3 sm:pt-5 flex items-center justify-between sm:block">
              <h4 class="text-[11px] sm:text-xs text-slate-400 light:text-slate-600 font-mono font-bold uppercase tracking-wider sm:mb-2.5">
                {{ store.ui.socialMediaLabel || 'Direct Links' }}
              </h4>
              <div class="flex gap-2">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener"
                  class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-850/90 hover:bg-blue-600 border border-slate-700/80 hover:border-blue-500 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  :aria-label="social.name"
                >
                  <IconGithub v-if="social.platform === 'github'" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <IconLinkedin v-else-if="social.platform === 'linkedin'" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  <IconFacebook v-else-if="social.platform === 'facebook'" class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 2: Send message form (Span 3) -->
        <div class="md:col-span-3 fade-right">
          <div class="glass-card p-4 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 relative">
            <h3 class="text-base sm:text-lg font-bold text-white light:text-slate-900 mb-4 sm:mb-5 flex items-center gap-2">
              <span>✉️</span> {{ store.ui.sendMessageTitle || 'Send a Direct Message' }}
            </h3>

            <form @submit.prevent="submit" class="space-y-4">
              <!-- Grid for Name and Email -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label for="name" class="text-xs font-mono text-slate-400 light:text-slate-600">{{ store.ui.formName || 'Full Name' }}</label>
                  <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    placeholder="Recruiter Name / Company"
                    class="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-900/90 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    :class="errors.name ? 'border-red-500/80' : ''"
                  />
                  <p v-if="errors.name" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.name }}</p>
                </div>

                <div class="space-y-1.5">
                  <label for="email" class="text-xs font-mono text-slate-400 light:text-slate-600">{{ store.ui.formEmail || 'Email Address' }}</label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    placeholder="email@company.com"
                    class="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-900/90 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                    :class="errors.email ? 'border-red-500/80' : ''"
                  />
                  <p v-if="errors.email" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Subject -->
              <div class="space-y-1.5">
                <label for="subject" class="text-xs font-mono text-slate-400 light:text-slate-600">{{ store.ui.formSubject || 'Subject' }}</label>
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  placeholder="Software Developer Opportunity / Interview Invitation..."
                  class="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-900/90 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                  :class="errors.subject ? 'border-red-500/80' : ''"
                />
                <p v-if="errors.subject" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.subject }}</p>
              </div>

              <!-- Message -->
              <div class="space-y-1.5">
                <label for="message" class="text-xs font-mono text-slate-400 light:text-slate-600">{{ store.ui.formMessage || 'Message Content' }}</label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="6"
                  placeholder="Hi Huy, we are impressed with your profile and would like to discuss..."
                  class="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-900/90 light:bg-slate-50 border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  :class="errors.message ? 'border-red-500/80' : ''"
                ></textarea>
                <p v-if="errors.message" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.message }}</p>
              </div>

              <!-- Action buttons & feedback state -->
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
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
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useContactForm } from '@/composables/useContactForm'
import IconGithub from '@/components/icons/IconGithub.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'

const store = usePortfolioStore()
const { form, errors, isSubmitting, submitStatus, errorMessage, submit } = useContactForm()
const copied = ref(false)

function copyEmail() {
  navigator.clipboard.writeText(store.personal.email)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

const socials = [
  { name: 'GitHub', platform: 'github', url: store.personal.socials.github },
  { name: 'LinkedIn', platform: 'linkedin', url: store.personal.socials.linkedin },
  { name: 'Facebook', platform: 'facebook', url: store.personal.socials.facebook },
]
</script>
