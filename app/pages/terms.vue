<template>
<div class="min-h-screen pb-12">
    <PageHeader title="이용약관">
      <template #icon>
        <FileTextIcon
          class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-300"
        />
      </template>
    </PageHeader>
    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="glass-card p-8 md:p-12">

        <div class="prose dark:prose-invert max-w-none space-y-6">
          <section>
            <h2
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              제1조 (목적)
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              이 약관은 서울지부엔컴노인복지관(이하 "복지관"이라 한다)이
              운영하는 홈페이지에서 제공하는 인터넷 관련 서비스(이하 "서비스"라
              한다)를 이용함에 있어 복지관과 이용자의 권리, 의무 및 책임사항을
              규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              제2조 (정의)
            </h2>
            <ul
              class="list-decimal pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-300"
            >
              <li>
                "복지관"이란 서울지부엔컴노인복지관이 재화 또는 용역을
                이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여
                재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며,
                아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
              </li>
              <li>
                "이용자"란 "복지관"에 접속하여 이 약관에 따라 "복지관"이
                제공하는 서비스를 받는 회원 및 비회원을 말합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              제3조 (약관의 명시와 개정)
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              "복지관"은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명,
              사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가
              알 수 있도록 홈페이지의 초기 서비스화면(전면)에 게시합니다.
            </p>
          </section>

          <section>
            <h2
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              제4조 (서비스의 제공 및 변경)
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              "복지관"은 다음과 같은 업무를 수행합니다.
            </p>
            <ul
              class="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-300"
            >
              <li>복지관 프로그램 안내 및 신청 접수</li>
              <li>복지관 소식 및 공지사항 제공</li>
              <li>기타 "복지관"이 정하는 업무</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileText as FileTextIcon } from "lucide-vue-next";
import PageHeader from "~/components/common/PageHeader.vue";

useHead({
  title: "이용약관 - 서울지부엔컴노인복지관",
});
</script>
