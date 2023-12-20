<template>
  <main class="prose">
    <ContentDoc class="p-8">
      <template #not-found>
        <Error />
      </template>
    </ContentDoc>
  </main>
</template>

<script setup>
definePageMeta({
  layout: 'blog'
})
</script>
