<template>
  <ka-container
    code="select-input"
    :data="page.$info.selectInput">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <ka-text code="titre">
          <h1 v-html="t('selectInput.main.sousMain.titre.value', `<span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'>Autocompletes</span>`)" />
        </ka-text>
        <ka-text code="the-autocomplete-component">
          <span v-html="t('selectInput.main.sousMain.theAutocompleteComponent.value', `The autocomplete component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API`)" />
        </ka-text>
        <!-- Utilisation -->
        <ka-container code="utilisation">
          <ka-text code="titre-categorie">
            <h2 v-html="t('selectInput.main.sousMain.utilisation.titreCategorie.value', `Usage`)" />
          </ka-text>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-3">
          <!-- Sample -->
          <ka-container code="sample">
            <!-- Container 2 -->
            <ka-container
              code="container-2"
              inner>
              <ka-auto-complete-input
                v-model="page.choixMultiple.value"
                code="choix-multiple"
                :options="{
                  debounce: 0,
                  distinct: page.distinct.value,
                  allowUserInput: page.allowUserInput.value,
                  sensitiveCase: page.caseSensitive.value,
                  autoCompleteDisplayMode: page.displayMode.value,
                  appendIcon: `i-fa-solid:search`,
                  hideInputDetails: page.hideInputDetails.value,
                  deletableChips: page.erasableChips.value,
                  chipColor: page.chipColor.value,
                  chipBackground: page.bulletBackgroundColor.value,
                  placeholder: t('selectInput.main.sousMain.container3.sample.container2.choixMultiple.placeholder', `Choix multiple`)
                }" />
              <ka-auto-complete-input
                v-model="page.choixMultipleAutoComplete.value"
                code="choix-multiple-auto-complete"
                :options="{
                  debounce: 0,
                  items: page.$constants.choixMultipleAutoCompleteItems,
                  distinct: page.distinct.value,
                  allowUserInput: page.allowUserInput.value,
                  sensitiveCase: page.caseSensitive.value,
                  appendIcon: `i-fa-solid:search`,
                  hideInputDetails: page.hideInputDetails.value,
                  deletableChips: page.erasableChips.value,
                  chipColor: page.chipColor.value,
                  chipBackground: page.bulletBackgroundColor.value,
                  placeholder: t('selectInput.main.sousMain.container3.sample.container2.choixMultipleAutoComplete.placeholder', `Choix multiple`)
                }" />
              <RadioButtons
                v-model="page.$data.test"
                instance-class="radio-buttons--p24"
                :items="page.$constants.radioButtonsItems" />
              <ka-text code="text">
                <span v-html="page.$data.test" />
              </ka-text>
            </ka-container>
            <!-- Container -->
            <ka-container code="container">
              <!-- Container -->
              <ka-container code="container-1">
                <ka-auto-complete-input
                  v-model="page.values.value"
                  code="values"
                  :options="{
                    debounce: 0,
                    allowUserInput: true,
                    appendIcon: `i-fa-solid:search`,
                    placeholder: t('selectInput.main.sousMain.container3.sample.container.container1.values.placeholder', `Values`)
                  }" />
                <ka-text code="values-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container1.valuesText.value', `Values`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-4">
                <ka-number-input
                  v-model="page.saisieDeNombre.value"
                  code="saisie-de-nombre"
                  :options="{ placeholder: `Max number of chips ...` }" />
                <ka-text code="max-number-of-chips">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container4.maxNumberOfChips.value', `Max number of chips`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-5">
                <ka-checkbox-input
                  v-model="page.distinct.value"
                  code="distinct"
                  :options="{ debounce: 100 }" />
                <ka-text code="distinct-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container5.distinctText.value', `Distinct`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-6">
                <ka-checkbox-input
                  v-model="page.allowUserInput.value"
                  code="allow-user-input"
                  :options="{ debounce: 100 }" />
                <ka-text code="allow-user-input-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container6.allowUserInputText.value', `Allow user input`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-7">
                <ka-checkbox-input
                  v-model="page.caseSensitive.value"
                  code="case-sensitive"
                  :options="{ debounce: 100 }" />
                <ka-text code="case-sensitive-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container7.caseSensitiveText.value', `Case sensitive`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-8">
                <ka-select-input
                  v-model="page.displayMode.value"
                  code="display-mode"
                  :options="{
                    debounce: 10,
                    items: page.$constants.displayModeItems,
                    placeholder: t('selectInput.main.sousMain.container3.sample.container.container8.displayMode.placeholder', `Display mode`)
                  }" />
                <ka-text code="display-mode-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container8.displayModeText.value', `Display mode`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-9">
                <ka-checkbox-input
                  v-model="page.hideInputDetails.value"
                  code="hide-input-details"
                  :options="{ debounce: 100 }" />
                <ka-text code="hide-input-details-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container9.hideInputDetailsText.value', `Hide Input Details`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-10">
                <ka-checkbox-input
                  v-model="page.erasableChips.value"
                  code="erasable-chips"
                  :options="{ debounce: 100 }" />
                <ka-text code="erasable-chips-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container10.erasableChipsText.value', `Erasable chips`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-11">
                <ka-color-input
                  v-model="page.chipColor.value"
                  code="chip-color"
                  :options="{ placeholder: t('selectInput.main.sousMain.container3.sample.container.container11.chipColor.placeholder', `Chip color`) }" />
                <ka-text code="chip-color-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container11.chipColorText.value', `Chip color`)" />
                </ka-text>
              </ka-container>
              <!-- Container -->
              <ka-container code="container-12">
                <ka-gradient-color-input
                  v-model="page.bulletBackgroundColor.value"
                  code="bullet-background-color"
                  :options="{ placeholder: t('selectInput.main.sousMain.container3.sample.container.container12.bulletBackgroundColor.placeholder', `Bullet background color`) }" />
                <ka-text code="bullet-background-color-text">
                  <span v-html="t('selectInput.main.sousMain.container3.sample.container.container12.bulletBackgroundColorText.value', `Bullet background color`)" />
                </ka-text>
              </ka-container>
            </ka-container>
          </ka-container>
        </ka-container>
        <!-- API -->
        <ka-container code="api">
          <ka-code-preview
            code="code-preview"
            :options="{ elementToPreview: `hgroZUJh7XR5L4EWZ1w6jY` }"
            value="https://www.kapix.fr" />
          <ka-text code="api-text">
            <h2 v-html="t('selectInput.main.sousMain.api.apiText.value', `API (il manque des informations)`)" />
          </ka-text>
        </ka-container>
        <!-- Example -->
        <ka-container code="example">
          <ka-text code="examples">
            <h2 v-html="t('selectInput.main.sousMain.example.examples.value', `Examples`)" />
          </ka-text>
          <!-- Props -->
          <ka-container code="props">
            <ka-text code="props-text">
              <h3 v-html="t('selectInput.main.sousMain.example.props.propsText.value', `Props`)" />
            </ka-text>
            <!-- Icons -->
            <ka-container code="icons">
              <ka-text code="icons-text">
                <h4 v-html="t('selectInput.main.sousMain.example.props.icons.iconsText.value', `Icons`)" />
              </ka-text>
              <!-- Container 2 -->
              <ka-container code="container-2-container">
                <!-- Container -->
                <ka-container
                  code="container-13"
                  inner>
                  <ka-auto-complete-input
                    v-model="page.iconsAutoComplete.value"
                    code="icons-auto-complete"
                    :options="{
                      debounce: 0,
                      prependIcon: `i-fa-solid:anchor`,
                      prependInnerIcon: `i-fa-solid:award`,
                      appendIcon: `i-fa-solid:search`,
                      appendOuterIcon: `i-fa-solid:apple-alt`,
                      placeholder: t('selectInput.main.sousMain.example.props.icons.container2Container.container13.iconsAutoComplete.placeholder', `Icons`)
                    }" />
                </ka-container>
                <!-- Container -->
                <ka-container code="container-14">
                  <!-- Container -->
                  <ka-container code="container-15">
                    <ka-icon
                      code="prefix-icon"
                      value="i-fa-solid:anchor" />
                    <ka-text code="prefix-icon-text">
                      <span v-html="t('selectInput.main.sousMain.example.props.icons.container2Container.container14.container15.prefixIconText.value', `Prefix icon`)" />
                    </ka-text>
                  </ka-container>
                  <!-- Container -->
                  <ka-container code="container-16">
                    <ka-icon
                      code="interior-prefix-icon"
                      value="i-fa-solid:award" />
                    <ka-text code="interior-prefix-icon-text">
                      <span v-html="t('selectInput.main.sousMain.example.props.icons.container2Container.container14.container16.interiorPrefixIconText.value', `Interior prefix icon`)" />
                    </ka-text>
                  </ka-container>
                  <!-- Container -->
                  <ka-container code="container-17">
                    <ka-icon
                      code="suffix-icon"
                      value="i-fa-solid:search" />
                    <ka-text code="suffix-icon-text">
                      <span v-html="t('selectInput.main.sousMain.example.props.icons.container2Container.container14.container17.suffixIconText.value', `Suffix icon`)" />
                    </ka-text>
                  </ka-container>
                  <!-- Container -->
                  <ka-container code="container-18">
                    <ka-icon
                      code="exterior-suffix-icon"
                      value="i-fa-solid:apple-alt" />
                    <ka-text code="exterior-suffix-icon-text">
                      <span v-html="t('selectInput.main.sousMain.example.props.icons.container2Container.container14.container18.exteriorSuffixIconText.value', `Exterior suffix icon`)" />
                    </ka-text>
                  </ka-container>
                </ka-container>
              </ka-container>
            </ka-container>
            <ka-code-preview
              code="code-preview-1"
              :options="{ elementToPreview: `uih8bfCem7SAKo1tjDnxoY` }"
              value="https://www.kapix.fr" />
            <!-- Multiple -->
            <ka-container code="multiple">
              <ka-text code="configuration">
                <h4 v-html="t('selectInput.main.sousMain.example.props.multiple.configuration.value', `Configuration`)" />
              </ka-text>
              <!-- Container 2 -->
              <ka-container code="container-21">
                <!-- Container -->
                <ka-container
                  code="container-19"
                  inner>
                  <ka-auto-complete-input
                    v-model="page.configurationAutoComplete.value"
                    code="configuration-auto-complete"
                    :options="{
                      placeholder: page.placeholder.value,
                      debounce: page.debounce.value,
                      appendIcon: `i-fa-solid:search`
                    }" />
                </ka-container>
                <!-- Container -->
                <ka-container code="container-20">
                  <!-- Container -->
                  <ka-container code="container-22">
                    <ka-checkbox-input
                      v-model="page.showNullButton.value"
                      code="show-null-button"
                      :options="{ debounce: 100 }" />
                    <ka-text code="show-null-button-text">
                      <span v-html="t('selectInput.main.sousMain.example.props.multiple.container21.container20.container22.showNullButtonText.value', `Show null button`)" />
                    </ka-text>
                  </ka-container>
                  <!-- Container -->
                  <ka-container code="container-23">
                    <ka-string-input
                      v-model="page.placeholder.value"
                      code="placeholder"
                      :options="{ placeholder: t('selectInput.main.sousMain.example.props.multiple.container21.container20.container23.placeholder.placeholder', `Placeholder `) }" />
                    <ka-text code="placeholder-text">
                      <span v-html="t('selectInput.main.sousMain.example.props.multiple.container21.container20.container23.placeholderText.value', `Placeholder `)" />
                    </ka-text>
                  </ka-container>
                  <!-- Container -->
                  <ka-container code="container-24">
                    <ka-number-input
                      v-model="page.debounce.value"
                      code="debounce"
                      :options="{ placeholder: t('selectInput.main.sousMain.example.props.multiple.container21.container20.container24.debounce.placeholder', `Debounce `) }" />
                    <ka-text code="debounce-text">
                      <span v-html="t('selectInput.main.sousMain.example.props.multiple.container21.container20.container24.debounceText.value', `Debounce `)" />
                    </ka-text>
                  </ka-container>
                </ka-container>
              </ka-container>
            </ka-container>
            <ka-code-preview
              code="code-preview-1-code-preview"
              :options="{ elementToPreview: `nJ1KhkDpHXo1JUbFvtet1v` }"
              value="https://www.kapix.fr" />
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container-25">
          <ka-text code="contents">
            <span v-html="t('selectInput.rightPanel.sousNav.container25.contents.value', `Contents`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1-container">
          <ka-text
            code="titre-text"
            :options="{
              href: { hash: `#utilisation--p24` },
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('selectInput.rightPanel.sousNav.container1Container.titreText.value', `Usage`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: { hash: `#api--p24` },
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('selectInput.rightPanel.sousNav.container1Container.titre1.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-2"
            :options="{
              href: { hash: `#example--p24` },
              ariaLabel: `titre`,
              click: page.titre2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('selectInput.rightPanel.sousNav.container1Container.titre2.value', `Examples`)" />
          </ka-text>
          <!-- sous-categorie -->
          <ka-container code="sous-categorie">
            <ka-text
              code="sous-titre"
              :options="{
                href: { hash: `#props--p24` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('selectInput.rightPanel.sousNav.container1Container.sousCategorie.sousTitre.value', `Props`)" />
            </ka-text>
            <!-- sous-sous-categorie -->
            <ka-container code="sous-sous-categorie">
              <ka-text
                code="sous-titre-text"
                :options="{
                  href: { hash: `#icons--p24` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitreTextClick
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('selectInput.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitreText.value', `Icons`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: { hash: `#multiple--p24` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('selectInput.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre1.value', `Configuration`)" />
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
          hidden: page.$info.selectInput.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarSelectInput } from './store'
import RadioButtons from '~/components/RadioButtons/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarSelectInput'
})
provide('$scoped', '--p24')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarSelectInput())
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
