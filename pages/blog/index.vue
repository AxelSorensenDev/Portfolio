<template>
  <div class="">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
      <div v-if="pending" v-for="_ in 10">
        <SkeletonCard />
      </div>
      <div class=" drop-shadow-md" v-for="post in posts">
        <NuxtLink :to="`blog/${post.id}`">
          <LazyCard :post="post" />
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
// Fetch products
const { data: posts, pending } = useLazyAsyncData('posts', () => queryContent('/blog').find())

</script>
