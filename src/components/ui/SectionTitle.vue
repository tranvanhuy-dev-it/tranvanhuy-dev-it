<template>
  <div class="mb-6 sm:mb-10 text-left fade-up">
    <p v-if="subtitle" class="text-xs font-mono font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-cyan-400 light:text-blue-600 mb-1 sm:mb-1.5">
      {{ subtitle }}
    </p>
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white light:text-slate-900">
      {{ title }}
    </h2>
    <p v-if="description" class="text-slate-400 light:text-slate-600 mt-1.5 sm:mt-2 text-xs sm:text-sm max-w-2xl leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>
