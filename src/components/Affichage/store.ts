import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { NOOP, initAliveStoreIds, kapixContext, remove } from 'kapix-components-vue3'
import affichageComponentStoreCustom from './store.custom'

const storeName = 'affichageComponent'
const customImplement: CustomStoreImplementationOptions = affichageComponentStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function affichageComponentFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $parentPage: NOOP,
        $parentComponent: NOOP,
        // Constants,
        $constants: {},
        // Data,
        $data: {
          bigHeadline: 'Donnez ici un titre à votre section',
          title: 'Développez ici votre section',
          drawing: undefined as Nullable<string>
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      $bigHeadline (): WritableComputedRef<string> {
        return computed({
          get: () => this.$data.bigHeadline,
          set: (value) => {
            this.$data.bigHeadline = value
            this.$emit('update:bigHeadline', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $title (): WritableComputedRef<string> {
        return computed({
          get: () => this.$data.title,
          set: (value) => {
            this.$data.title = value
            this.$emit('update:title', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $drawing (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.drawing,
          set: (value) => {
            this.$data.drawing = value
            this.$emit('update:drawing', value)
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
  return affichageComponentFactory(storeId)()
}

export const affichageComponentRaw = affichageComponentFactory()
export const affichageComponent = () => affichageComponentRaw() as MergeCustomStore<typeof affichageComponentStoreCustom.instance>
