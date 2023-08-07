<template>
  <ka-container
    code="gradient-color-picker"
    :data="page.$info.gradientColorPicker">
    <!-- Main -->
    <ka-container code="main">
      <!-- Title -->
      <ka-container code="title">
        <ka-text code="gradient-color-pickers">
          <h1 v-html="t('gradientColorPicker.main.title.gradientColorPickers.value', `GradientColorPickers`)" />
        </ka-text>
        <ka-text code="description">
          <span v-html="t('gradientColorPicker.main.title.description.value', `Color Pickers components allow you to select a color using a variety of input methods.`)" />
        </ka-text>
      </ka-container>
      <!-- Basic -->
      <ka-container code="basic">
        <ka-text code="usage">
          <h2 v-html="t('gradientColorPicker.main.basic.usage.value', `Usage`)" />
        </ka-text>
        <ka-text code="v-color-picker-is">
          <span v-html="t('gradientColorPicker.main.basic.vColorPickerIs.value', `<span style='background-color:rgb(245,245,245);color:rgb(0,0,0);'>v-color-picker </span>is a color picker, usefull for picking precise colors.`)" />
        </ka-text>
        <ka-gradient-color-input
          v-model="page.saisieDeDegradeDeCouleurs.value"
          code="saisie-de-degrade-de-couleurs"
          :options="{
            colorIcon: `i-fa-solid:palette`,
            showColor: false,
            placeholder: t('gradientColorPicker.main.basic.saisieDeDegradeDeCouleurs.placeholder', `Saisie de dégradé de couleurs`)
          }" />
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `ybKe7qsda23mBYeqtKKse` }"
          value="https://www.kapix.fr" />
        <ka-text code="api-il-manque-des">
          <h2 v-html="t('gradientColorPicker.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </ka-text>
      </ka-container>
      <!-- Auto Grow -->
      <ka-container code="auto-grow">
        <ka-text code="exemple">
          <h2 v-html="t('gradientColorPicker.main.autoGrow.exemple.value', `Exemple`)" />
        </ka-text>
      </ka-container>
    </ka-container>
    <ka-color-input
      v-model="page.saisieDeCouleur.value"
      code="saisie-de-couleur"
      :options="{ placeholder: t('gradientColorPicker.saisieDeCouleur.placeholder', `Saisie de couleur`) }" />
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
import { headerWithLeftSidebarGradientColorPicker } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarGradientColorPicker'
})
provide('$scoped', '--p13')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarGradientColorPicker())
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
