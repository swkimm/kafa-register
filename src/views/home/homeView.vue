<template>
  <div class="flex flex-col w-full h-full">
    <div
      id="landing"
      class="bg-cover bg-center w-full text-black py-20 lg:py-24 flex justify-center items-center"
    >
      <div class="px-4 sm:px-8">
        <div class="max-w-screen-2xl mx-auto px-6">
          <div class="grid">
            <div class="grid grid-cols-12">
              <div class="col-span-12 md:col-span-10 lg:col-span-8 xl:col-span-6">
                <h3 class="text-2xl text-teal-400 mb-1 font-bold">
                  2023 서울경기강원 대학 추계 미식축구 선수권전
                </h3>
                <h2
                  class="text-4xl md:text-5xl font-display font-extrabold mb-8 font-mono text-white"
                >
                  From resource to trust
                </h2>
                <p class="font-medium text-lg text-white">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </p>
                <div
                  class="flex flex-col md:flex-row flex-wrap justify-start items-start gap-4 mt-8 mb-16"
                >
                  <a href="https://forms.gle/HxFxoZPkzak7QX3C9" target="_blank">
                    <button
                      class="whitespace-nowrap bg-transparent ring-1 text-teal-300 ring-teal-400 hover:ring-2 hover:bg-gray-100 hover:ring-teal-500 hover:text-teal-400 uppercase font-sans active:brightness-95 font-semibold hover:subpixel-antialiased ring-inset px-12 py-4 text-xl rounded-lg gap-4"
                    >
                      출전 팀 등록
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-center mt-10">
      <div>
        <h1 class="text-3xl font-semibold">다가오는 경기</h1>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
#landing {
  background-image: url('/images/background.webp');
}
</style>
