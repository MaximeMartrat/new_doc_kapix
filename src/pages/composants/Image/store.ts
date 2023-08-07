import type { WritableComputedRef } from 'vue'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarImageStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarImage'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarImageStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarImageFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('image.title', 'Image'),
        $description: $translate('image.description', ''),
        $publishedTime: new Date('2023-07-12T13:10:19.890Z'),
        $modifiedTime: new Date('2023-07-21T16:54:05.709Z'),
        // Constants,
        $constants: {
          ajustementItems: [
            'None',
            'Contain',
            'Cover',
            'Fill',
            'Scale down'
          ]
        },
        // Data,
        $inputs: {
          ajustement: undefined as Nullable<string>,
          hauteurMax: undefined as Nullable<number>,
          largeurMax: undefined as Nullable<number>,
          curseur: undefined as Nullable<number>
        },
        $info: { image: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      ajustement (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.ajustement,
          set: (value) => {
            this.$inputs.ajustement = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      hauteurMax (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.hauteurMax,
          set: (value) => {
            this.$inputs.hauteurMax = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      largeurMax (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.largeurMax,
          set: (value) => {
            this.$inputs.largeurMax = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      curseur (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.curseur,
          set: (value) => {
            this.$inputs.curseur = value
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
  return headerWithLeftSidebarImageFactory(storeId)()
}

export const headerWithLeftSidebarImageRaw = headerWithLeftSidebarImageFactory()
export const headerWithLeftSidebarImage = () => headerWithLeftSidebarImageRaw() as MergeCustomStore<typeof headerWithLeftSidebarImageStoreCustom.instance>
