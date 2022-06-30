<template>
  <div class="tools">
    <div v-for="(name) in tools" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  mame: 'MapTools',
  
  props: {
    tools: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.tools {
  position: fixed;
  top: 50px;
  right: 100px;
}
</style>