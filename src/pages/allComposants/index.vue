<template>
  <h1 class="component-title">
    Composants Kapix
  </h1>
  <div class="content-container">
    <div
      v-for="composant in composants"
      :key="composant"
    >
      <div class="component-container">
        <ButtonList
          class="component-view"
          :image="composant?.toString().replace('composants-', '')"
          :link="composant?.toString().replace('composants-', '')">
        </ButtonList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './style.scss'
// importation du router
const router = useRouter()
// récupération de toutes les pages
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
// Liste de pages inutiles
const exceptionsPage = ['all', 'index', 'accueil']
// filtre pour ignorer les pages inutiles
const pages = allPages.map(page => page?.toString()).sort().filter(page => page !== undefined && !page.endsWith('en-US') && !page.endsWith('fr-FR') && !exceptionsPage.includes(page as string))
// pages de composants
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants'))
</script>
