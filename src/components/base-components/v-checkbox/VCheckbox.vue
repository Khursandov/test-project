<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id: string
  modelValue: string[] | boolean
  value?: string | boolean
  orderReversed?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [string[] | boolean]
}>()

const checked = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>

<template>
  <div
    class="v-checkbox"
    :class="{
      'v-checkbox_reversed': orderReversed
    }"
  >
    <input
      :id="id"
      v-model="checked"
      :value="value"
      class="v-checkbox__input"
      type="checkbox"
    />
    <label
      :for="id"
      class="v-checkbox__label"
    >
      <slot />
    </label>
  </div>
</template>

<style scoped lang="scss">
@import 'v-checkbox';
</style>
