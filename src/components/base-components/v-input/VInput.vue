<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TNullable } from '@/types'

interface Props {
  id: string
  modelValue: TNullable<string | number>
  movableLabel?: boolean
  placeholder?: string
  disabled?: boolean
  type?: 'text' | 'number' | 'email'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

const emit = defineEmits<{
  'update:modelValue': [TNullable<string | number>]
  focus: [void]
  blur: [void]
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const isFocused = ref<boolean>(false)

const onBlur = () => {
  isFocused.value = false
  emit('blur')
}

const onFocus = () => {
  isFocused.value = true
  emit('focus')
}
</script>

<template>
  <div
    class="input"
    :class="{
      input_movable_label: props.movableLabel,
      'input--focused': isFocused,
      'input--dirty': inputValue
    }"
  >
    <label
      :for="id"
      class="input__label"
    >
      <slot />
    </label>
    <input
      :id="id"
      v-model="inputValue"
      :placeholder="placeholder"
      class="input__input"
      :type="type"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<style scoped lang="scss">
@import 'v-input';
</style>
