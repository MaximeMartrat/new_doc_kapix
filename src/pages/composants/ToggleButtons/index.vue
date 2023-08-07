<template>
  <ka-container
    code="toggle-buttons"
    :data="page.$info.toggleButtons">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <ka-text code="titre">
          <h1 v-html="t('toggleButtons.main.sousMain.titre.value', `ToggleButtons`)" />
        </ka-text>
        <!-- Utilisation -->
        <ka-container code="utilisation">
          <ka-text code="titre-categorie">
            <h2 v-html="t('toggleButtons.main.sousMain.utilisation.titreCategorie.value', `Usage`)" />
          </ka-text>
          <ka-text code="toggle-buttons-allow">
            <span v-html="t('toggleButtons.main.sousMain.utilisation.toggleButtonsAllow.value', `Toggle buttons allow you to create a styled group of buttons that can be selected or toggled under a single v-model`)" />
          </ka-text>
          <!-- Container -->
          <ka-container code="container">
            <!-- Container -->
            <ka-container code="container-1">
              <ka-text code="exclusive">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container1.exclusive.value', `Exclusive`)" />
              </ka-text>
              <ka-toggle-button-input
                v-model="page.choixAvecBoutons.value"
                code="choix-avec-boutons"
                :options="{
                  debounce: 500,
                  items: page.$constants.choixAvecBoutonsItems,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container1.choixAvecBoutons.placeholder', `Choix avec boutons`)
                }" />
            </ka-container>
            <!-- Container -->
            <ka-container code="container-2">
              <ka-text code="multiple">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container2.multiple.value', `Multiple`)" />
              </ka-text>
              <ka-toggle-button-input
                v-model="page.choixAvecBoutonsToggleButton.value"
                code="choix-avec-boutons-toggle-button"
                :options="{
                  debounce: 500,
                  items: page.$constants.choixAvecBoutonsToggleButtonItems,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container2.choixAvecBoutonsToggleButton.placeholder', `Choix avec boutons`)
                }" />
            </ka-container>
            <!-- Container -->
            <ka-container code="container-3">
              <ka-text code="no-options-selected">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container3.noOptionsSelected.value', `No Options Selected`)" />
              </ka-text>
              <ka-toggle-button-input
                v-model="page.choixAvecBoutons1.value"
                code="choix-avec-boutons-1"
                :options="{
                  debounce: 500,
                  items: page.$constants.choixAvecBoutons1Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container3.choixAvecBoutons1.placeholder', `Choix avec boutons`)
                }" />
            </ka-container>
            <!-- Container -->
            <ka-container code="container-4">
              <ka-text code="mandatory">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container4.mandatory.value', `Mandatory`)" />
              </ka-text>
              <ka-toggle-button-input
                v-model="page.choixAvecBoutons2.value"
                code="choix-avec-boutons-2"
                :options="{
                  debounce: 500,
                  items: page.$constants.choixAvecBoutons2Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container4.choixAvecBoutons2.placeholder', `Choix avec boutons`)
                }" />
            </ka-container>
            <!-- Container -->
            <ka-container code="container-5">
              <ka-text code="text-options">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container5.textOptions.value', `Text Options`)" />
              </ka-text>
              <ka-toggle-button-input
                v-model="page.choixAvecBoutons3.value"
                code="choix-avec-boutons-3"
                :options="{
                  debounce: 500,
                  items: page.$constants.choixAvecBoutons3Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container5.choixAvecBoutons3.placeholder', `Choix avec boutons`)
                }" />
            </ka-container>
            <!-- Container -->
            <ka-container code="container-6">
              <ka-text code="text-amp-icon-options">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container6.textAmpIconOptions.value', `Text & Icon Options`)" />
              </ka-text>
              <ka-toggle-button-input
                v-model="page.choixAvecBoutons4.value"
                code="choix-avec-boutons-4"
                :options="{
                  debounce: 500,
                  items: page.$constants.choixAvecBoutons4Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container6.choixAvecBoutons4.placeholder', `Choix avec boutons`)
                }" />
            </ka-container>
          </ka-container>
        </ka-container>
        <!-- API -->
        <ka-container code="api">
          <ka-text code="api-text">
            <h2 v-html="t('toggleButtons.main.sousMain.api.apiText.value', `API (il manque des informations)`)" />
          </ka-text>
        </ka-container>
        <!-- Example -->
        <ka-container code="example">
          <ka-text code="examples">
            <h2 v-html="t('toggleButtons.main.sousMain.example.examples.value', `Examples`)" />
          </ka-text>
          <!-- Props -->
          <ka-container code="props">
            <ka-text code="props-text">
              <h3 v-html="t('toggleButtons.main.sousMain.example.props.propsText.value', `Props`)" />
            </ka-text>
            <!-- Mandatory -->
            <ka-container code="mandatory-container">
              <ka-text code="mandatory-text">
                <h4 v-html="t('toggleButtons.main.sousMain.example.props.mandatoryContainer.mandatoryText.value', `Mandatory`)" />
              </ka-text>
              <ka-text code="a-toggle-buttons-with">
                <span v-html="t('toggleButtons.main.sousMain.example.props.mandatoryContainer.aToggleButtonsWith.value', `A toggleButtons with the mandatory prop will always have a value.`)" />
              </ka-text>
              <ka-toggle-button-input
                v-model="page.mandatoryToggleButton.value"
                code="mandatory-toggle-button"
                :options="{
                  debounce: 500,
                  items: page.$constants.mandatoryToggleButtonItems,
                  placeholder: t('toggleButtons.main.sousMain.example.props.mandatoryContainer.mandatoryToggleButton.placeholder', `Mandatory`)
                }" />
            </ka-container>
            <ka-code-preview
              code="code-preview"
              :options="{ elementToPreview: `q497nBqt2UQXG2BoPKsXXh` }"
              value="https://www.kapix.fr" />
            <!-- Multiple -->
            <ka-container code="multiple-container">
              <ka-text code="multiple-text">
                <h4 v-html="t('toggleButtons.main.sousMain.example.props.multipleContainer.multipleText.value', `Multiple`)" />
              </ka-text>
              <ka-text code="a-toggle-buttons-with-text">
                <span v-html="t('toggleButtons.main.sousMain.example.props.multipleContainer.aToggleButtonsWithText.value', `A toggleButtons with the multiple prop will allow a user to select multiple return values as an array.`)" />
              </ka-text>
              <ka-toggle-button-input
                v-model="page.multipleToggleButton.value"
                code="multiple-toggle-button"
                :options="{
                  debounce: 500,
                  items: page.$constants.multipleToggleButtonItems,
                  placeholder: t('toggleButtons.main.sousMain.example.props.multipleContainer.multipleToggleButton.placeholder', `Multiple`)
                }" />
            </ka-container>
            <ka-code-preview
              code="code-preview-1"
              :options="{ elementToPreview: `uNsPbdhPduJVjTusNGKUPi` }"
              value="https://www.kapix.fr" />
            <!-- Rounded -->
            <ka-container code="rounded">
              <ka-text code="rounded-text">
                <h4 v-html="t('toggleButtons.main.sousMain.example.props.rounded.roundedText.value', `Rounded`)" />
              </ka-text>
              <ka-text code="you-can-make-toggle-buttons">
                <span v-html="t('toggleButtons.main.sousMain.example.props.rounded.youCanMakeToggleButtons.value', `You can make toggleButtons rounded using the rounded prop.`)" />
              </ka-text>
              <!-- Container -->
              <ka-container code="container-7">
                <ka-toggle-button-input
                  v-model="page.roundedToggleButton.value"
                  code="rounded-toggle-button"
                  :options="{
                    debounce: 500,
                    items: page.$constants.roundedToggleButtonItems,
                    placeholder: t('toggleButtons.main.sousMain.example.props.rounded.container7.roundedToggleButton.placeholder', `Rounded`)
                  }" />
              </ka-container>
              <ka-code-preview
                code="code-preview-1-code-preview"
                :options="{ elementToPreview: `qG6cwPqeSziENNyTEarAFe` }"
                value="https://www.kapix.fr" />
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
        <ka-container code="container-8">
          <ka-text code="contents">
            <span v-html="t('toggleButtons.rightPanel.sousNav.container8.contents.value', `Contents`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1-container">
          <ka-text
            code="titre-text"
            :options="{
              href: { hash: `#utilisation--p7` },
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('toggleButtons.rightPanel.sousNav.container1Container.titreText.value', `Usage`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: { hash: `#api--p7` },
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('toggleButtons.rightPanel.sousNav.container1Container.titre1.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-2"
            :options="{
              href: { hash: `#example--p7` },
              ariaLabel: `titre`,
              click: page.titre2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('toggleButtons.rightPanel.sousNav.container1Container.titre2.value', `Examples`)" />
          </ka-text>
          <!-- sous-categorie -->
          <ka-container code="sous-categorie">
            <ka-text
              code="sous-titre"
              :options="{
                href: { hash: `#props--p7` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('toggleButtons.rightPanel.sousNav.container1Container.sousCategorie.sousTitre.value', `Props`)" />
            </ka-text>
            <!-- sous-sous-categorie -->
            <ka-container code="sous-sous-categorie">
              <ka-text
                code="sous-titre-text"
                :options="{
                  href: { hash: `#mandatory-container--p7` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitreTextClick
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('toggleButtons.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitreText.value', `Mandatory`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: { hash: `#multiple-container--p7` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('toggleButtons.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre1.value', `Multiple`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: { hash: `#rounded--p7` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('toggleButtons.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre2.value', `Rounded`)" />
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
          hidden: page.$info.toggleButtons.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarToggleButtons } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarToggleButtons'
})
provide('$scoped', '--p7')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarToggleButtons())
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
