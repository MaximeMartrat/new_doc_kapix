<template>
  <ka-container
    code="image"
    :data="page.$info.image">
    <!-- Section 1 -->
    <ka-container
      code="section-1"
      inner>
      <ka-text
        code="grand-titre"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h1 v-html="t('image.section1.grandTitre.value', `Images`)" />
      </ka-text>
      <ka-text code="description">
        <span v-html="t('image.section1.description.value', `The v-img component is packed with features to support rich media. Combined with the <a href='https://github.com/vuetifyjs/vuetify-loader'>vuetify-loader</a>, you can add dynamic progressive images to provide a better user experience.`)" />
      </ka-text>
    </ka-container>
    <!-- Section 2 -->
    <ka-container
      code="section-2"
      inner>
      <ka-text
        code="titre"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h2 v-html="t('image.section2.titre.value', `Usage`)" />
      </ka-text>
      <ka-text code="description-text">
        <span v-html="t('image.section2.descriptionText.value', `v-img component is used to display a responsive image with lazy-load and placeholder.`)" />
      </ka-text>
      <!-- Code viewer -->
      <ka-container code="code-viewer">
        <!-- Options -->
        <ka-container code="options">
          <ka-text code="options-text">
            <span v-html="t('image.section2.codeViewer.options.optionsText.value', `Options`)" />
          </ka-text>
        </ka-container>
        <!-- Paramétrage -->
        <ka-container code="parametrage">
          <!-- Conteneur image -->
          <ka-container code="conteneur-image">
            <ka-image
              code="element-image"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                imgFit: $first([
                  page.ajustement.value === `None` ? null : undefined,
                  page.ajustement.value === `Contain` ? `contain` : undefined,
                  page.ajustement.value === `Cover` ? `cover` : undefined,
                  page.ajustement.value === `Fill` ? `fill` : undefined,
                  `scale-down`
                ]),
                alt: `Element image`
              }"
              value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
          </ka-container>
          <!-- Options -->
          <ka-container code="options-container">
            <ka-select-input
              v-model="page.ajustement.value"
              code="ajustement"
              :options="{
                labelPosition: `left-center`,
                debounce: 10,
                items: page.$constants.ajustementItems,
                placeholder: t('image.section2.codeViewer.parametrage.optionsContainer.ajustement.placeholder', `Ajustement`)
              }">
              <template #label>
                {{ t('image.section2.codeViewer.parametrage.optionsContainer.ajustement.label', `Ajustement`) }}
              </template>
            </ka-select-input>
            <ka-slider-input
              v-model="page.hauteurMax.value"
              code="hauteur-max"
              :options="{
                labelPosition: `left-center`,
                style: { color: appData.theme.primaryColor },
                placeholder: t('image.section2.codeViewer.parametrage.optionsContainer.hauteurMax.placeholder', `Hauteur max`),
                max: 300,
                showNumberInput: false
              }">
              <template #label>
                {{ t('image.section2.codeViewer.parametrage.optionsContainer.hauteurMax.label', `Hauteur max`) }}
              </template>
            </ka-slider-input>
            <ka-slider-input
              v-model="page.largeurMax.value"
              code="largeur-max"
              :options="{
                labelPosition: `left-center`,
                style: { color: appData.theme.primaryColor },
                placeholder: t('image.section2.codeViewer.parametrage.optionsContainer.largeurMax.placeholder', `Largeur max`),
                max: 500,
                showNumberInput: false
              }">
              <template #label>
                {{ t('image.section2.codeViewer.parametrage.optionsContainer.largeurMax.label', `Largeur max`) }}
              </template>
            </ka-slider-input>
          </ka-container>
        </ka-container>
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `uv2pmZv5vZBRK1MECRUPiW` }"
          value="https://www.kapix.fr" />
      </ka-container>
    </ka-container>
    <!-- Section 3 -->
    <ka-container
      code="section-3"
      inner>
      <ka-text
        code="titre-h-2"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h2 v-html="t('image.section3.titreH2.value', `API`)" />
      </ka-text>
      <ka-text code="description-1">
        <span v-html="t('image.section3.description1.value', `xx`)" />
      </ka-text>
    </ka-container>
    <!-- Section 4 -->
    <ka-container
      code="section-4"
      inner>
      <ka-text
        code="titre-1"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h2 v-html="t('image.section4.titre1.value', `Caveats`)" />
      </ka-text>
      <ka-text code="description-2">
        <span v-html="t('image.section4.description2.value', `xx`)" />
      </ka-text>
    </ka-container>
    <!-- Section 5 -->
    <ka-container
      code="section-5"
      inner>
      <ka-text
        code="titre-2"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h2 v-html="t('image.section5.titre2.value', `Examples`)" />
      </ka-text>
      <ka-text code="description-3">
        <span v-html="t('image.section5.description3.value', `Props`)" />
      </ka-text>
      <ka-text code="prop">
        <span v-html="t('image.section5.prop.value', `Aspects ratio`)" />
      </ka-text>
      <ka-text code="prop-descr">
        <span v-html="t('image.section5.propDescr.value', `You can set a fixed aspect ratio if you want to change aspect ratio of the image`)" />
      </ka-text>
      <!-- Code viewer -->
      <ka-container code="code-viewer-container">
        <!-- Options -->
        <ka-container code="options-1" />
        <!-- Paramétrage -->
        <ka-container code="parametrage-container">
          <!-- Conteneur image -->
          <ka-container code="conteneur-image-container">
            <ka-slider-input
              v-model="page.curseur.value"
              code="curseur"
              :options="{
                style: { color: appData.theme.primaryColor },
                placeholder: t('image.section5.codeViewerContainer.parametrageContainer.conteneurImageContainer.curseur.placeholder', `Curseur`),
                showNumberInput: false
              }" />
            <ka-image
              code="element-image-image"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                alt: `Element image`
              }"
              value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
          </ka-container>
        </ka-container>
      </ka-container>
      <ka-text code="prop-text">
        <span v-html="t('image.section5.propText.value', `Contain`)" />
      </ka-text>
      <ka-text code="prop-descr-text">
        <span v-html="t('image.section5.propDescrText.value', `If the provided aspect ratio doesn’t match that of the actual image, the default behavior is to fill as much space as possible, clipping the sides of the image. Enabling the contain prop will prevent this, but will result in empty space at the sides.`)" />
      </ka-text>
      <!-- Code viewer -->
      <ka-container code="code-viewer-1">
        <!-- Options -->
        <ka-container code="options-2" />
        <!-- Paramétrage -->
        <ka-container code="parametrage-1">
          <!-- Conteneur image -->
          <ka-container code="conteneur-image-1">
            <!-- Image -->
            <ka-container code="image-container">
              <ka-text code="matching">
                <span v-html="t('image.section5.codeViewer1.parametrage1.conteneurImage1.imageContainer.matching.value', `Matching`)" />
              </ka-text>
              <ka-image
                code="element-image-1"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  alt: `Element image`
                }"
                value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
            </ka-container>
            <!-- Image -->
            <ka-container code="image-1">
              <ka-text code="matching-text">
                <span v-html="t('image.section5.codeViewer1.parametrage1.conteneurImage1.image1.matchingText.value', `Matching`)" />
              </ka-text>
              <ka-image
                code="element-image-2"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  alt: `Element image`
                }"
                value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
            </ka-container>
            <!-- Image -->
            <ka-container code="image-2">
              <ka-text code="too-high">
                <span v-html="t('image.section5.codeViewer1.parametrage1.conteneurImage1.image2.tooHigh.value', `Too high`)" />
              </ka-text>
              <ka-image
                code="element-image-3"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  alt: `Element image`
                }"
                value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
            </ka-container>
            <!-- Image -->
            <ka-container code="image-3">
              <ka-text code="too-high-text">
                <span v-html="t('image.section5.codeViewer1.parametrage1.conteneurImage1.image3.tooHighText.value', `Too high`)" />
              </ka-text>
              <ka-image
                code="element-image-4"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  alt: `Element image`
                }"
                value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
            </ka-container>
            <!-- Image -->
            <ka-container code="image-4">
              <ka-text code="too-low">
                <span v-html="t('image.section5.codeViewer1.parametrage1.conteneurImage1.image4.tooLow.value', `Too low`)" />
              </ka-text>
              <ka-image
                code="element-image-5"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  alt: `Element image`
                }"
                value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
            </ka-container>
            <!-- Image -->
            <ka-container code="image-5">
              <ka-text code="too-low-text">
                <span v-html="t('image.section5.codeViewer1.parametrage1.conteneurImage1.image5.tooLowText.value', `Too low`)" />
              </ka-text>
              <ka-image
                code="element-image-6"
                :options="{
                  animationIn: `fadeIn`,
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  alt: `Element image`
                }"
                value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
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
import { headerWithLeftSidebarImage } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarImage'
})
provide('$scoped', '--p11')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarImage())
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
