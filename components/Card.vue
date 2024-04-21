<template>
  <div class="rounded-lg overflow-hidden bg-white hover:bg-gray-50">
    <NuxtImg class="w-full h-[150px] object-cover" preload :src="post.cover" />
    <div class="px-6 py-4">
      <div class="font-bold text-md line-clamp-1 mb-2">{{ post.title }}</div>
      <p class="text-gray-700 text-sm line-clamp-2">
        {{ post.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2 truncate text-ellipsis">
      <span v-for="tag in post.tags"
        class="inline-block bg-purple-50 rounded-full px-3 py-1 text-sm text-purple-600 mr-2 mb-2">#{{ tag
        }}</span>
    </div>
  </div>
</template>

<script setup>
const { post } = defineProps(['post'])
</script>
