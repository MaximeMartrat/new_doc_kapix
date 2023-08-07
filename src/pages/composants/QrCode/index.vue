<template>
  <ka-container
    code="qr-code"
    :data="page.$info.qrCode">
    <!-- Main -->
    <ka-container code="main">
      <!-- Title -->
      <ka-container code="title">
        <ka-text code="qr-code-text">
          <h1 v-html="t('qrCode.main.title.qrCodeText.value', `QR Code`)" />
        </ka-text>
      </ka-container>
      <!-- Basic -->
      <ka-container code="basic">
        <ka-text code="simple-usage">
          <h2 v-html="t('qrCode.main.basic.simpleUsage.value', `<strong>Simple usage</strong>`)" />
        </ka-text>
        <ka-text code="just-set-a-value-for">
          <span v-html="t('qrCode.main.basic.justSetAValueFor.value', `Just set a value for the required text prop.`)" />
        </ka-text>
        <ka-qr-code
          code="qr-code-1"
          value="<p>https://www.kapix.fr</p>" />
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `gqokB5ozuqb8e1hNnGd6m2` }"
          value="https://www.kapix.fr" />
        <ka-text code="api-il-manque-des">
          <h2 v-html="t('qrCode.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </ka-text>
      </ka-container>
      <!-- Auto Grow -->
      <ka-container code="auto-grow">
        <ka-text code="exemple">
          <h2 v-html="t('qrCode.main.autoGrow.exemple.value', `Exemple`)" />
        </ka-text>
        <ka-text code="usage">
          <h3 v-html="t('qrCode.main.autoGrow.usage.value', `Usage`)" />
        </ka-text>
        <ka-text code="dynamic-value">
          <h4 v-html="t('qrCode.main.autoGrow.dynamicValue.value', `<strong>Dynamic value</strong>`)" />
        </ka-text>
        <ka-text code="you-can-use-v-bind">
          <span v-html="t('qrCode.main.autoGrow.youCanUseVBind.value', `You can use <i>v-bind:</i> or the <i>:</i> shorthand to use a variable as text prop.<br>Since the text prop has a watcher, when the value of the variable changes the component will generate a QR code for the new value.`)" />
        </ka-text>
        <ka-string-input
          v-model="page.texteQrCode.value"
          code="texte-qr-code"
          :options="{
            placeholder: `Texte QR code ...`,
            debounce: 0
          }" />
        <ka-qr-code
          code="qr-code-2"
          :value="page.texteQrCode.value" />
        <ka-code-preview
          code="code-preview-1"
          :options="{ elementToPreview: `pWBvxwBi7goMsYMd4T7wcb` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Colors -->
      <ka-container code="colors">
        <ka-text code="colors-and-sizing">
          <h4 v-html="t('qrCode.main.colors.colorsAndSizing.value', `<strong>Colors and sizing</strong>`)" />
        </ka-text>
        <ka-text code="you-can-fix-the-qr">
          <span v-html="t('qrCode.main.colors.youCanFixTheQr.value', `You can fix the QR code width and height with the size prop (default 256, works in pixels).<br>Colors can be changed using color (default #000) and bg-color (default #FFF) props.<br><strong>NOTE:</strong> If you use a darker color in bg-color than in color some QR code readers could have problems to understand your QR code.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container">
          <ka-qr-code
            code="qr-code-3"
            :options="{
              qrColor: `#01FFFFFF`,
              qrBgColor: `#FF0202FF`
            }"
            value="https://www.kapix.fr" />
          <ka-qr-code
            code="qr-code-4"
            :options="{ qrColor: `#FF0101FF` }"
            value="https://www.kapix.fr" />
        </ka-container>
        <ka-code-preview
          code="code-preview-2"
          :options="{ elementToPreview: `mTrRaN3r7QCXJnSEf8k62Q` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Autocomplete -->
      <ka-container code="autocomplete">
        <ka-text code="error-correction-level">
          <h4 v-html="t('qrCode.main.autocomplete.errorCorrectionLevel.value', `<strong>Error Correction Level</strong>`)" />
        </ka-text>
        <ka-text code="you-can-use-v-bind-text">
          <span v-html="t('qrCode.main.autocomplete.youCanUseVBindText.value', `You can use <i>v-bind:</i> or the <i>:</i> shorthand to use a variable as text prop.<br>Since the text prop has a watcher, when the value of the variable changes, the component will generate a QR code for the new value.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-1">
          <ka-qr-code
            code="qr-code-5"
            :options="{ errorLevel: `L` }"
            value="https://www.kapix.fr" />
          <ka-qr-code
            code="qr-code-6"
            :options="{ errorLevel: `M` }"
            value="https://www.kapix.fr" />
          <ka-qr-code
            code="qr-code-7"
            :options="{ errorLevel: `Q` }"
            value="https://www.kapix.fr" />
          <ka-qr-code
            code="qr-code-8"
            value="https://www.kapix.fr" />
        </ka-container>
        <ka-code-preview
          code="code-preview-3"
          :options="{ elementToPreview: `8rDKDYpGrKNCjHhkUVW9V6` }"
          value="https://www.kapix.fr" />
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container-2">
          <ka-text code="contenu">
            <span v-html="t('qrCode.rightPanel.sousNav.container2.contenu.value', `Contenu`)" />
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
            <span v-html="t('qrCode.rightPanel.sousNav.container1Container.titre.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('qrCode.rightPanel.sousNav.container1Container.titreText.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('qrCode.rightPanel.sousNav.container1Container.titre1.value', `Exemples`)" />
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
              <span v-html="t('qrCode.rightPanel.sousNav.container1Container.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('qrCode.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('qrCode.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('qrCode.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
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
          hidden: page.$info.qrCode.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarQrCode } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarQrCode'
})
provide('$scoped', '--p15')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarQrCode())
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
