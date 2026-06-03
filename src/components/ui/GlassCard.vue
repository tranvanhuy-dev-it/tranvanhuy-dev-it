<template>
  <div
    ref="elementRef"
    class="glass-card p-6"
    :class="[paddingClass]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </div>
</template>

<script setup>
import { use3DTilt } from '@/composables/use3DTilt'

const props = defineProps({
  hoverEffect: { type: Boolean, default: true },
  paddingClass: { type: String, default: '' },
})

const { elementRef, handleMouseMove, handleMouseLeave } = use3DTilt(10, 1.02, !props.hoverEffect)
</script>
