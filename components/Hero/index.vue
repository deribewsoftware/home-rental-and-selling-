<template>
  <div class="h-screen w-full text-center items-center flex  justify-center">
    <div class="flex flex-col gap-10 justify-center items-center">
      <div class="">
      <h1 class="text-7xl font-extrabold text-gray-600 dark:text-gray-100">Turn Your Vision into Reality</h1>
      <p class="text-gray-600 dark:text-gray-400 text-2xl font-semibold">Watch your dreams materialize before your eyes with us.</p>
     
    </div>

    <div class="w-10/12 h-[400px] overflow-hidden"><UCarousel  v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" arrows indicators>
    <img :src="item" class="w-full" draggable="false">
  </UCarousel></div>
    </div>
    
  </div>
</template>







<script setup lang="ts">
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]
</script>



<style>

</style>