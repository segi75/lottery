<template>
  <div
    class="min-h-screen transition-colors duration-300 font-sans text-warm-text flex flex-col"
  >
    <!-- Global Background -->
    <div class="fixed inset-0 -z-20 dark:hidden">
      <img
        src="~/assets/images/global_bg.png"
        alt="Background"
        class="w-full h-full object-cover opacity-90"
      />
      <div class="absolute inset-0 bg-warm-cream/30 backdrop-blur-[2px]"></div>
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
