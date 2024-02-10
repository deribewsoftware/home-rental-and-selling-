<template>
  <div class="dark:bg-gray-900">
    <Navbar/>
    <NuxtPage/>
  </div>
</template>


<style>
.page-enter-active, .page-leave-active{
  transition: all 0.4s;

}
.page-enter-from, .page-leave-to{
  opacity: 0;
  filter: blur(4rem);

}
</style>