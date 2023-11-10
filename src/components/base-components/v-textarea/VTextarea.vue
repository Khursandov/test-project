<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id?: string
  modelValue: string
  placeholder?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

const areaValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>

<template>
  <textarea
    :id="id"
    v-model="areaValue"
    class="v-textarea"
    :placeholder="placeholder"
  ></textarea>
</template>

<style scoped lang="scss">
@import 'textarea';
</style>
