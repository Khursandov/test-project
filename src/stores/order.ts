import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useOrderStore = defineStore('order_store', () => {
  const order = reactive({})

  return { order }
})
