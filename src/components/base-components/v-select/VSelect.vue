<script setup lang="ts">
import { computed } from 'vue'

type VueSelectProps = {
  data: any
  modelValue: any | null
  label?: string
  className?: string
  textProperty?: string
  withDefaultOption?: boolean
}

const props = withDefaults(defineProps<VueSelectProps>(), {
  textProperty: 'label',
  withDefaultOption: true
})

const emit = defineEmits(['update:modelValue'])

const value = computed<any | null>({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div :class="className">
    <label
      for="some_select_id"
      class="select-block__label"
    >
      {{ label }}
    </label>
    <select
      id="some_select_id"
      v-model="value"
      class="select-block__select"
    >
      <option
        v-if="withDefaultOption"
        :value="null"
        :selected="value === null"
      >
        не выбрано
      </option>
      <option
        v-for="item in data"
        :key="item.id"
        class="select-block__option"
        :value="item"
      >
        {{ item[textProperty] || item }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@import 'v-select';
</style>
