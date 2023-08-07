import type { WritableComputedRef } from 'vue'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarGradientColorPickerStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarGradientColorPicker'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarGradientColorPickerStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarGradientColorPickerFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('gradient-color-picker.title', 'GradientColorPicker'),
        $description: $translate('gradient-color-picker.description', ''),
        $publishedTime: new Date('2023-07-13T07:40:17.258Z'),
        $modifiedTime: new Date('2023-07-20T16:27:34.359Z'),
        // Constants,
        $constants: {},
        // Data,
        $inputs: {
          saisieDeDegradeDeCouleurs: undefined as Nullable<string>,
          saisieDeCouleur: '#551919FF'
        },
        $info: { gradientColorPicker: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      saisieDeDegradeDeCouleurs (): WritableComputedRef<Nullable<Kapix.IGradientColor> | Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeDegradeDeCouleurs,
          set: (value) => {
            this.$inputs.saisieDeDegradeDeCouleurs = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeCouleur (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeCouleur,
          set: (value) => {
            this.$inputs.saisieDeCouleur = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
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
  return headerWithLeftSidebarGradientColorPickerFactory(storeId)()
}

export const headerWithLeftSidebarGradientColorPickerRaw = headerWithLeftSidebarGradientColorPickerFactory()
export const headerWithLeftSidebarGradientColorPicker = () => headerWithLeftSidebarGradientColorPickerRaw() as MergeCustomStore<typeof headerWithLeftSidebarGradientColorPickerStoreCustom.instance>
