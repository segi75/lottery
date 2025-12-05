<template>
  <div class="overflow-x-auto">
    <table
      class="w-full text-center border-collapse border border-gray-300 bg-white text-xs sm:text-sm"
    >
      <thead>
        <!-- Header Row 1: Floors -->
        <tr class="bg-yellow-100 text-gray-800 font-bold">
          <th class="border border-gray-300 p-2 w-12 bg-yellow-200">비고</th>
          <th class="border border-gray-300 p-2 w-20 bg-yellow-200">층</th>
          <template v-for="floor in visibleFloors" :key="floor.name">
            <th
              :colspan="floor.classrooms.length"
              class="border border-gray-300 p-2 bg-yellow-100"
            >
              {{ floor.name }}
            </th>
          </template>
        </tr>
        <!-- Header Row 2: Classrooms -->
        <tr class="bg-yellow-50 text-gray-800 font-bold">
          <th class="border border-gray-300 p-2 bg-yellow-200">요일</th>
          <th class="border border-gray-300 p-2 bg-yellow-200">시간</th>
          <template v-for="floor in visibleFloors" :key="floor.name">
            <template v-for="room in floor.classrooms" :key="room">
              <th class="border border-gray-300 p-2 min-w-[80px]">
                {{ room }}
              </th>
            </template>
          </template>
        </tr>
      </thead>
      <tbody>
        <template v-for="(day, dayIndex) in visibleDays" :key="day">
          <tr
            v-for="(time, timeIndex) in timeSlots"
            :key="`${day}-${time}`"
            class="hover:bg-gray-50"
          >
            <!-- Day Column (Rowspan) -->
            <td
              v-if="timeIndex === 0"
              :rowspan="timeSlots.length"
              class="border border-gray-300 p-2 font-bold bg-white text-lg"
            >
              {{ day }}
            </td>
            <!-- Time Column -->
            <td class="border border-gray-300 p-2 text-xs text-gray-600">
              {{ time }}
            </td>
            <!-- Classroom Cells -->
            <template v-for="floor in visibleFloors" :key="floor.name">
              <template v-for="room in floor.classrooms" :key="room">
                <!-- Only render if not hidden by rowspan -->
                <td
                  v-if="!getCellMeta(day, time, room).hidden"
                  :rowspan="getCellMeta(day, time, room).rowspan"
                  class="border border-gray-300 p-0 align-middle relative group"
                  :class="getCellColorClass(day, time, room)"
                >
                  <div
                    v-if="getScheduleContent(day, time, room)"
                    class="w-full h-full flex flex-col items-center justify-center p-1 min-h-[48px]"
                  >
                    <span class="font-medium break-keep leading-tight">
                      {{ getScheduleContent(day, time, room).title }}
                    </span>
                    <span
                      v-if="getScheduleContent(day, time, room).sub"
                      class="text-[10px] mt-0.5 opacity-75"
                    >
                      {{ getScheduleContent(day, time, room).sub }}
                    </span>
                  </div>
                </td>
              </template>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  selectedClassroom: {
    type: String,
    default: "all",
  },
  selectedDay: {
    type: String,
    default: "all",
  },
});

const days = ["월", "화", "수", "목", "금"];
const timeSlots = [
  "10:00~10:50",
  "11:00~11:50",
  "13:00~13:50",
  "14:00~14:50",
  "15:00~15:50",
  "16:00~16:50",
];

const allFloors = [
  {
    name: "2층",
    classrooms: ["예술교실", "소강당", "음악실"],
  },
  {
    name: "3층",
    classrooms: ["바둑장기실", "교양교실", "스마트교실"],
  },
  {
    name: "4층",
    classrooms: ["탁구장", "당구장", "스크린파크골프장", "대강당"],
  },
];

const visibleFloors = computed(() => {
  if (props.selectedClassroom === "all") {
    return allFloors;
  }
  for (const floor of allFloors) {
    if (floor.classrooms.includes(props.selectedClassroom)) {
      return [
        {
          name: floor.name,
          classrooms: [props.selectedClassroom],
        },
      ];
    }
  }
  return allFloors;
});

const visibleDays = computed(() => {
  if (props.selectedDay === "all") {
    return days;
  }
  return [props.selectedDay];
});

