<template>
  <div
    :class="theme">
    <NavLeft></NavLeft>
  </div>
  <div
    :class="theme"
    class="container-main">
    <NavRight></NavRight>
    <div
      :class="theme">
    </div>
    <div
      v-for="page in allPages"
      :key="page"
      class="container-content">
      <component
        :is="getPage(page)"
        v-if="Link === page"
      >
      </component>
    </div>
    <div
      v-for="composant in composants"
      :key="composant"
      class="container-content">
      <component
        :is="getComposant(composant)"
        v-if="Link === composant"
      >
      </component>
    </div>
    <Footer
      :currentComposant="Link"
      @change-composant="updateLink"></Footer>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import { defineAsyncComponent, ref } from 'vue'
import Footer from '~/components/Footer-contenu/index.vue'
import { Link } from '~/components/ButtonList/store'
import { theme } from '~/components/ButtonStyle/store'
import NavLeft from '~/components/Navbar-g/index.vue'
import NavRight from '~/components/Navbar-d/index.vue'
// importattion du router
const router = useRouter()
// récupération de toutes les pages
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
// filtre pour ignorer les pages inutiles
const exceptionsPage = ['all', 'index']
const pageLocales = ['en-US', 'fr-FR', 'en-AU', 'ja-JP', 'es-PE', 'de-DE', 'ar-DZ']
const pages = allPages.map(page => page?.toString()).sort().filter(page => page !== undefined && !pageLocales.some(locale => page.endsWith(locale)) && !exceptionsPage.includes(page as string))
// pages de composants
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants')).map(page => page?.replace('composants-', ''))
// Fonction pour récupérer le composant d'une page donnée
const getPage = (page: string) => defineAsyncComponent(() => import(`../../pages/${page}/index.vue`).then(module => module.default))
// Fonction pour récupérer le composant donné d'une page
const getComposant = (composant: string) => defineAsyncComponent(() => import(`../../pages/composants/${composant}/index.vue`).then(module => module.default))
// Référence pour le lien (URL) actuel
const linkRef = ref(Link)
// Fonction pour maj le lien (URL) actuel
const updateLink = (newLink: string) => {
  // Maj de la référence pour refléter le nouveau lien
  linkRef.value = newLink
}

</script>

