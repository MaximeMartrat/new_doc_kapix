<template>
  <div class="button-nav-container">
    <button
      v-if="action === 'link'"
      :class="theme"
      class="button-nav"
      @mouseover="showList(index)"
      @mouseleave="hideList(index)"
    >
      {{ text }}
      <span
        class="i-fa6-solid-angle-down">1</span>
      <template v-if="action === 'link' && (isButtonHovered === index || isListHovered[index])">
        <ul
          v-if="page === 'pages'"
          :class="{ [theme]: true, 'linklist': true, 'active': isButtonHovered === index || isListHovered }"
          @mouseover="showList(index)"
          @mouseleave="hideList(index)">
          <li
            v-for="vue in intro"
            :key="vue"
          >
            <ButtonList
              class="button-link"
              :link="vue"
              @click="redirectionClick(vue)">
            </ButtonList>
          </li>
        </ul>
        <ul
          v-if="page === 'composants'"
          :class="{ [theme]: true, 'linklist': true, 'active': isButtonHovered === index || isListHovered }"
          @mouseover="showList(index)"
          @mouseleave="hideList(index)">
          <li
            v-for="vue in composants"
            :key="vue">
            <ButtonList
              class="button-link"
              :link="vue?.toString().replace('composants-', '')"
              @click="redirectionClick(vue)">
            </ButtonList>
          </li>
        </ul>
      </template>
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
import { hideList, isButtonHovered, isListHovered, showList } from './store'
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'

// importation du router
const router = useRouter()
// récupération de toutes les pages
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
// Liste de pages inutiles
const exceptionsPage = ['all', 'Navigation']
const pageLocales = ['en-US', 'fr-FR', 'en-AU', 'ja-JP', 'es-PE', 'de-DE', 'ar-DZ']
const pages = allPages.map(page => page?.toString()).sort().filter(page => page !== undefined && !pageLocales.some(locale => page.endsWith(locale)) && !exceptionsPage.includes(page as string))
// pages d'intro
const intro = pages.map(page => page?.toString()).filter(page => !page?.includes('composants'))
// pages de composants
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants'))
const redirectionClick = (vue: string | undefined) => {
  // Redirection vers la page d'accueil avant de changer le composant affiché
  router.push({ path: '/Navigation' })
}
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
