<template>
  <ka-container
    code="map"
    :data="page.$info.map">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <ka-text code="titre">
          <h1 v-html="t('map.main.sousMain.titre.value', `Map`)" />
        </ka-text>
        <!-- Usage -->
        <ka-container code="usage">
          <ka-text code="titre-categorie">
            <h2 v-html="t('map.main.sousMain.usage.titreCategorie.value', `Usage`)" />
          </ka-text>
          <!-- Container map -->
          <ka-container code="container-map">
            <ka-leaflet
              v-model="page.mapLeaflet.value"
              code="map-leaflet"
              :options="{
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                tileLayer: page.tileLayer.value,
                initType: page.initialCoordinatesMode.value,
                mapZoom: page.zoom118.value,
                minZoom: page.minZoom.value,
                maxZoom: page.maxZoom.value,
                placeholder: t('map.main.sousMain.usage.containerMap.mapLeaflet.placeholder', `Map`)
              }"
              :data="page.$info.mapLeaflet" />
            <!-- Container -->
            <ka-container code="container">
              <ka-select-input
                v-model="page.tileLayer.value"
                code="tile-layer"
                :options="{
                  labelPosition: `top`,
                  debounce: 10,
                  items: page.$constants.tileLayerItems,
                  placeholder: t('map.main.sousMain.usage.containerMap.container.tileLayer.placeholder', `Tile Layer`)
                }">
                <template #label>
                  {{ t('map.main.sousMain.usage.containerMap.container.tileLayer.label', `Tile Layer`) }}
                </template>
              </ka-select-input>
              <ka-select-input
                v-model="page.initialCoordinatesMode.value"
                code="initial-coordinates-mode"
                :options="{
                  labelPosition: `top`,
                  debounce: 10,
                  items: page.$constants.initialCoordinatesModeItems,
                  placeholder: t('map.main.sousMain.usage.containerMap.container.initialCoordinatesMode.placeholder', `Initial coordinates mode`)
                }">
                <template #label>
                  {{ t('map.main.sousMain.usage.containerMap.container.initialCoordinatesMode.label', `Initial coordinates mode`) }}
                </template>
              </ka-select-input>
              <!-- Container -->
              <ka-container code="container-1">
                <ka-icon
                  code="minus"
                  :options="{ click: page.minusClick }"
                  value="i-fa-solid:minus"
                  inner />
                <ka-number-input
                  v-model="page.zoom118.value"
                  code="zoom-118"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.usage.containerMap.container.container1.zoom118.placeholder', `Zoom (1 - 18)`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.usage.containerMap.container.container1.zoom118.label', `Zoom (1 - 18)`) }}
                  </template>
                </ka-number-input>
                <ka-icon
                  code="plus"
                  :options="{ click: page.plusClick }"
                  value="i-fa-solid:plus"
                  inner />
              </ka-container>
              <!-- Container -->
              <ka-container code="container-2">
                <ka-icon
                  code="minus-icon"
                  :options="{ click: page.minusIconClick }"
                  value="i-fa-solid:minus"
                  inner />
                <ka-number-input
                  v-model="page.minZoom.value"
                  code="min-zoom"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.usage.containerMap.container.container2.minZoom.placeholder', `Min Zoom`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.usage.containerMap.container.container2.minZoom.label', `Min Zoom`) }}
                  </template>
                </ka-number-input>
                <ka-icon
                  code="plus-icon"
                  :options="{ click: page.plusIconClick }"
                  value="i-fa-solid:plus"
                  inner />
              </ka-container>
              <!-- Container -->
              <ka-container code="container-3">
                <ka-icon
                  code="minus-1"
                  :options="{ click: page.minus1Click }"
                  value="i-fa-solid:minus"
                  inner />
                <ka-number-input
                  v-model="page.maxZoom.value"
                  code="max-zoom"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.usage.containerMap.container.container3.maxZoom.placeholder', `Max Zoom`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.usage.containerMap.container.container3.maxZoom.label', `Max Zoom`) }}
                  </template>
                </ka-number-input>
                <ka-icon
                  code="plus-1"
                  :options="{ click: page.plus1Click }"
                  value="i-fa-solid:plus"
                  inner />
              </ka-container>
            </ka-container>
          </ka-container>
        </ka-container>
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `r6XTuDXsM2AF3qbux74rq6` }"
          value="https://www.kapix.fr" />
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container-4">
          <ka-text code="contents">
            <span v-html="t('map.rightPanel.sousNav.container4.contents.value', `Contents`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1-container">
          <ka-text
            code="titre-text"
            :options="{
              href: { hash: `#usage--p12` },
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('map.rightPanel.sousNav.container1Container.titreText.value', `Usage`)" />
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
          hidden: page.$info.map.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarMap } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarMap'
})
provide('$scoped', '--p12')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarMap())
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
