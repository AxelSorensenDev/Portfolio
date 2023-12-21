<template>
  <div class="h-screen grid grid-rows-[auto,1fr] overflow-hidden">
    <SiteHeader />
    <div class="h-full overflow-scroll flex">
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>
