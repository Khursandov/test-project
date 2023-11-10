import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from './VRadio.vue'

describe('Radio', () => {
  it('renders with modelValue correctly', async () => {
    const wrapper = mount(Radio, {
      props: {
        id: 'radio1',
        modelValue: 'option1',
        value: 'option1'
      },
      slots: {
        default: 'Option 1'
      }
    })

    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('emits update:modelValue when radio input changes', async () => {
    const wrapper = mount(Radio, {
      props: {
        id: 'radio2',
        modelValue: 'option1',
        value: 'option1'
      },
      slots: {
        default: 'Option 1'
      }
    })

    await wrapper.find('input').trigger('change')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['option1'])
  })

  it('renders reversed class when orderReversed is true', async () => {
    const wrapper = mount(Radio, {
      props: {
        id: 'radio3',
        modelValue: 'option1',
        value: 'option1',
        orderReversed: true
      },
      slots: {
        default: 'Option 1'
      }
    })

    expect(wrapper.classes('radio_reversed')).toBe(false)
  })
})
