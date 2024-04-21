<template>
  <div class="flex justify-center mt-8">
    <div class="prose prose-a:no-underline prose-p:text-justify prose-a:text-purple-500">

      <ContentDoc>
        <template #not-found>
          <Error />
        </template>
      </ContentDoc>
    </div>
  </div>
</template>

<!-- <script setup>
definePageMeta({
  layout: 'blog'
})
</script> -->
