<template>
  <ka-container
    code="language-selection"
    :data="page.$info.languageSelection">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <ka-text code="titre">
          <h1 v-html="t('languageSelection.main.sousMain.titre.value', `Language selection`)" />
        </ka-text>
        <ka-text code="the-language-selection">
          <span v-html="t('languageSelection.main.sousMain.theLanguageSelection.value', `The language selection allows us to create a selection input according to the languages you have selected in the translation cap`)" />
        </ka-text>
        <!-- Utilisation -->
        <ka-container code="utilisation">
          <ka-text code="titre-categorie">
            <h2 v-html="t('languageSelection.main.sousMain.utilisation.titreCategorie.value', `Usage`)" />
          </ka-text>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-3">
          <!-- Container -->
          <ka-container code="container">
            <!-- Container 2 -->
            <ka-container
              code="container-2"
              inner>
              <ka-language-selection
                code="language-selection-1"
                :options="{
                  showName: page.displayName.value,
                  fullName: page.fullName.value,
                  codeName: page.code.value
                }" />
            </ka-container>
            <!-- Container -->
            <ka-container code="container-1">
              <!-- Container -->
              <ka-container code="container-4">
                <ka-checkbox-input
                  v-model="page.displayName.value"
                  code="display-name"
                  :options="{ debounce: 100 }" />
                <ka-text code="display-name-text">
                  <span v-html="t('languageSelection.main.sousMain.container3.container.container1.container4.displayNameText.value', `Display name`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-5">
                <ka-checkbox-input
                  v-model="page.fullName.value"
                  code="full-name"
                  :options="{ debounce: 100 }" />
                <ka-text code="full-name-text">
                  <span v-html="t('languageSelection.main.sousMain.container3.container.container1.container5.fullNameText.value', `Full Name`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-6">
                <ka-checkbox-input
                  v-model="page.code.value"
                  code="code"
                  :options="{ debounce: 100 }" />
                <ka-text code="code-text">
                  <span v-html="t('languageSelection.main.sousMain.container3.container.container1.container6.codeText.value', `Code `)" />
                </ka-text>
              </ka-container>
            </ka-container>
          </ka-container>
        </ka-container>
        <!-- API -->
        <ka-container code="api">
          <ka-code-preview
            code="code-preview"
            :options="{ elementToPreview: `pwzqNjqtSF33MDMevJ7svr` }"
            value="https://www.kapix.fr" />
        </ka-container>
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container-7">
          <ka-text code="contents">
            <span v-html="t('languageSelection.rightPanel.sousNav.container7.contents.value', `Contents`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1-container">
          <ka-text
            code="titre-text"
            :options="{
              href: { hash: `#utilisation--p30` },
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('languageSelection.rightPanel.sousNav.container1Container.titreText.value', `Usage`)" />
          </ka-text>
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
          hidden: page.$info.languageSelection.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarLanguageSelection } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarLanguageSelection'
})
provide('$scoped', '--p30')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarLanguageSelection())
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
