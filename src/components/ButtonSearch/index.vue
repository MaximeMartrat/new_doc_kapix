<template>
  <button
    class="button-search"
    @click="displaySearch"
  >
    <i class="i-fa-search" /><span>Search</span>
  </button>
  <DisplaySearch
    v-if="isActive"
    :class="{ 'displayS': true, 'open-search': isActive, 'close-search': isClosing }"
    @close="hideDisplaySearch"
  ></DisplaySearch>
</template>
<script setup lang="ts">
import './style.scss'
import { displaySearch, hideDisplaySearch, isActive, isClosing } from './store'

// Add event au montage du composant
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// erase l'event si composant démonté
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Si clic à l'extérieur du composant
function handleClickOutside (event: MouseEvent) {
  const target = event.target as HTMLElement
  const displaySearchElement = document.querySelector('.displayS')

  // Si clic ni dans composant ni dans le bouton
  if (
    displaySearchElement
    && !displaySearchElement.contains(target)
    && !target.classList.contains('i-fa-search')
    && !target.parentElement?.classList.contains('button-search')
  ) {
    hideDisplaySearch()
  }
}
</script>
