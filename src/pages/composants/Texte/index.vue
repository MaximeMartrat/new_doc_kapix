<template>
  <ka-container
    code="texte"
    :data="page.$info.texte">
    <!-- Main -->
    <ka-container code="main">
      <!-- Title -->
      <ka-container code="title">
        <ka-text code="texte-anime">
          <h1 v-html="t('texte.main.title.texteAnime.value', `Texte Anime`)" />
        </ka-text>
      </ka-container>
      <!-- Basic -->
      <ka-container code="basic">
        <ka-text code="simple-usage">
          <h2 v-html="t('texte.main.basic.simpleUsage.value', `<strong>Simple usage</strong>`)" />
        </ka-text>
        <ka-text code="text-2">
          <span v-html="t('texte.main.basic.text2.value', `Du texte ici`)" />
        </ka-text>
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `uWhHT69jcrpPQL58NHPeom` }"
          value="https://www.kapix.fr" />
        <ka-text code="api-il-manque-des">
          <h2 v-html="t('texte.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </ka-text>
      </ka-container>
      <!-- Select all -->
      <ka-container code="select-all">
        <ka-text code="exemple">
          <h2 v-html="t('texte.main.selectAll.exemple.value', `Exemple`)" />
        </ka-text>
        <ka-text code="usage">
          <h3 v-html="t('texte.main.selectAll.usage.value', `Usage`)" />
        </ka-text>
        <ka-text code="seo">
          <h4 v-html="t('texte.main.selectAll.seo.value', `SEO`)" />
        </ka-text>
        <ka-text code="control-the-size-and">
          <span v-html="t('texte.main.selectAll.controlTheSizeAnd.value', `Control the size and style of text using the Typography helper classes. These values are based upon the Material Design type specification.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container">
          <ka-text code="heading-1">
            <h1 v-html="t('texte.main.selectAll.container.heading1.value', `Heading 1`)" />
          </ka-text>
          <ka-text code="heading-2">
            <h2 v-html="t('texte.main.selectAll.container.heading2.value', `Heading 2`)" />
          </ka-text>
          <ka-text code="heading-3">
            <h3 v-html="t('texte.main.selectAll.container.heading3.value', `Heading 3`)" />
          </ka-text>
          <ka-text code="heading-4">
            <h4 v-html="t('texte.main.selectAll.container.heading4.value', `Heading 4`)" />
          </ka-text>
          <ka-text code="heading-5">
            <h5 v-html="t('texte.main.selectAll.container.heading5.value', `Heading 5`)" />
          </ka-text>
          <ka-text code="heading-6">
            <h6 v-html="t('texte.main.selectAll.container.heading6.value', `Heading 6`)" />
          </ka-text>
        </ka-container>
        <ka-code-preview
          code="code-preview-1"
          :options="{ elementToPreview: `c7WcMPGMcUmzV9Bwiv6WmG` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Caret animation -->
      <ka-container code="caret-animation">
        <ka-text code="text-color">
          <h4 v-html="t('texte.main.caretAnimation.textColor.value', `Text Color `)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-1">
          <ka-text
            code="jaune-kapix"
            :options="{ style: { color: appData.theme.secondaryColor } }">
            <span v-html="t('texte.main.caretAnimation.container1.jauneKapix.value', `Jaune Kapix`)" />
          </ka-text>
          <ka-text
            code="bleu-kapix"
            :options="{ style: { color: appData.theme.primaryColor } }">
            <span v-html="t('texte.main.caretAnimation.container1.bleuKapix.value', `Bleu Kapix`)" />
          </ka-text>
        </ka-container>
        <ka-code-preview
          code="code-preview-2"
          :options="{ elementToPreview: `fdZ1sU9H4cQ64bHjdWgacH` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Auto Grow -->
      <ka-container code="auto-grow">
        <ka-text code="back-color">
          <h4 v-html="t('texte.main.autoGrow.backColor.value', `Back Color`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-2">
          <ka-text
            code="jaune-kapix-text"
            :options="{
              style: {
                color: `$invert`,
                backgroundColor: appData.theme.secondaryColor
              }
            }">
            <span v-html="t('texte.main.autoGrow.container2.jauneKapixText.value', `Jaune Kapix`)" />
          </ka-text>
          <ka-text
            code="bleu-kapix-text"
            :options="{
              style: {
                color: `$invert`,
                backgroundColor: appData.theme.primaryColor
              }
            }">
            <span v-html="t('texte.main.autoGrow.container2.bleuKapixText.value', `Bleu Kapix`)" />
          </ka-text>
        </ka-container>
        <ka-code-preview
          code="code-preview-3"
          :options="{ elementToPreview: `mebcfJCK983hhP7r1GP1fn` }"
          value="https://www.kapix.fr" />
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container-3">
          <ka-text code="contenu">
            <span v-html="t('texte.rightPanel.sousNav.container3.contenu.value', `Contenu`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1-container">
          <ka-text
            code="titre"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texte.rightPanel.sousNav.container1Container.titre.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texte.rightPanel.sousNav.container1Container.titreText.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texte.rightPanel.sousNav.container1Container.titre1.value', `Exemples`)" />
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
              <span v-html="t('texte.rightPanel.sousNav.container1Container.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('texte.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texte.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texte.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
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
          hidden: page.$info.texte.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarTexte } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarTexte'
})
provide('$scoped', '--p21')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarTexte())
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
