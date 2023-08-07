<template>
  <ka-container
    code="colors"
    :data="page.$info.colors">
    <!-- Main -->
    <ka-container code="main">
      <!-- Sous Main -->
      <ka-container code="sous-main">
        <ka-text code="titre">
          <h1 v-html="t('colors.main.sousMain.titre.value', `Colors`)" />
        </ka-text>
        <ka-text code="each-color-from-the">
          <span v-html="t('colors.main.sousMain.eachColorFromThe.value', `Each color from the specification gets converted to a background and text variant for styling within your application`)" />
        </ka-text>
        <!-- Container 7 -->
        <ka-container code="container-7">
          <!-- Container 1 -->
          <ka-container code="container-1">
            <ka-color
              code="color"
              :options="{ showText: page.caseACocherOui.value }"
              :value="page.saisieDeCouleur.value" />
          </ka-container>
          <!-- Container 2 -->
          <ka-container code="container-2">
            <!-- Container -->
            <ka-container code="container">
              <ka-checkbox-input
                v-model="page.caseACocherOui.value"
                code="case-a-cocher-oui"
                :options="{ debounce: 100 }" />
              <ka-text code="show-text">
                <span v-html="t('colors.main.sousMain.container7.container2.container.showText.value', `Show Text`)" />
              </ka-text>
            </ka-container>
            <!-- Container 1 -->
            <ka-container code="container-1-container">
              <ka-color-input
                v-model="page.saisieDeCouleur.value"
                code="saisie-de-couleur"
                :options="{ placeholder: t('colors.main.sousMain.container7.container2.container1Container.saisieDeCouleur.placeholder', `Saisie de couleur`) }" />
              <ka-text code="color-text">
                <span v-html="t('colors.main.sousMain.container7.container2.container1Container.colorText.value', `Color`)" />
              </ka-text>
            </ka-container>
          </ka-container>
        </ka-container>
        <ka-code-preview
          code="code-preview"
          :options="{ elementToPreview: `bbxgz6Acfakogffn7cdZcu` }"
          value="https://www.kapix.fr" />
        <!-- Utilisation -->
        <ka-container code="utilisation">
          <ka-text code="titre-categorie">
            <h2 v-html="t('colors.main.sousMain.utilisation.titreCategorie.value', `All colors are available on kapix (about 16 million),<br>Below is a list of the color palette grouped by primary color`)" />
          </ka-text>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-3">
          <!-- Container -->
          <ka-container code="container-4">
            <ka-text code="red-f-44336-ff">
              <span v-html="t('colors.main.sousMain.container3.container4.redF44336Ff.value', `Red <br>#F44336FF`)" />
            </ka-text>
            <ka-color
              code="ffebee"
              :options="{ showText: true }"
              value="#FFEBEEFF" />
            <ka-color
              code="ffcdd-2"
              :options="{ showText: true }"
              value="#FFCDD2FF" />
            <ka-color
              code="ef-9-a-9-a"
              :options="{ showText: true }"
              value="#EF9A9AFF" />
            <ka-color
              code="e-57373"
              :options="{ showText: true }"
              value="#E57373FF" />
            <ka-color
              code="ef-5350"
              :options="{ showText: true }"
              value="#EF5350FF" />
            <ka-color
              code="e-53935"
              :options="{ showText: true }"
              value="#E53935FF" />
            <ka-color
              code="d-32-f-2-f"
              :options="{ showText: true }"
              value="#D32F2FFF" />
            <ka-color
              code="c-62828"
              :options="{ showText: true }"
              value="#C62828FF" />
            <ka-color
              code="b-71-c-1-c"
              :options="{ showText: true }"
              value="#B71C1CFF" />
            <ka-color
              code="ff-8-a-80"
              :options="{ showText: true }"
              value="#FF8A80FF" />
            <ka-color
              code="ff-5252"
              :options="{ showText: true }"
              value="#FF5252FF" />
            <ka-color
              code="ff-1744"
              :options="{ showText: true }"
              value="#FF1744FF" />
            <ka-color
              code="d-50000"
              :options="{ showText: true }"
              value="#D50000FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-5">
            <ka-text code="pink-e-91-e-63">
              <span v-html="t('colors.main.sousMain.container3.container5.pinkE91E63.value', `Pink <br>#E91E63`)" />
            </ka-text>
            <ka-color
              code="fce-4-ec"
              :options="{ showText: true }"
              value="#FCE4ECFF" />
            <ka-color
              code="f-8-bbd-0"
              :options="{ showText: true }"
              value="#F8BBD0FF" />
            <ka-color
              code="f-48-fb-1"
              :options="{ showText: true }"
              value="#F48FB1FF" />
            <ka-color
              code="f-06292"
              :options="{ showText: true }"
              value="#F06292FF" />
            <ka-color
              code="ec-407-a"
              :options="{ showText: true }"
              value="#EC407AFF" />
            <ka-color
              code="d-81-b-60"
              :options="{ showText: true }"
              value="#D81B60FF" />
            <ka-color
              code="c-2185-b"
              :options="{ showText: true }"
              value="#C2185BFF" />
            <ka-color
              code="ad-1457"
              :options="{ showText: true }"
              value="#AD1457FF" />
            <ka-color
              code="k880-e-4-f"
              :options="{ showText: true }"
              value="#880E4FFF" />
            <ka-color
              code="ff-80-ab"
              :options="{ showText: true }"
              value="#FF80ABFF" />
            <ka-color
              code="ff-4081"
              :options="{ showText: true }"
              value="#FF4081FF" />
            <ka-color
              code="f-50057"
              :options="{ showText: true }"
              value="#F50057FF" />
            <ka-color
              code="c-51162"
              :options="{ showText: true }"
              value="#C51162FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-6">
            <ka-text code="purple-9-c-27-b-0">
              <span v-html="t('colors.main.sousMain.container3.container6.purple9C27B0.value', `Purple<br>#9C27B0`)" />
            </ka-text>
            <ka-color
              code="f-3-e-5-f-5"
              :options="{ showText: true }"
              value="#F3E5F5FF" />
            <ka-color
              code="e-1-bee-7"
              :options="{ showText: true }"
              value="#E1BEE7FF" />
            <ka-color
              code="ce-93-d-8"
              :options="{ showText: true }"
              value="#CE93D8FF" />
            <ka-color
              code="ba-68-c-8"
              :options="{ showText: true }"
              value="#BA68C8FF" />
            <ka-color
              code="ab-47-bc"
              :options="{ showText: true }"
              value="#AB47BCFF" />
            <ka-color
              code="k8-e-24-aa"
              :options="{ showText: true }"
              value="#8E24AAFF" />
            <ka-color
              code="k7-b-1-fa-2"
              :options="{ showText: true }"
              value="#7B1FA2FF" />
            <ka-color
              code="k6-a-1-b-9-a"
              :options="{ showText: true }"
              value="#6A1B9AFF" />
            <ka-color
              code="k4-a-148-c"
              :options="{ showText: true }"
              value="#4A148CFF" />
            <ka-color
              code="ea-80-fc"
              :options="{ showText: true }"
              value="#EA80FCFF" />
            <ka-color
              code="e-040-fb"
              :options="{ showText: true }"
              value="#E040FBFF" />
            <ka-color
              code="d-500-f-9"
              :options="{ showText: true }"
              value="#D500F9FF" />
            <ka-color
              code="aa-00-ff"
              :options="{ showText: true }"
              value="#AA00FFFF" />
          </ka-container>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-3-container">
          <!-- Container -->
          <ka-container code="container-8">
            <ka-text code="deep-purple-673-ab-7">
              <span v-html="t('colors.main.sousMain.container3Container.container8.deepPurple673Ab7.value', `Deep-purple<br>#673AB7`)" />
            </ka-text>
            <ka-color
              code="ede-7-f-6"
              :options="{ showText: true }"
              value="#EDE7F6FF" />
            <ka-color
              code="d-1-c-4-e-9"
              :options="{ showText: true }"
              value="#D1C4E9FF" />
            <ka-color
              code="b-39-ddb"
              :options="{ showText: true }"
              value="#B39DDBFF" />
            <ka-color
              code="k9575-cd"
              :options="{ showText: true }"
              value="#9575CDFF" />
            <ka-color
              code="k7-e-57-c-2"
              :options="{ showText: true }"
              value="#7E57C2FF" />
            <ka-color
              code="k5-e-35-b-1"
              :options="{ showText: true }"
              value="#5E35B1FF" />
            <ka-color
              code="k512-da-8"
              :options="{ showText: true }"
              value="#512DA8FF" />
            <ka-color
              code="k4527-a-0"
              :options="{ showText: true }"
              value="#4527A0FF" />
            <ka-color
              code="k311-b-92"
              :options="{ showText: true }"
              value="#311B92FF" />
            <ka-color
              code="b-388-ff"
              :options="{ showText: true }"
              value="#B388FFFF" />
            <ka-color
              code="k7-c-4-dff"
              :options="{ showText: true }"
              value="#7C4DFFFF" />
            <ka-color
              code="k651-fff"
              :options="{ showText: true }"
              value="#651FFFFF" />
            <ka-color
              code="k6200-ea"
              :options="{ showText: true }"
              value="#6200EAFF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-9">
            <ka-text code="indigo-3-f-51-b-5">
              <span v-html="t('colors.main.sousMain.container3Container.container9.indigo3F51B5.value', `Indigo<br>#3F51B5`)" />
            </ka-text>
            <ka-color
              code="e-8-eaf-6"
              :options="{ showText: true }"
              value="#E8EAF6FF" />
            <ka-color
              code="c-5-cae-9"
              :options="{ showText: true }"
              value="#C5CAE9FF" />
            <ka-color
              code="k9-fa-8-da"
              :options="{ showText: true }"
              value="#9FA8DAFF" />
            <ka-color
              code="k7986-cb"
              :options="{ showText: true }"
              value="#7986CBFF" />
            <ka-color
              code="k5-c-6-bc-0"
              :options="{ showText: true }"
              value="#5C6BC0FF" />
            <ka-color
              code="k3949-ab"
              :options="{ showText: true }"
              value="#3949ABFF" />
            <ka-color
              code="k303-f-9-f"
              :options="{ showText: true }"
              value="#303F9FFF" />
            <ka-color
              code="k283593"
              :options="{ showText: true }"
              value="#283593FF" />
            <ka-color
              code="k1-a-237-e"
              :options="{ showText: true }"
              value="#1A237EFF" />
            <ka-color
              code="k8-c-9-eff"
              :options="{ showText: true }"
              value="#8C9EFFFF" />
            <ka-color
              code="k536-dfe"
              :options="{ showText: true }"
              value="#536DFEFF" />
            <ka-color
              code="k3-d-5-afe"
              :options="{ showText: true }"
              value="#3D5AFEFF" />
            <ka-color
              code="k304-ffe"
              :options="{ showText: true }"
              value="#304FFEFF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-10">
            <ka-text code="blue-2196-f-3">
              <span v-html="t('colors.main.sousMain.container3Container.container10.blue2196F3.value', `Blue<br>#2196F3`)" />
            </ka-text>
            <ka-color
              code="e-3-f-2-fd"
              :options="{ showText: true }"
              value="#E3F2FDFF" />
            <ka-color
              code="bbdefb"
              :options="{ showText: true }"
              value="#BBDEFBFF" />
            <ka-color
              code="k90-caf-9"
              :options="{ showText: true }"
              value="#90CAF9FF" />
            <ka-color
              code="k64-b-5-f-6"
              :options="{ showText: true }"
              value="#64B5F6FF" />
            <ka-color
              code="k42-a-5-f-5"
              :options="{ showText: true }"
              value="#42A5F5FF" />
            <ka-color
              code="k1-e-88-e-5"
              :options="{ showText: true }"
              value="#1E88E5FF" />
            <ka-color
              code="k1976-d-2"
              :options="{ showText: true }"
              value="#1976D2FF" />
            <ka-color
              code="k1565-c-0"
              :options="{ showText: true }"
              value="#1565C0FF" />
            <ka-color
              code="k0-d-47-a-1"
              :options="{ showText: true }"
              value="#0D47A1FF" />
            <ka-color
              code="k82-b-1-ff"
              :options="{ showText: true }"
              value="#82B1FFFF" />
            <ka-color
              code="k448-aff"
              :options="{ showText: true }"
              value="#448AFFFF" />
            <ka-color
              code="k2979-ff"
              :options="{ showText: true }"
              value="#2979FFFF" />
            <ka-color
              code="k2962-ff"
              :options="{ showText: true }"
              value="#2962FFFF" />
          </ka-container>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-31">
          <!-- Container -->
          <ka-container code="container-11">
            <ka-text code="light-blue-03-a-9-f-4">
              <span v-html="t('colors.main.sousMain.container31.container11.lightBlue03A9F4.value', `Light-blue<br>#03A9F4`)" />
            </ka-text>
            <ka-color
              code="e-1-f-5-fe"
              :options="{ showText: true }"
              value="#E1F5FEFF" />
            <ka-color
              code="b-3-e-5-fc"
              :options="{ showText: true }"
              value="#B3E5FCFF" />
            <ka-color
              code="k81-d-4-fa"
              :options="{ showText: true }"
              value="#81D4FAFF" />
            <ka-color
              code="k4-fc-3-f-7"
              :options="{ showText: true }"
              value="#4FC3F7FF" />
            <ka-color
              code="k29-b-6-f-6"
              :options="{ showText: true }"
              value="#29B6F6FF" />
            <ka-color
              code="k039-be-5"
              :options="{ showText: true }"
              value="#039BE5FF" />
            <ka-color
              code="k0288-d-1"
              :options="{ showText: true }"
              value="#0288D1FF" />
            <ka-color
              code="k0277-bd"
              :options="{ showText: true }"
              value="#0277BDFF" />
            <ka-color
              code="k01579-b"
              :options="{ showText: true }"
              value="#01579BFF" />
            <ka-color
              code="k80-d-8-ff"
              :options="{ showText: true }"
              value="#80D8FFFF" />
            <ka-color
              code="k40-c-4-ff"
              :options="{ showText: true }"
              value="#40C4FFFF" />
            <ka-color
              code="k00-b-0-ff"
              :options="{ showText: true }"
              value="#00B0FFFF" />
            <ka-color
              code="k0091-ea"
              :options="{ showText: true }"
              value="#0091EAFF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-12">
            <ka-text code="cyan-00-bcd-4">
              <span v-html="t('colors.main.sousMain.container31.container12.cyan00Bcd4.value', `Cyan<br>#00BCD4`)" />
            </ka-text>
            <ka-color
              code="e-0-f-7-fa"
              :options="{ showText: true }"
              value="#E0F7FAFF" />
            <ka-color
              code="b-2-ebf-2"
              :options="{ showText: true }"
              value="#B2EBF2FF" />
            <ka-color
              code="k80-deea"
              :options="{ showText: true }"
              value="#80DEEAFF" />
            <ka-color
              code="k4-dd-0-e-1"
              :options="{ showText: true }"
              value="#4DD0E1FF" />
            <ka-color
              code="k26-c-6-da"
              :options="{ showText: true }"
              value="#26C6DAFF" />
            <ka-color
              code="k00-acc-1"
              :options="{ showText: true }"
              value="#00ACC1FF" />
            <ka-color
              code="k0097-a-7"
              :options="{ showText: true }"
              value="#0097A7FF" />
            <ka-color
              code="k00838-f"
              :options="{ showText: true }"
              value="#00838FFF" />
            <ka-color
              code="k006064"
              :options="{ showText: true }"
              value="#006064FF" />
            <ka-color
              code="k84-ffff"
              :options="{ showText: true }"
              value="#84FFFFFF" />
            <ka-color
              code="k18-ffff"
              :options="{ showText: true }"
              value="#18FFFFFF" />
            <ka-color
              code="k00-e-5-ff"
              :options="{ showText: true }"
              value="#00E5FFFF" />
            <ka-color
              code="k00-b-8-d-4"
              :options="{ showText: true }"
              value="#00B8D4FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-13">
            <ka-text code="teal-009688">
              <span v-html="t('colors.main.sousMain.container31.container13.teal009688.value', `Teal<br>#009688`)" />
            </ka-text>
            <ka-color
              code="e-0-f-2-f-1"
              :options="{ showText: true }"
              value="#E0F2F1FF" />
            <ka-color
              code="b-2-dfdb"
              :options="{ showText: true }"
              value="#B2DFDBFF" />
            <ka-color
              code="k80-cbc-4"
              :options="{ showText: true }"
              value="#80CBC4FF" />
            <ka-color
              code="k4-db-6-ac"
              :options="{ showText: true }"
              value="#4DB6ACFF" />
            <ka-color
              code="k26-a-69-a"
              :options="{ showText: true }"
              value="#26A69AFF" />
            <ka-color
              code="k00897-b"
              :options="{ showText: true }"
              value="#00897BFF" />
            <ka-color
              code="k00796-b"
              :options="{ showText: true }"
              value="#00796BFF" />
            <ka-color
              code="k00695-c"
              :options="{ showText: true }"
              value="#00695CFF" />
            <ka-color
              code="k004-d-40"
              :options="{ showText: true }"
              value="#004D40FF" />
            <ka-color
              code="a-7-ffeb"
              :options="{ showText: true }"
              value="#A7FFEBFF" />
            <ka-color
              code="k64-ffda"
              :options="{ showText: true }"
              value="#64FFDAFF" />
            <ka-color
              code="k1-de-9-b-6"
              :options="{ showText: true }"
              value="#1DE9B6FF" />
            <ka-color
              code="k00-bfa-5"
              :options="{ showText: true }"
              value="#00BFA5FF" />
          </ka-container>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-32">
          <!-- Container -->
          <ka-container code="container-14">
            <ka-text code="green-4-caf-50">
              <span v-html="t('colors.main.sousMain.container32.container14.green4Caf50.value', `Green<br>#4CAF50`)" />
            </ka-text>
            <ka-color
              code="e-8-f-5-e-9"
              :options="{ showText: true }"
              value="#E8F5E9FF" />
            <ka-color
              code="c-8-e-6-c-9"
              :options="{ showText: true }"
              value="#C8E6C9FF" />
            <ka-color
              code="a-5-d-6-a-7"
              :options="{ showText: true }"
              value="#A5D6A7FF" />
            <ka-color
              code="k81-c-784"
              :options="{ showText: true }"
              value="#81C784FF" />
            <ka-color
              code="k66-bb-6-a"
              :options="{ showText: true }"
              value="#66BB6AFF" />
            <ka-color
              code="k43-a-047"
              :options="{ showText: true }"
              value="#43A047FF" />
            <ka-color
              code="k388-e-3-c"
              :options="{ showText: true }"
              value="#388E3CFF" />
            <ka-color
              code="k2-e-7-d-32"
              :options="{ showText: true }"
              value="#2E7D32FF" />
            <ka-color
              code="k1-b-5-e-20"
              :options="{ showText: true }"
              value="#1B5E20FF" />
            <ka-color
              code="b-9-f-6-ca"
              :options="{ showText: true }"
              value="#B9F6CAFF" />
            <ka-color
              code="k69-f-0-ae"
              :options="{ showText: true }"
              value="#69F0AEFF" />
            <ka-color
              code="k00-e-676"
              :options="{ showText: true }"
              value="#00E676FF" />
            <ka-color
              code="k00-c-853"
              :options="{ showText: true }"
              value="#00C853FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-15">
            <ka-text code="light-green-8-bc-34-a">
              <span v-html="t('colors.main.sousMain.container32.container15.lightGreen8Bc34A.value', `Light-green<br>#8BC34A`)" />
            </ka-text>
            <ka-color
              code="f-1-f-8-e-9"
              :options="{ showText: true }"
              value="#F1F8E9FF" />
            <ka-color
              code="dcedc-8"
              :options="{ showText: true }"
              value="#DCEDC8FF" />
            <ka-color
              code="c-5-e-1-a-5"
              :options="{ showText: true }"
              value="#C5E1A5FF" />
            <ka-color
              code="aed-581"
              :options="{ showText: true }"
              value="#AED581FF" />
            <ka-color
              code="k9-ccc-65"
              :options="{ showText: true }"
              value="#9CCC65FF" />
            <ka-color
              code="k7-cb-342"
              :options="{ showText: true }"
              value="#7CB342FF" />
            <ka-color
              code="k689-f-38"
              :options="{ showText: true }"
              value="#689F38FF" />
            <ka-color
              code="k558-b-2-f"
              :options="{ showText: true }"
              value="#558B2FFF" />
            <ka-color
              code="k33691-e"
              :options="{ showText: true }"
              value="#33691EFF" />
            <ka-color
              code="ccff-90"
              :options="{ showText: true }"
              value="#CCFF90FF" />
            <ka-color
              code="b-2-ff-59"
              :options="{ showText: true }"
              value="#B2FF59FF" />
            <ka-color
              code="k76-ff-03"
              :options="{ showText: true }"
              value="#76FF03FF" />
            <ka-color
              code="k64-dd-17"
              :options="{ showText: true }"
              value="#64DD17FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-16">
            <ka-text code="lime-cddc-39">
              <span v-html="t('colors.main.sousMain.container32.container16.limeCddc39.value', `Lime<br>#CDDC39`)" />
            </ka-text>
            <ka-color
              code="f-9-fbe-7"
              :options="{ showText: true }"
              value="#F9FBE7FF" />
            <ka-color
              code="f-0-f-4-c-3"
              :options="{ showText: true }"
              value="#F0F4C3FF" />
            <ka-color
              code="e-6-ee-9-c"
              :options="{ showText: true }"
              value="#E6EE9CFF" />
            <ka-color
              code="dce-775"
              :options="{ showText: true }"
              value="#DCE775FF" />
            <ka-color
              code="d-4-e-157"
              :options="{ showText: true }"
              value="#D4E157FF" />
            <ka-color
              code="c-0-ca-33"
              :options="{ showText: true }"
              value="#C0CA33FF" />
            <ka-color
              code="afb-42-b"
              :options="{ showText: true }"
              value="#AFB42BFF" />
            <ka-color
              code="k9-e-9-d-24"
              :options="{ showText: true }"
              value="#9E9D24FF" />
            <ka-color
              code="k827717"
              :options="{ showText: true }"
              value="#827717FF" />
            <ka-color
              code="f-4-ff-81"
              :options="{ showText: true }"
              value="#F4FF81FF" />
            <ka-color
              code="eeff-41"
              :options="{ showText: true }"
              value="#EEFF41FF" />
            <ka-color
              code="c-6-ff-00"
              :options="{ showText: true }"
              value="#C6FF00FF" />
            <ka-color
              code="aeea-00"
              :options="{ showText: true }"
              value="#AEEA00FF" />
          </ka-container>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-33">
          <!-- Container -->
          <ka-container code="container-17">
            <ka-text code="yellow-ffeb-3-b">
              <span v-html="t('colors.main.sousMain.container33.container17.yellowFfeb3B.value', `Yellow<br>#FFEB3B`)" />
            </ka-text>
            <ka-color
              code="fffde-7"
              :options="{ showText: true }"
              value="#FFFDE7FF" />
            <ka-color
              code="fff-9-c-4"
              :options="{ showText: true }"
              value="#FFF9C4FF" />
            <ka-color
              code="fff-59-d"
              :options="{ showText: true }"
              value="#FFF59DFF" />
            <ka-color
              code="fff-176"
              :options="{ showText: true }"
              value="#FFF176FF" />
            <ka-color
              code="ffee-58"
              :options="{ showText: true }"
              value="#FFEE58FF" />
            <ka-color
              code="fdd-835"
              :options="{ showText: true }"
              value="#FDD835FF" />
            <ka-color
              code="fbc-02-d"
              :options="{ showText: true }"
              value="#FBC02DFF" />
            <ka-color
              code="f-9-a-825"
              :options="{ showText: true }"
              value="#F9A825FF" />
            <ka-color
              code="f-57-f-17"
              :options="{ showText: true }"
              value="#F57F17FF" />
            <ka-color
              code="ffff-8-d"
              :options="{ showText: true }"
              value="#FFFF8DFF" />
            <ka-color
              code="ffff-00"
              :options="{ showText: true }"
              value="#FFFF00FF" />
            <ka-color
              code="ffea-00"
              :options="{ showText: true }"
              value="#FFEA00FF" />
            <ka-color
              code="ffd-600"
              :options="{ showText: true }"
              value="#FFD600FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-18">
            <ka-text code="amber-ffc-107">
              <span v-html="t('colors.main.sousMain.container33.container18.amberFfc107.value', `Amber<br>#FFC107`)" />
            </ka-text>
            <ka-color
              code="fff-8-e-1"
              :options="{ showText: true }"
              value="#FFF8E1FF" />
            <ka-color
              code="ffecb-3"
              :options="{ showText: true }"
              value="#FFECB3FF" />
            <ka-color
              code="ffe-082"
              :options="{ showText: true }"
              value="#FFE082FF" />
            <ka-color
              code="ffd-54-f"
              :options="{ showText: true }"
              value="#FFD54FFF" />
            <ka-color
              code="ffca-28"
              :options="{ showText: true }"
              value="#FFCA28FF" />
            <ka-color
              code="ffb-300"
              :options="{ showText: true }"
              value="#FFB300FF" />
            <ka-color
              code="ffa-000"
              :options="{ showText: true }"
              value="#FFA000FF" />
            <ka-color
              code="ff-8-f-00"
              :options="{ showText: true }"
              value="#FF8F00FF" />
            <ka-color
              code="ff-6-f-00"
              :options="{ showText: true }"
              value="#FF6F00FF" />
            <ka-color
              code="ffe-57-f"
              :options="{ showText: true }"
              value="#FFE57FFF" />
            <ka-color
              code="ffd-740"
              :options="{ showText: true }"
              value="#FFD740FF" />
            <ka-color
              code="ffc-400"
              :options="{ showText: true }"
              value="#FFC400FF" />
            <ka-color
              code="ffab-00"
              :options="{ showText: true }"
              value="#FFAB00FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-19">
            <ka-text code="orange-ff-9800">
              <span v-html="t('colors.main.sousMain.container33.container19.orangeFf9800.value', `Orange<br>#FF9800`)" />
            </ka-text>
            <ka-color
              code="fff-3-e-0"
              :options="{ showText: true }"
              value="#FFF3E0FF" />
            <ka-color
              code="ffe-0-b-2"
              :options="{ showText: true }"
              value="#FFE0B2FF" />
            <ka-color
              code="ffcc-80"
              :options="{ showText: true }"
              value="#FFCC80FF" />
            <ka-color
              code="ffb-74-d"
              :options="{ showText: true }"
              value="#FFB74DFF" />
            <ka-color
              code="ffa-726"
              :options="{ showText: true }"
              value="#FFA726FF" />
            <ka-color
              code="fb-8-c-00"
              :options="{ showText: true }"
              value="#FB8C00FF" />
            <ka-color
              code="f-57-c-00"
              :options="{ showText: true }"
              value="#F57C00FF" />
            <ka-color
              code="ef-6-c-00"
              :options="{ showText: true }"
              value="#EF6C00FF" />
            <ka-color
              code="e-65100"
              :options="{ showText: true }"
              value="#E65100FF" />
            <ka-color
              code="ffd-180"
              :options="{ showText: true }"
              value="#FFD180FF" />
            <ka-color
              code="ffab-40"
              :options="{ showText: true }"
              value="#FFAB40FF" />
            <ka-color
              code="ff-9100"
              :options="{ showText: true }"
              value="#FF9100FF" />
            <ka-color
              code="ff-6-d-00"
              :options="{ showText: true }"
              value="#FF6D00FF" />
          </ka-container>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-34">
          <!-- Container -->
          <ka-container code="container-20">
            <ka-text code="deep-orange-ff-5722">
              <span v-html="t('colors.main.sousMain.container34.container20.deepOrangeFf5722.value', `Deep-orange<br>#FF5722`)" />
            </ka-text>
            <ka-color
              code="fbe-9-e-7"
              :options="{ showText: true }"
              value="#FBE9E7FF" />
            <ka-color
              code="ffccbc"
              :options="{ showText: true }"
              value="#FFCCBCFF" />
            <ka-color
              code="ffab-91"
              :options="{ showText: true }"
              value="#FFAB91FF" />
            <ka-color
              code="ff-8-a-65"
              :options="{ showText: true }"
              value="#FF8A65FF" />
            <ka-color
              code="ff-7043"
              :options="{ showText: true }"
              value="#FF7043FF" />
            <ka-color
              code="f-4511-e"
              :options="{ showText: true }"
              value="#F4511EFF" />
            <ka-color
              code="e-64-a-19"
              :options="{ showText: true }"
              value="#E64A19FF" />
            <ka-color
              code="d-84315"
              :options="{ showText: true }"
              value="#D84315FF" />
            <ka-color
              code="bf-360-c"
              :options="{ showText: true }"
              value="#BF360CFF" />
            <ka-color
              code="ff-9-e-80"
              :options="{ showText: true }"
              value="#FF9E80FF" />
            <ka-color
              code="ff-6-e-40"
              :options="{ showText: true }"
              value="#FF6E40FF" />
            <ka-color
              code="ff-3-d-00"
              :options="{ showText: true }"
              value="#FF3D00FF" />
            <ka-color
              code="dd-2-c-00"
              :options="{ showText: true }"
              value="#DD2C00FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-21">
            <ka-text code="brown-795548">
              <span v-html="t('colors.main.sousMain.container34.container21.brown795548.value', `Brown<br>#795548`)" />
            </ka-text>
            <ka-color
              code="efebe-9"
              :options="{ showText: true }"
              value="#EFEBE9FF" />
            <ka-color
              code="d-7-ccc-8"
              :options="{ showText: true }"
              value="#D7CCC8FF" />
            <ka-color
              code="bcaaa-4"
              :options="{ showText: true }"
              value="#BCAAA4FF" />
            <ka-color
              code="a-1887-f"
              :options="{ showText: true }"
              value="#A1887FFF" />
            <ka-color
              code="k8-d-6-e-63"
              :options="{ showText: true }"
              value="#8D6E63FF" />
            <ka-color
              code="k6-d-4-c-41"
              :options="{ showText: true }"
              value="#6D4C41FF" />
            <ka-color
              code="k5-d-4037"
              :options="{ showText: true }"
              value="#5D4037FF" />
            <ka-color
              code="k4-e-342-e"
              :options="{ showText: true }"
              value="#4E342EFF" />
            <ka-color
              code="k3-e-2723"
              :options="{ showText: true }"
              value="#3E2723FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-22">
            <ka-text code="blue-grey-607-d-8-b">
              <span v-html="t('colors.main.sousMain.container34.container22.blueGrey607D8B.value', `Blue-grey<br>#607D8B`)" />
            </ka-text>
            <ka-color
              code="eceff-1"
              :options="{ showText: true }"
              value="#ECEFF1FF" />
            <ka-color
              code="cfd-8-dc"
              :options="{ showText: true }"
              value="#CFD8DCFF" />
            <ka-color
              code="b-0-bec-5"
              :options="{ showText: true }"
              value="#B0BEC5FF" />
            <ka-color
              code="k90-a-4-ae"
              :options="{ showText: true }"
              value="#90A4AEFF" />
            <ka-color
              code="k78909-c"
              :options="{ showText: true }"
              value="#78909CFF" />
            <ka-color
              code="k546-e-7-a"
              :options="{ showText: true }"
              value="#546E7AFF" />
            <ka-color
              code="k455-a-64"
              :options="{ showText: true }"
              value="#455A64FF" />
            <ka-color
              code="k37474-f"
              :options="{ showText: true }"
              value="#37474FFF" />
            <ka-color
              code="k263238"
              :options="{ showText: true }"
              value="#263238FF" />
          </ka-container>
        </ka-container>
        <!-- Container 3 -->
        <ka-container code="container-35">
          <!-- Container -->
          <ka-container code="container-23">
            <ka-text code="grey-9-e-9-e-9-e">
              <span v-html="t('colors.main.sousMain.container35.container23.grey9E9E9E.value', `Grey<br>#9E9E9E`)" />
            </ka-text>
            <ka-color
              code="fafafa"
              :options="{ showText: true }"
              value="#FAFAFAFF" />
            <ka-color
              code="f-5-f-5-f-5"
              :options="{ showText: true }"
              value="#F5F5F5FF" />
            <ka-color
              code="eeeeee"
              :options="{ showText: true }"
              value="#EEEEEEFF" />
            <ka-color
              code="e-0-e-0-e-0"
              :options="{ showText: true }"
              value="#E0E0E0FF" />
            <ka-color
              code="bdbdbd"
              :options="{ showText: true }"
              value="#BDBDBDFF" />
            <ka-color
              code="k757575"
              :options="{ showText: true }"
              value="#757575FF" />
            <ka-color
              code="k616161"
              :options="{ showText: true }"
              value="#616161FF" />
            <ka-color
              code="k424242"
              :options="{ showText: true }"
              value="#424242FF" />
            <ka-color
              code="k212121"
              :options="{ showText: true }"
              value="#212121FF" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-24">
            <ka-text code="shades">
              <span v-html="t('colors.main.sousMain.container35.container24.shades.value', `Shades<br> `)" />
            </ka-text>
            <ka-color
              code="k000000"
              :options="{ showText: true }"
              value="#000000FF" />
            <ka-color
              code="ffffff"
              :options="{ showText: true }"
              value="#FFFFFFFF" />
            <ka-color
              code="transparent-ffffff-00"
              :options="{ showText: true }"
              value="#FFFFFF00" />
          </ka-container>
          <!-- Container -->
          <ka-container code="container-25" />
        </ka-container>
      </ka-container>
    </ka-container>
    <!-- Right Panel -->
    <ka-container code="right-panel">
      <!-- Sous Nav -->
      <ka-container code="sous-nav">
        <!-- Container -->
        <ka-container code="container-26">
          <ka-text code="contents">
            <span v-html="t('colors.rightPanel.sousNav.container26.contents.value', `Contents`)" />
          </ka-text>
        </ka-container>
        <!-- Container 1 -->
        <ka-container code="container-110">
          <ka-text
            code="titre-text"
            :options="{
              href: { hash: `#utilisation--p29` },
              ariaLabel: `titre`,
              click: page.titreTextClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('colors.rightPanel.sousNav.container110.titreText.value', `Color List`)" />
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
          hidden: page.$info.colors.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarColors } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarColors'
})
provide('$scoped', '--p29')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = syncPageStore(headerWithLeftSidebarColors())
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
