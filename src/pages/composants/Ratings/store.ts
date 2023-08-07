import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { $first, initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarRatingsStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarRatings'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarRatingsStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarRatingsFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('ratings.title', 'Ratings'),
        $description: $translate('ratings.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-25T09:52:15.180Z'),
        // Constants,
        $constants: {},
        // Data,
        $data: {
          color: '',
          size: 24,
          length: 5,
          customLength: 5,
          rating: 0
        },
        $inputs: {
          evaluationAvecEtoiles: 3,
          halfIncrementCheckbox: undefined as Nullable<boolean>,
          curseur: undefined as Nullable<number>,
          curseurSlider: undefined as Nullable<number>,
          caseACocherOui: false,
          caseACocherOui1: undefined as Nullable<boolean>,
          caseACocherOui2: undefined as Nullable<boolean>,
          caseACocherOui4: undefined as Nullable<boolean>,
          caseACocherOui5: undefined as Nullable<boolean>,
          evaluationAvecEtoilesRating: undefined as Nullable<number>,
          curseur1: undefined as Nullable<number>,
          evaluationAvecEtoiles1: undefined as Nullable<number>,
          evaluationAvecEtoiles2: undefined as Nullable<number>,
          evaluationAvecEtoiles3: 4,
          evaluationAvecEtoiles4: 4,
          evaluationAvecEtoiles5: 4,
          evaluationAvecEtoiles6: 4,
          evaluationAvecEtoiles7: undefined as Nullable<number>,
          curseur2: undefined as Nullable<number>
        },
        $info: { ratings: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoiles (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles,
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      halfIncrementCheckbox (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.halfIncrementCheckbox,
          set: (value) => {
            this.$inputs.halfIncrementCheckbox = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      curseur (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.size,
          set: (value) => {
            this.$data.size = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      curseurSlider (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.length,
          set: (value) => {
            this.$data.length = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui,
          set: (value) => {
            this.$inputs.caseACocherOui = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui1 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui1,
          set: (value) => {
            this.$inputs.caseACocherOui1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui2 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui2,
          set: (value) => {
            this.$inputs.caseACocherOui2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui4 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui4,
          set: (value) => {
            this.$inputs.caseACocherOui4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui5 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui5,
          set: (value) => {
            this.$inputs.caseACocherOui5 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoilesRating (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoilesRating,
          set: (value) => {
            this.$inputs.evaluationAvecEtoilesRating = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      curseur1 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.customLength,
          set: (value) => {
            this.$data.customLength = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoiles1 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles1,
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoiles2 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles2,
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoiles3 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles3,
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles3 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoiles4 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles4,
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoiles5 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles5,
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles5 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoiles6 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles6,
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles6 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      evaluationAvecEtoiles7 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles7 || $first([
            this.$data.rating === 0 ? null : undefined,
            this.$data.rating === 0.5 ? 0.5 : undefined,
            this.$data.rating === 1 ? 1 : undefined,
            this.$data.rating === 1.5 ? 1.5 : undefined,
            this.$data.rating === 2 ? 2 : undefined,
            this.$data.rating === 2.5 ? 2.5 : undefined,
            this.$data.rating === 3 ? 3 : undefined,
            this.$data.rating === 3.5 ? 3.5 : undefined,
            this.$data.rating === 4 ? 4 : undefined,
            this.$data.rating === 4.5 ? 3.5 : undefined,
            5
          ]),
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles7 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      curseur2 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.rating,
          set: (value) => {
            this.$data.rating = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOuiClick () {
        this.$data.color = 'red'
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui1Click () {
        this.$data.color = 'blue'
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui2Click () {
        this.$data.color = 'green'
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui4Click () {
        this.$data.color = 'blue-kapix'
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOui5Click () {
        this.$data.color = 'yellow-kapix'
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre1Click () {
        await navigateTo({ hash: '#utilisation--p10' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre2Click () {
        await navigateTo({ hash: '#api--p10' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre3Click () {
        await navigateTo({ hash: '#exemple--p10' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes--p10' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreTextClick () {
        await navigateTo({ hash: '#couleurs--p10' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre1Click () {
        await navigateTo({ hash: '#length-container--p10' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre2Click () {
        await navigateTo({ hash: '#incremented--p10' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre3Click () {
        await navigateTo({ hash: '#size-container--p10' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre4Click () {
        await navigateTo({ hash: '#etats--p10' })
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
  return headerWithLeftSidebarRatingsFactory(storeId)()
}

export const headerWithLeftSidebarRatingsRaw = headerWithLeftSidebarRatingsFactory()
export const headerWithLeftSidebarRatings = () => headerWithLeftSidebarRatingsRaw() as MergeCustomStore<typeof headerWithLeftSidebarRatingsStoreCustom.instance>
