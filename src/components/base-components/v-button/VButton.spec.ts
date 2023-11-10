import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import VButton from './VButton.vue'

describe('Button', () => {
  it('renders content correctly', () => {
    const content = 'Click Me'
    const wrapper = mount(VButton, {
      props: {
        content
      }
    })

    expect(wrapper.text()).toBe(content)
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(VButton, {
      props: {
        content: 'Click Me'
      }
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
