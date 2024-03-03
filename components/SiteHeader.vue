<template>
  <nav
    class="flex text-sm justify-between whitespace-nowrap bg-gradient-to-b from-white from-60% to-100% to-transparent pb-8 z-10">
    <div class="flex">
      <div class="text-slate-500 px-4 p-2 m-4">@Axel Sorensen</div>

      <div class="*:p-2 *:px-4 gap-2 *:rounded-md m-4 hidden md:flex">
        <NuxtLink v-for="page in pages" class=" hover:text-gray-900 text-gray-500" :to="page.href">{{ page.name }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex gap-2 mx-8 m-4">
      <a href="https://github.com/AxelSorensenDev" target="_blank">
        <Icon name="uil:github" class="text-3xl cursor-pointer hover:text-gray-900 text-gray-500" />
      </a>

      <a href="https://www.linkedin.com/in/axel-sorensen/" target="_blank">
        <Icon name="uil:linkedin" class="text-3xl cursor-pointer hover:text-gray-900 text-gray-500" />
      </a>
    </div>
  </nav>
</template>

<script setup>
const pages = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'Reading List', href: '/readinglist' },
  { name: 'Ideas', href: '/ideas' },
]
</script>
