<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VSelect from '@/components/base-components/v-select/VSelect.vue'
import VInput from '@/components/base-components/v-input/VInput.vue'
import VCheckbox from '@/components/base-components/v-checkbox/VCheckbox.vue'
import { useProductsStore } from '@/stores/products'
import { deliveryTypes } from '@/mocks/mockData'

const {
  productsState: { organizationsList },
  getOrganizationList
} = useProductsStore()

onMounted(() => {
  getOrganizationList()
})

const organization = ref(null)
const deliveryMethod = ref()
const base = ref()
const numberLead = ref()
const fromMobile = ref<boolean>(false)
</script>

<template>
  <div class="check-out-additional-info">
    <!--  Организация  -->
    <VSelect
      v-model="organization"
      label="Организация"
      class="check-out-additional-info__field"
      :data="organizationsList?.data || []"
    />

    <!--  Способо доставки  -->
    <VSelect
      v-model="deliveryMethod"
      label="Способо доставки"
      class="check-out-additional-info__field"
      :data="deliveryTypes"
    />

    <!--  Основание  -->
    <VSelect
      v-model="base"
      label="Основание"
      class="check-out-additional-info__field"
      :data="organizationsList?.data || []"
    />

    <!--  Номер Лида  -->
    <VInput
      id="leadNumber"
      v-model="numberLead"
      class="check-out-additional-info__field"
    >
      Номер Лида
    </VInput>

    <!--  Из моб. приложения  -->
    <VCheckbox
      id="fromMbile"
      v-model="fromMobile"
      class="check-out-additional-info__field"
    >
      Из моб. приложения
    </VCheckbox>
  </div>
</template>

<style scoped lang="scss">
@import 'package-sale-checkout-additional-info';
</style>
