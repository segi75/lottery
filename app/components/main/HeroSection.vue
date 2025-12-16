<template>
  <div
    ref="heroContainer"
    class="relative w-full h-[400px] lg:h-[500px] overflow-hidden group mb-0"
    style="mask-image: linear-gradient(to bottom, black 80%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Background is now handled globally in app.vue, keeping this transparent -->
    
    <!-- Spotlight / Glow Overlay -->
    <div
      class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
      :style="{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.4)'}, transparent 40%)`,
        opacity: isHovering ? 1 : 0
      }"
    ></div>
    
    <!-- Decorative Floating Elements (Softened) -->
    <!-- Large heavy blob bottom right -->
    <div
      class="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-blue-400/20 blur-[60px] z-10 animate-float-slow"
      style="animation-delay: 0s"
    ></div>

    <!-- Medium blob top right -->
    <div
      class="absolute top-10 right-[10%] w-32 h-32 rounded-full bg-purple-400/20 blur-[40px] z-10 animate-float"
      style="animation-delay: 1s"
    ></div>

    <!-- Small crisp circle middle right - Made softer -->
    <div
      class="hidden lg:block absolute top-1/2 right-[20%] w-24 h-24 rounded-full bg-white/30 blur-[30px] z-10 animate-float-fast"
      style="animation-delay: 0.5s"
    ></div>

    <!-- Tiny particle top right -->
    <div
      class="absolute top-20 right-[25%] w-12 h-12 rounded-full bg-orange-300/30 blur-[20px] z-10 animate-float"
      style="animation-delay: 2s"
    ></div>

    <!-- Additional medium blob bottom rightish -->
    <div
      class="absolute bottom-32 right-[15%] w-32 h-32 rounded-full bg-pink-400/20 blur-[50px] z-10 animate-float-slow"
      style="animation-delay: 1.5s"
    ></div>

    <!-- Very small sparkle-like dot -->
    <div
      class="absolute top-1/3 right-[5%] w-8 h-8 rounded-full bg-white/40 blur-[10px] z-10 animate-pulse-slow"
    ></div>

    <!-- Hero Content -->
    <div
      class="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
    >
      <h1
        class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-4 drop-shadow-sm animate-fade-in-up opacity-0 hero-title"
        style="animation-fill-mode: forwards; animation-delay: 0.1s"
      >
        <span class="inline-block min-h-[1.2em]">
          {{ displayedText1 }}<br />
          <span class="text-orange-600 dark:text-orange-300 hero-glow transition-all duration-500">
            {{ displayedText2 }}<span class="animate-blink" v-if="showCursor">|</span>
          </span>
        </span>
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
      @click="handleScroll"
      class="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 opacity-80 z-20 cursor-pointer hover:opacity-100 transition-opacity btn-bouncy"
    >
      <MouseIcon class="w-6 h-6 text-gray-700 dark:text-white animate-bounce" />
      <span class="text-xs font-medium text-gray-700 dark:text-white tracking-widest uppercase animate-bounce-slow">Scroll</span>
    </div>
  </div>
</template>

<script setup>
import { Mouse as MouseIcon } from 'lucide-vue-next';
import { ref, onMounted, computed, onUnmounted } from 'vue';

// --- Typewriter Logic ---
const fullText1 = "행복한 내일을";
const fullText2 = "함께 만들어갑니다.";
const displayedText1 = ref("");
const displayedText2 = ref("");
const showCursor = ref(true);
let typeInterval;

const startTyping = () => {
  displayedText1.value = "";
  displayedText2.value = "";
  showCursor.value = true;
  
  let currentIndex1 = 0;
  let currentIndex2 = 0;
  
  // Type first line
  const typeLine1 = () => {
    if (currentIndex1 < fullText1.length) {
      displayedText1.value += fullText1[currentIndex1];
      currentIndex1++;
      setTimeout(typeLine1, 100);
    } else {
      // Start second line after small delay
      setTimeout(typeLine2, 300);
    }
  };

  const typeLine2 = () => {
    if (currentIndex2 < fullText2.length) {
      displayedText2.value += fullText2[currentIndex2];
      currentIndex2++;
      setTimeout(typeLine2, 100);
    } else {
      // Finished typing, hide cursor after 3s
      setTimeout(() => {
        showCursor.value = false;
      }, 3000);
    }
  };

  typeLine1();
};

// --- Spotlight Logic ---
const heroContainer = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);
const isHovering = ref(false);
const isDark = ref(false); // We need to sync this with global theme state if possible, or check class

const handleMouseMove = (e) => {
  if (!heroContainer.value) return;
  const rect = heroContainer.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
  isHovering.value = true;
};

const handleMouseLeave = () => {
  isHovering.value = false;
};

// Scroll Handler
const handleScroll = () => {
  window.scrollTo({
    top: window.innerHeight - 80, // Scroll down one viewport height minus rough header height
    behavior: 'smooth'
  });
};

onMounted(() => {
  startTyping();
  
  // Simple check for initial theme, dynamic updates would require a global store or observer
  // Assuming 'dark' class on html element is the source of truth
  const checkTheme = () => {
    isDark.value = document.documentElement.classList.contains('dark');
  };
  checkTheme();
  
  // Observer for theme changes
  const observer = new MutationObserver(checkTheme);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
  onUnmounted(() => {
    observer.disconnect();
  });
});
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
  animation: float 3s ease-in-out infinite;
}

/* Slow Floating */
.animate-float-slow {
  animation: float 5s ease-in-out infinite;
}

/* Fast Floating */
.animate-float-fast {
  animation: float 2s ease-in-out infinite;
}

/* Pulse Slow */
.animate-pulse-slow {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-40px) rotate(10deg);
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

/* Hero Typography Effects */
.hero-title {
  letter-spacing: -0.02em;
}

.hero-glow {
  /* Light Mode: Soft colored shadow */
  text-shadow: 0 4px 20px rgba(255, 160, 122, 0.3);
}

:global(.dark) .hero-glow {
  /* Dark Mode: White/Gold outer glow */
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 
               0 0 40px rgba(255, 165, 0, 0.2);
}

/* Typewriter Cursor Blink */
.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Elastic/Bouncy Button Class */
.btn-bouncy {
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-bouncy:hover {
  transform: scale(1.1);
}

.btn-bouncy:active {
  transform: scale(0.95);
}

@media (prefers-reduced-motion: reduce) {
  .btn-bouncy {
    transition: none;
  }
  .btn-bouncy:hover {
    transform: none;
  }
}
</style>
