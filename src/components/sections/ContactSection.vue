<template>
  <section id="contact" class="relative py-24 px-4 overflow-hidden">
    <!-- Glowing background elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600/5 blur-[120px]"></div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <SectionTitle title="Contact" subtitle="Get In Touch"
        description="Let's connect to discuss job opportunities or collaboration!" />

      <div class="grid md:grid-cols-5 gap-8 mt-12 items-start">
        <!-- Column 1: Info and Socials (Span 2) -->
        <div class="md:col-span-2 space-y-6 fade-left">
          <div class="glass-card p-6 md:p-8 flex flex-col gap-6">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <span class="text-purple-400"></span> Contact Information
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              I am always open to new challenges and collaboration opportunities. Drop a message or connect with me directly!
            </p>

            <div class="space-y-4">
              <!-- Contact item card -->
              <div v-for="item in contactItems" :key="item.label"
                class="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all duration-300 group hover:bg-white/[0.04]">
                <div
                  class="w-11 h-11 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                  :style="item.type === 'email' ? 'background: rgba(124,58,237,0.1);' : item.type === 'location' ? 'background: rgba(6,182,212,0.1);' : 'background: rgba(16,185,129,0.1);'">
                  <!-- Email Icon SVG -->
                  <svg v-if="item.type === 'email'" class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor"
                    stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <!-- Location Icon SVG -->
                  <svg v-else-if="item.type === 'location'" class="w-5 h-5 text-cyan-400" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <!-- Status Icon SVG -->
                  <svg v-else-if="item.type === 'status'" class="w-5 h-5 text-green-400" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="text-[10px] uppercase tracking-wider text-slate-500 font-mono mb-0.5">{{ item.label }}</p>
                  <a v-if="item.href" :href="item.href"
                    class="text-sm font-semibold text-slate-200 hover:text-purple-300 transition-colors truncate block">
                    {{ item.value }}
                  </a>
                  <span v-else class="text-sm font-semibold text-slate-200 truncate block">
                    {{ item.value }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Social links inside Info block -->
            <div class="border-t border-white/5 pt-6">
              <h4 class="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">Social Media</h4>
              <div class="flex gap-3">
                <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener"
                  class="social-link w-11 h-11 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300"
                  :style="`color: ${social.color}; border: 1px solid ${social.color}20;`" :aria-label="social.name">
                  <!-- GitHub SVG -->
                  <svg v-if="social.platform === 'github'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <!-- LinkedIn SVG -->
                  <svg v-else-if="social.platform === 'linkedin'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <!-- Facebook SVG -->
                  <svg v-else-if="social.platform === 'facebook'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Column 2: Send message form (Span 3) -->
        <div class="md:col-span-3 fade-right">
          <div class="glass-card p-6 md:p-8 relative">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span class="text-cyan-400"></span> Send a Message
            </h3>

            <form @submit.prevent="submit" class="space-y-5">
              <!-- Grid for Name and Email -->
              <div class="grid sm:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label for="name" class="text-xs font-mono text-slate-400">Full Name</label>
                  <input v-model="form.name" type="text" id="name" placeholder="John Doe" class="form-input text-xs"
                    :class="errors.name ? 'border-red-500/50 focus:border-red-500' : ''" />
                  <p v-if="errors.name" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.name }}</p>
                </div>

                <div class="space-y-1.5">
                  <label for="email" class="text-xs font-mono text-slate-400">Email Address</label>
                  <input v-model="form.email" type="email" id="email" placeholder="email@example.com"
                    class="form-input text-xs" :class="errors.email ? 'border-red-500/50 focus:border-red-500' : ''" />
                  <p v-if="errors.email" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.email }}</p>
                </div>
              </div>

              <!-- Subject -->
              <div class="space-y-1.5">
                <label for="subject" class="text-xs font-mono text-slate-400">Subject</label>
                <input v-model="form.subject" type="text" id="subject"
                  placeholder="Collaboration Opportunity / Work Inquiry..." class="form-input text-xs"
                  :class="errors.subject ? 'border-red-500/50 focus:border-red-500' : ''" />
                <p v-if="errors.subject" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.subject }}</p>
              </div>

              <!-- Message -->
              <div class="space-y-1.5">
                <label for="message" class="text-xs font-mono text-slate-400">Message Content</label>
                <textarea v-model="form.message" id="message" rows="10" placeholder="Hi, I would like to discuss..."
                  class="form-input text-xs resize-none"
                  :class="errors.message ? 'border-red-500/50 focus:border-red-500' : ''"></textarea>
                <p v-if="errors.message" class="text-[11px] text-red-400 font-mono mt-0.5">{{ errors.message }}</p>
              </div>

              <!-- Action buttons & feedback state -->
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <!-- Status notifications -->
                <div class="text-xs font-medium w-full sm:w-auto">
                  <span v-if="submitStatus === 'success'"
                    class="text-green-400 flex items-center gap-1.5 animate-pulse">
                    ✓ Message sent successfully! Thank you.
                  </span>
                  <span v-else-if="submitStatus === 'error'" class="text-red-400 flex items-center gap-1.5">
                    ✗ Something went wrong. Please try again later.
                  </span>
                </div>

                <button type="submit"
                  class="btn-primary w-full sm:w-auto px-6 py-3.5 flex items-center justify-center gap-2 cursor-pointer text-xs"
                  :disabled="isSubmitting">
                  <span v-if="isSubmitting"
                    class="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                  <svg v-if="!isSubmitting"
                    class="w-3.5 h-3.5 transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'
import { useContactForm } from '@/composables/useContactForm'

const store = usePortfolioStore()
const { form, errors, isSubmitting, submitStatus, submit } = useContactForm()

const contactItems = [
  { label: 'Email', type: 'email', value: store.personal.email, href: `mailto:${store.personal.email}` },
  { label: 'Location', type: 'location', value: store.personal.location, href: null },
  { label: 'Status', type: 'status', value: store.personal.availability, href: null },
]

const socials = [
  { name: 'GitHub', platform: 'github', url: store.personal.socials.github, color: '#a855f7' },
  { name: 'LinkedIn', platform: 'linkedin', url: store.personal.socials.linkedin, color: '#06b6d4' },
  { name: 'Facebook', platform: 'facebook', url: store.personal.socials.facebook, color: '#1877f2' },
]
</script>

<style scoped>
/* Scoped adjustments */
</style>
