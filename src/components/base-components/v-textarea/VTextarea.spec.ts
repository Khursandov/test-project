import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TextArea from './VTextarea.vue'

describe('TextArea', () => {
  it('renders with modelValue correctly', async () => {
    const modelValueProp = 'Hello, World!'
    const wrapper = mount(TextArea, {
      props: {
        modelValue: modelValueProp
      }
    })

    expect(wrapper.find('textarea').element.value).toBe(modelValueProp)
  })

  it('emits update:modelValue when textarea input changes', async () => {
    const wrapper = mount(TextArea, {
      props: {
        modelValue: ''
      }
    })
    const newValue = 'New Value'

    await wrapper.find('textarea').setValue(newValue)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([newValue])
  })

  it('renders placeholder when provided', async () => {
    const placeholder = 'Enter text here'
    const wrapper = mount(TextArea, {
      props: {
        modelValue: '',
        placeholder
      }
    })

    expect(wrapper.find('textarea').attributes('placeholder')).toBe(placeholder)
  })
})
