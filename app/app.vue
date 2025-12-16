<template>
  <div
    class="min-h-screen transition-colors duration-300 font-sans text-warm-text flex flex-col"
  >
    <!-- Global Background -->
    <div class="fixed inset-0 -z-20 transition-colors duration-500 bg-warm-white dark:bg-dark-base overflow-hidden">
      <!-- Light Mode Gradients -->
      <div class="absolute top-[-20%] -left-[10%] w-[800px] h-[800px] bg-soft-pink rounded-full mix-blend-multiply filter blur-[100px] opacity-80 animate-blob dark:hidden"></div>
      <div class="absolute top-[-20%] -right-[10%] w-[800px] h-[800px] bg-baby-blue rounded-full mix-blend-multiply filter blur-[100px] opacity-80 animate-blob animation-delay-2000 dark:hidden"></div>
      <div class="absolute -bottom-[20%] left-[20%] w-[800px] h-[800px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-80 animate-blob animation-delay-4000 dark:hidden"></div>

      <!-- Dark Mode Gradients (Aurora Effect) -->
      <div class="absolute top-[-10%] -left-[10%] w-[800px] h-[800px] bg-muted-purple rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob hidden dark:block"></div>
      <div class="absolute top-[-10%] -right-[10%] w-[800px] h-[800px] bg-deep-indigo rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-2000 hidden dark:block"></div>
      <div class="absolute -bottom-[20%] left-[20%] w-[900px] h-[900px] bg-blue-900 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-4000 hidden dark:block"></div>
      
      <!-- Overlay for texture/noise if needed, simplified for now to just soft blur -->
      <div class="absolute inset-0 backdrop-blur-[1px]"></div>
    </div>

    <TheHeader />
    <div class="flex-grow">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>
