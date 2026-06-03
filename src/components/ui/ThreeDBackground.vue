<template>
  <div ref="containerRef" id="three-container" class="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-45"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref(null)
let renderer, scene, camera, particles
let animationFrameId
let mouseX = 0, mouseY = 0
let targetMouseX = 0, targetMouseY = 0
let scrollY = 0

const PARTICLE_COUNT = 1500
const SPHERE_RADIUS = 12

function handleResize() {
  if (!camera || !renderer) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function handleMouseMove(e) {
  targetMouseX = (e.clientX / window.innerWidth) * 2 - 1
  targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1
}

function handleScroll() {
  scrollY = window.scrollY
}

onMounted(() => {
  const container = containerRef.value
  if (!container) return

  // 1. Scene Setup
  scene = new THREE.Scene()
  
  // 2. Camera Setup
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.z = 18
  
  // 3. Renderer Setup
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.appendChild(renderer.domElement)
  } catch (error) {
    console.warn("WebGL not supported.", error)
    return
  }

  // 4. Create Particles (BufferGeometry)
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  const colors = new Float32Array(PARTICLE_COUNT * 3)

  const colorViolet = new THREE.Color('#7c3aed') // Violet
  const colorCyan = new THREE.Color('#06b6d4')   // Cyan
  const colorWhite = new THREE.Color('#ffffff')

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // Generate a volumetric spherical shell of particles
    const u = Math.random()
    const v = Math.random()
    const theta = u * 2.0 * Math.PI
    const phi = Math.acos(2.0 * v - 1.0)
    
    const r = SPHERE_RADIUS * (0.4 + 0.6 * Math.random())

    const x = r * Math.sin(phi) * Math.cos(theta)
    const y = r * Math.sin(phi) * Math.sin(theta)
    const z = r * Math.cos(phi)

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    // Assign colors (mix of violet and cyan, with some white highlights)
    const rand = Math.random()
    let mixedColor = colorViolet.clone()
    if (rand > 0.5) {
      mixedColor = colorCyan.clone()
    } else if (rand > 0.85) {
      mixedColor = colorWhite.clone()
    }

    colors[i * 3] = mixedColor.r
    colors[i * 3 + 1] = mixedColor.g
    colors[i * 3 + 2] = mixedColor.b
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  // 5. Draw smooth circle textures programmatically
  const canvas = document.createElement('canvas')
  canvas.width = 16
  canvas.height = 16
  const ctx = canvas.getContext('2d')
  const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8)
  grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
  grad.addColorStop(1, 'rgba(255, 255, 255, 0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 16, 16)
  
  const particleTexture = new THREE.CanvasTexture(canvas)

  const material = new THREE.PointsMaterial({
    size: 0.3,
    map: particleTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  // 6. Points Setup
  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // 7. Event listeners
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('scroll', handleScroll)

  // 8. Animation loop
  const clock = new THREE.Clock()

  function animate() {
    animationFrameId = requestAnimationFrame(animate)

    const elapsedTime = clock.getElapsedTime()

    // Smoothly rotate the particle field
    if (particles) {
      particles.rotation.y = elapsedTime * 0.04
      particles.rotation.x = elapsedTime * 0.015
    }

    // Lerp mouse target for high inertia smoothness
    mouseX += (targetMouseX - mouseX) * 0.06
    mouseY += (targetMouseY - mouseY) * 0.06

    // Adjust camera slightly based on mouse and scroll
    camera.position.x = mouseX * 4
    camera.position.y = mouseY * 4 + (scrollY * -0.003)
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }

  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('scroll', handleScroll)
  
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<style scoped>
#three-container {
  pointer-events: none;
}
</style>
