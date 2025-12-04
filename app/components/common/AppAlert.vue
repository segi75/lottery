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
              class="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-bold leading-6 text-gray-900 dark:text-white mb-2"
              >
                {{ title }}
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ message }}
                </p>
              </div>

              <div class="mt-6 flex gap-3 justify-end">
                <button
                  v-if="showCancel"
                  type="button"
                  class="inline-flex justify-center rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 transition-colors"
                  @click="closeModal"
                >
                  취소
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors shadow-sm"
                  :class="confirmButtonClass"
                  @click="confirm"
                >
                  확인
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
import { computed } from "vue";
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
  title: {
    type: String,
    default: "알림",
  },
  message: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "info", // info, warning, danger, success
  },
  showCancel: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "confirm"]);

const closeModal = () => {
  emit("close");
};

const confirm = () => {
  emit("confirm");
};

const confirmButtonClass = computed(() => {
  switch (props.type) {
    case "danger":
      return "bg-red-600 hover:bg-red-700 focus-visible:ring-red-500";
    case "success":
      return "bg-green-600 hover:bg-green-700 focus-visible:ring-green-500";
    case "warning":
      return "bg-yellow-600 hover:bg-yellow-700 focus-visible:ring-yellow-500";
    default:
      return "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500";
  }
});
</script>
