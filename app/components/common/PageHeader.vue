<template>
  <div
    ref="headerContainer"
    class="relative w-full h-64 md:h-80 overflow-hidden group mb-8"
    style="mask-image: linear-gradient(to bottom, black 70%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Background is now handled globally in app.vue, keeping this transparent -->
    
    <!-- Spotlight / Glow Overlay -->
    <div
      class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
      :style="{
        background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.3)'}, transparent 40%)`,
        opacity: isHovering ? 1 : 0
      }"
    ></div>

    <!-- Decorative Floating Elements (Scaled down for Header & Softened) -->
    <!-- Large blob bottom right - clipped -->
    <div
      class="absolute -bottom-16 -right-10 w-48 h-48 rounded-full bg-blue-400/20 blur-[50px] z-10 animate-float-slow"
      style="animation-delay: 0s"
    ></div>

    <!-- Medium blob top right -->
    <div
      class="absolute -top-8 right-[5%] w-32 h-32 rounded-full bg-purple-400/20 blur-[30px] z-10 animate-float"
      style="animation-delay: 1s"
    ></div>

    <!-- Small crisp circle - Softened -->
    <div
      class="hidden md:block absolute top-1/2 right-[15%] w-16 h-16 rounded-full bg-white/30 blur-[20px] z-10 animate-float-fast"
      style="animation-delay: 0.5s"
    ></div>

    <!-- Tiny particle -->
    <div
      class="absolute top-10 right-[20%] w-8 h-8 rounded-full bg-orange-300/30 blur-[15px] z-10 animate-float"
      style="animation-delay: 2s"
    ></div>

    <!-- Sparkle -->
    <div
      class="absolute bottom-10 right-[10%] w-4 h-4 rounded-full bg-white/40 blur-[5px] z-10 animate-pulse-slow"
    ></div>

    <!-- Content Container -->
    <div
      class="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex flex-col justify-center items-center text-center animate-fade-in-up"
    >
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm flex items-center justify-center gap-3"
      >
        <!-- Icon Slot -->
        <slot name="icon"></slot>
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl font-medium drop-shadow-sm"
      >
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
});

// --- Spotlight Logic ---
const headerContainer = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const isHovering = ref(false);
const isDark = ref(false);

const handleMouseMove = (e) => {
  if (!headerContainer.value) return;
  const rect = headerContainer.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};

onMounted(() => {
  const checkTheme = () => {
    isDark.value = document.documentElement.classList.contains('dark');
  };
  checkTheme();
  
  const observer = new MutationObserver(checkTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Floating Animation Standard */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Slow Floating */
.animate-float-slow {
  animation: float 10s ease-in-out infinite;
}

/* Fast Floating */
.animate-float-fast {
  animation: float 4s ease-in-out infinite;
}

/* Pulse Slow */
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg); /* Reduced movement for header */
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.9);
  }
}
</style>
