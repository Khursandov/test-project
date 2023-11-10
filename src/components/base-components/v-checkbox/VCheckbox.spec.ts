import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VCheckbox from './VCheckbox.vue'

describe('Checkbox', () => {
  it('renders with modelValue correctly', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        id: 'checkbox1',
        modelValue: true,
        value: 'option1'
      },
      slots: {
        default: 'Option 1'
      }
    })

    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('emits update:modelValue when checkbox input changes', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        id: 'checkbox2',
        modelValue: false,
        value: 'option2'
      },
      slots: {
        default: 'Option 2'
      }
    })

    await wrapper.find('input').setValue(true)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('renders reversed class when orderReversed is true', async () => {
    const wrapper = mount(VCheckbox, {
      props: {
        id: 'checkbox3',
        modelValue: false,
        value: 'option3',
        orderReversed: true
      },
      slots: {
        default: 'Option 3'
      }
    })

    expect(wrapper.classes('checkbox_reversed')).toBe(true)
  })
})
