<template>
  <div
    class="button-nav-container-left"
    :style="{ marginBottom: action === 'link' ? buttonHeight + 'px' : 'auto' }">
    <button
      v-if="action === 'link'"
      ref="buttonRef"
      :class="{ [theme]: true, 'button-clicked': index === isButtonClicked, 'unclicked': index === clickedRemove }"
      class="button-nav-left"
      @click="showList(index)"
    >
      {{ text }}
      <span
        v-if="!isListHovered[index]"
        class="i-fa6-solid-angle-down">1</span>
      <span
        v-else
        class="i-fa6-solid-angle-up">2</span>
      <div v-if="action === 'link' && (isButtonHovered === index || isListHovered[index])">
        <ul
          v-if="page === 'pages'"
          ref="listContainer"
          :class="{ [theme]: true, 'linklist-left': true, 'active': isButtonHovered === index || isListHovered }">
          <li
            v-for="vue in intro"
            :key="vue"
          >
            <ButtonList
              class="button-list"
              :link="vue"
              @click.stop>
            </ButtonList>
          </li>
        </ul>
        <ul
          v-if="page === 'composants'"
          ref="listContainer"
          :class="{ [theme]: true, 'linklist-left': true, 'active': isButtonHovered === index || isListHovered }">
          <li
            v-for="vue in composants"
            :key="vue">
            <ButtonList
              class="button-list"
              :link="vue?.toString().replace('composants-', '')"
              @click.stop>
            </ButtonList>
          </li>
        </ul>
      </div>
    </button>
    <button
      v-else
      :class="theme"
      class="button-nav"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { clickedRemove, isButtonClicked, isButtonHovered, isListHovered, showList } from './store'
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'
const listContainer = ref<HTMLElement | null>(null)
const buttonRef = ref(0)
const buttonHeight = ref(0)

// importation du router
const router = useRouter()
// récupération de toutes les pages
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
// Liste de pages inutiles
const exceptionsPage = ['all', 'index', 'Navigation']
// filtre pour ignorer les pages inutiles
const pageLocales = ['en-US', 'fr-FR', 'en-AU', 'ja-JP', 'es-PE', 'de-DE', 'ar-DZ']
const pages = allPages.map(page => page?.toString()).sort().filter(page => page !== undefined && !pageLocales.some(locale => page.endsWith(locale)) && !exceptionsPage.includes(page as string))
// pages d'intro
const intro = pages.map(page => page?.toString()).filter(page => !page?.includes('composants'))
// pages de composants
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants'))
watch(listContainer, () => {
  if (listContainer.value) {
    buttonHeight.value = listContainer.value.clientHeight
  }
  else {
    buttonHeight.value = 0
  }
})
// propriétés des boutonNav
defineProps({
  index: {
    type: Number,
    required: false,
    default: 0
  },
  text: {
    type: String,
    default: 'redirect'
  },
  action: {
    type: String,
    default: 'navigate'
  },
  page: {
    type: String,
    default: 'pages'
  }
})
</script>
