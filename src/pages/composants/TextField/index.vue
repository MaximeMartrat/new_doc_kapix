<template>
  <ka-container
    code="text-field"
    :data="page.$info.textField">
    <!-- Page -->
    <ka-container code="page">
      <!-- Sous page -->
      <ka-container code="sous-page">
        <ka-text
          code="text-fields"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h1 v-html="t('textField.page.sousPage.textFields.value', `Text fields`)" />
        </ka-text>
        <ka-text code="text-fields-components">
          <span v-html="t('textField.page.sousPage.textFieldsComponents.value', `Text fields components are used for collecting user provided information.`)" />
        </ka-text>
        <ka-text
          code="usage"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('textField.page.sousPage.usage.value', `Usage`)" />
        </ka-text>
        <ka-text code="a-simple-text-field">
          <span v-html="t('textField.page.sousPage.aSimpleTextField.value', `A simple text field with placeholder and/or label.`)" />
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
              elementToPreview: `kWHW3GkfeyCp5TiGhmrcw2`
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
            <!-- Haut -->
            <ka-container code="haut-container">
              <ka-string-input
                v-model="page.saisieDeTexte.value"
                code="saisie-de-texte"
                :options="{ placeholder: `Regular` }" />
              <ka-string-input
                v-model="page.saisieDeTexteStringInput.value"
                code="saisie-de-texte-string-input"
                :options="{ placeholder: `Regular` }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
              <ka-string-input
                v-model="page.saisieDeTexte1.value"
                code="saisie-de-texte-1"
                :options="{ placeholder: t('textField.page.sousPage.container.bas.hautContainer.saisieDeTexte1.placeholder', `Saisie de Texte`) }" />
              <ka-string-input
                v-model="page.saisieDeTexte2.value"
                code="saisie-de-texte-2"
                :options="{ placeholder: t('textField.page.sousPage.container.bas.hautContainer.saisieDeTexte2.placeholder', `Saisie de Texte`) }" />
            </ka-container>
            <!-- Bas -->
            <ka-container code="bas-container">
              <ka-string-input
                v-model="page.saisieDeTexte3.value"
                code="saisie-de-texte-3"
                :options="{ placeholder: t('textField.page.sousPage.container.bas.basContainer.saisieDeTexte3.placeholder', `Saisie de Texte`) }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
              <ka-string-input
                v-model="page.saisieDeTexte4.value"
                code="saisie-de-texte-4"
                :options="{ placeholder: t('textField.page.sousPage.container.bas.basContainer.saisieDeTexte4.placeholder', `Saisie de Texte`) }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
              <ka-string-input
                v-model="page.saisieDeTexte5.value"
                code="saisie-de-texte-5"
                :options="{ placeholder: t('textField.page.sousPage.container.bas.basContainer.saisieDeTexte5.placeholder', `Saisie de Texte`) }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
              <ka-string-input
                v-model="page.saisieDeTexte6.value"
                code="saisie-de-texte-6"
                :options="{ placeholder: t('textField.page.sousPage.container.bas.basContainer.saisieDeTexte6.placeholder', `Saisie de Texte`) }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
            </ka-container>
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
          <h2 v-html="t('textField.page.sousPage.api.value', `API`)" />
        </ka-text>
        <ka-text code="v-text-field">
          <span v-html="t('textField.page.sousPage.vTextField.value', `<ul><li>v-text-field</li></ul>`)" />
        </ka-text>
        <ka-text
          code="api-h-2"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('textField.page.sousPage.apiH2.value', `Examples`)" />
        </ka-text>
        <ka-text
          code="api-1"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('textField.page.sousPage.api1.value', `Props`)" />
        </ka-text>
        <ka-text
          code="counter"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h3 v-html="t('textField.page.sousPage.counter.value', `Counter`)" />
        </ka-text>
        <ka-text code="use-a-counter-prop">
          <span v-html="t('textField.page.sousPage.useACounterProp.value', `Use a counter prop to inform a user of the character limit. The counter does not perform any validation by itself - you will need to pair it with either the internal validation system, or a 3rd party library. The counter can be customised with the counter-value prop and counter scoped slot.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-1">
          <!-- Haut -->
          <ka-container code="haut-1">
            <ka-icon
              code="icon-2"
              :options="{
                click: page.icon2Click,
                $state: { selected: page.$data.reverseColor2 === `Colored` }
              }"
              :selected="{ click: page.icon2ClickWhenSelected }"
              :value="page.$data.reverseColor2 === `Default` ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
            <ka-icon
              code="icon-3"
              :options="{
                click: page.icon3Click,
                $state: { selected: page.$data.previewCode2 === `Clicked` }
              }"
              :selected="{ click: page.icon3ClickWhenSelected }"
              value="i-fa-solid:code" />
          </ka-container>
          <ka-code-preview
            code="code-preview-1"
            :options="{
              hidden: page.$data.previewCode2 === `Default` ? null : false,
              elementToPreview: `iGvUfHTt2VF79wr6EzS2gx`
            }"
            value="https://www.kapix.fr" />
          <!-- Bas -->
          <ka-container
            code="bas-1"
            :options="{
              style: {
                color: `$invert`,
                innerBackgroundColor: page.$data.reverseColor2 === `Default` ? null : {
                  Angle: 90,
                  Colors: [`#333333ff`]
                }
              }
            }">
            <!-- Haut -->
            <ka-container code="haut-2">
              <ka-string-input
                v-model="page.saisieDeTexte7.value"
                code="saisie-de-texte-7"
                :options="{ placeholder: `Regular` }" />
              <ka-string-input
                v-model="page.saisieDeTexte8.value"
                code="saisie-de-texte-8"
                :options="{ placeholder: `Regular` }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
              <ka-string-input
                v-model="page.saisieDeTexte9.value"
                code="saisie-de-texte-9"
                :options="{ placeholder: t('textField.page.sousPage.container1.bas1.haut2.saisieDeTexte9.placeholder', `Saisie de Texte`) }" />
              <ka-string-input
                v-model="page.saisieDeTexte10.value"
                code="saisie-de-texte-10"
                :options="{ placeholder: t('textField.page.sousPage.container1.bas1.haut2.saisieDeTexte10.placeholder', `Saisie de Texte`) }" />
            </ka-container>
            <!-- 1ère ligne -->
            <ka-container code="k-1-ere-ligne">
              <ka-string-input
                v-model="page.saisieDeTexte11.value"
                code="saisie-de-texte-11"
                :options="{
                  hideInputDetails: false,
                  placeholder: t('textField.page.sousPage.container1.bas1.k1EreLigne.saisieDeTexte11.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte12.value"
                code="saisie-de-texte-12"
                :options="{
                  hideInputDetails: false,
                  placeholder: t('textField.page.sousPage.container1.bas1.k1EreLigne.saisieDeTexte12.placeholder', `Saisie de Texte`)
                }" />
            </ka-container>
            <!-- Bas -->
            <ka-container code="bas-2">
              <ka-string-input
                v-model="page.saisieDeTexte13.value"
                code="saisie-de-texte-13"
                :options="{ placeholder: t('textField.page.sousPage.container1.bas1.bas2.saisieDeTexte13.placeholder', `Saisie de Texte`) }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
              <ka-string-input
                v-model="page.saisieDeTexte14.value"
                code="saisie-de-texte-14"
                :options="{ placeholder: t('textField.page.sousPage.container1.bas1.bas2.saisieDeTexte14.placeholder', `Saisie de Texte`) }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
              <ka-string-input
                v-model="page.saisieDeTexte15.value"
                code="saisie-de-texte-15"
                :options="{ placeholder: t('textField.page.sousPage.container1.bas1.bas2.saisieDeTexte15.placeholder', `Saisie de Texte`) }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
              <ka-string-input
                v-model="page.saisieDeTexte16.value"
                code="saisie-de-texte-16"
                :options="{ placeholder: t('textField.page.sousPage.container1.bas1.bas2.saisieDeTexte16.placeholder', `Saisie de Texte`) }"
                :selected="{ style: { borderColor: appData.theme.fontHyperlinkColor } }" />
            </ka-container>
            <!-- 2è ligne -->
            <ka-container code="k-2-e-ligne">
              <ka-string-input
                v-model="page.saisieDeTexte17.value"
                code="saisie-de-texte-17"
                :options="{
                  hideInputDetails: false,
                  placeholder: t('textField.page.sousPage.container1.bas1.k2ELigne.saisieDeTexte17.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte18.value"
                code="saisie-de-texte-18"
                :options="{
                  hideInputDetails: false,
                  placeholder: t('textField.page.sousPage.container1.bas1.k2ELigne.saisieDeTexte18.placeholder', `Saisie de Texte`)
                }" />
            </ka-container>
          </ka-container>
        </ka-container>
        <ka-text
          code="clearable"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h3 v-html="t('textField.page.sousPage.clearable.value', `Clearable`)" />
        </ka-text>
        <ka-text code="when-clearable-you">
          <span v-html="t('textField.page.sousPage.whenClearableYou.value', `When clearable, you can customize the clear icon with clear-icon. Note that readonly will not remove the clear icon, to prevent readonly inputs from being cleared you should also disable clearable.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-2">
          <!-- Haut -->
          <ka-container code="haut-3">
            <ka-icon
              code="icon-4"
              :options="{
                click: page.icon4Click,
                $state: { selected: page.$data.reverseColor2 === `Colored` }
              }"
              :selected="{ click: page.icon4ClickWhenSelected }"
              :value="page.$data.reverseColor3 === `Default` ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
            <ka-icon
              code="icon-5"
              :options="{
                click: page.icon5Click,
                $state: { selected: page.$data.previewCode3 === `Clicked` }
              }"
              :selected="{ click: page.icon5ClickWhenSelected }"
              value="i-fa-solid:code" />
          </ka-container>
          <ka-code-preview
            code="code-preview-2"
            :options="{
              hidden: page.$data.previewCode3 === `Default` ? null : false,
              elementToPreview: `u6CrUqBaQjgjn8AuC7MCgK`
            }"
            value="https://www.kapix.fr" />
          <!-- Bas -->
          <ka-container
            code="bas-3"
            :options="{
              style: {
                color: `$invert`,
                innerBackgroundColor: page.$data.reverseColor3 === `Default` ? null : {
                  Angle: 90,
                  Colors: [`#333333ff`]
                }
              }
            }">
            <!-- 1ère ligne -->
            <ka-container code="k-1-ere-ligne-container">
              <ka-string-input
                v-model="page.saisieDeTexte19.value"
                code="saisie-de-texte-19"
                :options="{
                  hideInputDetails: false,
                  placeholder: t('textField.page.sousPage.container2.bas3.k1EreLigneContainer.saisieDeTexte19.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte20.value"
                code="saisie-de-texte-20"
                :options="{
                  hideInputDetails: false,
                  placeholder: t('textField.page.sousPage.container2.bas3.k1EreLigneContainer.saisieDeTexte20.placeholder', `Saisie de Texte`)
                }" />
            </ka-container>
            <!-- 2è ligne -->
            <ka-container code="k-2-e-ligne-container">
              <ka-string-input
                v-model="page.saisieDeTexte21.value"
                code="saisie-de-texte-21"
                :options="{
                  hideInputDetails: false,
                  placeholder: t('textField.page.sousPage.container2.bas3.k2ELigneContainer.saisieDeTexte21.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte22.value"
                code="saisie-de-texte-22"
                :options="{
                  hideInputDetails: false,
                  placeholder: t('textField.page.sousPage.container2.bas3.k2ELigneContainer.saisieDeTexte22.placeholder', `Saisie de Texte`)
                }" />
            </ka-container>
          </ka-container>
        </ka-container>
        <ka-text
          code="disabled-and-readonly"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h3 v-html="t('textField.page.sousPage.disabledAndReadonly.value', `Disabled and readonly`)" />
        </ka-text>
        <ka-text code="text-fields-can-be">
          <span v-html="t('textField.page.sousPage.textFieldsCanBe.value', `Text fields can be disabled or readonly.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-3">
          <!-- Haut -->
          <ka-container code="haut-4">
            <ka-icon
              code="icon-6"
              :options="{
                click: page.icon6Click,
                $state: { selected: page.$data.reverseColor4 === `Colored` }
              }"
              :selected="{ click: page.icon6ClickWhenSelected }"
              :value="page.$data.reverseColor4 === `Default` ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
            <ka-icon
              code="icon-7"
              :options="{
                click: page.icon7Click,
                $state: { selected: page.$data.previewCode4 === `Clicked` }
              }"
              :selected="{ click: page.icon7ClickWhenSelected }"
              value="i-fa-solid:code" />
          </ka-container>
          <ka-code-preview
            code="code-preview-3"
            :options="{
              hidden: page.$data.previewCode4 === `Default` ? null : false,
              elementToPreview: `sf8rHQmdgusUfzHoCBxvZH`
            }"
            value="https://www.kapix.fr" />
          <!-- Bas -->
          <ka-container
            code="bas-4"
            :options="{
              style: {
                color: `$invert`,
                innerBackgroundColor: page.$data.reverseColor4 === `Default` ? null : {
                  Angle: 90,
                  Colors: [`#333333ff`]
                }
              }
            }">
            <!-- 1 -->
            <ka-container code="k-1">
              <ka-string-input
                code="saisie-de-texte-23"
                :options="{ editable: false }" />
              <ka-string-input
                code="saisie-de-texte-24"
                :options="{ editable: false }"
                value="John Doe" />
            </ka-container>
            <!-- 2 -->
            <ka-container code="k-2">
              <ka-string-input
                code="saisie-de-texte-25"
                :options="{ editable: false }"
                value="John Doe" />
              <ka-string-input
                code="saisie-de-texte-26"
                :options="{ editable: false }"
                value="John Doe" />
            </ka-container>
            <!-- 3 -->
            <ka-container code="k-3">
              <ka-string-input
                code="saisie-de-texte-27"
                :options="{ editable: false }"
                value="John Doe" />
              <ka-string-input
                code="saisie-de-texte-28"
                :options="{ editable: false }"
                value="John Doe" />
            </ka-container>
            <!-- 4 -->
            <ka-container code="k-4">
              <ka-string-input
                code="saisie-de-texte-29"
                :options="{ editable: false }"
                value="John Doe" />
              <ka-string-input
                code="saisie-de-texte-30"
                :options="{ editable: false }"
                value="John Doe" />
            </ka-container>
          </ka-container>
        </ka-container>
        <ka-text
          code="api-2"
          :options="{
            style: {
              color: appData.theme.fontColor2,
              fontFamily: appData.theme.fontFamily2
            }
          }">
          <h2 v-html="t('textField.page.sousPage.api2.value', `Icons`)" />
        </ka-text>
        <ka-text code="you-can-add-icons-to">
          <span v-html="t('textField.page.sousPage.youCanAddIconsTo.value', `You can add icons to the text field with prepend-icon, append-icon and append-outer-icon props.`)" />
        </ka-text>
        <!-- Container -->
        <ka-container code="container-4">
          <!-- Haut -->
          <ka-container code="haut-5">
            <ka-icon
              code="icon-8"
              :options="{
                click: page.icon8Click,
                $state: { selected: page.$data.reverseColor5 === `Colored` }
              }"
              :selected="{ click: page.icon8ClickWhenSelected }"
              :value="page.$data.reverseColor5 === `Default` ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
            <ka-icon
              code="icon-9"
              :options="{
                click: page.icon9Click,
                $state: { selected: page.$data.previewCode5 === `Clicked` }
              }"
              :selected="{ click: page.icon9ClickWhenSelected }"
              value="i-fa-solid:code" />
          </ka-container>
          <ka-code-preview
            code="code-preview-4"
            :options="{
              hidden: page.$data.previewCode5 === `Default` ? null : false,
              elementToPreview: `k2Nbo2HUYfHouY9E4ZJxEn`
            }"
            value="https://www.kapix.fr" />
          <!-- Bas -->
          <ka-container
            code="bas-5"
            :options="{
              style: {
                color: `$invert`,
                innerBackgroundColor: page.$data.reverseColor5 === `Default` ? null : {
                  Angle: 90,
                  Colors: [`#333333ff`]
                }
              }
            }">
            <!-- Container -->
            <ka-container code="container-5">
              <ka-string-input
                v-model="page.saisieDeTexte31.value"
                code="saisie-de-texte-31"
                :options="{
                  prependInnerIcon: `i-fa-solid:map-marker-alt`,
                  placeholder: t('textField.page.sousPage.container4.bas5.container5.saisieDeTexte31.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte32.value"
                code="saisie-de-texte-32"
                :options="{
                  appendIcon: `i-fa-solid:map-marker-alt`,
                  placeholder: t('textField.page.sousPage.container4.bas5.container5.saisieDeTexte32.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte33.value"
                code="saisie-de-texte-33"
                :options="{
                  prependInnerIcon: `i-fa-solid:map-marker-alt`,
                  placeholder: t('textField.page.sousPage.container4.bas5.container5.saisieDeTexte33.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte34.value"
                code="saisie-de-texte-34"
                :options="{
                  appendIcon: `i-fa-solid:map-marker-alt`,
                  placeholder: t('textField.page.sousPage.container4.bas5.container5.saisieDeTexte34.placeholder', `Saisie de Texte`)
                }" />
            </ka-container>
            <!-- Container -->
            <ka-container code="container-6">
              <ka-string-input
                v-model="page.saisieDeTexte35.value"
                code="saisie-de-texte-35"
                :options="{
                  prependInnerIcon: `i-fa-solid:map-marker-alt`,
                  placeholder: t('textField.page.sousPage.container4.bas5.container6.saisieDeTexte35.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte36.value"
                code="saisie-de-texte-36"
                :options="{
                  appendIcon: `i-fa-solid:map-marker-alt`,
                  placeholder: t('textField.page.sousPage.container4.bas5.container6.saisieDeTexte36.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte37.value"
                code="saisie-de-texte-37"
                :options="{
                  prependInnerIcon: `i-fa-solid:map-marker-alt`,
                  placeholder: t('textField.page.sousPage.container4.bas5.container6.saisieDeTexte37.placeholder', `Saisie de Texte`)
                }" />
              <ka-string-input
                v-model="page.saisieDeTexte38.value"
                code="saisie-de-texte-38"
                :options="{
                  appendIcon: `i-fa-solid:map-marker-alt`,
                  placeholder: t('textField.page.sousPage.container4.bas5.container6.saisieDeTexte38.placeholder', `Saisie de Texte`)
                }" />
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
            <h2 v-html="t('textField.page.sousPage.ready.accessibility.value', `Ready for more?`)" />
          </ka-text>
          <ka-text code="continue-your-learning">
            <span v-html="t('textField.page.sousPage.ready.continueYourLearning.value', `Continue your learning with related content selected by the <a href='https://v2.vuetifyjs.com/en/about/meet-the-team/'>Team</a> or move between pages by using the navigation links below.`)" />
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
                  <span v-html="t('textField.page.sousPage.ready.global.gauche.droite.iconFonts.value', `Icon Fonts`)" />
                </ka-text>
                <ka-text code="features">
                  <span v-html="t('textField.page.sousPage.ready.global.gauche.droite.features.value', `Features`)" />
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
                  <span v-html="t('textField.page.sousPage.ready.global.milieu.droiteContainer.buttons.value', `Buttons`)" />
                </ka-text>
                <ka-text code="components">
                  <span v-html="t('textField.page.sousPage.ready.global.milieu.droiteContainer.components.value', `Components`)" />
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
                  <span v-html="t('textField.page.sousPage.ready.global.droite1.droite2.cards.value', `Cards`)" />
                </ka-text>
                <ka-text code="components-text">
                  <span v-html="t('textField.page.sousPage.ready.global.droite1.droite2.componentsText.value', `Components`)" />
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
        <ka-container code="container-7">
          <ka-text code="contenu">
            <span v-html="t('textField.rightPanel.sousNav.container7.contenu.value', `Contenu`)" />
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
            <span v-html="t('textField.rightPanel.sousNav.container1Container.titre.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-text"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('textField.rightPanel.sousNav.container1Container.titreText.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-1"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre1Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('textField.rightPanel.sousNav.container1Container.titre1.value', `Exemples`)" />
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
              <span v-html="t('textField.rightPanel.sousNav.container1Container.sousCategorie.sousTitre.value', `Propriétés`)" />
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
                <span v-html="t('textField.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('textField.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('textField.rightPanel.sousNav.container1Container.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
              </ka-text>
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
    <kapix-teleport :disabled="!$breakpoint.mdAndUp">
      <ka-icon
        code="icon-10"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.icon10Click,
          hidden: page.$info.textField.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarTextField } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarTextField'
})
provide('$scoped', '--p20')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarTextField())
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
