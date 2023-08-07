import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarDatePickersStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarDatePickers'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarDatePickersStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarDatePickersFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('date-pickers.title', 'Date pickers'),
        $description: $translate('date-pickers.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-11T15:40:57.690Z'),
        // Constants,
        $constants: {},
        // Data,
        $inputs: {
          blue: undefined as Nullable<Date>,
          green: undefined as Nullable<Date>,
          saisieDeDate: undefined as Nullable<Date>,
          saisieDeDateDatePicker: undefined as Nullable<Date>,
          saisieDeDate1: undefined as Nullable<Date>,
          saisieDeDate2: undefined as Nullable<Date>
        },
        $info: { datePickers: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      blue (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.blue,
          set: (value) => {
            this.$inputs.blue = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      green (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.green,
          set: (value) => {
            this.$inputs.green = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeDate (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.saisieDeDate,
          set: (value) => {
            this.$inputs.saisieDeDate = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeDateDatePicker (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.saisieDeDateDatePicker,
          set: (value) => {
            this.$inputs.saisieDeDateDatePicker = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeDate1 (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.saisieDeDate1,
          set: (value) => {
            this.$inputs.saisieDeDate1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      saisieDeDate2 (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.saisieDeDate2,
          set: (value) => {
            this.$inputs.saisieDeDate2 = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      async titreTextClick () {
        await navigateTo({ hash: '#utilisation--p8' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre1Click () {
        await navigateTo({ hash: '#api--p8' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre2Click () {
        await navigateTo({ hash: '#exemple--p8' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes--p8' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreTextClick () {
        await navigateTo({ hash: '#couleurs--p8' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre1Click () {
        await navigateTo({ hash: '#formatting--p8' })
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
  return headerWithLeftSidebarDatePickersFactory(storeId)()
}

export const headerWithLeftSidebarDatePickersRaw = headerWithLeftSidebarDatePickersFactory()
export const headerWithLeftSidebarDatePickers = () => headerWithLeftSidebarDatePickersRaw() as MergeCustomStore<typeof headerWithLeftSidebarDatePickersStoreCustom.instance>
