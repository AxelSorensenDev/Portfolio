<template>
  <div class="h-screen grid grid-rows-[auto,1fr] overflow-hidden">
    <SiteHeader />
    <div class="p-8 h-full overflow-scroll flex justify-center">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>
