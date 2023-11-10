<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { IPageItem } from '@/utils/pagination'
import { getPaginationElements } from '@/utils/pagination'

import VButton from '@/components/base-components/v-button/VButton.vue'

interface IPaginationProps {
  page: number
  pageSize: number
  totalSize: number
  affectUrl: boolean
}

type TPaginationEmits = {
  onPageChange: [number]
}

const emit = defineEmits<TPaginationEmits>()

const props = withDefaults(defineProps<IPaginationProps>(), {
  affectUrl: true
})

const router = useRouter()
const route = useRoute()

const paginationProps = computed(() => ({
  total: props.totalSize,
  page: props.page,
  size: props.pageSize
}))

const pages = ref<Array<IPageItem>>(
  getPaginationElements(
    paginationProps.value.total,
    paginationProps.value.page,
    paginationProps.value.size
  )
)

watch(
  () => props.page,
  () => {
    pages.value = getPaginationElements(props.totalSize, props.page, props.pageSize)
  }
)

const handlePageChange = (pageNumber: number) => {
  if (pageNumber === props.page) return

  emit('onPageChange', pageNumber)

  if (props.affectUrl) {
    router.replace({ query: { ...route.query, page: pageNumber } })
  }
}
</script>

<template>
  <div class="pagination">
    <ul class="pagination__container">
      <template
        v-for="{ value, isActive } in pages"
        :key="value"
      >
        <VButton
          v-if="isActive"
          className="pagination__item"
          :class="{ pagination__item_selected: page === value }"
          @click="handlePageChange(value as number)"
        >
          {{ value }}
        </VButton>
        <li
          v-else
          class="break pagination__item"
        >
          {{ value }}
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss">
@import 'v-pagination';
</style>
