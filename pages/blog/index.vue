<template>
  <div class="pb-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div class="drop-shadow-md" v-if="pending" v-for="_ in 2">
        <SkeletonCard />
      </div>
      <div v-else class="drop-shadow-md" v-for="post in posts">
        <NuxtLink :to="`blog/${post.id}`">
          <Card :post="post" />
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
// Fetch products
const { data: posts, pending } = useLazyAsyncData('posts', () => queryContent('/blog').find())

</script>
