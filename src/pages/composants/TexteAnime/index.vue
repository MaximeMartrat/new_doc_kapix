<template>
  <ka-container
    code="texte-anime"
    :data="page.$info.texteAnime">
    <!-- Main -->
    <ka-container code="main">
      <!-- Title -->
      <ka-container code="title">
        <ka-text code="texte-anime-text">
          <h1 v-html="t('texteAnime.main.title.texteAnimeText.value', `Texte Anime`)" />
        </ka-text>
      </ka-container>
      <!-- Basic -->
      <ka-container code="basic">
        <ka-text code="simple-usage">
          <h2 v-html="t('texteAnime.main.basic.simpleUsage.value', `<strong>Simple usage</strong>`)" />
        </ka-text>
        <ka-type-writer
          code="type-writer"
          :value="[
            [`Write and backspace`]
          ]" />
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `6s3fVL9Rr2SwR9qMc2VSv7` }"
          value="https://www.kapix.fr" />
        <ka-text code="api-il-manque-des">
          <h2 v-html="t('texteAnime.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </ka-text>
      </ka-container>
      <!-- Select all -->
      <ka-container code="select-all">
        <ka-text code="exemple">
          <h2 v-html="t('texteAnime.main.selectAll.exemple.value', `Exemple`)" />
        </ka-text>
        <ka-text code="usage">
          <h3 v-html="t('texteAnime.main.selectAll.usage.value', `Usage`)" />
        </ka-text>
        <ka-text code="select-all-text">
          <h4 v-html="t('texteAnime.main.selectAll.selectAllText.value', `Select all`)" />
        </ka-text>
        <ka-type-writer
          code="type-writer-1"
          :options="{
            eraseStyle: `select-all`,
            caretAnimation: null
          }"
          :value="[
            [`Write and select all`]
          ]" />
        <ka-code-preview
          code="code-preview-1"
          :options="{ elementToPreview: `2wSqHnDjg56bFkTa26ewGK` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Caret animation -->
      <ka-container code="caret-animation">
        <ka-text code="caret-animation-text">
          <h4 v-html="t('texteAnime.main.caretAnimation.caretAnimationText.value', `Caret animation`)" />
        </ka-text>
        <ka-type-writer
          code="type-writer-2"
          :options="{ caretAnimation: `phase` }"
          :value="[
            [`Write with phase caret`]
          ]" />
        <ka-code-preview
          code="code-preview-2"
          :options="{ elementToPreview: `vTFH2x5hNhgJ6ZZ9LsYmX8` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Auto Grow -->
      <ka-container code="auto-grow">
        <ka-text code="delay">
          <h4 v-html="t('texteAnime.main.autoGrow.delay.value', `Delay`)" />
        </ka-text>
        <ka-type-writer
          code="type-writer-3"
          :options="{
            preTypeDelay: 50,
            typeDelay: 50,
            preEraseDelay: 1000,
            eraseDelay: 50
          }"
          :value="[
            [`Write with phase caret`]
          ]" />
        <ka-code-preview
          code="code-preview-3"
          :options="{ elementToPreview: `fzsPUh8hown8SU9PHdLS5V` }"
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
            <span v-html="t('texteAnime.rightPanel.sousNav.container.contenu.value', `Contenu`)" />
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
            <span v-html="t('texteAnime.rightPanel.sousNav.container1.titre.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texteAnime.rightPanel.sousNav.container1.titreText.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texteAnime.rightPanel.sousNav.container1.titre1.value', `Exemples`)" />
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
              <span v-html="t('texteAnime.rightPanel.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('texteAnime.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texteAnime.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texteAnime.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
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
          hidden: page.$info.texteAnime.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarTexteAnime } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarTexteAnime'
})
provide('$scoped', '--p17')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarTexteAnime())
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
