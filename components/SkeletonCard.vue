<template>
  <div class="rounded-lg overflow-hidden bg-white hover:bg-gray-50 h-[314px]">
    <div class="w-full h-[150px] bg-gray-200 animate-pulse"></div>
    <div class="px-6 py-4">
      <div class="font-bold h-6 mb-4 animate-pulse text-ellipsis line-clamp-1 bg-gray-100"></div>
      <div v-for="_ in 2" class="text-gray-700 h-3 mb-2 bg-gray-100 animate-pulse">
      </div>
    </div>
    <div class="px-6 pt-3 pb-2 truncate text-ellipsis">
      <span v-for="tag in 3"
        class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 h-6 w-16 animate-pulse"></span>
    </div>
  </div>
</template>

<script setup>
</script>