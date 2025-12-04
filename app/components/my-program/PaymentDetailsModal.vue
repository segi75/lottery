<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-bold leading-6 text-gray-900 dark:text-white mb-4"
              >
                결제 상세 정보
              </DialogTitle>

              <div class="mt-2 space-y-4">
                <div
                  class="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg space-y-2"
                >
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400">강좌명</span>
                    <span
                      class="font-medium text-gray-900 dark:text-white text-right"
                      >{{ paymentInfo.title }}</span
                    >
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400"
                      >결제금액</span
                    >
                    <span class="font-bold text-gray-900 dark:text-white"
                      >{{ paymentInfo.amount }}원</span
                    >
                  </div>
                </div>

                <div class="space-y-2">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400"
                      >결제방법</span
                    >
                    <span class="text-gray-900 dark:text-white">{{
                      paymentInfo.method
                    }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400"
                      >결제일시</span
                    >
                    <span class="text-gray-900 dark:text-white">{{
                      paymentInfo.date
                    }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400"
                      >승인번호</span
                    >
                    <span class="text-gray-900 dark:text-white">{{
                      paymentInfo.approvalNo
                    }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-6 flex gap-3">
                <button
                  type="button"
                  class="flex-1 justify-center rounded-lg border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-colors"
                  @click="handleRefund"
                >
                  환불하기
                </button>
                <button
                  type="button"
                  class="flex-1 justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 transition-colors"
                  @click="closeModal"
                >
                  닫기
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  paymentInfo: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["close", "refund"]);

const closeModal = () => {
  emit("close");
};

const handleRefund = () => {
  emit("refund");
};
</script>
