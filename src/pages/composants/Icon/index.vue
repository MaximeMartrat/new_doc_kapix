<template>
  <ka-container
    code="icon"
    :data="page.$info.icon">
    <!-- Page -->
    <ka-container code="page">
      <!-- Sous page -->
      <ka-container code="sous-page">
        <ka-text code="titre">
          <h1 v-html="t('icon.page.sousPage.titre.value', `Icons`)" />
        </ka-text>
        <ka-text code="paragraphe">
          <span v-html="t('icon.page.sousPage.paragraphe.value', `The v-icon component provides a large set of glyphs to provide context to various aspects of your application. For a list of all available icons, visit the official <a href='https://materialdesignicons.com/'>Material Design Icons</a> page. To use any of these icons simply use the mdi- prefix followed by the icon name.`)" />
        </ka-text>
        <!-- Usage -->
        <ka-container code="usage">
          <ka-text code="titre-categorie">
            <h2 v-html="t('icon.page.sousPage.usage.titreCategorie.value', `Usage`)" />
          </ka-text>
          <ka-text code="paragraphe-text">
            <span v-html="t('icon.page.sousPage.usage.paragrapheText.value', `Icons come in two themes (light and dark), and five different sizes (x-small, small, medium (default), large, and x-large).`)" />
          </ka-text>
          <!-- Section 1 -->
          <ka-container code="section-1">
            <!-- Container -->
            <ka-container code="container">
              <ka-button
                code="bouton-default"
                :options="{
                  ripple: true,
                  click: page.boutonDefaultClick,
                  $state: { selected: page.$data.size === `medium` && page.$data.color === `default` && page.$data.icon === `mdi-plus` }
                }">
                <span v-html="t('icon.page.sousPage.usage.section1.container.boutonDefault.value', `default`)" />
              </ka-button>
              <!-- Container -->
              <ka-container code="container-1">
                <!-- Container -->
                <ka-container
                  code="container-2"
                  :options="{
                    style: {
                      fontSize: $first([
                        page.$data.size === `x-small` ? `0.67em` : undefined,
                        page.$data.size === `small` ? `0.83em` : undefined,
                        page.$data.size === `medium` ? `1em` : undefined,
                        page.$data.size === `large` ? `1.17em` : undefined,
                        page.$data.size === `x-large` ? `1.5em` : undefined,
                        `2em`
                      ])
                    }
                  }"
                  inner>
                  <ka-icon
                    code="usage-icon-sample"
                    :options="{
                      style: {
                        color: $first([
                          page.$data.color === `default` ? `#000000FF` : undefined,
                          page.$data.color === `success` ? `#00FF0AFF` : undefined,
                          page.$data.color === `info` ? `#0028FFFF` : undefined,
                          page.$data.color === `warning` ? `#FF7700FF` : undefined,
                          `#FF0000FF`
                        ])
                      }
                    }"
                    :value="$first([
                      page.$data.icon === `mdi-plus` ? 'i-fa-solid:plus' : undefined,
                      page.$data.icon === `mdi-check-circle` ? 'i-fa-solid:check-circle' : undefined,
                      page.$data.icon === `mdi-information` ? 'i-fa-solid:info-circle' : undefined,
                      page.$data.icon === `mdi-alert` ? 'i-fa-solid:exclamation-triangle' : undefined,
                      page.$data.icon === `mdi-alert-circle` ? 'i-fa-solid:exclamation-circle' : undefined,
                      'i-fa-solid:wifi'
                    ])" />
                </ka-container>
                <!-- Container 1 -->
                <ka-container code="container-1-container">
                  <ka-select-input
                    v-model="page.size.value"
                    code="size"
                    :options="{
                      tooltip: { content: t('icon.page.sousPage.usage.section1.container.container1.container1Container.size.tooltip', `Size`) },
                      debounce: 10,
                      placeholder: t('icon.page.sousPage.usage.section1.container.container1.container1Container.size.placeholder', `Size`)
                    }" />
                  <ka-select-input
                    v-model="page.color.value"
                    code="color"
                    :options="{
                      debounce: 10,
                      placeholder: t('icon.page.sousPage.usage.section1.container.container1.container1Container.color.placeholder', `Color`)
                    }" />
                  <ka-select-input
                    v-model="page.iconSelectInput.value"
                    code="icon-select-input"
                    :options="{
                      debounce: 10,
                      placeholder: t('icon.page.sousPage.usage.section1.container.container1.container1Container.iconSelectInput.placeholder', `Icon`)
                    }" />
                </ka-container>
              </ka-container>
            </ka-container>
            <ka-code-preview
              code="code-preview"
              :options="{ elementToPreview: `8eJsnSaFqVD2psfgSV4xXd` }"
              value="https://www.kapix.fr" />
          </ka-container>
        </ka-container>
        <!-- Exemple -->
        <ka-container code="exemple">
          <ka-text code="exemples">
            <h2 v-html="t('icon.page.sousPage.exemple.exemples.value', `Examples`)" />
          </ka-text>
          <!-- Proprietes -->
          <ka-container code="proprietes">
            <ka-text code="titre-text">
              <h3 v-html="t('icon.page.sousPage.exemple.proprietes.titreText.value', `Props`)" />
            </ka-text>
            <!-- Couleurs -->
            <ka-container code="couleurs">
              <ka-text code="color-text">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.couleurs.colorText.value', `Color`)" />
              </ka-text>
              <ka-text code="paragraphe-1">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.couleurs.paragraphe1.value', `Using color helpers you can change the color of an icon from the standard dark and light themes.`)" />
              </ka-text>
              <!-- Sample Colors -->
              <ka-container code="sample-colors">
                <!-- Conteneur haut -->
                <ka-container code="conteneur-haut">
                  <ka-icon
                    code="reverse-color"
                    :options="{
                      tooltip: { content: t('icon.page.sousPage.exemple.proprietes.couleurs.sampleColors.conteneurHaut.reverseColor.tooltip', `Invert example colors`) },
                      click: page.reverseColorClick,
                      $state: { selected: page.$data.reverseColor === true }
                    }"
                    :selected="{ click: page.reverseColorClickWhenSelected }"
                    :value="page.$data.reverseColor === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <ka-icon
                    code="code-preview-icon"
                    :options="{
                      click: page.codePreviewIconClick,
                      $state: { selected: page.$data.previewCode === true }
                    }"
                    :selected="{ click: page.codePreviewIconClickWhenSelected }"
                    value="i-fa-solid:code" />
                </ka-container>
                <ka-code-preview
                  code="code-preview-1"
                  :options="{
                    hidden: page.$data.previewCode === true ? false : true,
                    elementToPreview: `m1BsU8yAGbKZmwcz5kDgT9`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Icons color -->
                <ka-container
                  code="icons-color"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <ka-icon
                    code="icon-1"
                    value="i-fa-solid:city" />
                  <ka-icon
                    code="chatbox"
                    value="i-fa-solid:comment-alt" />
                  <ka-icon
                    code="keyboard"
                    value="i-fa-regular:keyboard" />
                  <ka-icon
                    code="letter"
                    value="i-fa-solid:envelope" />
                  <ka-icon
                    code="arrow"
                    value="i-fa-solid:expand-arrows-alt" />
                  <ka-icon
                    code="alternate-arrow"
                    value="i-fa-solid:arrow-alt-circle-up" />
                </ka-container>
              </ka-container>
            </ka-container>
            <!-- Valeurs -->
            <ka-container code="valeurs">
              <ka-text code="events">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.events.value', `Events`)" />
              </ka-text>
              <ka-text code="click">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.click.value', `Click`)" />
              </ka-text>
              <ka-text code="binding-any-click-event">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.bindingAnyClickEvent.value', `Binding any click event to v-icon will automatically change the cursor to a pointer.`)" />
              </ka-text>
              <!-- Sample Colors -->
              <ka-container code="sample-colors-container">
                <!-- Conteneur haut -->
                <ka-container code="conteneur-haut-container">
                  <ka-icon
                    code="reverse-color-2"
                    :options="{
                      tooltip: { content: t('icon.page.sousPage.exemple.proprietes.valeurs.sampleColorsContainer.conteneurHautContainer.reverseColor2.tooltip', `Invert example colors`) },
                      click: page.reverseColor2Click,
                      $state: { selected: page.$data.reverseColor2 === true }
                    }"
                    :selected="{ click: page.reverseColor2ClickWhenSelected }"
                    :value="page.$data.reverseColor2 === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <ka-icon
                    code="code-preview-2"
                    :options="{
                      click: page.codePreview2Click,
                      $state: { selected: page.$data.previewCode === true }
                    }"
                    :selected="{ click: page.codePreview2ClickWhenSelected }"
                    value="i-fa-solid:code" />
                </ka-container>
                <ka-code-preview
                  code="code-preview-3"
                  :options="{
                    hidden: page.$data.previewCode === true ? false : true,
                    elementToPreview: `v732xtDAw7QivSw3i4nbVN`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Conteneur - Bas -->
                <ka-container
                  code="conteneur-bas"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <!-- Content -->
                  <ka-container
                    code="content"
                    :options="{
                      style: {
                        color: `$invert`,
                        backgroundColor: page.$data.reverseColor2 === false ? {
                          Angle: 90,
                          Colors: [`#ffffffff`]
                        } : {
                          Angle: 90,
                          Colors: [`#1E1D1DFF`]
                        }
                      }
                    }">
                    <!-- Barre haut -->
                    <ka-container code="barre-haut">
                      <ka-text code="titre-1">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.sampleColorsContainer.conteneurBas.content.barreHaut.titre1.value', `Upcoming Changes`)" />
                      </ka-text>
                    </ka-container>
                    <!-- Bas -->
                    <ka-container code="bas">
                      <ka-text code="text">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.sampleColorsContainer.conteneurBas.content.bas.text.value', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)" />
                      </ka-text>
                      <ka-icon
                        code="icon-2"
                        value="i-fa-solid:angle-right"
                        inner />
                    </ka-container>
                  </ka-container>
                </ka-container>
              </ka-container>
            </ka-container>
            <!-- Valeurs -->
            <ka-container code="valeurs-container">
              <ka-text code="misc">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.valeursContainer.misc.value', `Misc`)" />
              </ka-text>
              <ka-text code="buttons">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.valeursContainer.buttons.value', `Buttons`)" />
              </ka-text>
              <ka-text code="icons-can-be-used-inside">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.valeursContainer.iconsCanBeUsedInside.value', `Icons can be used inside of buttons to add emphasis to the action.`)" />
              </ka-text>
              <!-- Sample Colors -->
              <ka-container code="sample-colors-1">
                <!-- Conteneur haut -->
                <ka-container code="conteneur-haut-1">
                  <ka-icon
                    code="reverse-color-2-icon"
                    :options="{
                      tooltip: { content: t('icon.page.sousPage.exemple.proprietes.valeursContainer.sampleColors1.conteneurHaut1.reverseColor2Icon.tooltip', `Invert example colors`) },
                      click: page.reverseColor2IconClick,
                      $state: { selected: page.$data.reverseColor3Copy === true }
                    }"
                    :selected="{ click: page.reverseColor2IconClickWhenSelected }"
                    :value="page.$data.reverseColor3Copy === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <ka-icon
                    code="code-preview-2-icon"
                    :options="{
                      click: page.codePreview2IconClick,
                      $state: { selected: page.$data.codePreview2Copy === true }
                    }"
                    :selected="{ click: page.codePreview2IconClickWhenSelected }"
                    value="i-fa-solid:code" />
                </ka-container>
                <ka-code-preview
                  code="code-preview-4"
                  :options="{
                    hidden: page.$data.codePreview2Copy === true ? false : true,
                    elementToPreview: `ibnVh9GWFjDjU7uw9gtU8S`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Première ligne -->
                <ka-container
                  code="premiere-ligne"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor3Copy === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#2C2929FF`]
                      }
                    }
                  }">
                  <!-- Premère ligne -->
                  <ka-container code="premere-ligne">
                    <!-- 1 -->
                    <ka-container code="k-1">
                      <ka-text code="accept">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.valeursContainer.sampleColors1.premiereLigne.premereLigne.k1.accept.value', `ACCEPT`)" />
                      </ka-text>
                      <ka-icon
                        code="icon-3"
                        value="i-fa-solid:check-circle" />
                    </ka-container>
                    <!-- 2 -->
                    <ka-container code="k-2">
                      <ka-text code="decline">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.valeursContainer.sampleColors1.premiereLigne.premereLigne.k2.decline.value', `DECLINE`)" />
                      </ka-text>
                      <ka-icon
                        code="icon-4"
                        value="i-fa-solid:ban" />
                    </ka-container>
                    <!-- 3 -->
                    <ka-container code="k-3">
                      <ka-icon
                        code="icon-5"
                        value="i-fa-solid:minus-circle" />
                      <ka-text code="cancel">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.valeursContainer.sampleColors1.premiereLigne.premereLigne.k3.cancel.value', `CANCEL`)" />
                      </ka-text>
                    </ka-container>
                  </ka-container>
                  <!-- Deuxième ligne -->
                  <ka-container code="deuxieme-ligne">
                    <!-- 1 -->
                    <ka-container code="k-1-container">
                      <ka-icon
                        code="icon-6"
                        value="i-fa-solid:arrow-left" />
                      <ka-text code="back">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.valeursContainer.sampleColors1.premiereLigne.deuxiemeLigne.k1Container.back.value', `BACK`)" />
                      </ka-text>
                    </ka-container>
                    <ka-icon
                      code="icon-7"
                      value="i-fa-solid:tools" />
                    <ka-icon
                      code="icon-8"
                      value="i-fa-solid:cloud-upload-alt" />
                  </ka-container>
                  <!-- 3è ligne -->
                  <ka-container code="k-3-e-ligne">
                    <ka-icon
                      code="icon-9"
                      value="i-fa-solid:thumbs-up" />
                    <ka-icon
                      code="icon-10"
                      value="i-fa-solid:thumbs-down" />
                  </ka-container>
                </ka-container>
              </ka-container>
            </ka-container>
            <!-- Font -->
            <ka-container code="font">
              <ka-text code="font-awesome">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.font.fontAwesome.value', `Font awesome`)" />
              </ka-text>
              <ka-text code="font-awesome-is-also">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.font.fontAwesomeIsAlso.value', `<a href='https://fontawesome.com/icons/'>Font Awesome</a> is also supported. Simply use the fa- prefixed icon name. Please note that you still need to include the Font Awesome icons in your project. For more information on how to install it, please navigate to the <a href='https://v2.vuetifyjs.com/en/features/icon-fonts/#install-font-awesome-5-icons'>installation page</a>`)" />
              </ka-text>
              <!-- Global -->
              <ka-container code="global">
                <!-- Haut -->
                <ka-container code="haut">
                  <ka-icon
                    code="color-icon"
                    :options="{
                      click: page.colorIconClick,
                      $state: { selected: page.$data.reverseColor4 === true }
                    }"
                    :selected="{ click: page.colorIconClickWhenSelected }"
                    :value="page.$data.reverseColor4 === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <ka-icon
                    code="code"
                    :options="{
                      click: page.codeClick,
                      $state: { selected: page.$data.previewCode3 === true }
                    }"
                    :selected="{ click: page.codeClickWhenSelected }"
                    value="i-fa-solid:code" />
                </ka-container>
                <ka-code-preview
                  code="code-preview-5"
                  :options="{
                    hidden: page.$data.previewCode3 === true ? false : null,
                    elementToPreview: `nAFQR5Dt8otEVYm131mnhk`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Bas -->
                <ka-container
                  code="bas-container"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor4 === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <ka-icon
                    code="lock"
                    value="i-fa-solid:lock" />
                  <ka-icon
                    code="look"
                    value="i-fa-solid:search" />
                  <ka-icon
                    code="bars"
                    value="i-fa-solid:bars" />
                  <ka-icon
                    code="edit"
                    value="i-fa-solid:edit" />
                  <ka-icon
                    code="refresh"
                    value="i-fa-solid:history" />
                  <ka-icon
                    code="circle"
                    value="i-fa-solid:circle-notch" />
                </ka-container>
              </ka-container>
            </ka-container>
            <!-- Material -->
            <ka-container code="material">
              <ka-text code="material-design">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.material.materialDesign.value', `Material Design`)" />
              </ka-text>
              <ka-text code="material-design-is">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.material.materialDesignIs.value', `<a href='https://material.io/tools/icons/?style=baseline'>Material Design</a> is also supported. For more information on how to install it please <a href='https://v2.vuetifyjs.com/en/features/icon-fonts/#install-material-icons'>navigate here</a>`)" />
              </ka-text>
              <!-- Global -->
              <ka-container code="global-container">
                <!-- Haut -->
                <ka-container code="haut-container">
                  <ka-icon
                    code="color-1"
                    :options="{
                      click: page.color1Click,
                      $state: { selected: page.$data.reverseColor5 === true }
                    }"
                    :selected="{ click: page.color1ClickWhenSelected }"
                    :value="page.$data.reverseColor5 === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <ka-icon
                    code="code-icon"
                    :options="{
                      click: page.codeIconClick,
                      $state: { selected: page.$data.previewCode4 === true }
                    }"
                    :selected="{ click: page.codeIconClickWhenSelected }"
                    value="i-fa-solid:code" />
                </ka-container>
                <ka-code-preview
                  code="code-preview-6"
                  :options="{
                    hidden: page.$data.previewCode4 === true ? false : null,
                    elementToPreview: `goduaXwKPivxZKZNHexyem`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Bas -->
                <ka-container
                  code="bas-1"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor5 === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <!-- Container -->
                  <ka-container code="container-3">
                    <!-- Container -->
                    <ka-container code="container-4">
                      <ka-icon
                        code="home"
                        value="i-fa-solid:home" />
                      <ka-icon
                        code="calendar"
                        value="i-fa-solid:calendar-day" />
                      <ka-icon
                        code="info"
                        value="i-fa-solid:info-circle" />
                    </ka-container>
                    <!-- Container -->
                    <ka-container code="container-5">
                      <ka-icon
                        code="home-icon"
                        value="i-fa-solid:home" />
                      <ka-icon
                        code="calendar-icon"
                        value="i-fa-solid:calendar-day" />
                      <ka-icon
                        code="info-icon"
                        value="i-fa-solid:info-circle" />
                    </ka-container>
                  </ka-container>
                  <!-- Container -->
                  <ka-container code="container-6">
                    <!-- Container -->
                    <ka-container code="container-7">
                      <ka-icon
                        code="home-1"
                        value="i-fa-solid:home" />
                      <ka-icon
                        code="calendar-1"
                        value="i-fa-solid:calendar-day" />
                      <ka-icon
                        code="info-1"
                        value="i-fa-solid:info-circle" />
                    </ka-container>
                    <!-- Container -->
                    <ka-container code="container-8">
                      <ka-icon
                        code="home-2"
                        value="i-fa-solid:home" />
                      <ka-icon
                        code="calendar-2"
                        value="i-fa-solid:calendar-day" />
                      <ka-icon
                        code="info-2"
                        value="i-fa-solid:info-circle" />
                    </ka-container>
                  </ka-container>
                  <!-- Container -->
                  <ka-container code="container-9">
                    <!-- Container -->
                    <ka-container code="container-10">
                      <ka-icon
                        code="home-3"
                        value="i-fa-solid:home" />
                      <ka-icon
                        code="calendar-3"
                        value="i-fa-solid:calendar-day" />
                      <ka-icon
                        code="info-3"
                        value="i-fa-solid:info-circle" />
                    </ka-container>
                    <!-- Container -->
                    <ka-container code="container-11">
                      <ka-icon
                        code="home-4"
                        value="i-fa-solid:home" />
                      <ka-icon
                        code="calendar-4"
                        value="i-fa-solid:calendar-day" />
                      <ka-icon
                        code="info-4"
                        value="i-fa-solid:info-circle" />
                    </ka-container>
                  </ka-container>
                  <!-- Container -->
                  <ka-container code="container-12">
                    <!-- Container -->
                    <ka-container code="container-13">
                      <ka-icon
                        code="home-5"
                        value="i-fa-solid:home" />
                      <ka-icon
                        code="calendar-5"
                        value="i-fa-solid:calendar-day" />
                      <ka-icon
                        code="info-5"
                        value="i-fa-solid:info-circle" />
                    </ka-container>
                    <!-- Container -->
                    <ka-container code="container-14">
                      <ka-icon
                        code="home-6"
                        value="i-fa-solid:home" />
                      <ka-icon
                        code="calendar-6"
                        value="i-fa-solid:calendar-day" />
                      <ka-icon
                        code="info-6"
                        value="i-fa-solid:info-circle" />
                    </ka-container>
                  </ka-container>
                </ka-container>
              </ka-container>
            </ka-container>
            <!-- MDI -->
            <ka-container code="mdi">
              <ka-text code="mdi-svg">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.mdi.mdiSvg.value', `MDI SVG`)" />
              </ka-text>
              <ka-text code="text-1">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.mdi.text1.value', `You can manually import only the icons you use when using the <a href='https://www.npmjs.com/package/&#64;mdi/js'>&#64;mdi/js</a> package. If you want to use SVG icons with VIcon component, read about using them <a href='https://v2.vuetifyjs.com/en/features/icon-fonts/#install-material-design-icons-js-svg'>here</a>.`)" />
              </ka-text>
              <!-- Global -->
              <ka-container code="global-1">
                <!-- Haut -->
                <ka-container code="haut-1">
                  <ka-icon
                    code="color-2"
                    :options="{
                      click: page.color2Click,
                      $state: { selected: page.$data.reverseColor6 === true }
                    }"
                    :selected="{ click: page.color2ClickWhenSelected }"
                    :value="page.$data.reverseColor6 === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <ka-icon
                    code="code-1"
                    :options="{
                      click: page.code1Click,
                      $state: { selected: page.$data.previewCode5 === true }
                    }"
                    :selected="{ click: page.code1ClickWhenSelected }"
                    value="i-fa-solid:code" />
                </ka-container>
                <ka-code-preview
                  code="code-preview-7"
                  :options="{
                    hidden: page.$data.previewCode5 === true ? false : null,
                    elementToPreview: `65NXqQKAvmsUpauGEjG5Jr`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Bas -->
                <ka-container
                  code="bas-2"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor6 === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <ka-icon
                    code="people"
                    value="i-fa-solid:user" />
                  <ka-icon
                    code="pencil"
                    value="i-fa-solid:pen" />
                  <ka-icon
                    code="share"
                    value="i-fa-solid:share-alt" />
                  <!-- Bouton -->
                  <ka-container code="bouton">
                    <ka-icon
                      code="trash"
                      value="i-fa-solid:trash-alt" />
                    <ka-text code="delete">
                      <span v-html="t('icon.page.sousPage.exemple.proprietes.mdi.global1.bas2.bouton.delete.value', `Delete`)" />
                    </ka-text>
                  </ka-container>
                </ka-container>
              </ka-container>
            </ka-container>
          </ka-container>
        </ka-container>
        <!-- Accessibility -->
        <ka-container code="accessibility">
          <ka-text
            code="accessibility-h-2"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h2 v-html="t('icon.page.sousPage.accessibility.accessibilityH2.value', `Accessibility`)" />
          </ka-text>
          <ka-text code="icons-can-convey-all">
            <span v-html="t('icon.page.sousPage.accessibility.iconsCanConveyAll.value', `<p>Icons can convey all sorts of meaningful information, so it’s important that they reach the largest amount of people possible. There are two use cases you’ll want to consider:</p><p style='margin-left:40px;'><strong>Decorative Icons</strong> are only being used for visual or branding reinforcement. If they were removed from the page, users would still understand and be able to use your page.</p><p style='margin-left:40px;'><strong>Semantic Icons</strong> are ones that you’re using to convey meaning, rather than just pure decoration. This includes icons without text next to them used as interactive controls — buttons, form elements, toggles, etc.</p>`)" />
          </ka-text>
          <ka-text
            code="decorative-font-icons"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h3 v-html="t('icon.page.sousPage.accessibility.decorativeFontIcons.value', `Decorative Font Icons`)" />
          </ka-text>
          <ka-text code="if-your-icons-are-purely">
            <span v-html="t('icon.page.sousPage.accessibility.ifYourIconsArePurely.value', `If your icons are purely decorative, you’ll need to manually add an attribute to each of your icons so they’re accessible.aria-hidden(automatically by vuetify)`)" />
          </ka-text>
          <ka-text
            code="semantic-font-icons"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h3 v-html="t('icon.page.sousPage.accessibility.semanticFontIcons.value', `Semantic Font Icons`)" />
          </ka-text>
          <ka-text code="if-your-icons-have">
            <span v-html="t('icon.page.sousPage.accessibility.ifYourIconsHave.value', `If your icons have semantic meaning, you need to provide a text alternative inside a (or similar) element. Also include appropriate CSS to visually hide the element while keeping it accessible to assistive technologies.`)" />
          </ka-text>
          <ka-text
            code="decorative-svg-icons"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h3 v-html="t('icon.page.sousPage.accessibility.decorativeSvgIcons.value', `Decorative SVG Icons`)" />
          </ka-text>
          <ka-text code="if-your-icons-are-purely-text">
            <span v-html="t('icon.page.sousPage.accessibility.ifYourIconsArePurelyText.value', `If your icons are purely decorative, you’ll need to manually add an attribute to each of your icons so they’re accessible.aria-hidden(automatically by vuetify)`)" />
          </ka-text>
          <ka-text
            code="semantic-svg-icons"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h3 v-html="t('icon.page.sousPage.accessibility.semanticSvgIcons.value', `Semantic SVG Icons`)" />
          </ka-text>
          <ka-text code="apply-accessibility">
            <span v-html="t('icon.page.sousPage.accessibility.applyAccessibility.value', page.$constants.applyAccessibility)" />
          </ka-text>
        </ka-container>
        <!-- Ready -->
        <ka-container code="ready">
          <ka-text
            code="accessibility-1"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h2 v-html="t('icon.page.sousPage.ready.accessibility1.value', `Ready for more?`)" />
          </ka-text>
          <ka-text code="continue-your-learning">
            <span v-html="t('icon.page.sousPage.ready.continueYourLearning.value', `Continue your learning with related content selected by the <a href='https://v2.vuetifyjs.com/en/about/meet-the-team/'>Team</a> or move between pages by using the navigation links below.`)" />
          </ka-text>
          <!-- Global -->
          <ka-container code="global-2">
            <!-- Gauche -->
            <ka-container code="gauche">
              <ka-icon
                code="edit-icon"
                value="i-fa-solid:edit" />
              <!-- Droite -->
              <ka-container code="droite">
                <ka-text code="icon-fonts">
                  <span v-html="t('icon.page.sousPage.ready.global2.gauche.droite.iconFonts.value', `Icon Fonts`)" />
                </ka-text>
                <ka-text code="features">
                  <span v-html="t('icon.page.sousPage.ready.global2.gauche.droite.features.value', `Features`)" />
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
                <ka-text code="buttons-text">
                  <span v-html="t('icon.page.sousPage.ready.global2.milieu.droiteContainer.buttonsText.value', `Buttons`)" />
                </ka-text>
                <ka-text code="components">
                  <span v-html="t('icon.page.sousPage.ready.global2.milieu.droiteContainer.components.value', `Components`)" />
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
                  <span v-html="t('icon.page.sousPage.ready.global2.droite1.droite2.cards.value', `Cards`)" />
                </ka-text>
                <ka-text code="components-text">
                  <span v-html="t('icon.page.sousPage.ready.global2.droite1.droite2.componentsText.value', `Components`)" />
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
        <ka-container code="container-15">
          <ka-text code="contenu">
            <span v-html="t('icon.rightPanel.sousNav.container15.contenu.value', `Contenu`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-16">
          <ka-text
            code="titre-2"
            :options="{
              href: { hash: `#usage--p6` },
              ariaLabel: `titre`,
              click: page.titre2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('icon.rightPanel.sousNav.container16.titre2.value', `Utilisation`)" />
          </ka-text>
          <ka-text
            code="titre-3"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titre3Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('icon.rightPanel.sousNav.container16.titre3.value', `API`)" />
          </ka-text>
          <ka-text
            code="titre-4"
            :options="{
              href: { hash: `#exemple--p6` },
              ariaLabel: `titre`,
              click: page.titre4Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('icon.rightPanel.sousNav.container16.titre4.value', `Exemples`)" />
          </ka-text>
          <!-- sous-categorie -->
          <ka-container code="sous-categorie">
            <ka-text
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes--p6` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('icon.rightPanel.sousNav.container16.sousCategorie.sousTitre.value', `Propriétés`)" />
            </ka-text>
            <!-- sous-sous-categorie -->
            <ka-container code="sous-sous-categorie">
              <ka-text
                code="sous-titre-text"
                :options="{
                  href: { hash: `#couleurs--p6` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitreTextClick
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('icon.rightPanel.sousNav.container16.sousCategorie.sousSousCategorie.sousTitreText.value', `Couleurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-1"
                :options="{
                  href: { hash: `#valeurs--p6` },
                  ariaLabel: `sous titre`,
                  click: page.sousTitre1Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('icon.rightPanel.sousNav.container16.sousCategorie.sousSousCategorie.sousTitre1.value', `Valeurs`)" />
              </ka-text>
              <ka-text
                code="sous-titre-2"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.sousTitre2Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('icon.rightPanel.sousNav.container16.sousCategorie.sousSousCategorie.sousTitre2.value', `Etats`)" />
              </ka-text>
            </ka-container>
          </ka-container>
        </ka-container>
      </ka-container>
    </ka-container>
    <kapix-teleport :disabled="!$breakpoint.mdAndUp">
      <ka-icon
        code="icon-11"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.icon11Click,
          hidden: page.$info.icon.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarIcon } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarIcon'
})
provide('$scoped', '--p6')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarIcon())
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
