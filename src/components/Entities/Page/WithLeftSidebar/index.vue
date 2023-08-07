<template>
  <ka-container
    code="page"
    :options="{ click: componentInstance.pageClick }">
    <ka-string-input
      code="title"
      :options="{
        editable: false,
        required: true
      }"
      :value="pageItem.title" />
  </ka-container>
</template>

<script setup lang="ts">
import { syncEntityStore } from 'kapix-components-vue3'
import { entitiesPageWithLeftSidebarComponent } from './store'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'EntitiesPageWithLeftSidebar'
})
provide('$scoped', '--with-left-sidebar-e2')
const component = entitiesPageWithLeftSidebarComponent()
const componentInstance = component.newStoreInstance()
const props = withDefaults(defineProps<{
  page?: PartialEntity<Kapix.Entity.IPage>
}>(), {
  page: undefined
})

const pageItem = syncEntityStore<Partial<Kapix.Entity.IPage>>(componentInstance, {
  props,
  propName: 'page',
  defaultValue: {}
})
</script>
