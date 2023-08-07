<template>
  <ka-container
    code="radio-button"
    :data="page.$info.radioButton">
    <!-- Page -->
    <ka-container code="page">
      <!-- Sous page -->
      <ka-container code="sous-page">
        <ka-text
          code="radio-buttons"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h1 v-html="t('radioButton.page.sousPage.radioButtons.value', `Radio buttons`)" />
        </ka-text>
        <ka-text code="the-v-radio-component">
          <span v-html="t('radioButton.page.sousPage.theVRadioComponent.value', `The v-radio component is a simple radio button. When combined with the v-radio-group component you can provide groupable functionality to allow users to select from a predefined set of options.`)" />
        </ka-text>
        <ka-text
          code="usage"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('radioButton.page.sousPage.usage.value', `Usage`)" />
        </ka-text>
        <ka-text code="lthough-v-radio-can">
          <span v-html="t('radioButton.page.sousPage.lthoughVRadioCan.value', `lthough v-radio can be used on its own, it is best used in conjunction with v-radio-group. Using the v-model on the v-radio-group you can access the value of the selected radio button inside the group.`)" />
        </ka-text>
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
              elementToPreview: `3t4FZoFfV62FxPWwKEbCqq`
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
            <RadioButtons instance-class="radio-buttons-element--p27" />
          </ka-container>
        </ka-container>
        <ka-text
          code="api"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('radioButton.page.sousPage.api.value', `API`)" />
        </ka-text>
        <ka-text code="v-radio-v-radio-group">
          <span v-html="t('radioButton.page.sousPage.vRadioVRadioGroup.value', `<ul><li>v-radio</li><li>v-radio-group</li></ul>`)" />
        </ka-text>
        <ka-text
          code="examples"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('radioButton.page.sousPage.examples.value', `Examples`)" />
        </ka-text>
        <ka-text
          code="slots"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('radioButton.page.sousPage.slots.value', `Slots`)" />
        </ka-text>
        <ka-text
          code="label"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h3 v-html="t('radioButton.page.sousPage.label.value', `Label`)" />
        </ka-text>
        <ka-text code="radio-group-labels">
          <span v-html="t('radioButton.page.sousPage.radioGroupLabels.value', `Radio Group labels can be defined in label slot - that will allow to use HTML content.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-1">
          <!-- Haut -->
          <ka-container code="haut-container">
            <ka-icon
              code="icon-2"
              :options="{
                click: page.icon2Click,
                $state: { selected: page.$data.reverseColor3 === `Colored` }
              }"
              :selected="{ click: page.icon2ClickWhenSelected }"
              :value="page.$data.reverseColor3 === `Default` ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
            <ka-icon
              code="icon-3"
              :options="{
                click: page.icon3Click,
                $state: { selected: page.$data.previewCode3 === `Clicked` }
              }"
              :selected="{ click: page.icon3ClickWhenSelected }"
              value="i-fa-solid:code" />
          </ka-container>
          <ka-code-preview
            code="code-preview-1"
            :options="{
              hidden: page.$data.previewCode3 === `Default` ? null : false,
              elementToPreview: `jbfBhqcxXj6fZ7ZRY5w8yz`
            }"
            value="https://www.kapix.fr" />
          <!-- Bas -->
          <ka-container
            code="bas-container"
            :options="{
              style: {
                color: `$invert`,
                innerBackgroundColor: page.$data.reverseColor3 === `Default` ? null : {
                  Angle: 90,
                  Colors: [`#333333ff`]
                }
              }
            }">
            <ka-text code="your-favourite-search">
              <span v-html="t('radioButton.page.sousPage.container1.basContainer.yourFavouriteSearch.value', `Your favourite search engine`)" />
            </ka-text>
            <RadioButtons
              instance-class="radio-buttons-1--p27"
              :items="page.$constants.radioButtons1Items" />
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
            <h2 v-html="t('radioButton.page.sousPage.ready.accessibility.value', `Ready for more?`)" />
          </ka-text>
          <ka-text code="continue-your-learning">
            <span v-html="t('radioButton.page.sousPage.ready.continueYourLearning.value', `Continue your learning with related content selected by the <a href='https://v2.vuetifyjs.com/en/about/meet-the-team/'>Team</a> or move between pages by using the navigation links below.`)" />
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
                  <span v-html="t('radioButton.page.sousPage.ready.global.gauche.droite.iconFonts.value', `Icon Fonts`)" />
                </ka-text>
                <ka-text code="features">
                  <span v-html="t('radioButton.page.sousPage.ready.global.gauche.droite.features.value', `Features`)" />
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
                  <span v-html="t('radioButton.page.sousPage.ready.global.milieu.droiteContainer.buttons.value', `Buttons`)" />
                </ka-text>
                <ka-text code="components">
                  <span v-html="t('radioButton.page.sousPage.ready.global.milieu.droiteContainer.components.value', `Components`)" />
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
                  <span v-html="t('radioButton.page.sousPage.ready.global.droite1.droite2.cards.value', `Cards`)" />
                </ka-text>
                <ka-text code="components-text">
                  <span v-html="t('radioButton.page.sousPage.ready.global.droite1.droite2.componentsText.value', `Components`)" />
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
        <ka-container code="container-2">
          <ka-text code="contenu">
            <span v-html="t('radioButton.rightPanel.sousNav.container2.contenu.value', `Contenu`)" />
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
            <span v-html="t('radioButton.rightPanel.sousNav.container1Container.titre.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('radioButton.rightPanel.sousNav.container1Container.titreText.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('radioButton.rightPanel.sousNav.container1Container.titre1.value', `Exemples`)" />
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
              <span v-html="t('radioButton.rightPanel.sousNav.container1Container.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('radioButton.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('radioButton.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('radioButton.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
              </ka-text>
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
    <kapix-teleport :disabled="!$breakpoint.mdAndUp">
      <ka-icon
        code="icon-4"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.icon4Click,
          hidden: page.$info.radioButton.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarRadioButton } from './store'
import RadioButtons from '~/components/RadioButtons/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarRadioButton'
})
provide('$scoped', '--p27')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarRadioButton())
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
