<script setup lang="ts">
interface ITooltipProps {
  tooltip: string
  position?: string
}

defineProps<ITooltipProps>()
</script>

<template>
  <div class="tooltip">
    <slot />
    <div
      class="tooltip__content"
      :class="{ 'tooltip__content-right': position === 'right' }"
    >
      {{ tooltip }}
    </div>
  </div>
</template>

<style lang="scss">
@import 'v-tooltip';
</style>
