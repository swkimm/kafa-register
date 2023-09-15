<template>
  <div>
    <ConsoleNavBar />
    <div>
      <main class="flex-1 bg-slate-50">
        <TempBar />
        <!-- <Sidebar /> -->
        <RouterView />
      </main>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
// import Sidebar from '@/components/sideBar.vue'
import TempBar from '@/components/tempBar.vue'
import ConsoleNavBar from '@/components/consoleNavBar.vue'
import Footer from '@/components/footerItem.vue'
</script>
<style scoped></style>
