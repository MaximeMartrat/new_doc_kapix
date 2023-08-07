<template>
  <div
    :class="theme"
    class="display-search">
    <div class="header-search">
      <img
        src="/public/pwa-white-512x512.png"
        class="img-logo"
        alt="logo">
      <h2 class="title-search">
        KAPIX SEARCH
      </h2>
    </div>
    <form class="display-form">
      <input
        v-model="input"
        :class="theme"
        class="search-input"
        placeholder="looking for..."
        @focus="display">
    </form>
    <div
      v-if="isActive"
      class="display-container"
      :class="theme">
      <div
        v-for="page in filteredList()"
        :key="page"
        class="item-page"
        :class="theme">
        <template
          v-if="page?.includes('composants-')">
          <h2>Composants</h2>
          <ButtonList
            :link="page.replace('composants-', '')"
            @click="redirectionClick(page)"></ButtonList>
        </template>
        <template v-else>
          <ButtonList
            :link="page"
            @click="redirectionClick(page)"></ButtonList>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import { ref } from 'vue'
import ButtonList from '~/components/ButtonList/index.vue'
import { theme } from '~/components/ButtonStyle/store'
import { hideDisplaySearch } from '~/components/ButtonSearch/store'
const input = ref('')
const router = useRouter()
const exceptionsPage = ['all', 'index', 'Navigation']
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
// filtre pour ignorer les pages inutiles
const pageLocales = ['en-US', 'fr-FR', 'en-AU', 'ja-JP', 'es-PE', 'de-DE', 'ar-DZ']
const pages = allPages.map(page => page?.toString()).sort().filter(page => page !== undefined && !pageLocales.some(locale => page.endsWith(locale)) && !exceptionsPage.includes(page as string))
const isActive = ref(false)
const redirectionClick = (vue: string | undefined) => {
  router.push({ path: '/Navigation' })
  hideDisplaySearch()
}
function filteredList () {
  const searchText = input.value.trim().toUpperCase()
  if (searchText.length <= 1) {
    return []
  }
  else {
    return pages.filter(page =>
      page?.toUpperCase().includes(input.value.toUpperCase()))
  }
}

function display () {
  isActive.value = !isActive.value
}

</script>
