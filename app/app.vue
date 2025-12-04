<template>
  <div
    class="min-h-screen bg-mesh-light dark:bg-black transition-colors duration-300"
  >
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>
