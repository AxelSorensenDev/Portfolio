<template>
  <nav
    class="flex flex-col select-none md:flex-row text-sm justify-between whitespace-nowrap bg-white/70 blur-b z-10 backdrop-blur-md"
    :class="{ 'pb-4': isOpen }">
    <div class="flex justify-between items-center px-8 py-4">
      <NuxtLink to="/" class="no_dec_link" @click="isOpen = false">
        <div class="text-gray-600">@Axel Sorensen</div>
      </NuxtLink>
      <svg @click="isOpen = !isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 md:hidden flex cursor-pointer">
        <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'"
      class="flex flex-col md:gap-8 gap-4 md:flex-row flex-grow-[1] justify-end md:items-center px-8 md:flex">


      <NuxtLink @click="isOpen = false" v-for="page in pages" class=" hover:text-gray-900 text-gray-600"
        :to="page.href">{{ page.name }}
      </NuxtLink>
    </div>
    <div class="gap-2 items-center hidden md:flex px-8 py-4">
      <a href="https://github.com/AxelSorensenDev" target="_blank">
        <Icon name="uil:github" class="text-2xl cursor-pointer hover:text-gray-900 text-gray-600" />
      </a>

      <a href="https://www.linkedin.com/in/axel-sorensen/" target="_blank">
        <Icon name="uil:linkedin" class="text-2xl cursor-pointer hover:text-gray-900 text-gray-600" />
      </a>
    </div>


  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      pages: [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Projects', href: '/projects' },
        { name: 'Reading List', href: '/readinglist' },
        { name: 'Ideas', href: '/ideas' },
      ]
    }
  }
}
</script>
