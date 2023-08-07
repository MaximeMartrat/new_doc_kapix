<template>
  <KaContainer
    code="check-box-preview"
    :data="page.$info.checkBoxPreview"
    :options="{
      style: {
        backgroundColor: appData.theme.backgroundColor,
        img: appData.theme.backgroundImage,
        color: appData.theme.fontColor,
        fontFamily: appData.theme.fontFamily,
        fontSize: appData.theme.fontSize
      }
    }">
    <!-- sous_nav -->
    <KapixTeleport>
      <KaContainer code="sous-nav">
        <!-- Container -->
        <KaContainer code="container">
          <KaText code="contenu">
            <span v-html="t('checkBoxPreview.sousNav.container.contenu.value', `Contenu`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-1">
          <KaText
            code="titre"
            :options="{
              href: { hash: `#utilisation-p1` },
              ariaLabel: `titre`,
              click: page.titreClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('checkBoxPreview.sousNav.container1.titre.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-1"
            :options="{
              href: { hash: `#api-p1` },
              ariaLabel: `titre`,
              click: page.text1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('checkBoxPreview.sousNav.container1.text1.value', `API`)" />
          </KaText>
          <KaText
            code="text-2"
            :options="{
              href: { hash: `#exemple-p1` },
              ariaLabel: `titre`,
              click: page.text2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('checkBoxPreview.sousNav.container1.text2.value', `Exemples`)" />
          </KaText>
          <!-- sous-categorie -->
          <KaContainer code="sous-categorie">
            <KaText
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes-p1` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('checkBoxPreview.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-3"
                :options="{
                  href: { hash: `#couleurs-p1` },
                  ariaLabel: `sous titre`,
                  click: page.text3Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('checkBoxPreview.sousNav.container1.sousCategorie.sousSousCategorie.text3.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-4"
                :options="{
                  href: { hash: `#valeurs-p1` },
                  ariaLabel: `sous titre`,
                  click: page.text4Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('checkBoxPreview.sousNav.container1.sousCategorie.sousSousCategorie.text4.value', `Valeurs`)" />
              </KaText>
              <KaText
                code="text-5"
                :options="{
                  href: { hash: `#etats-p1` },
                  ariaLabel: `sous titre`,
                  click: page.text5Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('checkBoxPreview.sousNav.container1.sousCategorie.sousSousCategorie.text5.value', `Etats`)" />
              </KaText>
            </KaContainer>
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KapixTeleport>
    <KapixTeleport :disabled="!$breakpoint.mdAndUp">
      <KaIcon
        code="icon"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.iconClick,
          hidden: page.$info.checkBoxPreview.scrollTop > 0 ? false : null
        }"
        value="i-fa-solid:angle-double-up" />
    </KapixTeleport>
    <!-- Main -->
    <KaContainer code="main">
      <!-- Sous_Main -->
      <KaContainer code="sous-main">
        <KaText code="text-6">
          <h1 v-html="t('checkBoxPreview.main.sousMain.text6.value', `Checkbox`)" />
        </KaText>
        <Paragraphe
          instance-class="paragraphe-p1"
          content="L'élément case à coché permet à l'utilisateur de choisir entre deux distinctes valeurs. Il est extrèmement similaire à l'interrupteur (switch) et peut être utilisé dans des formulaires complex et listes à cocher. " />
        <!-- Utilisation -->
        <KaContainer code="utilisation">
          <KaText code="titre-categorie">
            <h2 v-html="t('checkBoxPreview.main.sousMain.utilisation.titreCategorie.value', `Utilisation`)" />
          </KaText>
          <Paragraphe
            instance-class="element-1-p1"
            content="Une case à coché dans sa forme la plus basique permet d'alterner entre 2 valeurs." />
          <!-- Container -->
          <KaContainer code="container-2">
            <KaCheckboxInput
              v-model="page.checkBox.value"
              code="check-box"
              :options="{ debounce: 100 }" />
            <KaText code="checkbox-coche">
              <span v-html="t('checkBoxPreview.main.sousMain.utilisation.container2.checkboxCoche.value', `Checkbox coché: {0}`, [page.checkBox.value])" />
            </KaText>
          </KaContainer>
        </KaContainer>
        <!-- API -->
        <KaContainer code="api">
          <KaText code="text-7">
            <h2 v-html="t('checkBoxPreview.main.sousMain.api.text7.value', `API (il manque des informations)`)" />
          </KaText>
        </KaContainer>
        <!-- Exemple -->
        <KaContainer code="exemple">
          <KaText code="exemples">
            <h2 v-html="t('checkBoxPreview.main.sousMain.exemple.exemples.value', `Exemples`)" />
          </KaText>
          <!-- Proprietes -->
          <KaContainer code="proprietes">
            <KaText code="text-8">
              <h3 v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.text8.value', `Propriétés`)" />
            </KaText>
            <!-- Couleurs -->
            <KaContainer code="couleurs">
              <KaText code="text-9">
                <h4 v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.couleurs.text9.value', `Couleurs`)" />
              </KaText>
              <KaText code="la-couleur-des-cases">
                <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.couleurs.laCouleurDesCases.value', `La couleur des cases peut être modifiée en ajustant la couleur de la police dans l'éditeur.`)" />
              </KaText>
              <!-- Container -->
              <KaContainer code="container-3">
                <KaCheckboxInput
                  v-model="page.caseACocherOui.value"
                  code="case-a-cocher-oui"
                  :options="{ debounce: 100 }" />
                <KaText code="rouge">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.couleurs.container3.rouge.value', `rouge`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseACocherOui1.value"
                  code="case-a-cocher-oui-1"
                  :options="{ debounce: 100 }" />
                <KaText code="bleu">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.couleurs.container3.bleu.value', `bleu`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseACocherOui2.value"
                  code="case-a-cocher-oui-2"
                  :options="{ debounce: 100 }" />
                <KaText code="vert">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.couleurs.container3.vert.value', `vert`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseACocherOui4.value"
                  code="case-a-cocher-oui-4"
                  :options="{
                    style: { color: appData.theme.primaryColor },
                    debounce: 100
                  }" />
                <KaText code="bleu-kapix">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.couleurs.container3.bleuKapix.value', `bleu Kapix`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseACocherOui5.value"
                  code="case-a-cocher-oui-5"
                  :options="{
                    style: { color: appData.theme.secondaryColor },
                    debounce: 100
                  }" />
                <KaText code="jaune-kapix">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.couleurs.container3.jauneKapix.value', `jaune kapix`)" />
                </KaText>
              </KaContainer>
            </KaContainer>
            <!-- Valeurs -->
            <KaContainer code="valeurs">
              <KaText code="text-10">
                <h4 v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.valeurs.text10.value', `Valeurs`)" />
              </KaText>
              <KaText code="les-valeurs-des-cases">
                <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.valeurs.lesValeursDesCases.value', `Les valeurs des cases peuvent être récupérées via des liens magiques`)" />
              </KaText>
              <!-- Container -->
              <KaContainer code="container-4">
                <KaCheckboxInput
                  v-model="page.caseUno.value"
                  code="case-uno"
                  :options="{ debounce: 100 }" />
                <KaText code="valeur">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.valeurs.container4.valeur.value', `valeur: {0}`, [page.caseUno.value])" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseDeuxio.value"
                  code="case-deuxio"
                  :options="{ debounce: 100 }" />
                <KaText code="valeur-false">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.valeurs.container4.valeurFalse.value', `valeur: {0}`, [page.caseDeuxio.value || `false`])" />
                </KaText>
              </KaContainer>
            </KaContainer>
            <!-- Etats -->
            <KaContainer code="etats">
              <KaText code="text-11">
                <h4 v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.etats.text11.value', `Etats`)" />
              </KaText>
              <KaText code="text-12">
                <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.etats.text12.value', `Les valeurs des cases peuvent être récupérées via des liens magiques`)" />
              </KaText>
              <!-- Container -->
              <KaContainer code="container-5">
                <KaCheckboxInput
                  v-model="page.checkbox1.value"
                  code="checkbox-1"
                  :options="{ debounce: 100 }" />
                <KaText code="etat-initial-off">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.etats.container5.etatInitialOff.value', `Etat initial Off`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.checkbox2.value"
                  code="checkbox-2"
                  :options="{ debounce: 100 }" />
                <KaText code="etat-initial-on">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.etats.container5.etatInitialOn.value', `Etat initial On`)" />
                </KaText>
              </KaContainer>
              <KaText code="il-est-egalement-possible">
                <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.etats.ilEstEgalementPossible.value', `Il est également possible de désactiver les interactions `)" />
              </KaText>
              <!-- Container -->
              <KaContainer code="container-6">
                <KaCheckboxInput
                  v-model="page.checkbox3.value"
                  code="checkbox-3"
                  :options="{ debounce: 100 }" />
                <KaText code="desactive-off">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.etats.container6.desactiveOff.value', `Désactivé Off`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.checkbox4.value"
                  code="checkbox-4"
                  :options="{ debounce: 100 }" />
                <KaText code="desactive-on">
                  <span v-html="t('checkBoxPreview.main.sousMain.exemple.proprietes.etats.container6.desactiveOn.value', `Désactivé On`)" />
                </KaText>
              </KaContainer>
            </KaContainer>
          </KaContainer>
          <!-- MultiValeur -->
          <KaContainer code="multi-valeur">
            <Paragraphe
              instance-class="element-2-p1"
              content="il est possible de mettre deux valeurs pour une même sortie" />
            <KaText code="text-jacob">
              <span v-html="t('checkBoxPreview.main.sousMain.exemple.multiValeur.textJacob.value', `Jacob`)" />
            </KaText>
            <KaCheckboxInput
              v-model="page.caseJacob.value"
              code="case-jacob"
              :options="{ debounce: 100 }" />
            <KaText code="text-john">
              <span v-html="t('checkBoxPreview.main.sousMain.exemple.multiValeur.textJohn.value', `John`)" />
            </KaText>
            <KaCheckboxInput
              v-model="page.caseJohn.value"
              code="case-john"
              :options="{ debounce: 100 }" />
            <KaText code="resultat-john-quot-quot-operator-quo">
              <span v-html="t('checkBoxPreview.main.sousMain.exemple.multiValeur.resultatJohnQuotQuotOperatorQuo.value', `Résultat : {0} {1}`, [page.caseJohn.value === true ? `John` : undefined, page.caseJacob.value === true ? `Jacob` : undefined])" />
            </KaText>
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
  </KaContainer>
</template>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { checkBoxPreview } from './store'
import Paragraphe from '~/components/Paragraphe/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HomePage'
})
provide('$scoped', '-p1')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = checkBoxPreview()
provide('$elements', page.$elements)
provide('$parentPage', page)
onBeforeMount(() => page.beforeMount())
onMounted(() => page.mounted())
onServerPrefetch(() => page.serverPrefetch())
onBeforeUnmount(() => page.beforeUnmount())
onUnmounted(() => page.unmounted())

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
