<template>
  <ka-container
    code="color-pickers"
    :data="page.$info.colorPickers">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <ka-text code="titre">
          <h1 v-html="t('colorPickers.main.sousMain.titre.value', `Color pickers`)" />
        </ka-text>
        <ka-text code="the-color-picker-allows">
          <span v-html="t('colorPickers.main.sousMain.theColorPickerAllows.value', `The color picker allows you to select a color using a variety of input methods`)" />
        </ka-text>
        <!-- Utilisation -->
        <ka-container code="utilisation">
          <ka-text code="titre-categorie">
            <h2 v-html="t('colorPickers.main.sousMain.utilisation.titreCategorie.value', `Usage`)" />
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
              <ka-color-input
                v-model="page.colorPicker.value"
                code="color-picker"
                :options="{
                  colorIcon: `i-fa-solid:palette`,
                  showText: page.showText.value,
                  showColor: page.showColor.value,
                  showLabel: page.showLabel.value,
                  placeholder: t('colorPickers.main.sousMain.container3.container.container2.colorPicker.placeholder', `Color picker`)
                }" />
            </ka-container>
            <!-- Container -->
            <ka-container code="container-1">
              <!-- Container -->
              <ka-container code="container-4">
                <ka-icon
                  code="color-icon"
                  value="i-fa-solid:palette" />
                <ka-text code="color-icon-text">
                  <span v-html="t('colorPickers.main.sousMain.container3.container.container1.container4.colorIconText.value', `Color Icon`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-5">
                <ka-checkbox-input
                  v-model="page.showText.value"
                  code="show-text"
                  :options="{ debounce: 100 }" />
                <ka-text code="show-text-text">
                  <span v-html="t('colorPickers.main.sousMain.container3.container.container1.container5.showTextText.value', `Show Text`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-6">
                <ka-checkbox-input
                  v-model="page.showColor.value"
                  code="show-color"
                  :options="{ debounce: 100 }" />
                <ka-text code="show-color-text">
                  <span v-html="t('colorPickers.main.sousMain.container3.container.container1.container6.showColorText.value', `Show Color`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-7">
                <ka-checkbox-input
                  v-model="page.showLabel.value"
                  code="show-label"
                  :options="{ debounce: 100 }" />
                <ka-text code="show-label-text">
                  <span v-html="t('colorPickers.main.sousMain.container3.container.container1.container7.showLabelText.value', `Show Label`)" />
                </ka-text>
              </ka-container>
            </ka-container>
          </ka-container>
        </ka-container>
        <!-- API -->
        <ka-container code="api">
          <ka-code-preview
            code="code-preview"
            :options="{ elementToPreview: `5cibV9gxkhnYGzp1MBAJcn` }"
            value="https://www.kapix.fr" />
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
            <span v-html="t('colorPickers.rightPanel.sousNav.container8.contents.value', `Contents`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1-container">
          <ka-text
            code="titre-text"
            :options="{
              href: { hash: `#utilisation--p23` },
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('colorPickers.rightPanel.sousNav.container1Container.titreText.value', `Usage`)" />
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
          hidden: page.$info.colorPickers.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarColorPickers } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarColorPickers'
})
provide('$scoped', '--p23')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarColorPickers())
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
