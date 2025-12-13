<template>
  <div
    class="relative w-full h-64 md:h-80 overflow-hidden group bg-gray-50 dark:bg-gray-900 mb-8"
  >
    <!-- Light Mode Background -->
    <img
      src="~/assets/images/hero_bg_light.png"
      alt="Header Background Light"
      class="absolute inset-0 w-full h-full object-cover z-0 dark:hidden transition-opacity duration-500 opacity-80"
    />

    <!-- Dark Mode Background -->
    <img
      src="~/assets/images/hero_bg_dark.png"
      alt="Header Background Dark"
      class="absolute inset-0 w-full h-full object-cover z-0 hidden dark:block transition-opacity duration-500 opacity-80"
    />

    <!-- Decorative Floating Elements (Scaled down for Header) -->
    <!-- Large blob bottom right - clipped -->
    <div
      class="absolute -bottom-16 -right-10 w-48 h-48 rounded-full bg-blue-500/10 backdrop-blur-3xl border border-white/5 shadow-2xl z-10 animate-float-slow"
      style="animation-delay: 0s"
    ></div>

    <!-- Medium blob top right -->
    <div
      class="absolute -top-8 right-[5%] w-24 h-24 rounded-full bg-purple-500/10 backdrop-blur-md border border-white/10 shadow-lg z-10 animate-float"
      style="animation-delay: 1s"
    ></div>

    <!-- Small crisp circle -->
    <div
      class="hidden md:block absolute top-1/2 right-[15%] w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl z-10 animate-float-fast"
      style="animation-delay: 0.5s"
    ></div>

    <!-- Tiny particle -->
    <div
      class="absolute top-10 right-[20%] w-6 h-6 rounded-full bg-orange-400/20 backdrop-blur-sm border border-white/10 z-10 animate-float"
      style="animation-delay: 2s"
    ></div>

    <!-- Sparkle -->
    <div
      class="absolute bottom-10 right-[10%] w-3 h-3 rounded-full bg-white/40 shadow-glow z-10 animate-pulse-slow"
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
