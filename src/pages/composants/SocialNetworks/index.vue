<template>
  <ka-container
    code="social-networks"
    :data="page.$info.socialNetworks">
    <!-- Main -->
    <ka-container code="main">
      <!-- Title -->
      <ka-container code="title">
        <ka-text code="social-networks-text">
          <h1 v-html="t('socialNetworks.main.title.socialNetworksText.value', `Social Networks`)" />
        </ka-text>
        <ka-text code="description">
          <span v-html="t('socialNetworks.main.title.description.value', `Social Network components allow you to display an icon with a selected url, usually towards social networks.`)" />
        </ka-text>
      </ka-container>
      <!-- Basic -->
      <ka-container code="basic">
        <ka-text code="usage">
          <h2 v-html="t('socialNetworks.main.basic.usage.value', `Usage`)" />
        </ka-text>
        <ka-text code="v-social-sharing">
          <span v-html="t('socialNetworks.main.basic.vSocialSharing.value', `<span style='background-color:rgb(245,245,245);color:rgb(0,0,0);'>v-social-sharing </span>is a clickable icon, redirecting you to url`)" />
        </ka-text>
        <ka-social-sharing
          code="email"
          :options="{ showCounter: false }"
          inner />
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `pE59ngnjMGoqSBQVW1CLPH` }"
          value="https://www.kapix.fr" />
        <ka-text code="api-il-manque-des">
          <h2 v-html="t('socialNetworks.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </ka-text>
      </ka-container>
      <!-- Specific url -->
      <ka-container code="specific-url">
        <ka-text code="exemple">
          <h2 v-html="t('socialNetworks.main.specificUrl.exemple.value', `Exemple`)" />
        </ka-text>
        <ka-text code="usage-text">
          <h3 v-html="t('socialNetworks.main.specificUrl.usageText.value', `Usage`)" />
        </ka-text>
        <ka-text code="specific-url-text">
          <h4 v-html="t('socialNetworks.main.specificUrl.specificUrlText.value', `Specific url`)" />
        </ka-text>
        <ka-text code="you-can-set-the-specific">
          <span v-html="t('socialNetworks.main.specificUrl.youCanSetTheSpecific.value', `You can set the specific url you want the element to have.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container">
          <ka-social-sharing
            code="moi-mir"
            :options="{
              url: page.saisieDeTexte.value,
              socialType: `moi-mir`
            }"
            inner />
          <ka-string-input
            v-model="page.saisieDeTexte.value"
            code="saisie-de-texte"
            :options="{ placeholder: t('socialNetworks.main.specificUrl.container.saisieDeTexte.placeholder', `Saisie de Texte`) }" />
        </ka-container>
        <ka-code-preview
          code="code-preview-1"
          :options="{ elementToPreview: `qYvJ9hxsCQggwbDwNpjEvP` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Type -->
      <ka-container code="type">
        <ka-text code="social-network-type">
          <h4 v-html="t('socialNetworks.main.type.socialNetworkType.value', `Social Type`)" />
        </ka-text>
        <ka-text code="you-can-select-the">
          <span v-html="t('socialNetworks.main.type.youCanSelectThe.value', `You can select the social media type you want from the proposed list.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-1">
          <ka-social-sharing
            code="object-object"
            :options="{
              socialType: page.choixSimple.value,
              socialIcon: null
            }"
            inner />
          <ka-select-input
            v-model="page.choixSimple.value"
            code="choix-simple"
            :options="{
              debounce: 10,
              items: page.$constants.choixSimpleItems,
              placeholder: t('socialNetworks.main.type.container1.choixSimple.placeholder', `Choix simple`)
            }" />
        </ka-container>
        <ka-code-preview
          code="code-preview-2"
          :options="{ elementToPreview: `3tbSNXbwZGUxJ8ddjiBnot` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Counter -->
      <ka-container code="counter">
        <ka-text code="social-counter">
          <span v-html="t('socialNetworks.main.counter.socialCounter.value', `Social Counter`)" />
        </ka-text>
        <ka-text code="you-can-choose-to-show">
          <span v-html="t('socialNetworks.main.counter.youCanChooseToShow.value', `You can choose to show or disable the social counter`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-2">
          <ka-social-sharing
            code="reddit"
            :options="{
              socialType: `reddit`,
              socialIcon: null,
              showCounter: page.caseACocherOui.value
            }"
            inner />
          <ka-checkbox-input
            v-model="page.caseACocherOui.value"
            code="case-a-cocher-oui"
            :options="{ debounce: 100 }" />
        </ka-container>
        <ka-code-preview
          code="code-preview-3"
          :options="{ elementToPreview: `aMuYhFYz434JLypfGoxr8m` }"
          value="https://www.kapix.fr" />
      </ka-container>
      <!-- Icon -->
      <ka-container code="icon">
        <ka-text code="icon-text">
          <span v-html="t('socialNetworks.main.icon.iconText.value', `Icon`)" />
        </ka-text>
        <ka-text code="you-can-choose-the">
          <span v-html="t('socialNetworks.main.icon.youCanChooseThe.value', `You can choose the icon the element displays`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-3">
          <ka-social-sharing
            code="email-social-sharing"
            :options="{ socialIcon: `i-fa-solid:allergies` }"
            inner />
          <ka-social-sharing
            code="email-1"
            :options="{ socialIcon: `i-fa-solid:atom` }"
            inner />
        </ka-container>
        <ka-code-preview
          code="code-preview-4"
          :options="{ elementToPreview: `oP96hZ62Pa6xYS3h7ZrPXz` }"
          value="https://www.kapix.fr" />
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
import { headerWithLeftSidebarSocialNetworks } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarSocialNetworks'
})
provide('$scoped', '--p14')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarSocialNetworks())
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
