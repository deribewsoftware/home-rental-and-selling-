<template>
  <div class="flex flex-col gap-20 min-h-screen">
    <Hero/>
    
    <div class="flex-grow grid grid-cols-12">
      <div class="col-span-3 bg-white/20 relative w-full">
<div class="fixed top-[100vh] left-4 h-screen overflow-auto">
  <Sidebar/>
</div>
      </div>
      <main class="border-x-2 border-gray-100 dark:border-gray-800 col-span-7">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
  <Card/>
</div>
</main>
    </div>


    <footer>footer</footer>
 
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>