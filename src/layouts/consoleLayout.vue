<template>
  <div>
    <ConsoleNavBar />
    <div>
      <main class="flex-1">
        <TempBar />
        <RouterView />
      </main>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import TempBar from '@/components/tempBar.vue'
import ConsoleNavBar from '@/components/consoleNavBar.vue'
import Footer from '@/components/footerItem.vue'
</script>
<style scoped></style>
