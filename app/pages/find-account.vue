<template>
  <div
    class="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]"
  >
    <div
      class="w-full max-w-md glass-card p-8 relative overflow-hidden animate-fade-in"
    >
      <!-- Background effects -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-50"
      ></div>
      <div
        class="absolute -right-10 -top-10 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl opacity-50 animate-pulse"
      ></div>
      <div
        class="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl opacity-50 animate-pulse"
        style="animation-delay: 1s"
      ></div>

      <div class="relative z-10">
        <h2
          class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white flex items-center justify-center gap-3"
        >
          <SearchIcon
            class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400"
          />
          계정 찾기
        </h2>

        <!-- Tabs -->
        <div class="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <button
            @click="activeTab = 'id'"
            class="flex-1 pb-4 text-sm font-medium transition-colors relative"
            :class="
              activeTab === 'id'
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            "
          >
            아이디 찾기
            <span
              v-if="activeTab === 'id'"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
            ></span>
          </button>
          <button
            @click="activeTab = 'password'"
            class="flex-1 pb-4 text-sm font-medium transition-colors relative"
            :class="
              activeTab === 'password'
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            "
          >
            비밀번호 찾기
            <span
              v-if="activeTab === 'password'"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
            ></span>
          </button>
        </div>

        <!-- Find ID Form -->
        <form
          v-if="activeTab === 'id'"
          @submit.prevent="handleFindId"
          class="space-y-6"
        >
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >이름</label
            >
            <input
              id="name"
              v-model="findIdForm.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >이메일</label
            >
            <input
              id="email"
              v-model="findIdForm.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="가입 시 등록한 이메일을 입력하세요"
            />
          </div>
          <button
            type="submit"
            class="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            아이디 찾기
          </button>
        </form>

        <!-- Find Password Form -->
        <form v-else @submit.prevent="handleFindPassword" class="space-y-6">
          <div>
            <label
              for="pw-id"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >아이디</label
            >
            <input
              id="pw-id"
              v-model="findPwForm.id"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div>
            <label
              for="pw-name"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >이름</label
            >
            <input
              id="pw-name"
              v-model="findPwForm.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div>
            <label
              for="pw-email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >이메일</label
            >
            <input
              id="pw-email"
              v-model="findPwForm.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="가입 시 등록한 이메일을 입력하세요"
            />
          </div>
          <button
            type="submit"
            class="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            비밀번호 찾기
          </button>
        </form>

        <div class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <NuxtLink
            to="/login"
            class="font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >로그인으로 돌아가기</NuxtLink
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
</template>

<script setup>
import { ref } from "vue";
import { Search as SearchIcon } from "lucide-vue-next";
import AppAlert from "~/components/common/AppAlert.vue";

const activeTab = ref("id");

const findIdForm = ref({
  name: "",
  email: "",
});

const findPwForm = ref({
  id: "",
  name: "",
  email: "",
});

const alertState = ref({
  isOpen: false,
  title: "",
  message: "",
  type: "info",
});

const closeAlert = () => {
  alertState.value.isOpen = false;
};

const showAlert = (title, message, type = "info") => {
  alertState.value = {
    isOpen: true,
    title,
    message,
    type,
  };
};

const handleFindId = () => {
  // Mock Logic
  showAlert("아이디 찾기 성공", `회원님의 아이디는 user*** 입니다.`, "success");
};

const handleFindPassword = () => {
  // Mock Logic
  showAlert(
    "임시 비밀번호 발송",
    `${findPwForm.value.email}로 임시 비밀번호를 발송했습니다.`,
    "success"
  );
};
</script>
