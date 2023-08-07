<template>
  <ka-container
    code="date-time-pickers"
    :data="page.$info.dateTimePickers">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <ka-text code="titre">
          <h1 v-html="t('dateTimePickers.main.sousMain.titre.value', `Date Time pickers`)" />
        </ka-text>
        <ka-text code="ka-date-picker-is-a">
          <span v-html="t('dateTimePickers.main.sousMain.kaDatePickerIsA.value', `ka-date-picker is a fully featured date selection component that lets users select a date, or range of dates.`)" />
        </ka-text>
        <!-- Utilisation -->
        <ka-container code="utilisation">
          <ka-text code="usage-date-pickers">
            <span v-html="t('dateTimePickers.main.sousMain.utilisation.usageDatePickers.value', `<span style='font-size:30px;'>Usage</span><br> <br>Date pickers come in two orientation variations, portrait (default) and landscape. By default they are emitting input event when the day (for date picker) or month (for month picker), but with reactive prop they can update the model even after clicking year/month.`)" />
          </ka-text>
        </ka-container>
        <!-- API -->
        <ka-container code="api">
          <ka-text code="api-text">
            <h2 v-html="t('dateTimePickers.main.sousMain.api.apiText.value', `<span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'>Examples</span>`)" />
          </ka-text>
        </ka-container>
        <!-- Exemple -->
        <ka-container code="exemple">
          <!-- Proprietes -->
          <ka-container code="proprietes">
            <!-- Couleurs -->
            <ka-container code="couleurs">
              <ka-text code="colors-date">
                <span v-html="t('dateTimePickers.main.sousMain.exemple.proprietes.couleurs.colorsDate.value', `<span style='font-size:19px;'><strong>Colors</strong></span><br> <br>Date picker colors can be set using the <strong>color</strong> and <strong>header-color</strong> props. If <strong>header-color</strong> prop is not provided header will use the <strong>color</strong> prop value.`)" />
              </ka-text>
              <!-- Sample Colors -->
              <ka-container code="sample-colors">
                <ka-date-time-picker-input
                  v-model="page.saisieDeDateHeure.value"
                  code="saisie-de-date-heure"
                  :options="{ placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.couleurs.sampleColors.saisieDeDateHeure.placeholder', `Saisie de date / heure`) }" />
                <ka-date-time-picker-input
                  v-model="page.saisieDeDateHeureDateTimePicker.value"
                  code="saisie-de-date-heure-date-time-picker"
                  :options="{ placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.couleurs.sampleColors.saisieDeDateHeureDateTimePicker.placeholder', `Saisie de date / heure`) }" />
              </ka-container>
            </ka-container>
            <ka-code-preview
              code="code-preview"
              :options="{ elementToPreview: `tD4X18VBzrKHEPG5ix48yM` }"
              value="https://www.kapix.fr" />
            <!-- Formatting -->
            <ka-container code="formatting">
              <ka-text code="formatting-with-external">
                <span v-html="t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.formattingWithExternal.value', `<span style='font-size:21px;'><strong>Formatting with external libraries</strong></span><br>Formatting dates is possible also with external libs such as Moment.js or date-fns`)" />
              </ka-text>
              <!-- Formatting -->
              <ka-container code="formatting-container">
                <ka-date-picker-input
                  v-model="page.saisieDeDate.value"
                  code="saisie-de-date"
                  :options="{
                    dateFormat: `absoluteDatetime`,
                    placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.formattingContainer.saisieDeDate.placeholder', `Saisie de date`)
                  }" />
                <ka-date-picker-input
                  v-model="page.saisieDeDateDatePicker.value"
                  code="saisie-de-date-date-picker"
                  :options="{
                    dateFormat: `relativeShort`,
                    placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.formattingContainer.saisieDeDateDatePicker.placeholder', `Saisie de date`)
                  }" />
                <ka-date-picker-input
                  v-model="page.saisieDeDate1.value"
                  code="saisie-de-date-1"
                  :options="{
                    dateFormat: `birthday`,
                    placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.formattingContainer.saisieDeDate1.placeholder', `Saisie de date`)
                  }" />
                <ka-date-picker-input
                  v-model="page.saisieDeDate2.value"
                  code="saisie-de-date-2"
                  :options="{
                    dateFormat: null,
                    placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.formattingContainer.saisieDeDate2.placeholder', `Saisie de date`)
                  }" />
              </ka-container>
            </ka-container>
            <ka-code-preview
              code="code-preview-1"
              :options="{ elementToPreview: `7dk7ug2CEDx9XTanbmzbjA` }"
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
        <ka-container code="container">
          <ka-text code="contenu">
            <span v-html="t('dateTimePickers.rightPanel.sousNav.container.contenu.value', `Contenu`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1">
          <ka-text
            code="titre-text"
            :options="{
              href: { hash: `#utilisation--p9` },
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('dateTimePickers.rightPanel.sousNav.container1.titreText.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: { hash: `#api--p9` },
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('dateTimePickers.rightPanel.sousNav.container1.titre1.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-2"
            :options="{
              href: { hash: `#exemple--p9` },
              ariaLabel: `titre`,
              click: page.titre2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('dateTimePickers.rightPanel.sousNav.container1.titre2.value', `Exemples`)" />
          </ka-text>
          <!-- sous-categorie -->
          <ka-container code="sous-categorie">
            <ka-text
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes--p9` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('dateTimePickers.rightPanel.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
            </ka-text>
            <!-- sous-sous-categorie -->
            <ka-container code="sous-sous-categorie">
              <ka-text
                code="sous-titre-text"
                :options="{
                  href: { hash: `#couleurs--p9` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitreTextClick
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('dateTimePickers.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: { hash: `#formatting--p9` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('dateTimePickers.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre1.value', `Formatting`)" />
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
          hidden: page.$info.dateTimePickers.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarDateTimePickers } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarDateTimePickers'
})
provide('$scoped', '--p9')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarDateTimePickers())
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
