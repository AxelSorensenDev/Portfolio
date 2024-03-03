<template>
  <SiteHeader />
  <Error :error="error" />
</template>

<script setup>
defineProps(['error'])
</script>
