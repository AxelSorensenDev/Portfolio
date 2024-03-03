<template>
  <div class="inline-flex justify-center items-center">
    <div class="flex justify-center mx-1 items-center">
      <div class="flex items-center relative" :style="'bottom: ' + offset + 'px'" v-html="fileContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    offset: String,
  },
  data() {
    return {
      componentName: 'svgs',
      fileContent: '',
    };
  },
  watch: {
    // This makes sure that the component is rerendered when props change
    name: function (newVal, oldVal) {
      // Call your function whenever the prop changes
      this.loadFile()
    },
    offset: function (newVal, oldVal) {
      // Call your function whenever the prop changes
      this.loadFile()
    }
  },
  methods: {
    async loadFile() {
      try {
        const response = await fetch(`/svgs/${this.name}.svg`); // Adjust the path to your text file
        this.fileContent = await response.text();
      } catch (error) {
        console.error('Error loading file:', error);
      }
    }
  },
  created() {
    this.loadFile()
  }
};
</script>