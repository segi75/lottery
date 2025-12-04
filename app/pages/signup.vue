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
          <UserPlusIcon
            class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400"
          />
          회원가입
        </h2>

        <form @submit.prevent="handleSignup" class="space-y-6">
          <!-- Name -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >이름</label
            >
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="이름을 입력하세요"
            />
          </div>

          <!-- Gender -->
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >성별</label
            >
            <div class="flex gap-4">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.gender"
                  value="male"
                  class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                />
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >남성</span
                >
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  v-model="form.gender"
                  value="female"
                  class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                />
                <span class="text-sm text-gray-700 dark:text-gray-300"
                  >여성</span
                >
              </label>
            </div>
          </div>

          <!-- User Number -->
          <div>
            <label
              for="userNo"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >이용자번호</label
            >
            <div class="flex gap-2">
              <input
                id="userNo"
                v-model="form.userNo"
                type="text"
                class="flex-1 px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="이용자번호를 입력하세요"
              />
              <button
                type="button"
                @click="handleVerifyUser"
                class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
              >
                인증하기
              </button>
            </div>
          </div>

          <hr class="border-gray-200 dark:border-gray-700 my-6" />

          <!-- Mobile Phone -->
          <div>
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >휴대전화번호</label
            >
            <div class="flex gap-2">
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="flex-1 px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="010-0000-0000"
              />
              <button
                type="button"
                @click="handleSendAuthCode"
                :disabled="isAuthCodeSent"
                class="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isAuthCodeSent ? "재전송" : "인증번호 전송" }}
              </button>
            </div>
          </div>

          <!-- Auth Code -->
          <div v-if="isAuthCodeSent">
            <label
              for="authCode"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >인증번호</label
            >
            <div class="flex gap-2">
              <input
                id="authCode"
                v-model="form.authCode"
                type="text"
                class="flex-1 px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="인증번호 6자리"
                :disabled="isPhoneVerified"
              />
              <button
                type="button"
                @click="handleVerifyAuthCode"
                :disabled="isPhoneVerified"
                class="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isPhoneVerified ? "인증완료" : "인증확인" }}
              </button>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >이메일</label
            >
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <!-- ID -->
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >아이디</label
            >
            <input
              id="username"
              v-model="form.username"
              type="text"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="아이디를 입력하세요"
            />
          </div>

          <!-- Password -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >비밀번호</label
            >
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <!-- Password Confirm -->
          <div>
            <label
              for="passwordConfirm"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >비밀번호 확인</label
            >
            <input
              id="passwordConfirm"
              v-model="form.passwordConfirm"
              type="password"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>

          <button
            type="submit"
            class="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            회원가입
          </button>
        </form>

        <div class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          이미 계정이 있으신가요?
          <NuxtLink
            to="/login"
            class="font-bold text-blue-600 dark:text-blue-400 hover:underline ml-1"
            >로그인</NuxtLink
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
      @confirm="handleAlertConfirm"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { UserPlus as UserPlusIcon } from "lucide-vue-next";
import AppAlert from "~/components/common/AppAlert.vue";

const router = useRouter();

const form = ref({
  name: "",
  gender: "male",
  userNo: "",
  phone: "",
  authCode: "",
  email: "",
  username: "",
  password: "",
  passwordConfirm: "",
});

const isUserVerified = ref(false);
const isAuthCodeSent = ref(false);
const isPhoneVerified = ref(false);

const alertState = ref({
  isOpen: false,
  title: "",
  message: "",
  type: "info",
  onConfirm: null,
});

const closeAlert = () => {
  alertState.value.isOpen = false;
};

const showAlert = (title, message, type = "info", onConfirm = null) => {
  alertState.value = {
    isOpen: true,
    title,
    message,
    type,
    onConfirm,
  };
};

const handleVerifyUser = () => {
  if (!form.value.name) {
    showAlert("알림", "이름을 입력해주세요.", "warning");
    return;
  }
  if (!form.value.userNo) {
    showAlert("알림", "이용자번호를 입력해주세요.", "warning");
    return;
  }
  // Mock Verification Logic
  isUserVerified.value = true;
  showAlert(
    "인증 성공",
    `[${form.value.name}]님 (${
      form.value.gender === "male" ? "남성" : "여성"
    }) 인증되었습니다.`,
    "success"
  );
};

const handleSendAuthCode = () => {
  if (!form.value.phone) {
    showAlert("알림", "휴대전화번호를 입력해주세요.", "warning");
    return;
  }
  // Mock Send Auth Code Logic
  isAuthCodeSent.value = true;
  showAlert(
    "인증번호 전송",
    "인증번호가 전송되었습니다. (모의: 123456)",
    "success"
  );
};

const handleVerifyAuthCode = () => {
  if (!form.value.authCode) {
    showAlert("알림", "인증번호를 입력해주세요.", "warning");
    return;
  }
  // Mock Verify Logic
  if (form.value.authCode === "123456") {
    isPhoneVerified.value = true;
    showAlert("인증 완료", "휴대전화 인증이 완료되었습니다.", "success");
  } else {
    showAlert("인증 실패", "인증번호가 올바르지 않습니다.", "danger");
  }
};

const handleSignup = () => {
  // Field Validations
  if (!form.value.name) {
    showAlert("알림", "이름을 입력해주세요.", "warning");
    return;
  }
  if (!form.value.userNo) {
    showAlert("알림", "이용자번호를 입력해주세요.", "warning");
    return;
  }
  if (!form.value.phone) {
    showAlert("알림", "휴대전화번호를 입력해주세요.", "warning");
    return;
  }
  if (!form.value.email) {
    showAlert("알림", "이메일을 입력해주세요.", "warning");
    return;
  }
  if (!form.value.username) {
    showAlert("알림", "아이디를 입력해주세요.", "warning");
    return;
  }
  if (!form.value.password) {
    showAlert("알림", "비밀번호를 입력해주세요.", "warning");
    return;
  }
  if (!form.value.passwordConfirm) {
    showAlert("알림", "비밀번호 확인을 입력해주세요.", "warning");
    return;
  }

  // Verification Checks
  if (!isUserVerified.value) {
    showAlert(
      "알림",
      "본인 확인(이름, 성별, 이용자번호)을 완료해주세요.",
      "warning"
    );
    return;
  }
  if (!isPhoneVerified.value) {
    showAlert("알림", "휴대전화 인증을 완료해주세요.", "warning");
    return;
  }

  // Password Match Check
  if (form.value.password !== form.value.passwordConfirm) {
    showAlert("오류", "비밀번호가 일치하지 않습니다.", "danger");
    return;
  }

  // Mock Signup Logic
  showAlert(
    "회원가입 성공",
    "회원가입이 완료되었습니다. 로그인해주세요.",
    "success",
    () => {
      router.push("/login");
    }
  );
};

const handleAlertConfirm = () => {
  if (alertState.value.onConfirm) {
    alertState.value.onConfirm();
  }
  closeAlert();
};
</script>
