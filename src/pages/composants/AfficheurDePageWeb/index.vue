<template>
  <ka-container
    code="afficheur-de-page-web"
    :data="page.$info.afficheurDePageWeb">
    <!-- Main -->
    <ka-container code="main">
      <!-- Title -->
      <ka-container code="title">
        <ka-text code="afficheur-de-page-web-text">
          <h1 v-html="t('afficheurDePageWeb.main.title.afficheurDePageWebText.value', `Afficheur de page web`)" />
        </ka-text>
      </ka-container>
      <!-- Basic -->
      <ka-container code="basic">
        <ka-text code="simple-usage">
          <h2 v-html="t('afficheurDePageWeb.main.basic.simpleUsage.value', `<strong>Simple usage</strong>`)" />
        </ka-text>
        <ka-text code="just-set-an-url-in">
          <span v-html="t('afficheurDePageWeb.main.basic.justSetAnUrlIn.value', `Just set an url in the iframe.`)" />
        </ka-text>
        <ka-iframe
          code="iframe"
          :options="{
            lazyOptions: {
              throttle: 200,
              once: true,
              intersection: { threshold: 0.1 }
            }
          }"
          value="https://www.youtube.com/embed/5Bk-PbPgaIk" />
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `fCu8fA2jRAcUWDsD8ZMYyb` }"
          value="https://www.kapix.fr" />
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container">
          <ka-text code="contenu">
            <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container.contenu.value', `Contenu`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1">
          <ka-text
            code="titre"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.titre.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.titreText.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.titre1.value', `Exemples`)" />
          </ka-text>
          <!-- sous-categorie -->
          <ka-container code="sous-categorie">
            <ka-text
              code="sous-titre"
              :options="{
                href: undefined,
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
            </ka-text>
            <!-- sous-sous-categorie -->
            <ka-container code="sous-sous-categorie">
              <ka-text
                code="sous-titre-text"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitreTextClick
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
              </ka-text>
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
    <kapix-teleport :disabled="!$breakpoint.mdAndUp">
      <ka-icon
        code="icon"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.iconClick,
          hidden: page.$info.afficheurDePageWeb.scrollTop > 0 ? false : null
        }"
        value="i-fa-solid:angle-double-up" />
    </kapix-teleport>
  </ka-container>
</template>

<route>
{
  "meta": {
    "layout": "Header:WithLeftSidebar"
  }
}
</route>

<script setup lang="ts">
import { generateMeta, syncPageStore } from 'kapix-components-vue3'
import { headerWithLeftSidebarAfficheurDePageWeb } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarAfficheurDePageWeb'
})
provide('$scoped', '--p16')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarAfficheurDePageWeb())
// SEO
if (props.seo) {
  // https://github.com/vueuse/head
  useHead({
    title: computed(() => page.$title),
    htmlAttrs: { lang: appData.locale },
    meta: computed(() => generateMeta({
      title: page.$title,
      description: page.$description,
      canonicalUrl: appData.hostname,
      publishedTime: page.$publishedTime,
      modifiedTime: page.$modifiedTime,
      ...appData.twitter
    }))
  })

  useSchemaOrg([
    // https://vue-schema-org.netlify.app/api/schema/webpage.html#type-definition
    defineWebPage({
      name: page.$title,
      description: page.$description,
      inLanguage: appData.locale,
      primaryImageOfPage: appData.twitter.image,
      datePublished: page.$publishedTime
      // dateModified: page.$modifiedTime?.toISOString()
    })
  ])
}
</script>
