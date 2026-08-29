<template>
  <section id="about" class="relative py-14 sm:py-24 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <SectionTitle
        :title="store.ui.aboutTitle || 'About Me'"
        :subtitle="store.ui.aboutSubtitle || 'Overview'"
        :description="store.ui.aboutDesc || 'Core mindset, engineering philosophy, and career direction'"
      />

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-6 sm:mt-8">
        <!-- Box 1: Core Mindset & Philosophy (Span 2) -->
        <div class="md:col-span-2 glass-card p-4 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 flex flex-col justify-between fade-left">
          <div>
            <div class="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-sm sm:text-base font-bold shrink-0">
                ⚡
              </span>
              <h3 class="text-sm sm:text-lg font-bold text-white light:text-slate-900 leading-snug">
                {{ store.locale === 'vi' ? 'Tư duy phát triển & Năng lực kỹ thuật' : 'Engineering Philosophy & Core Competencies' }}
              </h3>
            </div>

            <!-- 3 Distinct Core Pillars -->
            <div class="space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
              <div class="flex items-start gap-2.5 sm:gap-3">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] sm:text-xs font-mono font-bold">
                  01
                </div>
                <div>
                  <h4 class="font-semibold text-white light:text-slate-900 mb-0.5">
                    {{ store.locale === 'vi' ? 'Full-Stack & Backend Architecture' : 'Full-Stack & Backend Architecture' }}
                  </h4>
                  <p class="text-slate-400 light:text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {{ store.locale === 'vi' 
                      ? 'Thiết kế RESTful API chuẩn mực với Java Spring Boot, Python Frappe, Node.js. Ưu tiên Clean Architecture, bảo mật JWT/OAuth2 và tối ưu truy vấn CSDL (PostgreSQL, Redis).' 
                      : 'Building scalable RESTful APIs with Java Spring Boot, Python Frappe, and Node.js. Focused on Clean Architecture, secure auth, and query optimization.' }}
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 sm:gap-3">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] sm:text-xs font-mono font-bold">
                  02
                </div>
                <div>
                  <h4 class="font-semibold text-white light:text-slate-900 mb-0.5">
                    {{ store.locale === 'vi' ? 'Ứng dụng Agentic AI & Tự động hóa' : 'Applied Agentic AI & Automation' }}
                  </h4>
                  <p class="text-slate-400 light:text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {{ store.locale === 'vi'
                      ? 'Nghiên cứu và triển khai các quy trình Agentic AI (OpenClaw) tại Digital Twin Group (MakeAI) để số hóa và tự động hóa quy trình nghiệp vụ doanh nghiệp, tối ưu năng suất làm việc.'
                      : 'Researching and deploying Agentic AI workflows (OpenClaw) at Digital Twin Group (MakeAI) to digitize business operations and automate engineering workflows.' }}
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 sm:gap-3">
                <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] sm:text-xs font-mono font-bold">
                  03
                </div>
                <div>
                  <h4 class="font-semibold text-white light:text-slate-900 mb-0.5">
                    {{ store.locale === 'vi' ? 'Chất lượng mã nguồn & Tinh thần giải quyết bài toán' : 'Code Quality & Problem-Solving Mindset' }}
                  </h4>
                  <p class="text-slate-400 light:text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {{ store.locale === 'vi'
                      ? 'Tập trung giải quyết bài toán thực tế, tuân thủ nguyên tắc Clean Code, viết tài liệu rõ ràng và chủ động thích ứng nhanh với công nghệ mới.'
                      : 'Driven by solving real-world business challenges, adhering to clean coding standards, comprehensive docs, and fast technology adaptation.' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Highlight tags -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-4 mt-4 border-t border-slate-800/80 light:border-slate-200">
            <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium rounded-md bg-blue-600/10 text-blue-400 border border-blue-500/20">
              #CleanCode
            </span>
            <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium rounded-md bg-cyan-600/10 text-cyan-400 border border-cyan-500/20">
              #BackendArchitecture
            </span>
            <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium rounded-md bg-purple-600/10 text-purple-400 border border-purple-500/20">
              #AgenticAI
            </span>
            <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-mono font-medium rounded-md bg-emerald-600/10 text-emerald-400 border border-emerald-500/20">
              #ProblemSolving
            </span>
          </div>
        </div>

        <!-- Box 2: Career Objective (Span 1) -->
        <div class="md:col-span-1 glass-card p-4 sm:p-7 rounded-2xl border border-slate-800/80 light:border-slate-200 flex flex-col justify-between fade-right">
          <div>
            <div class="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm sm:text-base font-bold shrink-0">
                🎯
              </span>
              <h3 class="text-sm sm:text-lg font-bold text-white light:text-slate-900">
                {{ store.ui.objectiveLabel || 'Mục tiêu nghề nghiệp' }}
              </h3>
            </div>
            <p class="text-slate-300 light:text-slate-700 text-xs sm:text-sm leading-relaxed">
              {{ store.personal.objective }}
            </p>
          </div>

          <div class="pt-3.5 mt-3.5 border-t border-slate-800/80 light:border-slate-200 text-xs font-mono text-cyan-400 light:text-blue-600 font-semibold flex items-center gap-1.5">
            <span>🚀</span>
            <span>{{ store.locale === 'vi' ? 'Sẵn sàng học hỏi & cống hiến' : 'Ready to adapt & contribute' }}</span>
          </div>
        </div>

        <!-- Box 3: Key Stats in 1 clean horizontal row (Span 3) -->
        <div class="md:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 fade-up">
          <div
            v-for="stat in store.stats"
            :key="stat.label"
            class="glass-card p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-800/80 light:border-slate-200 text-center hover:border-slate-700 transition-colors"
          >
            <div class="text-xl sm:text-3xl font-bold font-mono text-cyan-400 light:text-blue-600 mb-0.5 sm:mb-1">
              {{ stat.value }}
            </div>
            <div class="text-slate-400 light:text-slate-600 text-[11px] sm:text-xs font-medium font-sans">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { usePortfolioStore } from '@/stores/portfolioStore'

const store = usePortfolioStore()
</script>