// Mock Data
const scheduleData = {
  월: {
    "10:00~10:50": {
      예술교실: { title: "한글서예" },
      소강당: { title: "근력요가 초급", color: "blue" },
      음악실: { title: "통기타", color: "green" },
      교양교실: { title: "기초영어", color: "pink" },
      스마트교실: { title: "컴퓨터 초급", color: "green" },
      당구장: { title: "당구초급", color: "pink" },
      대강당: { title: "라인댄스 중급", color: "green" },
    },
    "11:00~11:50": {
      예술교실: { title: "한글서예" },
      소강당: { title: "밴드체조", sub: "(11:00~11:40)", color: "orange" },
      음악실: { title: "통기타", color: "green" },
      교양교실: { title: "기초영어", color: "pink" },
      스마트교실: { title: "컴퓨터 초급", color: "green" },
      당구장: { title: "당구초급", color: "pink" },
      대강당: { title: "실버방송댄스", color: "gray" },
    },
    "13:00~13:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "자율이용", color: "gray" },
      바둑장기실: { title: "자율이용", color: "gray" },
      교양교실: { title: "일드영화반", color: "pink" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "당구고급", color: "pink" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "사교댄스 중급", color: "green" },
    },
    "14:00~14:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "자율이용", color: "gray" },
      바둑장기실: { title: "자율이용", color: "gray" },
      교양교실: { title: "일드영화반", color: "pink" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "당구고급", color: "pink" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "라인댄스 초급", color: "green" },
    },
    "15:00~15:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "자율이용", color: "gray" },
      바둑장기실: { title: "자율이용", color: "gray" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "사교댄스 초급", color: "green" },
    },
    "16:00~16:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "근력요가 중급", color: "blue" },
      바둑장기실: { title: "자율이용", color: "gray" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
    },
  },
  화: {
    "10:00~10:50": {
      예술교실: { title: "한문서예", color: "yellow" },
      소강당: { title: "균형요가A", color: "blue" },
      음악실: { title: "하모니카 중급", color: "green" },
      교양교실: { title: "스페인어", color: "pink" },
      스마트교실: { title: "컴퓨터 중급", color: "green" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "당구중급", color: "pink" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "노래교실", color: "skyblue" },
    },
    "11:00~11:50": {
      예술교실: { title: "한문서예", color: "yellow" },
      소강당: { title: "코어운동", sub: "(11:00~11:40)", color: "orange" },
      음악실: { title: "하모니카 중급", color: "green" },
      교양교실: { title: "스페인어", color: "pink" },
      스마트교실: { title: "컴퓨터 중급", color: "green" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "당구중급", color: "pink" },
      스크린파크골프장: {
        title: "특강프로그램",
        sub: "[왕초보입문특강]",
        color: "teal",
      },
      대강당: { title: "노래교실", color: "skyblue" },
    },
    "13:00~13:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "균형요가B", color: "blue" },
      바둑장기실: { title: "자율이용", color: "gray" },
      교양교실: { title: "미드영화반", color: "pink" },
      스마트교실: { title: "컴퓨터 문서작성", color: "green" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "줌바댄스", color: "green" },
    },
    "14:00~14:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "자율이용", color: "gray" },
      바둑장기실: { title: "자율이용", color: "gray" },
      교양교실: { title: "미드영화반", color: "pink" },
      스마트교실: { title: "컴퓨터 문서작성", color: "green" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "댄스스포츠", color: "green" },
    },
    "15:00~15:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "자율이용", color: "gray" },
      바둑장기실: { title: "자율이용", color: "gray" },
      탁구장: { title: "탁구초급", color: "pink" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "에어로빅", color: "blue" },
    },
    "16:00~16:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "자율이용", color: "gray" },
      바둑장기실: { title: "자율이용", color: "gray" },
      탁구장: { title: "탁구초급", color: "pink" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "에어로빅", color: "blue" },
    },
  },
  수: {
    "10:00~10:50": {
      예술교실: { title: "*사진반", color: "yellow" },
      소강당: { title: "근력요가 초급", color: "blue" },
      음악실: { title: "하모니카 초급", color: "green" },
      교양교실: { title: "스마트폰 초급", color: "green" },
      대강당: { title: "라인댄스 중급", color: "green" },
    },
    "11:00~11:50": {
      예술교실: { title: "*사진반", color: "yellow" },
      소강당: { title: "소도구 매트필라테스", color: "blue" },
      음악실: { title: "하모니카 초급", color: "green" },
      교양교실: { title: "스마트폰 초급", color: "green" },
      대강당: { title: "실버방송댄스", color: "gray" },
    },
    "13:00~13:50": {
      예술교실: { title: "캘리그라피", color: "yellow" },
      소강당: { title: "소도구 매트필라테스", color: "blue" },
      바둑장기실: { title: "자율이용", color: "gray" },
      교양교실: { title: "스마트폰 중급", color: "green" },
      스마트교실: { title: "챗 GPT 중급", color: "green" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "사교댄스 중급", color: "green" },
    },
    "14:00~14:50": {
      예술교실: { title: "캘리그라피", color: "yellow" },
      바둑장기실: { title: "자율이용", color: "gray" },
      교양교실: { title: "스마트폰 중급", color: "green" },
      스마트교실: { title: "챗 GPT 중급", color: "green" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "라인댄스 초급", color: "green" },
    },
    "15:00~15:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "근력요가 중급", color: "blue" },
      바둑장기실: { title: "자율이용", color: "gray" },
      대강당: { title: "사교댄스 초급", color: "green" },
    },
    "16:00~16:50": {
      예술교실: { title: "자율이용", color: "gray" },
      소강당: { title: "근력요가 중급", color: "blue" },
    },
  },
  목: {
    "10:00~10:50": {
      예술교실: { title: "캐리커쳐", color: "yellow" },
      소강당: { title: "균형요가A", color: "blue" },
      음악실: { title: "오카리나", color: "green" },
      교양교실: { title: "기초일본어", color: "pink" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "합창", color: "skyblue" },
    },
    "11:00~11:50": {
      예술교실: { title: "캐리커쳐", color: "yellow" },
      소강당: { title: "덤벨체조", sub: "(11:00~11:40)", color: "orange" },
      음악실: { title: "오카리나", color: "green" },
      교양교실: { title: "기초일본어", color: "pink" },
      탁구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: {
        title: "특강프로그램",
        sub: "[왕초보입문특강]",
        color: "teal",
      },
      대강당: { title: "합창", color: "skyblue" },
    },
    "13:00~13:50": {
      예술교실: { title: "*수채화", color: "yellow" },
      소강당: { title: "균형요가B", color: "blue" },
      바둑장기실: { title: "자율이용", color: "gray" },
      교양교실: { title: "중국어 영화반", color: "pink" },
      스마트교실: { title: "유튜브 제작반", color: "green" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "자율이용", color: "gray" },
      대강당: { title: "줌바댄스", color: "green" },
    },
    "14:00~14:50": {
      예술교실: { title: "*수채화", color: "yellow" },
      바둑장기실: { title: "자율이용", color: "gray" },
      교양교실: { title: "중국어 영화반", color: "pink" },
      스마트교실: { title: "유튜브 제작반", color: "green" },
      탁구장: { title: "자율이용", color: "gray" },
      당구장: { title: "자율이용", color: "gray" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "댄스스포츠", color: "green" },
    },
    "15:00~15:50": {
      예술교실: { title: "자율이용", color: "gray" },
      탁구장: { title: "탁구고급", color: "pink" },
      스크린파크골프장: { title: "자율이용", color: "gray" },
      대강당: { title: "에어로빅", color: "blue" },
    },
    "16:00~16:50": {
      예술교실: { title: "자율이용", color: "gray" },
      탁구장: { title: "탁구고급", color: "pink" },
      대강당: { title: "에어로빅", color: "blue" },
    },
  },
  금: {
    "10:00~10:50": {
      예술교실: { title: "보테니컬 아트 중급", color: "yellow" },
      교양교실: { title: "기초중국어", color: "pink" },
      스마트교실: { title: "챗 GPT 초급", color: "green" },
      스크린파크골프장: {
        title: "특강프로그램",
        sub: "[왕초보입문특강]",
        color: "teal",
      },
    },
    "11:00~11:50": {
      예술교실: { title: "보테니컬 아트 중급", color: "yellow" },
      교양교실: { title: "기초중국어", color: "pink" },
      스마트교실: { title: "챗 GPT 초급", color: "green" },
    },
  },
};

