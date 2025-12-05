<template>
  <div
    class="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh]"
  >
    <div
      class="w-full max-w-4xl glass-card p-8 relative overflow-hidden animate-fade-in"
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
          class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white flex items-center justify-center gap-3"
        >
          <CreditCardIcon
            class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400"
          />
          수납 안내
        </h2>

        <div class="space-y-8">
          <!-- Payment Info Table Section -->
          <section>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <InfoIcon class="w-6 h-6 text-blue-500" />
              수강료 납부 안내
            </h3>
            <div
              class="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <PaymentInfoTable />
            </div>
          </section>

          <!-- Online Payment Guide -->
          <section>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <MonitorIcon class="w-6 h-6 text-purple-500" />
              온라인 납부 안내
            </h3>
            <div
              class="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <ol
                class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300"
              >
                <li>
                  <strong class="text-gray-900 dark:text-white">로그인:</strong>
                  복지관 홈페이지에 로그인합니다.
                </li>
                <li>
                  <strong class="text-gray-900 dark:text-white"
                    >나의 신청프로그램 이동:</strong
                  >
                  상단 메뉴 또는 마이페이지에서 [나의 신청프로그램] 메뉴로
                  이동합니다.
                </li>
                <li>
                  <strong class="text-gray-900 dark:text-white"
                    >상태 확인:</strong
                  >
                  신청한 강좌의 상태가 '당첨' 또는 '수납대기'인지 확인합니다.
                </li>
                <li>
                  <strong class="text-gray-900 dark:text-white"
                    >결제 진행:</strong
                  >
                  [결제하기] 버튼을 클릭하여 신용카드 또는 계좌이체로 수강료를
                  납부합니다.
                </li>
              </ol>
            </div>
          </section>

          <!-- On-site Payment Guide -->
          <section>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <MapPinIcon class="w-6 h-6 text-orange-500" />
              현장 납부 안내
            </h3>
            <div
              class="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <ol
                class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300"
              >
                <li>
                  <strong class="text-gray-900 dark:text-white"
                    >복지관 방문:</strong
                  >
                  안내된 장소(목: 4층 대강당, 금: 2층 소강당)로 방문합니다.
                </li>
                <li>
                  <strong class="text-gray-900 dark:text-white"
                    >본인 확인:</strong
                  >
                  회원증 또는 신분증을 제시하여 본인 확인을 진행합니다.
                </li>
                <li>
                  <strong class="text-gray-900 dark:text-white"
                    >결제 진행:</strong
                  >
                  안내데스크에서 현금 또는 카드로 수강료를 납부합니다.
                </li>
              </ol>
            </div>
          </section>

          <!-- Payment Methods -->
          <section>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <CheckCircleIcon class="w-6 h-6 text-green-500" />
              결제 방법
            </h3>
            <div
              class="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="font-bold text-blue-600 dark:text-blue-400"
                    >•</span
                  >
                  <span>
                    <strong class="text-gray-900 dark:text-white"
                      >신용카드 결제:</strong
                    >
                    모든 국내 신용카드 및 체크카드 사용 가능
                  </span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="font-bold text-blue-600 dark:text-blue-400"
                    >•</span
                  >
                  <span>
                    <strong class="text-gray-900 dark:text-white"
                      >계좌이체:</strong
                    >
                    실시간 계좌이체 및 가상계좌 입금 가능 (입금 기한 내 미입금
                    시 자동 취소)
                  </span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="font-bold text-blue-600 dark:text-blue-400"
                    >•</span
                  >
                  <span>
                    <strong class="text-gray-900 dark:text-white"
                      >현장 결제:</strong
                    >
                    복지관 안내데스크 방문 후 카드 또는 현금 결제 (평일 09:00 ~
                    18:00)
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <!-- Payment Period -->
          <section>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <ClockIcon class="w-6 h-6 text-blue-500" />
              수납 기간
            </h3>
            <div
              class="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                당첨되신 프로그램의 수강료는 지정된 기간 내에 납부하셔야 수강
                신청이 완료됩니다. 기간 내 미납 시 당첨이 자동 취소되며,
                대기자에게 기회가 넘어갑니다.
              </p>
              <div
                class="flex flex-col sm:flex-row gap-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg"
              >
                <div class="flex-1">
                  <span
                    class="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
                    >정기 접수분</span
                  >
                  <span
                    class="text-lg font-bold text-blue-600 dark:text-blue-400"
                    >추첨 발표일로부터 3일간</span
                  >
                </div>
                <div class="flex-1">
                  <span
                    class="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1"
                    >추가 접수분</span
                  >
                  <span
                    class="text-lg font-bold text-blue-600 dark:text-blue-400"
                    >신청 당일 24:00까지</span
                  >
                </div>
              </div>
            </div>
          </section>

          <!-- Refund Policy -->
          <section>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
            >
              <AlertCircleIcon class="w-6 h-6 text-red-500" />
              환불 규정
            </h3>
            <div
              class="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 overflow-x-auto"
            >
              <table
                class="w-full text-sm text-left text-gray-700 dark:text-gray-300"
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3 rounded-tl-lg">
                      취소 시점
                    </th>
                    <th scope="col" class="px-6 py-3 rounded-tr-lg">
                      환불 금액
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="bg-white dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td class="px-6 py-4 font-medium">개강일 전일까지</td>
                    <td
                      class="px-6 py-4 text-blue-600 dark:text-blue-400 font-bold"
                    >
                      전액 환불
                    </td>
                  </tr>
                  <tr
                    class="bg-white dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td class="px-6 py-4 font-medium">
                      개강일 ~ 총 수업일수 1/3 경과 전
                    </td>
                    <td class="px-6 py-4">수강료의 2/3 해당액 환불</td>
                  </tr>
                  <tr
                    class="bg-white dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td class="px-6 py-4 font-medium">
                      총 수업일수 1/3 경과 후 ~ 1/2 경과 전
                    </td>
                    <td class="px-6 py-4">수강료의 1/2 해당액 환불</td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <td class="px-6 py-4 font-medium rounded-bl-lg">
                      총 수업일수 1/2 경과 후
                    </td>
                    <td
                      class="px-6 py-4 text-red-500 dark:text-red-400 font-bold rounded-br-lg"
                    >
                      환불 불가
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="mt-4 text-xs text-gray-500 dark:text-gray-400">
                * 환불 신청은 [나의 신청프로그램] 메뉴에서 가능하며, 처리
                완료까지 영업일 기준 3~5일이 소요될 수 있습니다.
              </p>
            </div>
          </section>
        </div>

        <!-- Action Button -->
        <div class="mt-12 text-center">
          <NuxtLink
            to="/my-programs"
            class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-colors"
          >
            나의 신청현황 확인하기
            <ArrowRightIcon class="ml-2 w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CreditCard as CreditCardIcon,
  CheckCircle as CheckCircleIcon,
  Clock as ClockIcon,
  AlertCircle as AlertCircleIcon,
  ArrowRight as ArrowRightIcon,
  Info as InfoIcon,
  Monitor as MonitorIcon,
  MapPin as MapPinIcon,
} from "lucide-vue-next";
import PaymentInfoTable from "~/components/payment/PaymentInfoTable.vue";
</script>
