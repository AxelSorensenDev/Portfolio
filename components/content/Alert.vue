<template>
  <div class="flex-col flex bg-purple-100 border-t-4 border-purple-500 rounded-b-md">
    <div class="items-center flex font-semibold mx-4">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" viewBox="2 0 24 24" stroke="currentColor"
        class="text-purple-500 w-6 h-6 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
      <p class="">
        {{ this.title }}
      </p>
    </div>
    <p class="mt-[-10px] mx-4 text-sm">
      {{ this.text }}
    </p>
  </div>




</template>

<script>
export default {
  props: {
    title: String,
    text: String
  },
  data() {
    return {
      componentName: 'alert',
    }
  }
}
</script>