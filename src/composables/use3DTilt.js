import { ref } from 'vue'

export function use3DTilt(maxTilt = 12, scale = 1.03, disabled = false) {
  const elementRef = ref(null)

  const handleMouseMove = (e) => {
    if (disabled) return
    const el = elementRef.value
    if (!el) return
    
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const width = rect.width
    const height = rect.height
    
    // Normalize coordinates (-0.5 to 0.5)
    const normX = (x / width) - 0.5
    const normY = (y / height) - 0.5
    
    const tiltX = -normY * maxTilt
    const tiltY = normX * maxTilt
    
    el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`
    el.style.transition = 'transform 0.08s ease-out, box-shadow 0.08s ease-out'
  }

  const handleMouseLeave = () => {
    if (disabled) return
    const el = elementRef.value
    if (!el) return
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    el.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
  }

  return {
    elementRef,
    handleMouseMove,
    handleMouseLeave
  }
}
