<template>
  <div class="flex flex-col flex-1">
    <NavBar />
    <UpcomingBanner />
    <main class="flex flex-col flex-1 bg-slate-50">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/navBar.vue'
import Footer from '@/components/footerItem.vue'
import UpcomingBanner from '@/components/upcomingBanner.vue'
</script>
