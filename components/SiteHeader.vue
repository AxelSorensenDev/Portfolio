<template>
  <nav class="flex text-gray-800 text-sm justify-between">
    <div class="*:p-2 *:px-4 gap-2 *:rounded-md m-4 hidden sm:flex">
      <div class="text-slate-500 mr-2">@Axel Sorensen</div>
      <NuxtLink v-for="page in pages" class="hover:bg-gray-100 hover:text-gray-900" :to="page.href">{{ page.name }}
      </NuxtLink>
    </div>
    <div class="*:p-2 *:px-4 *:rounded-md flex m-4">
      <NuxtLink class="hover:bg-gray-100 hover:text-gray-900" to="/contact">Contact</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const pages = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Reading List', href: '/readinglist' },
  { name: 'Ideas', href: '/ideas' }
]
</script>

