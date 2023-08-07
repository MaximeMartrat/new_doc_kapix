import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarColorPickersStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarColorPickers'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarColorPickersStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarColorPickersFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('color-pickers.title', 'ColorPickers'),
        $description: $translate('color-pickers.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-28T13:52:19.492Z'),
        // Constants,
        $constants: {},
        // Data,
        $inputs: {
          colorPicker: undefined as Nullable<string>,
          showText: undefined as Nullable<boolean>,
          showColor: true,
          showLabel: false
        },
        $info: { colorPickers: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      colorPicker (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.colorPicker,
          set: (value) => {
            this.$inputs.colorPicker = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      showText (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.showText,
          set: (value) => {
            this.$inputs.showText = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      showColor (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.showColor,
          set: (value) => {
            this.$inputs.showColor = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      showLabel (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.showLabel,
          set: (value) => {
            this.$inputs.showLabel = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      async titreTextClick () {
        await navigateTo({ hash: '#utilisation--p23' })
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
  return headerWithLeftSidebarColorPickersFactory(storeId)()
}

export const headerWithLeftSidebarColorPickersRaw = headerWithLeftSidebarColorPickersFactory()
export const headerWithLeftSidebarColorPickers = () => headerWithLeftSidebarColorPickersRaw() as MergeCustomStore<typeof headerWithLeftSidebarColorPickersStoreCustom.instance>
