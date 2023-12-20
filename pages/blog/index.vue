<template>
  <div class="">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="drop-shadow-md" v-for="post in posts">
        <NuxtLink :to="`blog/${post.id}`">
          <Card :post="post" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

// Fetch products
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').find())

</script>

