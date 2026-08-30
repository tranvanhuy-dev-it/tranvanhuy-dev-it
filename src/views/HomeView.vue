<template>
  <div class="relative min-h-screen overflow-x-hidden w-full">
    <!-- 3D WebGL BG -->
    <ThreeDBackground />

    <!-- Cursor glow -->
    <div
      class="cursor-glow hidden md:block"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    ></div>

    <!-- NavBar -->
    <NavBar :active-section="activeSection" />

    <!-- Main content -->
    <main class="overflow-x-hidden w-full min-w-0">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThreeDBackground from '@/components/ui/ThreeDBackground.vue'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SolutionsSection from '@/components/sections/SolutionsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useScrollAnimation, useActiveSection } from '@/composables/useScrollAnimation'

const activeSection = ref('hero')
const mouseX = ref(0)
const mouseY = ref(0)

// Scroll animations
useScrollAnimation()

// Track active section for nav highlighting
useActiveSection((id) => {
  activeSection.value = id
})

function handleMouseMove(e) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
