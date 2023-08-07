import type { WritableComputedRef } from 'vue'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { NOOP, initAliveStoreIds, kapixContext, remove } from 'kapix-components-vue3'
import radioButtonsComponentStoreCustom from './store.custom'

const storeName = 'radioButtonsComponent'
const customImplement: CustomStoreImplementationOptions = radioButtonsComponentStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function radioButtonsComponentFactory (storeId?: Nullable<StoreIdentifier>) {
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
          value: undefined as Nullable<string>,
          items: undefined as PartialEntities<Kapix.Entity.IRadioButtonItem>
        },
        $inputs: { radioButtonItemList: {} },
        $info: {
          radioButtonItemList: {
            scrollTop: 0,
            scrollLeft: 0,
            loading: false,
            quickSearch: undefined,
            total: 0
          } as Kapix.ListData<Kapix.Entity.IRadioButtonItem>
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      $value (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.value,
          set: (value) => {
            this.$data.value = value
            this.$emit('update:value', value)
            this.$emit('update:modelValue', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      $items (): WritableComputedRef<PartialEntities<Kapix.Entity.IRadioButtonItem>> {
        return computed({
          get: () => this.$data.items,
          set: (value) => {
            this.$data.items = value
            this.$emit('update:items', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      radioButtonItemList (): WritableComputedRef<Nullable<KeyValuePair>> {
        return computed({
          get: () => this.$inputs.radioButtonItemList,
          set: (value) => {
            this.$inputs.radioButtonItemList = value
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
  return radioButtonsComponentFactory(storeId)()
}

export const radioButtonsComponentRaw = radioButtonsComponentFactory()
export const radioButtonsComponent = () => radioButtonsComponentRaw() as MergeCustomStore<typeof radioButtonsComponentStoreCustom.instance>
