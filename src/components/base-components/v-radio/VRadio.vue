<script setup lang="ts">
import { computed } from 'vue'
import type { TNullable } from '@/types'

interface Props {
  id: string
  modelValue: TNullable<string>
  value: string
  orderReversed?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [TNullable<string>]
}>()
const checked = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>

<template>
  <div
    class="v-radio"
    :class="{
      'v-radio_reversed': props.orderReversed
    }"
  >
    <input
      :id="id"
      v-model="checked"
      :value="value"
      class="v-radio__input"
      type="radio"
    />
    <label
      :for="id"
      class="v-radio__label"
    >
      <slot />
    </label>
  </div>
</template>

<style scoped lang="scss">
@import 'v-radio';
</style>
