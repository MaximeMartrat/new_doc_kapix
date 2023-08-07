import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarAutocompletesStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarAutocompletes'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarAutocompletesStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarAutocompletesFactory (storeId?: Nullable<StoreIdentifier>) {
  return defineStore(storeId == null ? storeName : `${storeName}/${storeId}`, {
    state: () => {
      return {
        $aliveStoreIds: aliveStoreIds,
        $subStoreIds: 1,
        $storeId: storeId,
        $emit: (() => {}) as (propName: any, value: any) => void,
        $elements: {} as KaElementMap,
        $router: kapixContext.isClient ? kapixContext.$router : undefined,
        $route: kapixContext.isClient ? kapixContext.$route : undefined,
        // Page info,
        $title: $translate('autocompletes.title', 'Autocompletes'),
        $description: $translate('autocompletes.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-28T14:51:06.812Z'),
        // Constants,
        $constants: {
          choixMultipleItems: [
            'Apple',
            'Orange',
            'Banana'
          ],
          displayModeItems: [
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Normal',
              value: null
            },
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Recherche seulement',
              value: '1'
            },
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Puces seulement',
              value: '2'
            }
          ]
        },
        // Data,
        $data: {
          maxNumberOfChips: 0,
          distinct: true,
          allowUserInput: false,
          sensitiveBox: true
        },
        $inputs: {
          choixMultiple: undefined as Nullable<Array<any>>,
          values: [
            'Apple',
            'Orange',
            'Banana'
          ],
          saisieDeNombre: undefined as Nullable<number>,
          distinct: undefined as Nullable<boolean>,
          allowUserInput: undefined as Nullable<boolean>,
          caseSensitive: undefined as Nullable<boolean>,
          displayMode: undefined as Nullable<string>,
          hideInputDetails: true,
          erasableChips: true,
          chipColor: undefined as Nullable<string>,
          bulletBackgroundColor: undefined as Nullable<string>,
          iconsAutoComplete: undefined as Nullable<Array<any>>,
          configurationAutoComplete: undefined as Nullable<Array<any>>,
          showNullButton: false,
          placeholder: 'My placeholder ...',
          debounce: 0
        },
        $info: { autocompletes: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      choixMultiple (): WritableComputedRef<Nullable<string> | Nullable<Array<any>>> {
        return computed({
          get: () => this.values.value,
          set: (value) => {
            this.values.value = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      values (): WritableComputedRef<Nullable<string> | Nullable<Array<any>>> {
        return computed({
          get: () => this.$inputs.values,
          set: (value) => {
            this.$inputs.values = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeNombre (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.maxNumberOfChips,
          set: (value) => {
            this.$data.maxNumberOfChips = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      distinct (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$data.distinct,
          set: (value) => {
            this.$data.distinct = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      allowUserInput (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$data.allowUserInput,
          set: (value) => {
            this.$data.allowUserInput = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      caseSensitive (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$data.sensitiveBox,
          set: (value) => {
            this.$data.sensitiveBox = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      displayMode (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.displayMode,
          set: (value) => {
            this.$inputs.displayMode = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      hideInputDetails (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.hideInputDetails,
          set: (value) => {
            this.$inputs.hideInputDetails = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      erasableChips (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.erasableChips,
          set: (value) => {
            this.$inputs.erasableChips = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      chipColor (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.chipColor,
          set: (value) => {
            this.$inputs.chipColor = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      bulletBackgroundColor (): WritableComputedRef<Nullable<Kapix.IGradientColor> | Nullable<string>> {
        return computed({
          get: () => this.$inputs.bulletBackgroundColor,
          set: (value) => {
            this.$inputs.bulletBackgroundColor = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      iconsAutoComplete (): WritableComputedRef<Nullable<string> | Nullable<Array<any>>> {
        return computed({
          get: () => this.$inputs.iconsAutoComplete,
          set: (value) => {
            this.$inputs.iconsAutoComplete = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      configurationAutoComplete (): WritableComputedRef<Nullable<string> | Nullable<Array<any>>> {
        return computed({
          get: () => this.$inputs.configurationAutoComplete,
          set: (value) => {
            this.$inputs.configurationAutoComplete = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      showNullButton (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.showNullButton,
          set: (value) => {
            this.$inputs.showNullButton = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      placeholder (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.placeholder,
          set: (value) => {
            this.$inputs.placeholder = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      debounce (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.debounce,
          set: (value) => {
            this.$inputs.debounce = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      async titreTextClick () {
        await navigateTo({ hash: '#utilisation--p22' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre1Click () {
        await navigateTo({ hash: '#api--p22' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre2Click () {
        await navigateTo({ hash: '#example--p22' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreClick () {
        await navigateTo({ hash: '#props--p22' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreTextClick () {
        await navigateTo({ hash: '#icons--p22' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre1Click () {
        await navigateTo({ hash: '#multiple--p22' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async iconClick (event: KaElementClickEvent) {
        await event.vm?.scrollToStart()
      },
      /* @ts-ignore: to allow override in your custom file */
      getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        return storeId != null ? getStoreInstance(storeId) : this
      },
      /* @ts-ignore: to allow override in your custom file */
      getStoreInstances () {
        return aliveStoreIds.map(storeId => this.getStoreInstance(storeId))
      },
      /* @ts-ignore: to allow override in your custom file */
      newStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        const newStoreId = storeId || this.$subStoreIds++
        if (aliveStoreIds.includes(newStoreId)) {
          throw new Error(`Store with id ${storeId} already exists`)
        }
        aliveStoreIds.push(newStoreId)
        return getStoreInstance(newStoreId)
      },
      ...customImplement.actions,
      /* @ts-ignore: to allow override in your custom file */
      beforeMount () {
        customImplement.actions?.beforeMount?.call(this)
      },
      /* @ts-ignore: to allow override in your custom file */
      mounted () {
        customImplement.actions?.mounted?.call(this)
      },
      /* @ts-ignore: to allow override in your custom file */
      serverPrefetch () {
        customImplement.actions?.serverPrefetch?.call(this)
      },
      /* @ts-ignore: to allow override in your custom file */
      beforeUnmount () {
        customImplement.actions?.beforeUnmount?.call(this)
      },
      /* @ts-ignore: to allow override in your custom file */
      unmounted () {
        if (this.$storeId != null) {
          this.$dispose()
          remove(aliveStoreIds, this.$storeId)
        }
        customImplement.actions?.unmounted?.call(this)
      }
    }
  })
}

function getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
  return headerWithLeftSidebarAutocompletesFactory(storeId)()
}

export const headerWithLeftSidebarAutocompletesRaw = headerWithLeftSidebarAutocompletesFactory()
export const headerWithLeftSidebarAutocompletes = () => headerWithLeftSidebarAutocompletesRaw() as MergeCustomStore<typeof headerWithLeftSidebarAutocompletesStoreCustom.instance>
