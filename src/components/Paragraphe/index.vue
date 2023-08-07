<template>
  <ka-container
    code="paragraphe"
    :options="options"
    :instance-class="instanceClass"
    :inner="inner"
    :xs="xs"
    :sm="sm" />
</template>

<script setup lang="ts">
import { syncComponentStore } from 'kapix-components-vue3'
import { paragrapheComponent } from './store'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Paragraphe'
})
provide('$scoped', '--c1')
const component = paragrapheComponent()
const componentInstance = component.newStoreInstance()
const props = withDefaults(defineProps<{
  content?: Nullable<string>
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  content: 'default',
  instanceClass: undefined,
  options: undefined,
  sm: undefined,
  xs: undefined,
  inner: undefined
})

const emit = defineEmits([
  'update:content'
])
componentInstance.$emit = emit

syncComponentStore(componentInstance, {
  props,
  propsToWatch: { content: true }
})
</script>
