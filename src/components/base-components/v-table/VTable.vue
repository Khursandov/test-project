<script setup lang="ts">
interface ITableHead {
  value: string
  label: string
}
export interface IBaseTable {
  tableHead: ITableHead[]
}

withDefaults(defineProps<IBaseTable>(), {})
</script>

<template>
  <table class="v-table">
    <thead class="v-table__head">
      <tr class="v-table__tr">
        <th
          v-for="(head, index) in tableHead"
          :key="index + head.value"
          class="v-table__th"
        >
          {{ head.label }}
        </th>
      </tr>
    </thead>

    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<style lang="scss">
@import 'v-table';
</style>
