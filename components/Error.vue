<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col gap-2 text-center">
      <h1 class="text-6xl">{{ error.statusCode }}</h1>
      <p>Page not found {{ error.message }}</p>
      <NuxtLink class="bg-gray-100 p-2 rounded-md hover:bg-gray-200 text-gray-600 hover:text-gray-800" to="/">Go Home...
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>

