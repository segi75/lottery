<template>
  <div class="min-h-screen pb-12">
    <PageHeader title="로그인" subtitle="서비스 이용을 위해 로그인이 필요합니다.">
      <template #icon>
        <LogInIcon
          class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-300"
        />
      </template>
    </PageHeader>

    <div
      class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center"
    >
      <div
        class="w-full max-w-md glass-card p-8 relative overflow-hidden animate-fade-in"
      >
        <div class="relative z-10">

        <form @submit.prevent="handleLogin" class="space-y-6" novalidate>
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >아이디</label
            >
            <input
              id="username"
              v-model="username"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="아이디를 입력하세요"
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >비밀번호</label
            >
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <div class="flex items-center justify-between text-sm">
            <label
              class="flex items-center gap-1 text-gray-600 dark:text-gray-400 cursor-pointer whitespace-nowrap"
            >
              <input
                type="checkbox"
                class="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 shrink-0"
              />
              아이디 저장하기
            </label>
            <NuxtLink
              to="/find-account"
              class="text-blue-600 dark:text-blue-400 hover:underline"
              >계정찾기</NuxtLink
            >
          </div>

          <button
            type="submit"
            class="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            로그인
          </button>
        </form>

        <div class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          계정이 없으신가요?
          <NuxtLink
            to="/signup"
            class="font-bold text-blue-600 dark:text-blue-400 hover:underline ml-1"
            >회원가입</NuxtLink
          >
        </div>
      </div>
    </div>

    <AppAlert
      :is-open="alertState.isOpen"
      :title="alertState.title"
      :message="alertState.message"
      :type="alertState.type"
      @close="closeAlert"
      @confirm="closeAlert"
    />
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { LogIn as LogInIcon } from "lucide-vue-next";
import PageHeader from "~/components/common/PageHeader.vue";
import AppAlert from "~/components/common/AppAlert.vue";

const username = ref("");
const password = ref("");
const router = useRouter();

const alertState = ref({
  isOpen: false,
  title: "",
  message: "",
  type: "info", // info, warning, danger, success
});

const closeAlert = () => {
  alertState.value.isOpen = false;
};

const showAlert = (title, message, type = "warning") => {
  alertState.value = {
    isOpen: true,
    title,
    message,
    type,
  };
};

const handleLogin = () => {
  if (!username.value) {
    showAlert("알림", "아이디를 입력해주세요.");
    return;
  }
  if (!password.value) {
    showAlert("알림", "비밀번호를 입력해주세요.");
    return;
  }

  // Mock login logic
  console.log("Logging in with", username.value, password.value);
  const isLoggedIn = useState("isLoggedIn");
  isLoggedIn.value = true;
  // Redirect to home
  router.push("/");
};
</script>
