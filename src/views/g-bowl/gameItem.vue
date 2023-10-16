<template>
  <div class="bg-white py-4 sm:py-10 w-full flex flex-col items-center">
    <div class="max-w-screen-xl rounded-2xl px-4 md:px-20 w-full">
      <div class="text-black grid grid-cols-10 items-center mx-auto">
        <div class="col-span-4">
          <div
            class="flex flex-row items-center justify-start text-start gap-x-3 sm:gap-x-5 md:gap-x-8 my-0"
          >
            <img src="" alt="" class="w-10 sm:w-18 md:w-24" @error="onNoTeamProfileImage" />
            <div class="hidden sm:block">
              <p class="text-xs font-bold text-black">HOME</p>
              <h1 class="text-sm font-semibold sm:text-xl">TBD(#1)</h1>
            </div>
            <div class="block sm:hidden">
              <h1 class="text-sm sm:text-xl font-semibold">TBD(#1)</h1>
            </div>
            <div class="text-lg sm:text-5xl font-black"></div>
          </div>
        </div>
        <div class="col-span-2">
          <div
            class="flex-row items-center text-center justify-center gap-x-4 text-xs sm:text-sm text-black py-10 hidden sm:flex"
          >
            <div
              class="flex-col items-center text-center justify-center text-xs sm:text-sm text-black"
            >
              <div class="font-semibold text-xs sm:text-base md:text-lg">제 28회 KNFL 광개토볼</div>
              <div class="mt-2">2023-12-07 11:00 AM</div>
              <div>군위 종합 운동장</div>
            </div>
          </div>
          <div
            class="flex-row items-center text-center justify-center gap-x-1.5 text-black py-3 flex sm:hidden my-0"
          >
            <div class="text-xs font-medium">12/07 11:00 AM</div>
          </div>
        </div>
        <div class="col-span-4">
          <div
            class="flex flex-row items-center justify-end text-end gap-x-3 sm:gap-x-5 md:gap-x-8"
          >
            <div class="text-lg sm:text-5xl font-black"></div>
            <div class="block sm:hidden">
              <h1 class="text-sm sm:text-xl font-semibold">TBD(#2)</h1>
            </div>
            <div class="hidden sm:block">
              <p class="text-xs font-bold text-black">AWAY</p>
              <h1 class="text-sm sm:text-xl font-semibold">TBD(#2)</h1>
            </div>
            <img src="" alt="" class="w-10 sm:w-18 md:w-24" @error="onNoTeamProfileImage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const onNoTeamProfileImage = (event: Event) => {
  const imgElement = event.target as HTMLImageElement
  imgElement.src = 'https://cdn.playprove.one/default/logo.webp'
}
</script>
