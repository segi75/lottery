<template>
  <div
    class="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]"
  >
    <div
      class="w-full max-w-2xl glass-card p-8 relative overflow-hidden animate-fade-in"
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
          <SettingsIcon
            class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400"
          />
          회원정보 수정
        </h2>

        <form @submit.prevent="handleUpdate" class="space-y-6">
          <!-- Basic Info Section -->
          <div class="space-y-4">
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2"
            >
              기본 정보
            </h3>

            <!-- Name (Read-only) -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                이름
              </label>
              <input
                type="text"
                v-model="form.name"
                disabled
                class="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              />
            </div>

            <!-- User Number (Read-only) -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                회원번호
              </label>
              <input
                type="text"
                v-model="form.userNo"
                disabled
                class="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>

          <!-- Contact Info Section -->
          <div class="space-y-4 mt-8">
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2"
            >
              연락처 정보
            </h3>

            <!-- Phone -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                휴대전화
              </label>
              <div class="flex gap-2">
                <input
                  type="tel"
                  v-model="form.phone"
                  class="flex-1 px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                />
                <button
                  type="button"
                  class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  변경인증
                </button>
              </div>
            </div>

            <!-- Email -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                이메일
              </label>
              <input
                type="email"
                v-model="form.email"
                class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>

            <!-- Address -->
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                주소
              </label>
              <div class="flex gap-2 mb-2">
                <input
                  type="text"
                  v-model="form.zipcode"
                  placeholder="우편번호"
                  readonly
                  class="w-32 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                />
                <button
                  type="button"
                  class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  주소검색
                </button>
              </div>
              <input
                type="text"
                v-model="form.address"
                placeholder="기본주소"
                readonly
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white mb-2"
              />
              <input
                type="text"
                v-model="form.addressDetail"
                placeholder="상세주소"
                class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <!-- Password Change Section -->
          <div class="space-y-4 mt-8">
            <h3
              class="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2"
            >
              비밀번호 변경
            </h3>

            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                현재 비밀번호
              </label>
              <input
                type="password"
                v-model="form.currentPassword"
                class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                새 비밀번호
              </label>
              <input
                type="password"
                v-model="form.newPassword"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                새 비밀번호 확인
              </label>
              <input
                type="password"
                v-model="form.confirmPassword"
                class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-4 pt-6">
            <button
              type="button"
              @click="$router.back()"
              class="flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              class="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              저장하기
            </button>
          </div>
        </form>
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
import { Settings as SettingsIcon } from "lucide-vue-next";
import AppAlert from "~/components/common/AppAlert.vue";

const form = ref({
  name: "홍길동",
  userNo: "2023123456",
  phone: "010-1234-5678",
  email: "hong@example.com",
  zipcode: "12345",
  address: "서울시 강남구 테헤란로 123",
  addressDetail: "101동 1204호",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
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

const handleUpdate = () => {
  // Mock Validation
  if (
    form.value.newPassword &&
    form.value.newPassword !== form.value.confirmPassword
  ) {
    showAlert("비밀번호 불일치", "새 비밀번호가 일치하지 않습니다.", "error");
    return;
  }

  // Mock API Call
  setTimeout(() => {
    showAlert(
      "정보 수정 완료",
      "회원정보가 성공적으로 수정되었습니다.",
      "success"
    );
  }, 500);
};
</script>
