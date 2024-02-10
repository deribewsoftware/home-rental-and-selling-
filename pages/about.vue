<template>
  <div class="flex flex-col items-center text-center justify-center gap-28">
 
  <div class="h-screen w-full flex justify-center items-center">
    <div
  class="h-[400px] w-1/3 bg-rose-400"
  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1.2 }"
    :delay="200"
  >
    Hello
  </div>
  </div>

  <div class="h-screen w-full flex justify-center items-center">
    <div
  class="h-[400px] w-1/3 bg-rose-400"
  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1.2 }"
    :delay="500"
  >
    Hello
  </div>
  </div>

  <div class="h-screen w-full flex justify-center items-center">
    <div
  class="h-[400px] w-1/3 bg-rose-400"
  v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :hovered="{ scale: 1.2 }"
    :delay="1000"
  >
    Hello
  </div>
  </div>
  
</div>
</template>

<script setup>
import { _backgroundColor } from '#tailwind-config/theme';


const initial = ref({
  y: 100,
  x: -800,
  opacity: 0,
 
  transition:{
y:{
  delay:5600
}
  }
})

const leave = ref({
  y: 100,
  x: -800,
  opacity: 0,
 
  transition:{
y:{
  delay:5600
}
  }
})

const enter = ref({
  y: 0,
  x: 0,
  opacity: 1,
  transition:{
y:{
  delay:5600
}
  }
 
})
</script>
