<template>
  <!-- Preloader Screen -->
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f] text-white"
    >
      <div class="relative flex flex-col items-center gap-5">
        <!-- Logo Container with White Background -->
        <div
          class="w-20 h-20 rounded-2xl bg-white p-2.5 shadow-2xl shadow-purple-500/30 ring-2 ring-purple-500/50 flex items-center justify-center animate-bounce-slow"
        >
          <img src="/logo.png" alt="Loading Logo" class="w-full h-full object-contain" />
        </div>

        <!-- Preloader Spinner / Text -->
        <div class="flex items-center gap-2 font-mono text-sm text-purple-400 font-semibold tracking-wider">
          <span class="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
          <span>LOADING...</span>
        </div>
      </div>
    </div>
  </Transition>

  <RouterView />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 600)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(-4px);
  }
  50% {
    transform: translateY(4px);
  }
}
.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}
</style>
