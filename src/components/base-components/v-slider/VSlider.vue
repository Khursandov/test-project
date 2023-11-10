<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Ref } from 'vue'
import VButton from '@/components/base-components/v-button/VButton.vue'
import type { IBaseImage } from '@/types'

interface ISlideBarProps {
  images: IBaseImage[]
}

type SliderEmits = {
  closeSlider: [void]
}

const props = defineProps<ISlideBarProps>()

const emit = defineEmits<SliderEmits>()

const images = computed<IBaseImage[]>(() => props.images)

const currentImgIndex = ref(0)
const currentImg: Ref<string> = ref('')

const nextImg = () => {
  if (!images.value) return
  if (currentImgIndex.value === images.value.length - 1) {
    currentImgIndex.value = 0
  } else {
    currentImgIndex.value = currentImgIndex.value + 1
  }
  currentImg.value = images.value[currentImgIndex.value].src
}

const prevImg = () => {
  if (!images.value) return
  if (currentImgIndex.value === 0) {
    currentImgIndex.value = images.value.length - 1
  } else {
    currentImgIndex.value = currentImgIndex.value - 1
  }
  currentImg.value = images.value[currentImgIndex.value].src
}

const handleCloseClick = () => {
  emit('closeSlider')
}

watch(images, () => {
  if (images.value.length) {
    currentImg.value = images.value[0].src
  }
})
</script>
<template>
  <div
    v-if="!!images.length"
    class="slider"
  >
    <div class="overlay" />
    <div class="slider__wrapper">
      <div class="slider__wrapper-container">
        <VButton
          class="slider__close-icon"
          @click="handleCloseClick"
        >
          &times;
        </VButton>
        <VButton
          class="slider__prev"
          @click="prevImg"
        >
          <img
            class="slider__prev-img"
            src="../../../assets/images/svg/next-icon.svg"
            alt="next"
          />
        </VButton>
        <div class="slider__img">
          <img
            :src="currentImg"
            alt="img"
          />
        </div>

        <VButton
          class="slider__next"
          @click="nextImg"
        >
          <img
            src="../../../assets/images/svg/next-icon.svg"
            alt="prev"
          />
        </VButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import 'v-slider';
</style>
