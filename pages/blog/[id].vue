<template>
  <main class="prose">
    <LazyContentDoc class="p-8">
      <template #not-found>
        <Error />
      </template>
    </LazyContentDoc>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})
</script>
