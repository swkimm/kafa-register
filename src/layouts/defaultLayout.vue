<template>
  <div class="flex flex-col flex-1">
    <NavBar />
    <BannerItem />
    <main class="flex flex-col flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/navBar.vue'
import Footer from '@/components/footerItem.vue'
import BannerItem from '@/components/bannerItem.vue'
</script>
