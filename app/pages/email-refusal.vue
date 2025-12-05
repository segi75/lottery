<template>
  <div class="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="glass-card p-8 md:p-12">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          이메일무단수집거부
        </h1>

        <div class="prose dark:prose-invert max-w-none space-y-6">
          <div
            class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8"
          >
            <p class="text-red-700 dark:text-red-300 font-medium">
              본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그
              밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를
              위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
            </p>
          </div>

          <section>
            <h2
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조의 2
              (전자우편주소의 무단 수집행위 등 금지)
            </h2>
            <ul
              class="list-decimal pl-5 mt-2 space-y-3 text-gray-600 dark:text-gray-300"
            >
              <li>
                누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이
                인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는
                프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소를
                수집하여서는 아니된다.
              </li>
              <li>
                누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매,
                유통하여서는 아니된다.
              </li>
              <li>
                누구든지 제1항 및 제2항의 규정에 의하여 수집, 판매 및 유통이
                금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는
                아니된다.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "이메일무단수집거부 - 서울지부엔컴노인복지관",
});
</script>
