import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext } from 'kapix-components-vue3'
import headerWithLeftSidebarColorPickerStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarColorPicker'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarColorPickerStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarColorPickerFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('color-picker.title', 'ColorPicker'),
        $description: $translate('color-picker.description', ''),
        $publishedTime: new Date('2023-07-13T07:40:17.258Z'),
        $modifiedTime: new Date('2023-07-13T08:17:09.670Z'),
        // Constants,
        $constants: {},
        // Data,
        $inputs: {
          saisieDeDegradeDeCouleurs: undefined as Nullable<string>,
          gradientColor1: undefined as Nullable<string>,
          textArea1: undefined as Nullable<string>,
          textArea: undefined as Nullable<string>,
          thisIsClearableText: 'This is clearable text.'
        },
        $info: { colorPicker: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      saisieDeDegradeDeCouleurs (): WritableComputedRef<Nullable<IGradientColor> | Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeDegradeDeCouleurs,
          set: (value) => {
            this.$inputs.saisieDeDegradeDeCouleurs = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      gradientColor1 (): WritableComputedRef<Nullable<IGradientColor> | Nullable<string>> {
        return computed({
          get: () => this.$inputs.gradientColor1,
          set: (value) => {
            this.$inputs.gradientColor1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea1 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea1,
          set: (value) => {
            this.$inputs.textArea1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea,
          set: (value) => {
            this.$inputs.textArea = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      thisIsClearableText (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.thisIsClearableText,
          set: (value) => {
            this.$inputs.thisIsClearableText = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
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
  return headerWithLeftSidebarColorPickerFactory(storeId)()
}

export const headerWithLeftSidebarColorPickerRaw = headerWithLeftSidebarColorPickerFactory()
export const headerWithLeftSidebarColorPicker = () => headerWithLeftSidebarColorPickerRaw() as MergeCustomStore<typeof headerWithLeftSidebarColorPickerStoreCustom.instance>
