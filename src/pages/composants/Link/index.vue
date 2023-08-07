<template>
  <ka-container
    code="link"
    :data="page.$info.link">
    <!-- Page -->
    <ka-container code="page">
      <!-- Sous page -->
      <ka-container code="sous-page">
        <ka-text
          code="titre"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('link.page.sousPage.titre.value', `<a>: The Anchor element`)" />
        </ka-text>
        <ka-text code="texte">
          <span v-html="t('link.page.sousPage.texte.value', `The <strong><a></strong> <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><u>HTML</u></a> element (or <i>anchor</i> element), with <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href'><u>its href attribute</u></a>, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.<br>Content within each <a> <i>should</i> indicate the link's destination. If the href attribute is present, pressing the enter key while focused on the <a> element will activate it.`)" />
        </ka-text>
        <ka-text
          code="try-it"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h3 v-html="t('link.page.sousPage.tryIt.value', `Try it`)" />
        </ka-text>
        <!-- Global -->
        <ka-container code="global">
          <!-- Haut -->
          <ka-container code="haut">
            <ka-text code="html-demo-lt-a-gt">
              <span v-html="t('link.page.sousPage.global.haut.htmlDemoLtAGt.value', `HTML Demo: <a>`)" />
            </ka-text>
            <ka-text
              code="reset"
              :options="{
                click: page.resetClick,
                $state: { selected: page.$elements['you-can-reach-michael']?.value?.trim() === page.$constants.zoneDeCommentaireValue?.trim() }
              }">
              <span v-html="t('link.page.sousPage.global.haut.reset.value', `reset`)" />
            </ka-text>
          </ka-container>
          <!-- Bas -->
          <ka-container code="bas">
            <!-- Gauche -->
            <ka-container code="gauche">
              <ka-code-preview
                code="code-preview"
                :options="{ elementToPreview: `gqAPzc1vpfDtPi99p6o8q9` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Droite -->
            <ka-container code="droite">
              <ka-text-editor-input
                v-model="page.youCanReachMichael.value"
                code="you-can-reach-michael"
                :options="{ placeholder: t('link.page.sousPage.global.bas.droite.youCanReachMichael.placeholder', `Zone de commentaire`) }" />
              <ka-text
                code="website"
                :options="{ style: { color: appData.theme.fontHyperlinkColor } }"
                :selected="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }">
                <span v-html="t('link.page.sousPage.global.bas.droite.website.value', `<ul><li>Website</li></ul>`)" />
              </ka-text>
              <ka-text
                code="email"
                :options="{ style: { color: appData.theme.fontHyperlinkColor } }"
                :selected="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }">
                <span v-html="t('link.page.sousPage.global.bas.droite.email.value', `<ul><li>Email</li></ul>`)" />
              </ka-text>
              <ka-text
                code="phone"
                :options="{ style: { color: appData.theme.fontHyperlinkColor } }"
                :selected="{ style: { color: appData.theme.fontVisitedHyperlinkColor } }">
                <span v-html="t('link.page.sousPage.global.bas.droite.phone.value', `<ul><li>Phone</li></ul>`)" />
              </ka-text>
            </ka-container>
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
            <h2 v-html="t('link.page.sousPage.ready.accessibility.value', `Ready for more?`)" />
          </ka-text>
          <ka-text code="continue-your-learning">
            <span v-html="t('link.page.sousPage.ready.continueYourLearning.value', `Continue your learning with related content selected by the <a href='https://v2.vuetifyjs.com/en/about/meet-the-team/'>Team</a> or move between pages by using the navigation links below.`)" />
          </ka-text>
          <!-- Global -->
          <ka-container code="global-container">
            <!-- Gauche -->
            <ka-container code="gauche-container">
              <ka-icon
                code="edit"
                value="i-fa-solid:edit" />
              <!-- Droite -->
              <ka-container code="droite-container">
                <ka-text code="icon-fonts">
                  <span v-html="t('link.page.sousPage.ready.globalContainer.gaucheContainer.droiteContainer.iconFonts.value', `Icon Fonts`)" />
                </ka-text>
                <ka-text code="features">
                  <span v-html="t('link.page.sousPage.ready.globalContainer.gaucheContainer.droiteContainer.features.value', `Features`)" />
                </ka-text>
              </ka-container>
            </ka-container>
            <!-- Milieu -->
            <ka-container code="milieu">
              <ka-icon
                code="colonne"
                value="i-fa-brands:trello" />
              <!-- Droite -->
              <ka-container code="droite-1">
                <ka-text code="buttons">
                  <span v-html="t('link.page.sousPage.ready.globalContainer.milieu.droite1.buttons.value', `Buttons`)" />
                </ka-text>
                <ka-text code="components">
                  <span v-html="t('link.page.sousPage.ready.globalContainer.milieu.droite1.components.value', `Components`)" />
                </ka-text>
              </ka-container>
            </ka-container>
            <!-- Droite -->
            <ka-container code="droite-2">
              <ka-icon
                code="button"
                value="i-fa-solid:grip-vertical" />
              <!-- Droite@ -->
              <ka-container code="droite-3">
                <ka-text code="cards">
                  <span v-html="t('link.page.sousPage.ready.globalContainer.droite2.droite3.cards.value', `Cards`)" />
                </ka-text>
                <ka-text code="components-text">
                  <span v-html="t('link.page.sousPage.ready.globalContainer.droite2.droite3.componentsText.value', `Components`)" />
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
        <ka-container code="container">
          <ka-text code="contenu">
            <span v-html="t('link.rightPanel.sousNav.container.contenu.value', `Contenu`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-1">
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('link.rightPanel.sousNav.container1.titreText.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('link.rightPanel.sousNav.container1.titre1.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-2"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('link.rightPanel.sousNav.container1.titre2.value', `Exemples`)" />
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
              <span v-html="t('link.rightPanel.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('link.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('link.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('link.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
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
          hidden: page.$info.link.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarLink } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarLink'
})
provide('$scoped', '--p19')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarLink())
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
