import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VInput from './VInput.vue'

describe('Input', () => {
  it('renders with modelValue correctly', async () => {
    const value = 'Hello, World!'
    const wrapper = mount(VInput, {
      props: {
        id: 'input1',
        modelValue: value,
        type: 'text'
      },
      slots: {
        default: 'Label'
      }
    })

    expect(wrapper.find('input').element.value).toBe(value)
  })

  it('emits update:modelValue when input changes', async () => {
    const wrapper = mount(VInput, {
      props: {
        id: 'input2',
        modelValue: '',
        type: 'text'
      },
      slots: {
        default: 'Label'
      }
    })
    const value = 'New Value'

    await wrapper.find('input').setValue(value)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([value])
  })

  it('renders movableLabel class when movableLabel is true', async () => {
    const wrapper = mount(VInput, {
      props: {
        id: 'input3',
        modelValue: '',
        type: 'text',
        movableLabel: true
      },
      slots: {
        default: 'Label'
      }
    })

    expect(wrapper.classes('input_movable_label')).toBe(true)
  })

  it('renders placeholder when provided', async () => {
    const placeholder = 'Enter text here'
    const wrapper = mount(VInput, {
      props: {
        id: 'input4',
        modelValue: '',
        type: 'text',
        placeholder
      },
      slots: {
        default: 'Label'
      }
    })

    expect(wrapper.find('input').attributes('placeholder')).toBe(placeholder)
  })

  it('adds input--focused class when input is focused', async () => {
    const wrapper = mount(VInput, {
      props: {
        id: 'input5',
        modelValue: '',
        type: 'text'
      },
      slots: {
        default: 'Label'
      }
    })

    await wrapper.find('input').trigger('focus')
    expect(wrapper.classes('input--focused')).toBe(true)
  })

  it('adds input--dirty class when input has value', async () => {
    const wrapper = mount(VInput, {
      props: {
        id: 'input6',
        modelValue: 'Initial Value',
        type: 'text'
      },
      slots: {
        default: 'Label'
      }
    })

    expect(wrapper.classes('input--dirty')).toBe(true)
  })
})
