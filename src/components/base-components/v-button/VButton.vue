<script setup lang="ts">
const emits = defineEmits(['click'])

interface Props {
  className?: string
}

defineProps<Props>()

const handleClick = () => {
  emits('click')
}
</script>

<template>
  <button
    :class="className"
    class="v-button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import 'v-button';
</style>
