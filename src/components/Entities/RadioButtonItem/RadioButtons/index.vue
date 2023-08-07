<template>
  <ka-container
    code="radio-button-item"
    :options="{
      click: componentInstance.radioButtonItemClick,
      $state: { selected: componentInstance.$parentComponent?.$value.value === radioButtonItemItem.value }
    }">
    <ka-icon
      code="icon"
      :value="componentInstance.$parentComponent?.$value?.value === radioButtonItemItem.value ? 'i-fa-solid:check-circle' : 'i-fa-regular:circle'" />
    <ka-text code="text">
      <span v-html="radioButtonItemItem.label" />
    </ka-text>
  </ka-container>
</template>

<script setup lang="ts">
import { syncEntityStore } from 'kapix-components-vue3'
import { entitiesRadioButtonItemRadioButtonsComponent } from './store'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'EntitiesRadioButtonItemRadioButtons'
})
provide('$scoped', '--radio-buttons-e3')
const component = entitiesRadioButtonItemRadioButtonsComponent()
const componentInstance = component.newStoreInstance()
const props = withDefaults(defineProps<{
  radioButtonItem?: PartialEntity<Kapix.Entity.IRadioButtonItem>
}>(), {
  radioButtonItem: undefined
})

const radioButtonItemItem = syncEntityStore<Partial<Kapix.Entity.IRadioButtonItem>>(componentInstance, {
  props,
  propName: 'radioButtonItem',
  defaultValue: {}
})
</script>
