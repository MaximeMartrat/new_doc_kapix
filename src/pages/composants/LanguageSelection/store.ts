import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarLanguageSelectionStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarLanguageSelection'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarLanguageSelectionStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarLanguageSelectionFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('language-selection.title', 'LanguageSelection'),
        $description: $translate('language-selection.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-28T14:14:54.328Z'),
        // Constants,
        $constants: {},
        // Data,
        $inputs: {
          displayName: true,
          fullName: false,
          code: false
        },
        $info: { languageSelection: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      displayName (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.displayName,
          set: (value) => {
            this.$inputs.displayName = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      fullName (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.fullName,
          set: (value) => {
            this.$inputs.fullName = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      code (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.code,
          set: (value) => {
            this.$inputs.code = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      async titreTextClick () {
        await navigateTo({ hash: '#utilisation--p30' })
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
  return headerWithLeftSidebarLanguageSelectionFactory(storeId)()
}

export const headerWithLeftSidebarLanguageSelectionRaw = headerWithLeftSidebarLanguageSelectionFactory()
export const headerWithLeftSidebarLanguageSelection = () => headerWithLeftSidebarLanguageSelectionRaw() as MergeCustomStore<typeof headerWithLeftSidebarLanguageSelectionStoreCustom.instance>
