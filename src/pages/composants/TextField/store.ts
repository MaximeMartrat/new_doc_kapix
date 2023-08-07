import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarTextFieldStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarTextField'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarTextFieldStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarTextFieldFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('text-field.title', 'Text Field'),
        $description: $translate('text-field.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-08-05T15:00:20.444Z'),
        // Constants,
        $constants: {},
        // Data,
        $data: {
          reverseColor: 'Default',
          previewCode: 'Default',
          reverseColor2: 'Default',
          previewCode2: 'Default',
          reverseColor3: 'Default',
          previewCode3: 'Default',
          reverseColor4: 'Default',
          previewCode4: 'Default',
          reverseColor5: 'Default',
          previewCode5: 'Default'
        },
        $inputs: {
          saisieDeTexte: undefined as Nullable<string>,
          saisieDeTexteStringInput: undefined as Nullable<string>,
          saisieDeTexte1: undefined as Nullable<string>,
          saisieDeTexte2: undefined as Nullable<string>,
          saisieDeTexte3: undefined as Nullable<string>,
          saisieDeTexte4: undefined as Nullable<string>,
          saisieDeTexte5: undefined as Nullable<string>,
          saisieDeTexte6: undefined as Nullable<string>,
          saisieDeTexte7: undefined as Nullable<string>,
          saisieDeTexte8: undefined as Nullable<string>,
          saisieDeTexte9: undefined as Nullable<string>,
          saisieDeTexte10: undefined as Nullable<string>,
          saisieDeTexte11: undefined as Nullable<string>,
          saisieDeTexte12: undefined as Nullable<string>,
          saisieDeTexte13: undefined as Nullable<string>,
          saisieDeTexte14: undefined as Nullable<string>,
          saisieDeTexte15: undefined as Nullable<string>,
          saisieDeTexte16: undefined as Nullable<string>,
          saisieDeTexte17: undefined as Nullable<string>,
          saisieDeTexte18: undefined as Nullable<string>,
          saisieDeTexte19: 'Hey!',
          saisieDeTexte20: 'Hey!',
          saisieDeTexte21: 'Hey!',
          saisieDeTexte22: 'Hey!',
          saisieDeTexte31: undefined as Nullable<string>,
          saisieDeTexte32: undefined as Nullable<string>,
          saisieDeTexte33: undefined as Nullable<string>,
          saisieDeTexte34: undefined as Nullable<string>,
          saisieDeTexte35: undefined as Nullable<string>,
          saisieDeTexte36: undefined as Nullable<string>,
          saisieDeTexte37: undefined as Nullable<string>,
          saisieDeTexte38: undefined as Nullable<string>
        },
        $info: { textField: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte,
          set: (value) => {
            this.$inputs.saisieDeTexte = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexteStringInput (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexteStringInput,
          set: (value) => {
            this.$inputs.saisieDeTexteStringInput = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte1 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte1,
          set: (value) => {
            this.$inputs.saisieDeTexte1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte2 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte2,
          set: (value) => {
            this.$inputs.saisieDeTexte2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte3 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte3,
          set: (value) => {
            this.$inputs.saisieDeTexte3 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte4 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte4,
          set: (value) => {
            this.$inputs.saisieDeTexte4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte5 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte5,
          set: (value) => {
            this.$inputs.saisieDeTexte5 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte6 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte6,
          set: (value) => {
            this.$inputs.saisieDeTexte6 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte7 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte7,
          set: (value) => {
            this.$inputs.saisieDeTexte7 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte8 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte8,
          set: (value) => {
            this.$inputs.saisieDeTexte8 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte9 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte9,
          set: (value) => {
            this.$inputs.saisieDeTexte9 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte10 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte10,
          set: (value) => {
            this.$inputs.saisieDeTexte10 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte11 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte11,
          set: (value) => {
            this.$inputs.saisieDeTexte11 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte12 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte12,
          set: (value) => {
            this.$inputs.saisieDeTexte12 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte13 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte13,
          set: (value) => {
            this.$inputs.saisieDeTexte13 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte14 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte14,
          set: (value) => {
            this.$inputs.saisieDeTexte14 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte15 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte15,
          set: (value) => {
            this.$inputs.saisieDeTexte15 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte16 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte16,
          set: (value) => {
            this.$inputs.saisieDeTexte16 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte17 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte17,
          set: (value) => {
            this.$inputs.saisieDeTexte17 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte18 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte18,
          set: (value) => {
            this.$inputs.saisieDeTexte18 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte19 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte19,
          set: (value) => {
            this.$inputs.saisieDeTexte19 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte20 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte20,
          set: (value) => {
            this.$inputs.saisieDeTexte20 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte21 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte21,
          set: (value) => {
            this.$inputs.saisieDeTexte21 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte22 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte22,
          set: (value) => {
            this.$inputs.saisieDeTexte22 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte31 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte31,
          set: (value) => {
            this.$inputs.saisieDeTexte31 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte32 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte32,
          set: (value) => {
            this.$inputs.saisieDeTexte32 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte33 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte33,
          set: (value) => {
            this.$inputs.saisieDeTexte33 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte34 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte34,
          set: (value) => {
            this.$inputs.saisieDeTexte34 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte35 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte35,
          set: (value) => {
            this.$inputs.saisieDeTexte35 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte36 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte36,
          set: (value) => {
            this.$inputs.saisieDeTexte36 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte37 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte37,
          set: (value) => {
            this.$inputs.saisieDeTexte37 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte38 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte38,
          set: (value) => {
            this.$inputs.saisieDeTexte38 = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      iconClick () {
        this.$data.reverseColor = 'Colored'
      },
      /* @ts-ignore: to allow override in your custom file */
      iconClickWhenSelected () {
        this.$data.reverseColor = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon1Click () {
        this.$data.previewCode = 'Clicked'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon1ClickWhenSelected () {
        this.$data.previewCode = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon2Click () {
        this.$data.reverseColor2 = 'Colored'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon2ClickWhenSelected () {
        this.$data.reverseColor2 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon3Click () {
        this.$data.previewCode2 = 'Clicked'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon3ClickWhenSelected () {
        this.$data.previewCode2 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon4Click () {
        this.$data.reverseColor2 = 'Colored'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon4ClickWhenSelected () {
        this.$data.reverseColor3 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon5Click () {
        this.$data.previewCode3 = 'Clicked'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon5ClickWhenSelected () {
        this.$data.previewCode3 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon6Click () {
        this.$data.reverseColor4 = 'Colored'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon6ClickWhenSelected () {
        this.$data.reverseColor4 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon7Click () {
        this.$data.previewCode4 = 'Clicked'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon7ClickWhenSelected () {
        this.$data.previewCode4 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon8Click () {
        this.$data.reverseColor5 = 'Colored'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon8ClickWhenSelected () {
        this.$data.reverseColor5 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon9Click () {
        this.$data.previewCode5 = 'Clicked'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon9ClickWhenSelected () {
        this.$data.previewCode5 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      async titreClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async titreTextClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre1Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreTextClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre1Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre2Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async icon10Click (event: KaElementClickEvent) {
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
  return headerWithLeftSidebarTextFieldFactory(storeId)()
}

export const headerWithLeftSidebarTextFieldRaw = headerWithLeftSidebarTextFieldFactory()
export const headerWithLeftSidebarTextField = () => headerWithLeftSidebarTextFieldRaw() as MergeCustomStore<typeof headerWithLeftSidebarTextFieldStoreCustom.instance>