const getScheduleContent = (day, time, room) => {
  return scheduleData[day]?.[time]?.[room] || null;
};

// Compute Rowspan Metadata
const scheduleMetadata = computed(() => {
  const meta = {};

  // Initialize map
  days.forEach((day) => {
    meta[day] = {};
    timeSlots.forEach((time) => {
      meta[day][time] = {};
    });
  });

  const allRooms = allFloors.flatMap((f) => f.classrooms);

  days.forEach((day) => {
    allRooms.forEach((room) => {
      for (let i = 0; i < timeSlots.length; i++) {
        const time = timeSlots[i];

        // Skip if already processed (as part of a previous span)
        if (meta[day][time][room]) continue;

        const currentContent = getScheduleContent(day, time, room);

        if (!currentContent) {
          meta[day][time][room] = { rowspan: 1, hidden: false };
          continue;
        }

        let span = 1;
        // Look ahead
        for (let j = i + 1; j < timeSlots.length; j++) {
          const nextTime = timeSlots[j];
          const nextContent = getScheduleContent(day, nextTime, room);

          if (
            nextContent &&
            nextContent.title === currentContent.title &&
            nextContent.color === currentContent.color &&
            nextContent.sub === currentContent.sub
          ) {
            span++;
            // Mark next cell as hidden
            meta[day][nextTime][room] = { rowspan: 0, hidden: true };
          } else {
            break;
          }
        }
        meta[day][time][room] = { rowspan: span, hidden: false };
      }
    });
  });

  return meta;
});

const getCellMeta = (day, time, room) => {
  return (
    scheduleMetadata.value[day]?.[time]?.[room] || { rowspan: 1, hidden: false }
  );
};

const getCellColorClass = (day, time, room) => {
  const content = getScheduleContent(day, time, room);
  if (!content) return "bg-white";

  const colors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    pink: "bg-pink-100 text-pink-800",
    orange: "bg-orange-100 text-orange-800",
    yellow: "bg-yellow-100 text-yellow-800",
    gray: "bg-gray-100 text-gray-600",
    skyblue: "bg-sky-100 text-sky-800",
    teal: "bg-teal-100 text-teal-800",
  };

  return colors[content.color] || "bg-gray-50 text-gray-800";
};
</script>
