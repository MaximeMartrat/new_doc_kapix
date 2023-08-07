<template>
  <ka-container
    code="radio-buttons"
    :options="options"
    :instance-class="instanceClass"
    :inner="inner"
    :xs="xs"
    :sm="sm">
    <ka-list
      v-model="componentInstance.radioButtonItemList.value"
      code="radio-button-item-list"
      :options="{
        placeholder: `No items`,
        debounce: 0,
        entity: `Kapix.Entity.IRadioButtonItem`,
        items: componentInstance.$items.value
      }"
      :data="componentInstance.$info.radioButtonItemList">
      <template #item="listItemProps">
        <EntitiesRadioButtonItemRadioButtons :radio-button-item="listItemProps.item" />
      </template>
    </ka-list>
  </ka-container>
</template>

<script setup lang="ts">
import { syncComponentStore } from 'kapix-components-vue3'
import { radioButtonsComponent } from './store'
import EntitiesRadioButtonItemRadioButtons from '~/components/Entities/RadioButtonItem/RadioButtons/index.vue'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'RadioButtons'
})
provide('$scoped', '--c4')
const component = radioButtonsComponent()
const componentInstance = component.newStoreInstance()
const props = withDefaults(defineProps<{
  value?: Nullable<string>
  modelValue?: Nullable<string>
  items?: PartialEntities<Kapix.Entity.IRadioButtonItem>
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  value: undefined,
  modelValue: undefined,
  items: () => [
    {
      value: 'Option 1',
      label: 'Option 1'
    },
    {
      value: 'Option 2',
      label: 'Option 2'
    },
    {
      value: 'Option 3',
      label: 'Option 3'
    }
  ],
  instanceClass: undefined,
  options: undefined,
  sm: undefined,
  xs: undefined,
  inner: undefined
})

const emit = defineEmits([
  'update:value',
  'update:modelValue',
  'update:items'
])
componentInstance.$emit = emit

syncComponentStore(componentInstance, {
  props,
  propsToWatch: {
    value: true,
    modelValue: true,
    items: true
  }
})
</script>
