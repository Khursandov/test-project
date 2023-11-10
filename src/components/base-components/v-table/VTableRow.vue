<script setup lang="ts">
import { computed } from 'vue'

export interface IBaseTable {
  tableHead: any[]
  item: any
}

const props = withDefaults(defineProps<IBaseTable>(), {})

const headList = computed(() => props.tableHead)
</script>

<template>
  <tr class="v-table__tr">
    <td
      v-for="(head, index) in headList"
      :key="index + head.value"
      class="v-table__td"
    >
      <slot :name="head.value">
        {{ item[head.value] }}
      </slot>
    </td>
  </tr>
</template>

<style scoped lang="scss">
@import 'v-table';
</style>
