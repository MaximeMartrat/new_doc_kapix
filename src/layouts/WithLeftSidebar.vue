<template>
  <ka-container code="with-left-sidebar">
    <!-- Left Panel -->
    <ka-container
      code="left-panel"
      :xs="{ hidden: true }">
      <ka-list
        v-model="page.pageList.value"
        code="page-list"
        :options="{
          placeholder: `No pages`,
          debounce: 0,
          entity: `IPage`
        }"
        :data="page.$info.pageList">
        <template #item="listItemProps">
          <EntitiesPageWithLeftSidebar :page="listItemProps.item" />
        </template>
      </ka-list>
    </ka-container>
    <ka-page-router code="page-router" />
  </ka-container>
</template>

<script setup lang="ts">
import { syncPageStore } from 'kapix-components-vue3'
import { withLeftSidebar } from './WithLeftSidebar/store'
import EntitiesPageWithLeftSidebar from '~/components/Entities/Page/WithLeftSidebar/index.vue'
import './WithLeftSidebar/style.scss'
import './WithLeftSidebar/style.custom.scss'

defineOptions({
  name: 'WithLeftSidebar'
})
provide('$scoped', '--m3')
const page = syncPageStore(withLeftSidebar())
</script>
