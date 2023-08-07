<template>
  <ka-container
    code="test"
    :options="options"
    :instance-class="instanceClass"
    :inner="inner"
    :xs="xs"
    :sm="sm">
    <ka-type-writer
      code="type-writer"
      :value="componentInstance.$typeWriter.value" />
    <!-- Container -->
    <ka-container code="container">
      <ka-image
        code="image"
        :options="{
          animationIn: `fadeIn`,
          lazyOptions: {
            throttle: 200,
            once: true,
            intersection: { threshold: 0.1 }
          },
          hidden: componentInstance.$typeDeMedia.value === `image` ? false : null
        }"
        :value="componentInstance.$image.value" />
    </ka-container>
  </ka-container>
</template>

<script setup lang="ts">
import { syncComponentStore } from 'kapix-components-vue3'
import { testComponent } from './store'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Test'
})
provide('$scoped', '--c0')
const component = testComponent()
const componentInstance = component.newStoreInstance()
const props = withDefaults(defineProps<{
  image?: Nullable<string>
  typeDeMedia?: Nullable<'image' | 'video'>
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  image: 'https://ucarecdn.com/83a003e0-0add-4ee3-afaf-ac1437100353/',
  typeDeMedia: 'image',
  instanceClass: undefined,
  options: undefined,
  sm: undefined,
  xs: undefined,
  inner: undefined
})

const emit = defineEmits([
  'update:image',
  'update:typeDeMedia'
])
componentInstance.$emit = emit

syncComponentStore(componentInstance, {
  props,
  propsToWatch: {
    image: true,
    typeDeMedia: true
  }
})
</script>
