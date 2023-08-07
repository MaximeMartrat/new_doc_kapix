<template>
  <ka-container
    code="ratings"
    :data="page.$info.ratings">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <ka-text code="titre">
          <h1 v-html="t('ratings.main.sousMain.titre.value', `Evaluations avec étoiles`)" />
        </ka-text>
        <!-- Utilisation -->
        <ka-container code="utilisation">
          <ka-text code="titre-categorie">
            <h2 v-html="t('ratings.main.sousMain.utilisation.titreCategorie.value', `Utilisation`)" />
          </ka-text>
          <ka-text code="the-v-rating-component">
            <span v-html="t('ratings.main.sousMain.utilisation.theVRatingComponent.value', `The v-rating component provides a simple interface for gathering user feedback`)" />
          </ka-text>
          <!-- Sample -->
          <ka-container code="sample">
            <ka-rating-input
              v-model="page.evaluationAvecEtoiles.value"
              code="evaluation-avec-etoiles"
              :options="{
                halfIncrement: page.halfIncrementCheckbox.value,
                starSize: page.$data.size,
                starLength: page.$data.length,
                placeholder: t('ratings.main.sousMain.utilisation.sample.evaluationAvecEtoiles.placeholder', `Evaluation avec étoiles`)
              }"
              inner />
            <!-- Container -->
            <ka-container code="container">
              <ka-text code="half-increment">
                <span v-html="t('ratings.main.sousMain.utilisation.sample.container.halfIncrement.value', `Half increment`)" />
              </ka-text>
              <ka-checkbox-input
                v-model="page.halfIncrementCheckbox.value"
                code="half-increment-checkbox"
                :options="{ debounce: 100 }" />
              <ka-text code="size">
                <span v-html="t('ratings.main.sousMain.utilisation.sample.container.size.value', `Size`)" />
              </ka-text>
              <ka-slider-input
                v-model="page.curseur.value"
                code="curseur"
                :options="{
                  style: { color: appData.theme.primaryColor },
                  placeholder: t('ratings.main.sousMain.utilisation.sample.container.curseur.placeholder', `Curseur`),
                  min: 10,
                  max: 32
                }" />
              <ka-text code="length">
                <span v-html="t('ratings.main.sousMain.utilisation.sample.container.length.value', `Length`)" />
              </ka-text>
              <ka-slider-input
                v-model="page.curseurSlider.value"
                code="curseur-slider"
                :options="{
                  style: { color: appData.theme.primaryColor },
                  placeholder: t('ratings.main.sousMain.utilisation.sample.container.curseurSlider.placeholder', `Curseur`),
                  min: 1,
                  max: 15
                }" />
            </ka-container>
          </ka-container>
          <ka-code-preview
            code="code-preview"
            :options="{ elementToPreview: `d2GHQgs1D1aKheABKXkcmA` }"
            value="https://www.kapix.fr" />
          <!-- Container -->
          <ka-container code="container-1" />
        </ka-container>
        <!-- API -->
        <ka-container code="api">
          <ka-text code="api-text">
            <h2 v-html="t('ratings.main.sousMain.api.apiText.value', `API (il manque des informations)`)" />
          </ka-text>
        </ka-container>
        <!-- Exemple -->
        <ka-container code="exemple">
          <ka-text code="exemples">
            <h2 v-html="t('ratings.main.sousMain.exemple.exemples.value', `Exemples`)" />
          </ka-text>
          <!-- Proprietes -->
          <ka-container code="proprietes">
            <ka-text code="titre-text">
              <h3 v-html="t('ratings.main.sousMain.exemple.proprietes.titreText.value', `Propriétés`)" />
            </ka-text>
            <!-- Couleurs -->
            <ka-container code="couleurs">
              <ka-text code="color">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.color.value', `Color`)" />
              </ka-text>
              <ka-text code="the-v-rating-component-text">
                <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.theVRatingComponentText.value', `The v-rating component can be colored as you want, you can set both selected and not selected colors`)" />
              </ka-text>
              <!-- Colors stars -->
              <ka-container code="colors-stars">
                <ka-checkbox-input
                  v-model="page.caseACocherOui.value"
                  code="case-a-cocher-oui"
                  :options="{
                    click: page.caseACocherOuiClick,
                    $state: { selected: page.$data.color === `red` },
                    debounce: 100
                  }" />
                <ka-text code="rouge">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.rouge.value', `rouge`)" />
                </ka-text>
                <ka-checkbox-input
                  v-model="page.caseACocherOui1.value"
                  code="case-a-cocher-oui-1"
                  :options="{
                    click: page.caseACocherOui1Click,
                    $state: { selected: page.$data.color === `blue` },
                    debounce: 100
                  }" />
                <ka-text code="bleu">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.bleu.value', `bleu`)" />
                </ka-text>
                <ka-checkbox-input
                  v-model="page.caseACocherOui2.value"
                  code="case-a-cocher-oui-2"
                  :options="{
                    click: page.caseACocherOui2Click,
                    $state: { selected: page.$data.color === `green` },
                    debounce: 100
                  }" />
                <ka-text code="vert">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.vert.value', `vert`)" />
                </ka-text>
                <ka-checkbox-input
                  v-model="page.caseACocherOui4.value"
                  code="case-a-cocher-oui-4"
                  :options="{
                    style: { color: appData.theme.primaryColor },
                    click: page.caseACocherOui4Click,
                    $state: { selected: page.$data.color === `blue-kapix` },
                    debounce: 100
                  }" />
                <ka-text code="bleu-kapix">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.bleuKapix.value', `bleu Kapix`)" />
                </ka-text>
                <ka-checkbox-input
                  v-model="page.caseACocherOui5.value"
                  code="case-a-cocher-oui-5"
                  :options="{
                    style: { color: appData.theme.secondaryColor },
                    click: page.caseACocherOui5Click,
                    $state: { selected: page.$data.color === `yellow-kapix` },
                    debounce: 100
                  }" />
                <ka-text code="jaune-kapix">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.jauneKapix.value', `jaune kapix`)" />
                </ka-text>
                <ka-rating-input
                  v-model="page.evaluationAvecEtoilesRating.value"
                  code="evaluation-avec-etoiles-rating"
                  :options="{
                    style: {
                      color: $first([
                        page.$data.color === `red` ? appData.theme.buttonColor : undefined,
                        page.$data.color === `blue` ? `#2C3BFFFF` : undefined,
                        page.$data.color === `green` ? `#24FF52FF` : undefined,
                        page.$data.color === `yellow-kapix` ? appData.theme.secondaryColor : undefined,
                        appData.theme.primaryColor
                      ])
                    },
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.evaluationAvecEtoilesRating.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
              </ka-container>
              <ka-code-preview
                code="code-preview-1"
                :options="{ elementToPreview: `fJ7khA1rNsi3X38aLkDFXc` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Length -->
            <ka-container code="length-container">
              <ka-text code="length-text">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.lengthContainer.lengthText.value', `Length`)" />
              </ka-text>
              <ka-text code="sometimes-an-application">
                <span v-html="t('ratings.main.sousMain.exemple.proprietes.lengthContainer.sometimesAnApplication.value', `Sometimes an application will call for a customized implementation. Easily change length or displayed icons`)" />
              </ka-text>
              <ka-slider-input
                v-model="page.curseur1.value"
                code="curseur-1"
                :options="{
                  style: { color: appData.theme.primaryColor },
                  placeholder: t('ratings.main.sousMain.exemple.proprietes.lengthContainer.curseur1.placeholder', `Curseur`),
                  min: 1,
                  max: 15
                }" />
              <!-- Length -->
              <ka-container code="length-1">
                <ka-text code="custom-length">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.lengthContainer.length1.customLength.value', `Custom Length`)" />
                </ka-text>
                <ka-rating-input
                  v-model="page.evaluationAvecEtoiles1.value"
                  code="evaluation-avec-etoiles-1"
                  :options="{
                    starLength: page.$data.customLength,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.lengthContainer.length1.evaluationAvecEtoiles1.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
              </ka-container>
              <ka-code-preview
                code="code-preview-1-code-preview"
                :options="{ elementToPreview: `gTnQd2tQezupzjXqwy3fsT` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Incremented -->
            <ka-container code="incremented">
              <ka-text code="incremented-text">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.incremented.incrementedText.value', `Incremented`)" />
              </ka-text>
              <ka-text code="a-rating-can-have-3">
                <span v-html="t('ratings.main.sousMain.exemple.proprietes.incremented.aRatingCanHave3.value', `A rating can have 3 defined icons, full-icon, half-icon (with the half-increments prop) and empty-icon.`)" />
              </ka-text>
              <!-- Incremented -->
              <ka-container code="incremented-container">
                <ka-rating-input
                  v-model="page.evaluationAvecEtoiles2.value"
                  code="evaluation-avec-etoiles-2"
                  :options="{ placeholder: t('ratings.main.sousMain.exemple.proprietes.incremented.incrementedContainer.evaluationAvecEtoiles2.placeholder', `Evaluation avec étoiles`) }"
                  inner />
              </ka-container>
              <ka-code-preview
                code="code-preview-11"
                :options="{ elementToPreview: `bjS1VEsykSg7EqxRby5GnU` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Size -->
            <ka-container code="size-container">
              <ka-text code="size-text">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.sizeContainer.sizeText.value', `Size`)" />
              </ka-text>
              <ka-text code="utilize-the-same-sizing">
                <span v-html="t('ratings.main.sousMain.exemple.proprietes.sizeContainer.utilizeTheSameSizing.value', `Utilize the same sizing classes available in v-icon or provide your own with the size prop.`)" />
              </ka-text>
              <!-- Size sample -->
              <ka-container code="size-sample">
                <ka-rating-input
                  v-model="page.evaluationAvecEtoiles3.value"
                  code="evaluation-avec-etoiles-3"
                  :options="{
                    halfIncrement: false,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.sizeContainer.sizeSample.evaluationAvecEtoiles3.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
                <ka-rating-input
                  v-model="page.evaluationAvecEtoiles4.value"
                  code="evaluation-avec-etoiles-4"
                  :options="{
                    halfIncrement: false,
                    starSize: 20,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.sizeContainer.sizeSample.evaluationAvecEtoiles4.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
                <ka-rating-input
                  v-model="page.evaluationAvecEtoiles5.value"
                  code="evaluation-avec-etoiles-5"
                  :options="{
                    halfIncrement: false,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.sizeContainer.sizeSample.evaluationAvecEtoiles5.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
                <ka-rating-input
                  v-model="page.evaluationAvecEtoiles6.value"
                  code="evaluation-avec-etoiles-6"
                  :options="{
                    halfIncrement: false,
                    starSize: 40,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.sizeContainer.sizeSample.evaluationAvecEtoiles6.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
              </ka-container>
              <ka-code-preview
                code="code-preview-12"
                :options="{ elementToPreview: `a5ZWe8gEhoJSYfjSX2Wnuz` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Etats -->
            <ka-container code="etats">
              <ka-text code="etats-text">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.etats.etatsText.value', `Etats`)" />
              </ka-text>
              <!-- Container -->
              <ka-container code="container-2" />
              <!-- Disable Sample -->
              <ka-container code="disable-sample">
                <ka-rating-input
                  v-model="page.evaluationAvecEtoiles7.value"
                  code="evaluation-avec-etoiles-7"
                  :options="{ placeholder: t('ratings.main.sousMain.exemple.proprietes.etats.disableSample.evaluationAvecEtoiles7.placeholder', `Evaluation avec étoiles`) }" />
              </ka-container>
              <ka-slider-input
                v-model="page.curseur2.value"
                code="curseur-2"
                :options="{
                  style: { color: appData.theme.primaryColor },
                  placeholder: t('ratings.main.sousMain.exemple.proprietes.etats.curseur2.placeholder', `Curseur`),
                  min: 0,
                  max: 5
                }" />
            </ka-container>
          </ka-container>
          <!-- MultiValeur -->
          <ka-container code="multi-valeur">
            <Paragraphe
              instance-class="paragraphe--p10"
              content="il est possible de mettre deux valeurs pour une même sortie" />
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container-3">
          <ka-text code="contenu">
            <span v-html="t('ratings.rightPanel.sousNav.container3.contenu.value', `Contenu`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1-container">
          <ka-text
            code="titre-1"
            :options="{
              href: { hash: `#utilisation--p10` },
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('ratings.rightPanel.sousNav.container1Container.titre1.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-2"
            :options="{
              href: { hash: `#api--p10` },
              ariaLabel: `titre`,
              click: page.titre2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('ratings.rightPanel.sousNav.container1Container.titre2.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-3"
            :options="{
              href: { hash: `#exemple--p10` },
              ariaLabel: `titre`,
              click: page.titre3Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('ratings.rightPanel.sousNav.container1Container.titre3.value', `Exemples`)" />
          </ka-text>
          <!-- sous-categorie -->
          <ka-container code="sous-categorie">
            <ka-text
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes--p10` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('ratings.rightPanel.sousNav.container1Container.sousCategorie.sousTitre.value', `Propriétés`)" />
            </ka-text>
            <!-- sous-sous-categorie -->
            <ka-container code="sous-sous-categorie">
              <ka-text
                code="sous-titre-text"
                :options="{
                  href: { hash: `#couleurs--p10` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitreTextClick
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('ratings.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitreText.value', `Color`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: { hash: `#length-container--p10` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('ratings.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre1.value', `Length`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: { hash: `#incremented--p10` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('ratings.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre2.value', `Incremented`)" />
              </ka-text>
              <ka-text
                code="sous-titre-3"
                :options="{
                  href: { hash: `#size-container--p10` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre3Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('ratings.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre3.value', `Size`)" />
              </ka-text>
              <ka-text
                code="sous-titre-4"
                :options="{
                  href: { hash: `#etats--p10` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre4Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('ratings.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre4.value', `Etats`)" />
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
          hidden: page.$info.ratings.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarRatings } from './store'
import Paragraphe from '~/components/Paragraphe/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarRatings'
})
provide('$scoped', '--p10')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarRatings())
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
