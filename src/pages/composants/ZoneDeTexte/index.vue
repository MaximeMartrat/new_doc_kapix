<template>
  <ka-container
    code="zone-de-texte"
    :data="page.$info.zoneDeTexte">
    <!-- Main -->
    <ka-container code="main">
      <!-- Title -->
      <ka-container code="title">
        <ka-text code="textareas">
          <h1 v-html="t('zoneDeTexte.main.title.textareas.value', `Textareas`)" />
        </ka-text>
        <ka-text code="description">
          <span v-html="t('zoneDeTexte.main.title.description.value', `Textarea components are used for collecting large amounts of textual data.`)" />
        </ka-text>
      </ka-container>
      <!-- Basic -->
      <ka-container code="basic">
        <ka-text code="usage">
          <h2 v-html="t('zoneDeTexte.main.basic.usage.value', `Usage`)" />
        </ka-text>
        <ka-text code="v-textarea-in-its-simplest">
          <span v-html="t('zoneDeTexte.main.basic.vTextareaInItsSimplest.value', `v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea.value"
          code="text-area"
          :options="{ placeholder: t('zoneDeTexte.main.basic.textArea.placeholder', `Text area`) }" />
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `5v4FS3LLehsGsjqqbQ3pwN` }"
          value="https://www.kapix.fr" />
        <ka-text code="api-il-manque-des">
          <h2 v-html="t('zoneDeTexte.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </ka-text>
      </ka-container>
      <!-- Auto Grow -->
      <ka-container code="auto-grow">
        <ka-text code="exemple">
          <h2 v-html="t('zoneDeTexte.main.autoGrow.exemple.value', `Exemple`)" />
        </ka-text>
        <ka-text code="usage-text">
          <h3 v-html="t('zoneDeTexte.main.autoGrow.usageText.value', `Usage`)" />
        </ka-text>
        <ka-text code="auto-grow-text">
          <h4 v-html="t('zoneDeTexte.main.autoGrow.autoGrowText.value', `Auto Grow`)" />
        </ka-text>
        <ka-text code="when-using-the-auto-grow">
          <span v-html="t('zoneDeTexte.main.autoGrow.whenUsingTheAutoGrow.value', `When using the auto-grow prop, textarea’s will automatically increase in size when the contained text exceeds its size.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea1.value"
          code="text-area-1"
          :options="{ placeholder: t('zoneDeTexte.main.autoGrow.textArea1.placeholder', `Text area`) }" />
        <ka-code-preview
          code="code-preview-1"
          :options="{ elementToPreview: `e4czeEcf4NuMafZqh8x1sc` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Colors -->
      <ka-container code="colors">
        <ka-text code="background-color">
          <h4 v-html="t('zoneDeTexte.main.colors.backgroundColor.value', `Background color`)" />
        </ka-text>
        <ka-text code="the-background-color">
          <span v-html="t('zoneDeTexte.main.colors.theBackgroundColor.value', `The background-color and color props give you more control over styling v-textarea’s.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea1TextArea.value"
          code="text-area-1-text-area"
          :options="{
            style: {
              color: `$invert`,
              innerBackgroundColor: appData.theme.fontHyperlinkColor
            },
            placeholder: t('zoneDeTexte.main.colors.textArea1TextArea.placeholder', `Text area 1`)
          }" />
        <ka-code-preview
          code="code-preview-2"
          :options="{ elementToPreview: `izi9iuHeHKq8ZzH53g7vKV` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Autocomplete -->
      <ka-container code="autocomplete">
        <ka-text code="browser-autocomplete">
          <h4 v-html="t('zoneDeTexte.main.autocomplete.browserAutocomplete.value', `Browser autocomplete`)" />
        </ka-text>
        <ka-text code="the-autocomplete-prop">
          <span v-html="t('zoneDeTexte.main.autocomplete.theAutocompleteProp.value', `The autocomplete prop gives you the option to enable the browser to predict user input.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea2.value"
          code="text-area-2"
          :options="{ placeholder: t('zoneDeTexte.main.autocomplete.textArea2.placeholder', `Text area`) }" />
        <ka-code-preview
          code="code-preview-3"
          :options="{ elementToPreview: `nxhEdyhbMLi4LNKH2qTE81` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Clearable -->
      <ka-container code="clearable">
        <ka-text code="clearable-text">
          <h4 v-html="t('zoneDeTexte.main.clearable.clearableText.value', `Clearable`)" />
        </ka-text>
        <ka-text code="you-can-clear-the-text">
          <span v-html="t('zoneDeTexte.main.clearable.youCanClearTheText.value', `You can clear the text from a v-textarea by using the clearable prop, and customize the icon used with the clearable-icon prop.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.thisIsClearableText.value"
          code="this-is-clearable-text"
          :options="{ placeholder: `Text` }" />
        <ka-code-preview
          code="code-preview-4"
          :options="{ elementToPreview: `hnwTxsavb2knotMy2uTfeD` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Counter -->
      <ka-container code="counter">
        <ka-text code="counter-text">
          <h4 v-html="t('zoneDeTexte.main.counter.counterText.value', `Counter`)" />
        </ka-text>
        <ka-text code="the-counter-prop-informs">
          <span v-html="t('zoneDeTexte.main.counter.theCounterPropInforms.value', `The counter prop informs the user of a character limit for the v-textarea.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea3.value"
          code="text-area-3"
          :options="{ placeholder: t('zoneDeTexte.main.counter.textArea3.placeholder', `Text area`) }" />
        <ka-code-preview
          code="code-preview-5"
          :options="{ elementToPreview: `qco1R5gV9y5NaVyzRMXVoF` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Icons -->
      <ka-container code="icons">
        <ka-text code="icons-text">
          <h4 v-html="t('zoneDeTexte.main.icons.iconsText.value', `Icons`)" />
        </ka-text>
        <ka-text code="the-append-icon-and">
          <span v-html="t('zoneDeTexte.main.icons.theAppendIconAnd.value', `The append-icon and prepend-icon props help add context to v-textarea.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea4.value"
          code="text-area-4"
          :options="{ placeholder: t('zoneDeTexte.main.icons.textArea4.placeholder', `Text area`) }" />
        <ka-code-preview
          code="code-preview-6"
          :options="{ elementToPreview: `eHQASJ6LeySYJjPiv3QrsR` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- No resize -->
      <ka-container code="no-resize">
        <ka-text code="no-resize-text">
          <h4 v-html="t('zoneDeTexte.main.noResize.noResizeText.value', `No resize`)" />
        </ka-text>
        <ka-text code="v-textareas-have-the">
          <span v-html="t('zoneDeTexte.main.noResize.vTextareasHaveThe.value', `v-textarea’s have the option to remain the same size regardless of their content’s size, using the no-resize prop.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea5.value"
          code="text-area-5"
          :options="{ placeholder: t('zoneDeTexte.main.noResize.textArea5.placeholder', `Text area`) }" />
        <ka-code-preview
          code="code-preview-7"
          :options="{ elementToPreview: `mTwfZNTQgYJZbP3EX54rDe` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Rows -->
      <ka-container code="rows">
        <ka-text code="rows-text">
          <h4 v-html="t('zoneDeTexte.main.rows.rowsText.value', `Rows<br> `)" />
        </ka-text>
        <ka-text code="the-rows-prop-allows">
          <span v-html="t('zoneDeTexte.main.rows.theRowsPropAllows.value', `The rows prop allows you to define how many rows the textarea has, when combined with the row-height prop you can further customize your rows by defining their height.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea6.value"
          code="text-area-6"
          :options="{ placeholder: t('zoneDeTexte.main.rows.textArea6.placeholder', `Text area`) }" />
        <ka-text-area-input
          v-model="page.textArea7.value"
          code="text-area-7"
          :options="{ placeholder: t('zoneDeTexte.main.rows.textArea7.placeholder', `Text area`) }" />
        <ka-text-area-input
          v-model="page.textArea8.value"
          code="text-area-8"
          :options="{ placeholder: t('zoneDeTexte.main.rows.textArea8.placeholder', `Text area`) }" />
        <ka-text-area-input
          v-model="page.textArea9.value"
          code="text-area-9"
          :options="{ placeholder: t('zoneDeTexte.main.rows.textArea9.placeholder', `Text area`) }" />
        <ka-code-preview
          code="code-preview-8"
          :options="{ elementToPreview: `jbqB9zrnbCrc48SkNJuFbD` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Signup from -->
      <ka-container code="signup-from">
        <ka-text code="signup-from-text">
          <h4 v-html="t('zoneDeTexte.main.signupFrom.signupFromText.value', `Signup from`)" />
        </ka-text>
        <ka-text code="v-textareas-have-the-text">
          <span v-html="t('zoneDeTexte.main.signupFrom.vTextareasHaveTheText.value', `v-textarea’s have the option to remain the same size regardless of their content’s size, using the no-resize prop.`)" />
        </ka-text>
        <ka-text-area-input
          v-model="page.textArea10.value"
          code="text-area-10"
          :options="{ placeholder: t('zoneDeTexte.main.signupFrom.textArea10.placeholder', `Text area`) }" />
        <ka-code-preview
          code="code-preview-9"
          :options="{ elementToPreview: `fqaWHCeu8NKSy29A7uvEbo` }"
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
            <span v-html="t('zoneDeTexte.rightPanel.sousNav.container.contenu.value', `Contenu`)" />
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
            <span v-html="t('zoneDeTexte.rightPanel.sousNav.container1.titre.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('zoneDeTexte.rightPanel.sousNav.container1.titreText.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('zoneDeTexte.rightPanel.sousNav.container1.titre1.value', `Exemples`)" />
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
              <span v-html="t('zoneDeTexte.rightPanel.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('zoneDeTexte.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('zoneDeTexte.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('zoneDeTexte.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
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
          hidden: page.$info.zoneDeTexte.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarZoneDeTexte } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarZoneDeTexte'
})
provide('$scoped', '--p4')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarZoneDeTexte())
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
