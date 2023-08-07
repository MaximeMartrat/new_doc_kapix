import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo } from 'kapix-components-vue3'
import checkBoxPreviewStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'checkBoxPreview'
const customImplement: CustomStoreImplementationOptions = checkBoxPreviewStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function checkBoxPreviewFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('check-box-preview.title', 'CheckBox Preview'),
        $description: $translate('check-box-preview.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-06-23T16:40:16.960Z'),
        // Constants,
        $constants: {},
        // Data,
        $inputs: {
          checkBox: false,
          caseACocherOui: undefined as Nullable<boolean>,
          caseACocherOui1: undefined as Nullable<boolean>,
          caseACocherOui2: undefined as Nullable<boolean>,
          caseACocherOui4: undefined as Nullable<boolean>,
          caseACocherOui5: undefined as Nullable<boolean>,
          caseUno: true,
          caseDeuxio: undefined as Nullable<boolean>,
          checkbox1: false,
          checkbox2: true,
          checkbox3: false,
          checkbox4: true,
          caseJacob: undefined as Nullable<boolean>,
          caseJohn: undefined as Nullable<boolean>
        },
        $info: { checkBoxPreview: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      checkBox (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.checkBox,
          set: (value) => {
            this.$inputs.checkBox = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui,
          set: (value) => {
            this.$inputs.caseACocherOui = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui1 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui1,
          set: (value) => {
            this.$inputs.caseACocherOui1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui2 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui2,
          set: (value) => {
            this.$inputs.caseACocherOui2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui4 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui4,
          set: (value) => {
            this.$inputs.caseACocherOui4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui5 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui5,
          set: (value) => {
            this.$inputs.caseACocherOui5 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseUno (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseUno,
          set: (value) => {
            this.$inputs.caseUno = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseDeuxio (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseDeuxio,
          set: (value) => {
            this.$inputs.caseDeuxio = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      checkbox1 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.checkbox1,
          set: (value) => {
            this.$inputs.checkbox1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      checkbox2 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.checkbox2,
          set: (value) => {
            this.$inputs.checkbox2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      checkbox3 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.checkbox3,
          set: (value) => {
            this.$inputs.checkbox3 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      checkbox4 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.checkbox4,
          set: (value) => {
            this.$inputs.checkbox4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseJacob (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseJacob,
          set: (value) => {
            this.$inputs.caseJacob = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseJohn (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseJohn,
          set: (value) => {
            this.$inputs.caseJohn = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      async titreClick () {
        await navigateTo({ hash: '#utilisation-p1' })
      },
      /* @ts-ignore: to allow override in your file */
      async text1Click () {
        await navigateTo({ hash: '#api-p1' })
      },
      /* @ts-ignore: to allow override in your file */
      async text2Click () {
        await navigateTo({ hash: '#exemple-p1' })
      },
      /* @ts-ignore: to allow override in your file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes-p1' })
      },
      /* @ts-ignore: to allow override in your file */
      async text3Click () {
        await navigateTo({ hash: '#couleurs-p1' })
      },
      /* @ts-ignore: to allow override in your file */
      async text4Click () {
        await navigateTo({ hash: '#valeurs-p1' })
      },
      /* @ts-ignore: to allow override in your file */
      async text5Click () {
        await navigateTo({ hash: '#etats-p1' })
      },
      /* @ts-ignore: to allow override in your file */
      async iconClick (event: KaElementClickEvent) {
        await event.vm?.scrollToStart()
      },
      /* @ts-ignore: to allow override in your file */
      getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        return storeId != null ? getStoreInstance(storeId) : this
      },
      /* @ts-ignore: to allow override in your file */
      getStoreInstances () {
        return aliveStoreIds.map(storeId => this.getStoreInstance(storeId))
      },
      /* @ts-ignore: to allow override in your file */
      newStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        const newStoreId = storeId || this.$subStoreIds++
        if (aliveStoreIds.includes(newStoreId)) {
          throw new Error(`Store with id ${storeId} already exists`)
        }
        aliveStoreIds.push(newStoreId)
        return getStoreInstance(newStoreId)
      },
      ...customImplement.actions,
      /* @ts-ignore: to allow override in your file */
      beforeMount () {
        customImplement.actions?.beforeMount?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      mounted () {
        customImplement.actions?.mounted?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      serverPrefetch () {
        customImplement.actions?.serverPrefetch?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      beforeUnmount () {
        customImplement.actions?.beforeUnmount?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
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
  return checkBoxPreviewFactory(storeId)()
}

export const checkBoxPreviewRaw = checkBoxPreviewFactory()
export const checkBoxPreview = () => checkBoxPreviewRaw() as MergeCustomStore<typeof checkBoxPreviewStoreCustom.instance>
