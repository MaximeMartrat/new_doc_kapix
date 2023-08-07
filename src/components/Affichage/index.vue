<template>
  <ka-container
    code="affichage"
    :options="$merge({ style: { fontFamily: appData.theme.fontFamily } }, options)"
    :instance-class="instanceClass"
    :inner="inner != null ? inner : true"
    :xs="xs"
    :sm="sm">
    <!-- Description -->
    <ka-container
      code="description"
      :options="{ style: { textAlign: componentInstance.$drawing.value == null || componentInstance.$drawing.value === '' ? `center` : `left` } }">
      <ka-text
        code="grand-titre"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h1 v-html="componentInstance.$bigHeadline.value" />
      </ka-text>
      <ka-text code="sous-titre">
        <span v-html="componentInstance.$title.value" />
      </ka-text>
      <Bouton
        instance-class="bouton--c3"
        :options="{ style: { alignSelf: componentInstance.$drawing.value == null || componentInstance.$drawing.value === '' ? `center` : `flex-start` } }" />
    </ka-container>
    <!-- Visuel -->
    <ka-container
      code="visuel"
      :options="{ hidden: componentInstance.$drawing.value == null || componentInstance.$drawing.value === '' ? true : false }">
      <ka-image
        code="image"
        :options="{
          animationIn: `fadeIn`,
          lazyOptions: {
            throttle: 200,
            once: true,
            intersection: { threshold: 0.1 }
          },
          imgFit: `cover`
        }"
        :value="componentInstance.$drawing.value" />
    </ka-container>
  </ka-container>
</template>

<script setup lang="ts">
import { syncComponentStore } from 'kapix-components-vue3'
import { affichageComponent } from './store'
import Bouton from '~/components/Bouton/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Affichage'
})
provide('$scoped', '--c3')
const appData = appDataStore()
const component = affichageComponent()
const componentInstance = component.newStoreInstance()
const props = withDefaults(defineProps<{
  bigHeadline: string
  title: string
  drawing?: Nullable<string>
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  bigHeadline: 'Donnez ici un titre à votre section',
  title: 'Développez ici votre section',
  drawing: 'https://ucarecdn.com/8bb30615-ce94-4a7c-9f4a-5e2cd4065319/',
  instanceClass: undefined,
  options: undefined,
  sm: undefined,
  xs: undefined,
  inner: undefined
})

const emit = defineEmits([
  'update:bigHeadline',
  'update:title',
  'update:drawing'
])
componentInstance.$emit = emit

syncComponentStore(componentInstance, {
  props,
  propsToWatch: {
    bigHeadline: true,
    title: true,
    drawing: true
  }
})
</script>
