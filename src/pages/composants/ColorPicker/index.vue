<template>
  <KaContainer
    code="color-picker"
    :data="page.$info.colorPicker">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Title -->
      <KaContainer code="title">
        <KaText code="color-pickers">
          <h1 v-html="t('colorPicker.main.title.colorPickers.value', `ColorPickers`)" />
        </KaText>
        <KaText code="description">
          <span v-html="t('colorPicker.main.title.description.value', `Color Pickers components allow you to select a color using a variety of input methods.`)" />
        </KaText>
      </KaContainer>
      <!-- Basic -->
      <KaContainer code="basic">
        <KaText code="usage">
          <h2 v-html="t('colorPicker.main.basic.usage.value', `Usage`)" />
        </KaText>
        <KaText code="v-color-picker-is">
          <span v-html="t('colorPicker.main.basic.vColorPickerIs.value', `<span style='background-color:rgb(245,245,245);color:rgb(0,0,0);'>v-color-picker </span>is a color picker, usefull for picking precise colors.`)" />
        </KaText>
        <KaGradientColorInput
          v-model="page.saisieDeDegradeDeCouleurs.value"
          code="saisie-de-degrade-de-couleurs"
          :options="{ placeholder: t('colorPicker.main.basic.saisieDeDegradeDeCouleurs.placeholder', `Saisie de dégradé de couleurs`) }" />
        <KaCodePreview
          code="code-preview"
          :options="{ elementToPreview: `ccwkwKJesGn5trjyuchKiR` }"
          value="https://www.kapix.fr" />
        <KaText code="api-il-manque-des">
          <h2 v-html="t('colorPicker.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </KaText>
      </KaContainer>
      <!-- Auto Grow -->
      <KaContainer code="auto-grow">
        <KaText code="exemple">
          <h2 v-html="t('colorPicker.main.autoGrow.exemple.value', `Exemple`)" />
        </KaText>
        <KaText code="text-1">
          <h3 v-html="t('colorPicker.main.autoGrow.text1.value', `Usage`)" />
        </KaText>
        <KaText code="text-2">
          <h4 v-html="t('colorPicker.main.autoGrow.text2.value', `Auto Grow`)" />
        </KaText>
        <KaText code="when-using-the-auto-grow">
          <span v-html="t('colorPicker.main.autoGrow.whenUsingTheAutoGrow.value', `When using the auto-grow prop, textarea’s will automatically increase in size when the contained text exceeds its size.`)" />
        </KaText>
        <KaGradientColorInput
          v-model="page.gradientColor1.value"
          code="gradient-color-1"
          :options="{ placeholder: t('colorPicker.main.autoGrow.gradientColor1.placeholder', `Saisie de dégradé de couleurs`) }" />
        <KaCodePreview
          code="code-preview-1"
          :options="{ elementToPreview: `uf8VizeQWQJDB3Z8Yt3wCU` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Colors -->
      <KaContainer code="colors">
        <KaText code="background-color">
          <h4 v-html="t('colorPicker.main.colors.backgroundColor.value', `Background color`)" />
        </KaText>
        <KaText code="the-background-color">
          <span v-html="t('colorPicker.main.colors.theBackgroundColor.value', `The background-color and color props give you more control over styling v-textarea’s.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea1.value"
          code="text-area-1"
          :options="{
            style: {
              color: `$invert`,
              innerBackgroundColor: appData.theme.fontHyperlinkColor
            },
            placeholder: t('colorPicker.main.colors.textArea1.placeholder', `Text area 1`)
          }" />
        <KaCodePreview
          code="code-preview-2"
          :options="{ elementToPreview: `n9zxuVDSCrRS4J47GY79er` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Autocomplete -->
      <KaContainer code="autocomplete">
        <KaText code="browser-autocomplete">
          <h4 v-html="t('colorPicker.main.autocomplete.browserAutocomplete.value', `Browser autocomplete`)" />
        </KaText>
        <KaText code="the-autocomplete-prop">
          <span v-html="t('colorPicker.main.autocomplete.theAutocompleteProp.value', `The autocomplete prop gives you the option to enable the browser to predict user input.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea.value"
          code="text-area"
          :options="{ placeholder: t('colorPicker.main.autocomplete.textArea.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-3"
          :options="{ elementToPreview: `cxKNqarmMpLfPj6si86RvN` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Clearable -->
      <KaContainer code="clearable">
        <KaText code="text-3">
          <h4 v-html="t('colorPicker.main.clearable.text3.value', `Clearable`)" />
        </KaText>
        <KaText code="you-can-clear-the-text">
          <span v-html="t('colorPicker.main.clearable.youCanClearTheText.value', `You can clear the text from a v-textarea by using the clearable prop, and customize the icon used with the clearable-icon prop.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.thisIsClearableText.value"
          code="this-is-clearable-text"
          :options="{ placeholder: `Text` }" />
        <KaCodePreview
          code="code-preview-4"
          :options="{ elementToPreview: `fvZEx2VuRL4BFqS6b1CQPi` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Counter -->
      <KaContainer code="counter">
        <KaText code="text-4">
          <h4 v-html="t('colorPicker.main.counter.text4.value', `Counter`)" />
        </KaText>
        <KaText code="the-counter-prop-informs">
          <span v-html="t('colorPicker.main.counter.theCounterPropInforms.value', `The counter prop informs the user of a character limit for the v-textarea.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea1.value"
          code="text-area-1"
          :options="{ placeholder: `Text` }" />
        <KaCodePreview
          code="code-preview-5"
          :options="{ elementToPreview: `uL2WViC6JsoNS3kpCYUM9d` }"
          value="https://www.kapix.fr" />
      </KaContainer>
    </KaContainer>
  </KaContainer>
</template>

<route>
{
  "meta": {
    "layout": "Header:WithLeftSidebar"
  }
}
</route>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { headerWithLeftSidebarColorPicker } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarColorPicker'
})
provide('$scoped', '-p13')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarColorPicker()
provide('$elements', page.$elements)
provide('$parentPage', page)
onBeforeMount(() => page.beforeMount())
onMounted(() => page.mounted())
onServerPrefetch(() => page.serverPrefetch())
onBeforeUnmount(() => page.beforeUnmount())
onUnmounted(() => page.unmounted())

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
