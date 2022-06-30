<template>
  <div class="tools">
    <div
      class="tools_item"
      v-for="(name) in tools"
      :key="name"
      @click="select(name)"
    >
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
    },

    select: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.tools {
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 999;
}

.tools_item {
  padding: 6px;
  border-radius: 4px;
  background: rgba(0, 12, 22, 0.3);
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
}
</style>