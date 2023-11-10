<script setup lang="ts">
import VButton from '@/components/base-components/v-button/VButton.vue'

interface IDialogProps {
  modelValue: boolean
  width?: string
  className?: string
  noCloseBtn?: boolean
}

defineProps<IDialogProps>()

const emit = defineEmits(['update:modelValue'])

const onCloseModal = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <div
    v-if="modelValue"
    class="v-dialog"
    :class="className"
  >
    <div class="v-dialog__wrapper">
      <div
        v-if="!noCloseBtn"
        class="v-dialog__close-btn"
      >
        <VButton
          class="v-dialog__close-btn"
          @click="onCloseModal"
          >x</VButton
        >
      </div>
      <div class="v-dialog__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'v-dialog';
</style>
