<template>
  <ka-container
    code="number-input"
    :data="page.$info.numberInput">
    <!-- Page -->
    <ka-container code="page">
      <!-- Sous page -->
      <ka-container code="sous-page">
        <ka-text
          code="number-input-h-1"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h1 v-html="t('numberInput.page.sousPage.numberInputH1.value', `Number input`)" />
        </ka-text>
        <ka-text code="text" />
        <!-- Container -->
        <ka-container code="container">
          <!-- Haut -->
          <ka-container code="haut">
            <ka-icon
              code="icon"
              :options="{
                click: page.iconClick,
                $state: { selected: page.$data.reverseColor === `Colored` }
              }"
              :selected="{ click: page.iconClickWhenSelected }"
              :value="page.$data.reverseColor === `Default` ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
            <ka-icon
              code="icon-1"
              :options="{
                click: page.icon1Click,
                $state: { selected: page.$data.previewCode === `Clicked` }
              }"
              :selected="{ click: page.icon1ClickWhenSelected }"
              value="i-fa-solid:code" />
          </ka-container>
          <ka-code-preview
            code="code-preview"
            :options="{
              hidden: page.$data.previewCode === `Default` ? null : false,
              elementToPreview: `f6mh1FXHtwWooF6gFmtH2p`
            }"
            value="https://www.kapix.fr" />
          <!-- Bas -->
          <ka-container
            code="bas"
            :options="{
              style: {
                color: `$invert`,
                innerBackgroundColor: page.$data.reverseColor === `Default` ? null : {
                  Angle: 90,
                  Colors: [`#333333ff`]
                }
              }
            }">
            <ka-number-input
              v-model="page.saisieDeNombre.value"
              code="saisie-de-nombre"
              :options="{ placeholder: t('numberInput.page.sousPage.container.bas.saisieDeNombre.placeholder', `Saisie de nombre`) }" />
          </ka-container>
        </ka-container>
        <!-- Ready -->
        <ka-container code="ready">
          <ka-text
            code="accessibility"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h2 v-html="t('numberInput.page.sousPage.ready.accessibility.value', `Ready for more?`)" />
          </ka-text>
          <ka-text code="continue-your-learning">
            <span v-html="t('numberInput.page.sousPage.ready.continueYourLearning.value', `Continue your learning with related content selected by the <a href='https://v2.vuetifyjs.com/en/about/meet-the-team/'>Team</a> or move between pages by using the navigation links below.`)" />
          </ka-text>
          <!-- Global -->
          <ka-container code="global">
            <!-- Gauche -->
            <ka-container code="gauche">
              <ka-icon
                code="edit"
                value="i-fa-solid:edit" />
              <!-- Droite -->
              <ka-container code="droite">
                <ka-text code="icon-fonts">
                  <span v-html="t('numberInput.page.sousPage.ready.global.gauche.droite.iconFonts.value', `Icon Fonts`)" />
                </ka-text>
                <ka-text code="features">
                  <span v-html="t('numberInput.page.sousPage.ready.global.gauche.droite.features.value', `Features`)" />
                </ka-text>
              </ka-container>
            </ka-container>
            <!-- Milieu -->
            <ka-container code="milieu">
              <ka-icon
                code="colonne"
                value="i-fa-brands:trello" />
              <!-- Droite -->
              <ka-container code="droite-container">
                <ka-text code="buttons">
                  <span v-html="t('numberInput.page.sousPage.ready.global.milieu.droiteContainer.buttons.value', `Buttons`)" />
                </ka-text>
                <ka-text code="components">
                  <span v-html="t('numberInput.page.sousPage.ready.global.milieu.droiteContainer.components.value', `Components`)" />
                </ka-text>
              </ka-container>
            </ka-container>
            <!-- Droite -->
            <ka-container code="droite-1">
              <ka-icon
                code="button"
                value="i-fa-solid:grip-vertical" />
              <!-- Droite@ -->
              <ka-container code="droite-2">
                <ka-text code="cards">
                  <span v-html="t('numberInput.page.sousPage.ready.global.droite1.droite2.cards.value', `Cards`)" />
                </ka-text>
                <ka-text code="components-text">
                  <span v-html="t('numberInput.page.sousPage.ready.global.droite1.droite2.componentsText.value', `Components`)" />
                </ka-text>
              </ka-container>
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container-1">
          <ka-text code="contenu">
            <span v-html="t('numberInput.rightPanel.sousNav.container1.contenu.value', `Contenu`)" />
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
            <span v-html="t('numberInput.rightPanel.sousNav.container1Container.titre.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('numberInput.rightPanel.sousNav.container1Container.titreText.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('numberInput.rightPanel.sousNav.container1Container.titre1.value', `Exemples`)" />
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
              <span v-html="t('numberInput.rightPanel.sousNav.container1Container.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('numberInput.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('numberInput.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('numberInput.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
              </ka-text>
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
    <kapix-teleport :disabled="!$breakpoint.mdAndUp">
      <ka-icon
        code="icon-2"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.icon2Click,
          hidden: page.$info.numberInput.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarNumberInput } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarNumberInput'
})
provide('$scoped', '--p26')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarNumberInput())
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
