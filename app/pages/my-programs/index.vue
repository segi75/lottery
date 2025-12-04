<template>
  <div class="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div
      class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
      <div>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          나의 신청프로그램
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          신청하신 강좌의 상태와 결제 정보를 확인하세요.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-3">
        <SemesterSelector v-model="selectedSemester" :semesters="semesters" />
        <StatusSelector
          v-model="selectedStatus"
          :statuses="availableStatuses"
        />
      </div>
    </div>

    <MyProgramList
      :applications="filteredApplications"
      @show-details="openPaymentModal"
      @show-waiting-info="handleWaitingInfo"
      @show-lottery-info="handleLotteryInfo"
      @cancel-application="handleCancelRequest"
    />

    <PaymentDetailsModal
      :is-open="isPaymentModalOpen"
      :payment-info="selectedPaymentInfo"
      @close="closePaymentModal"
      @refund="handleRefundRequest"
    />

    <AppAlert
      :is-open="alertState.isOpen"
      :title="alertState.title"
      :message="alertState.message"
      :type="alertState.type"
      :show-cancel="alertState.showCancel"
      @close="closeAlert"
      @confirm="handleAlertConfirm"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import MyProgramList from "~/components/my-program/MyProgramList.vue";
import SemesterSelector from "~/components/my-program/SemesterSelector.vue";
import StatusSelector from "~/components/my-program/StatusSelector.vue";
import PaymentDetailsModal from "~/components/my-program/PaymentDetailsModal.vue";
import AppAlert from "~/components/common/AppAlert.vue";

// Mock Data
const semesters = ["2024년 1학기", "2023년 4학기", "2023년 3학기"];
const selectedSemester = ref(semesters[0]);
const selectedStatus = ref("전체");

const allApplications = ref([
  {
    id: 1,
    title: "스마트폰 활용 기초",
    instructor: "김철수",
    time: "월/수 10:00 - 12:00",
    period: "2024.03.04 - 2024.06.21",
    category: "정보화교육",
    status: "당첨",
    paymentPeriod: "2024.02.20 ~ 2024.02.25",
    semester: "2024년 1학기",
  },
  {
    id: 2,
    title: "실버 요가 교실",
    instructor: "이영희",
    time: "화/목 14:00 - 15:00",
    period: "2024.03.05 - 2024.06.20",
    category: "건강증진",
    status: "수납완료",
    semester: "2024년 1학기",
    paymentInfo: {
      title: "실버 요가 교실",
      amount: "25,000",
      method: "카드결제",
      date: "2024.02.21 10:00",
      approvalNo: "98765432",
    },
  },
  {
    id: 3,
    title: "노래교실 A반",
    instructor: "박지성",
    time: "금 13:00 - 15:00",
    period: "2024.03.08 - 2024.06.21",
    category: "취미여가",
    status: "대기",
    waitingRank: 5,
    semester: "2024년 1학기",
  },
  {
    id: 4,
    title: "서예 교실",
    instructor: "최민수",
    time: "월 13:00 - 15:00",
    period: "2024.03.04 - 2024.06.17",
    category: "평생교육",
    status: "신청완료",
    semester: "2024년 1학기",
  },
  {
    id: 5,
    title: "2023년 강좌 예시",
    instructor: "홍길동",
    time: "월 10:00 - 12:00",
    period: "2023.09.01 - 2023.12.31",
    category: "과거강좌",
    status: "수납완료",
    semester: "2023년 4학기",
  },
  {
    id: 6,
    title: "취소된 강좌 예시",
    instructor: "김취소",
    time: "금 10:00 - 12:00",
    period: "2024.03.08 - 2024.06.21",
    category: "취미여가",
    status: "취소",
    semester: "2024년 1학기",
  },
]);

// Computed properties
const applicationsBySemester = computed(() => {
  return allApplications.value.filter(
    (app) => app.semester === selectedSemester.value
  );
});

const availableStatuses = computed(() => {
  const statuses = new Set(
    applicationsBySemester.value.map((app) => app.status)
  );
  // Define a standard order for statuses
  const order = ["신청완료", "당첨", "대기", "수납완료", "취소"];
  return order.filter((status) => statuses.has(status));
});

const filteredApplications = computed(() => {
  return applicationsBySemester.value.filter((app) => {
    return (
      selectedStatus.value === "전체" || app.status === selectedStatus.value
    );
  });
});

// Watchers
watch(selectedSemester, () => {
  selectedStatus.value = "전체";
});

// Modal Logic
const isPaymentModalOpen = ref(false);
const selectedPaymentInfo = ref({});

const openPaymentModal = (app) => {
  if (app.paymentInfo) {
    selectedPaymentInfo.value = app.paymentInfo;
    isPaymentModalOpen.value = true;
  }
};

const closePaymentModal = () => {
  isPaymentModalOpen.value = false;
};

// Alert Logic
const alertState = ref({
  isOpen: false,
  title: "",
  message: "",
  type: "info",
  showCancel: false,
  onConfirm: null,
});

const closeAlert = () => {
  alertState.value.isOpen = false;
};

const handleAlertConfirm = () => {
  if (alertState.value.onConfirm) {
    alertState.value.onConfirm();
  }
  closeAlert();
};

const showAlert = ({
  title,
  message,
  type = "info",
  showCancel = false,
  onConfirm = null,
}) => {
  alertState.value = {
    isOpen: true,
    title,
    message,
    type,
    showCancel,
    onConfirm,
  };
};

// Handlers
const handleRefundRequest = () => {
  showAlert({
    title: "환불 확인",
    message: "정말로 환불하시겠습니까? 환불 시 수강 취소 처리됩니다.",
    type: "danger",
    showCancel: true,
    onConfirm: () => {
      // Mock Refund Logic
      showAlert({
        title: "환불 완료",
        message: "환불 처리가 완료되었습니다.",
        type: "success",
      });
      closePaymentModal();
    },
  });
};

const handleCancelRequest = (app) => {
  showAlert({
    title: "수강 취소",
    message: "정말로 수강을 취소하시겠습니까? 취소 후에는 복구할 수 없습니다.",
    type: "danger",
    showCancel: true,
    onConfirm: () => {
      // Mock Cancel Logic
      app.status = "취소";
      showAlert({
        title: "취소 완료",
        message: "수강이 취소되었습니다.",
        type: "success",
      });
    },
  });
};

const handleWaitingInfo = (app) => {
  showAlert({
    title: "대기 정보",
    message: `현재 대기 순번은 ${app.waitingRank}번입니다. 결원 발생 시 순차적으로 연락드립니다.`,
    type: "info",
  });
};

const handleLotteryInfo = (app) => {
  showAlert({
    title: "추첨 안내",
    message:
      "추첨 예정일은 2024년 2월 19일입니다. 결과는 당첨 문자로 안내됩니다.",
    type: "info",
  });
};
</script>
