<template>
  <div
    class="relative w-full h-[400px] lg:h-[500px] overflow-hidden group bg-gray-50 dark:bg-gray-900"
  >
    <!-- Light Mode Background -->
    <img
      src="~/assets/images/hero_bg_light.png"
      alt="Hero Background Light"
      class="absolute inset-0 w-full h-full object-cover z-0 dark:hidden transition-opacity duration-500 animate-breathe"
    />

    <!-- Dark Mode Background -->
    <img
      src="~/assets/images/hero_bg_dark.png"
      alt="Hero Background Dark"
      class="absolute inset-0 w-full h-full object-cover z-0 hidden dark:block transition-opacity duration-500 animate-breathe"
    />

    <!-- Hero Line Art Overlay (Hidden as per previous request) -->
    <img
      src="~/assets/images/hero_line_art.png"
      alt="Welcome Hero Pattern"
      class="hidden absolute inset-0 w-full h-full object-cover z-10 opacity-40 mix-blend-multiply dark:mix-blend-soft-light dark:opacity-30"
    />

    <!-- Decorative Floating Elements -->
    <!-- Decorative Floating Elements -->
    <!-- Large heavy blob bottom right -->
    <div
      class="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-blue-500/10 backdrop-blur-3xl border border-white/5 shadow-2xl z-10 animate-float-slow"
      style="animation-delay: 0s"
    ></div>

    <!-- Medium blob top right -->
    <div
      class="absolute top-10 right-[10%] w-32 h-32 rounded-full bg-purple-500/10 backdrop-blur-md border border-white/10 shadow-lg z-10 animate-float"
      style="animation-delay: 1s"
    ></div>

    <!-- Small crisp circle middle right -->
    <div
      class="hidden lg:block absolute top-1/2 right-[20%] w-16 h-16 rounded-full bg-white/20 backdrop-blur-lg border border-white/20 shadow-xl z-10 animate-float-fast"
      style="animation-delay: 0.5s"
    ></div>

    <!-- Tiny particle top right -->
    <div
      class="absolute top-20 right-[25%] w-8 h-8 rounded-full bg-orange-400/20 backdrop-blur-sm border border-white/10 z-10 animate-float"
      style="animation-delay: 2s"
    ></div>

    <!-- Additional medium blob bottom rightish -->
    <div
      class="absolute bottom-32 right-[15%] w-24 h-24 rounded-full bg-pink-500/10 backdrop-blur-md border border-white/10 z-10 animate-float-slow"
      style="animation-delay: 1.5s"
    ></div>

    <!-- Very small sparkle-like dot -->
    <div
      class="absolute top-1/3 right-[5%] w-4 h-4 rounded-full bg-white/40 shadow-glow z-10 animate-pulse-slow"
    ></div>

    <!-- Hero Content -->
    <div
      class="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
    >
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm animate-fade-in-up opacity-0"
        style="animation-fill-mode: forwards; animation-delay: 0.1s"
      >
        행복한 내일을<br />
        <span class="text-orange-600 dark:text-orange-300"
          >함께 만들어갑니다.</span
        >
      </h1>
      <p
        class="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl font-medium drop-shadow-sm animate-fade-in-up opacity-0"
        style="animation-fill-mode: forwards; animation-delay: 0.4s"
      >
        서울지부엔컴노인종합복지관은 어르신들의 활기찬 노후와 건강한 삶을 위해
        다양한 프로그램과 따뜻한 커뮤니티를 제공합니다.
      </p>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 opacity-80 z-20"
    >
      <MouseIcon class="w-6 h-6 text-gray-500 dark:text-white animate-bounce" />
      <span class="text-xs font-medium text-gray-500 dark:text-white tracking-widest uppercase animate-bounce-slow">Scroll</span>
    </div>
  </div>
</template>

<script setup>
import { Mouse as MouseIcon } from 'lucide-vue-next';
// Hero Section Component
</script>

<style scoped>
/* Fade In Up Animation */
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

/* Ambient Breathe Animation */
.animate-breathe {
  animation: breathe 15s ease-in-out infinite alternate;
}

@keyframes breathe {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
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
    transform: translateY(-20px) rotate(5deg);
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

/* Bounce Animation */
.animate-bounce {
  animation: bounce 2s infinite;
}

.animate-bounce-slow {
    animation: bounce 2s infinite;
    animation-delay: 0.1s;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
