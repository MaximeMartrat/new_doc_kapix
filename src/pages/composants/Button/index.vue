<template>
  <ka-container
    code="button"
    :data="page.$info.button">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <!-- Intro -->
        <ka-container code="intro">
          <ka-text code="titre">
            <h1 v-html="t('button.main.sousMain.intro.titre.value', `Buttons`)" />
          </ka-text>
          <ka-text code="the-v-btn-component">
            <h2 v-html="t('button.main.sousMain.intro.theVBtnComponent.value', `The v-btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Try out an interactive screencast on how Vuetify buttons work.`)" />
          </ka-text>
        </ka-container>
        <!-- Usage -->
        <ka-container code="usage">
          <ka-text code="titre-categorie">
            <h2 v-html="t('button.main.sousMain.usage.titreCategorie.value', `Usage`)" />
          </ka-text>
          <ka-text code="buttons-in-their-simplest">
            <h2 v-html="t('button.main.sousMain.usage.buttonsInTheirSimplest.value', `Buttons in their simplest form contain uppercase text, a slight elevation, hover effect, and a ripple effect on click.`)" />
          </ka-text>
          <!-- Buttons sample -->
          <ka-container code="buttons-sample">
            <!-- Container 5 -->
            <ka-container code="container-5">
              <ka-text
                code="outlined"
                :options="{
                  ripple: true,
                  click: page.outlinedClick,
                  $state: { selected: page.$data.outlined === `outlined` }
                }"
                :selected="{ click: page.outlinedClickWhenSelected }">
                <span v-html="t('button.main.sousMain.usage.buttonsSample.container5.outlined.value', `OUTLINED`)" />
              </ka-text>
              <ka-text
                code="rounded"
                :options="{
                  click: page.roundedClick,
                  $state: { selected: page.$data.rounded === `rounded` }
                }"
                :selected="{ click: page.roundedClickWhenSelected }">
                <span v-html="t('button.main.sousMain.usage.buttonsSample.container5.rounded.value', `ROUNDED`)" />
              </ka-text>
              <ka-text
                code="tile"
                :options="{
                  click: page.tileClick,
                  $state: { selected: page.$data.rounded === `Tile` }
                }"
                :selected="{ click: page.tileClickWhenSelected }">
                <span v-html="t('button.main.sousMain.usage.buttonsSample.container5.tile.value', `Tile`)" />
              </ka-text>
            </ka-container>
            <!-- Container -->
            <ka-container
              code="container"
              inner>
              <ka-button
                code="button-1"
                :options="{
                  ripple: true,
                  style: {
                    innerBackgroundColor: $first([
                      page.$data.color === `primary` ? {
                        Angle: 0,
                        Colors: [`#1d8cf8`]
                      } : undefined,
                      page.$data.color === `secondary` ? {
                        Angle: 90,
                        Colors: [`#fcdc00ff`]
                      } : undefined,
                      page.$data.color === `lostark` ? {
                        Angle: 90,
                        Colors: [
                          `#ab8343ff`,
                          `#f3ead2ff`,
                          `#c8a773ff`
                        ]
                      } : undefined,
                      null
                    ]),
                    color: null === `plain` ? `#878787FF` : null,
                    border: page.$data.outlined === `default` ? null : page.$constants.button,
                    borderRadius: $first([
                      page.$data.rounded === `rounded` ? page.$constants.buttonRounded : undefined,
                      page.$data.rounded === `Tile` ? page.$constants.buttonTile : undefined,
                      page.$constants.button1
                    ]),
                    disabled: page.$data.disabled
                  },
                  prependIcon: null,
                  prependInnerIcon: null,
                  appendIcon: null,
                  appendOuterIcon: null
                }">
                <span v-html="t('button.main.sousMain.usage.buttonsSample.container.button1.value', `Button`)" />
              </ka-button>
            </ka-container>
            <!-- Container -->
            <ka-container code="container-1">
              <ka-checkbox-input
                v-model="page.caseACocherOui.value"
                code="case-a-cocher-oui"
                :options="{
                  click: page.caseACocherOuiClick,
                  $state: { selected: page.$data.disabled === `disable` },
                  debounce: 100
                }"
                :selected="{ click: page.caseACocherOuiClickWhenSelected }" />
              <ka-text code="disabled">
                <span v-html="t('button.main.sousMain.usage.buttonsSample.container1.disabled.value', `Disabled`)" />
              </ka-text>
              <ka-select-input
                v-model="page.color.value"
                code="color"
                :options="{
                  debounce: 10,
                  items: page.$constants.colorItems,
                  placeholder: t('button.main.sousMain.usage.buttonsSample.container1.color.placeholder', `color`)
                }" />
            </ka-container>
          </ka-container>
          <ka-code-preview
            code="code-preview"
            :options="{ elementToPreview: `sQuJp2KaRVmxHzmCydmz7r` }"
            value="https://www.kapix.fr" />
        </ka-container>
        <!-- API -->
        <ka-container code="api">
          <ka-text code="titre-text">
            <h2 v-html="t('button.main.sousMain.api.titreText.value', `API`)" />
          </ka-text>
        </ka-container>
        <!-- Caveats -->
        <ka-container code="caveats">
          <ka-text code="titre-1">
            <h2 v-html="t('button.main.sousMain.caveats.titre1.value', `Caveats`)" />
          </ka-text>
          <ka-text code="content">
            <h2 v-html="t('button.main.sousMain.caveats.content.value', `v-btn is the only component that behaves differently when using the dark prop. Normally components use the dark prop to denote that they have a dark colored background and need their text to be white. While this will work for v-btn, it is advised to only use the prop when the button IS ON a colored background due to the disabled state blending in with white backgrounds. If you need white text, simply add the white--text class.`)" />
          </ka-text>
        </ka-container>
        <!-- Exemple -->
        <ka-container code="exemple">
          <!-- Proprietes -->
          <ka-container code="proprietes">
            <!-- Container 1 -->
            <ka-container code="container-1-container" />
            <ka-text code="titre-2">
              <h2 v-html="t('button.main.sousMain.exemple.proprietes.titre2.value', `Props`)" />
            </ka-text>
            <!-- props bloc -->
            <ka-container code="props-bloc">
              <!-- sample block -->
              <ka-container code="sample-block">
                <ka-text code="block">
                  <h4 v-html="t('button.main.sousMain.exemple.proprietes.propsBloc.sampleBlock.block.value', `Block`)" />
                </ka-text>
                <ka-text code="block-buttons-extend">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsBloc.sampleBlock.blockButtonsExtend.value', `block buttons extend the full available width.<span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'>.</span>`)" />
                </ka-text>
                <ka-button
                  code="button-2"
                  :options="{ ripple: true }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsBloc.sampleBlock.button2.value', `button`)" />
                </ka-button>
              </ka-container>
              <ka-code-preview
                code="code-preview-1"
                :options="{ elementToPreview: `2c8aa8TRJsGxSM1bJSXiaS` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Props Depressed -->
            <ka-container code="props-depressed">
              <ka-text code="depressed">
                <h4 v-html="t('button.main.sousMain.exemple.proprietes.propsDepressed.depressed.value', `Depressed`)" />
              </ka-text>
              <ka-text code="depressed-buttons-still">
                <span v-html="t('button.main.sousMain.exemple.proprietes.propsDepressed.depressedButtonsStill.value', `depressed buttons still maintain their background color, but have no box shadow.`)" />
              </ka-text>
              <!-- depressed -->
              <ka-container
                code="depressed-container"
                inner>
                <ka-button
                  code="button-3"
                  :options="{ ripple: true }"
                  inner>
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsDepressed.depressedContainer.button3.value', `button`)" />
                </ka-button>
              </ka-container>
              <ka-code-preview
                code="code-preview-1-code-preview"
                :options="{ elementToPreview: `6ptu1BzfH6vkaZYtSyAUoa` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Props outlined -->
            <ka-container code="props-outlined">
              <ka-text code="outlined-text">
                <h4 v-html="t('button.main.sousMain.exemple.proprietes.propsOutlined.outlinedText.value', `Outlined`)" />
              </ka-text>
              <ka-text code="outlined-buttons-inherit">
                <span v-html="t('button.main.sousMain.exemple.proprietes.propsOutlined.outlinedButtonsInherit.value', `outlined buttons inherit their borders from the current color applied.`)" />
              </ka-text>
              <!-- outlined -->
              <ka-container
                code="outlined-container"
                inner>
                <ka-button
                  code="outlined-button"
                  :options="{
                    ripple: true,
                    style: {
                      color: appData.theme.primaryColor,
                      borderColor: appData.theme.primaryColor
                    }
                  }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsOutlined.outlinedContainer.outlinedButton.value', `outlined button`)" />
                </ka-button>
              </ka-container>
              <ka-code-preview
                code="code-preview-2"
                :options="{ elementToPreview: `kLDCFkyetQZRKmFKmfbod1` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Props Rounded -->
            <ka-container code="props-rounded">
              <ka-text code="rounded-text">
                <h4 v-html="t('button.main.sousMain.exemple.proprietes.propsRounded.roundedText.value', `Rounded`)" />
              </ka-text>
              <ka-text code="rounded-buttons-behave">
                <span v-html="t('button.main.sousMain.exemple.proprietes.propsRounded.roundedButtonsBehave.value', `rounded buttons behave the same as regular buttons but have rounded edges.`)" />
              </ka-text>
              <!-- Sample rounded -->
              <ka-container
                code="sample-rounded"
                inner>
                <ka-button
                  code="rounded-button"
                  :options="{
                    ripple: true,
                    style: {
                      innerBackgroundColor: appData.theme.primaryColor,
                      color: appData.theme.backgroundColor2
                    }
                  }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsRounded.sampleRounded.roundedButton.value', `rounded button`)" />
                </ka-button>
              </ka-container>
              <ka-code-preview
                code="code-preview-11"
                :options="{ elementToPreview: `t3k3DYRKFCR7jBJKePKaXo` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Props Sizing -->
            <ka-container code="props-sizing">
              <ka-text code="sizing">
                <h4 v-html="t('button.main.sousMain.exemple.proprietes.propsSizing.sizing.value', `Sizing`)" />
              </ka-text>
              <ka-text code="buttons-can-be-given">
                <span v-html="t('button.main.sousMain.exemple.proprietes.propsSizing.buttonsCanBeGiven.value', `<span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'>Buttons can be given different sizing options to fit a multitude of scenarios</span>`)" />
              </ka-text>
              <!-- sample size -->
              <ka-container code="sample-size">
                <ka-button
                  code="extra-small-button"
                  :options="{ ripple: true }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsSizing.sampleSize.extraSmallButton.value', `extra small button`)" />
                </ka-button>
                <ka-button
                  code="small-button"
                  :options="{
                    ripple: true,
                    style: { innerBackgroundColor: appData.theme.primaryColor }
                  }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsSizing.sampleSize.smallButton.value', `small button`)" />
                </ka-button>
                <ka-button
                  code="normal-button"
                  :options="{ ripple: true }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsSizing.sampleSize.normalButton.value', `normal button`)" />
                </ka-button>
                <ka-button
                  code="large-button"
                  :options="{ ripple: true }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsSizing.sampleSize.largeButton.value', `large button`)" />
                </ka-button>
                <ka-button
                  code="extra-large-button"
                  :options="{ ripple: true }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsSizing.sampleSize.extraLargeButton.value', `extra large button`)" />
                </ka-button>
              </ka-container>
              <ka-code-preview
                code="code-preview-12"
                :options="{ elementToPreview: `5UoeK5ZyxNUfwgY7Eeh9Uf` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Props Text -->
            <ka-container code="props-text">
              <!-- intro text -->
              <ka-container code="intro-text">
                <ka-text code="text">
                  <h4 v-html="t('button.main.sousMain.exemple.proprietes.propsText.introText.text.value', `Text`)" />
                </ka-text>
                <ka-text code="text-buttons-have-no">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsText.introText.textButtonsHaveNo.value', `Text buttons have no box shadow and no background. Only on hover is the container for the button shown. When used with the color prop, the supplied color is applied to the button text instead of the background.`)" />
                </ka-text>
              </ka-container>
              <!-- Text button -->
              <ka-container code="text-button">
                <ka-button
                  code="normal"
                  :options="{ ripple: null }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsText.textButton.normal.value', `Normal`)" />
                </ka-button>
                <ka-button
                  code="primary"
                  :options="{
                    ripple: null,
                    style: { color: appData.theme.primaryColor }
                  }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsText.textButton.primary.value', `Primary`)" />
                </ka-button>
                <ka-button
                  code="error"
                  :options="{ ripple: null }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsText.textButton.error.value', `Error`)" />
                </ka-button>
                <ka-button
                  code="disabled-button"
                  :options="{ ripple: null }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsText.textButton.disabledButton.value', `Disabled`)" />
                </ka-button>
              </ka-container>
              <ka-code-preview
                code="code-preview-13"
                :options="{ elementToPreview: `scesDPyYKvJdhBrsbvcUco` }"
                value="https://www.kapix.fr" />
            </ka-container>
            <!-- Props Tile -->
            <ka-container code="props-tile">
              <ka-text code="tile-text">
                <h4 v-html="t('button.main.sousMain.exemple.proprietes.propsTile.tileText.value', `Tile`)" />
              </ka-text>
              <ka-text code="tile-buttons-behave">
                <span v-html="t('button.main.sousMain.exemple.proprietes.propsTile.tileButtonsBehave.value', `tile buttons behave the same as regular buttons but have no border radius.`)" />
              </ka-text>
              <!-- Sample Tile -->
              <ka-container
                code="sample-tile"
                inner>
                <ka-button
                  code="button-4"
                  :options="{ ripple: true }">
                  <span v-html="t('button.main.sousMain.exemple.proprietes.propsTile.sampleTile.button4.value', `button`)" />
                </ka-button>
              </ka-container>
              <ka-code-preview
                code="code-preview-14"
                :options="{ elementToPreview: `6MniveXPsmhZXt7LaydWfJ` }"
                value="https://www.kapix.fr" />
            </ka-container>
          </ka-container>
          <!-- Misc -->
          <ka-container code="misc" />
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
            <span v-html="t('button.rightPanel.sousNav.container2.contenu.value', `Contenu`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-11">
          <ka-text
            code="titre-3"
            :options="{
              href: { hash: `#usage--p5` },
              ariaLabel: `titre`,
              click: page.titre3Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('button.rightPanel.sousNav.container11.titre3.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-4"
            :options="{
              href: { hash: `#api--p5` },
              ariaLabel: `titre`,
              click: page.titre4Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('button.rightPanel.sousNav.container11.titre4.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-5"
            :options="{
              href: { hash: `#api--p5` },
              ariaLabel: `titre`,
              click: page.titre5Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('button.rightPanel.sousNav.container11.titre5.value', `Exemples`)" />
          </ka-text>
          <!-- sous-categorie -->
          <ka-container code="sous-categorie">
            <ka-text
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes--p5` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('button.rightPanel.sousNav.container11.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('button.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.sousTitreText.value', `block`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: { hash: `#props-depressed--p5` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('button.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.sousTitre1.value', `Depressed`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: { hash: `#props-outlined--p5` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('button.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.sousTitre2.value', `Outlined`)" />
              </ka-text>
              <ka-text
                code="sous-titre-3"
                :options="{
                  href: { hash: `#props-rounded--p5` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre3Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('button.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.sousTitre3.value', `Rounded`)" />
              </ka-text>
              <ka-text
                code="sous-titre-4"
                :options="{
                  href: { hash: `#props-sizing--p5` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre4Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('button.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.sousTitre4.value', `Sizing`)" />
              </ka-text>
              <ka-text
                code="sous-titre-5"
                :options="{
                  href: { hash: `#props-text--p5` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre5Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('button.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.sousTitre5.value', `Text`)" />
              </ka-text>
              <ka-text
                code="sous-titre-6"
                :options="{
                  href: { hash: `#props-tile--p5` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre6Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('button.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.sousTitre6.value', `Tile`)" />
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
          hidden: page.$info.button.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarButton } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarButton'
})
provide('$scoped', '--p5')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarButton())
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
