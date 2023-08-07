import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarMapStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarMap'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarMapStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarMapFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('map.title', 'Map'),
        $description: $translate('map.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-28T13:23:10.399Z'),
        // Constants,
        $constants: {
          tileLayerItems: [
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Satellite',
              value: 'satellite'
            },
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Street map',
              value: 'openstreetmap'
            }
          ],
          initialCoordinatesModeItems: [
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Auto',
              value: null
            },
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'User position',
              value: 'user'
            },
            {
              background: null,
              color: null,
              description: null,
              icon: null,
              label: 'Coordinates',
              value: 'manual'
            }
          ],
          zoom118Value: -1,
          zoom118Value1: 1,
          minZoomValue: -1,
          minZoomValue1: 1,
          maxZoomValue: -1,
          maxZoomValue1: 1
        },
        // Data,
        $data: {
          zoom118: 13,
          minZoom: 3,
          maxZoom: 18
        },
        $inputs: {
          mapLeaflet: undefined as Nullable<KeyValuePair>,
          tileLayer: 'satellite',
          initialCoordinatesMode: undefined as Nullable<string>,
          zoom118: undefined as Nullable<number>,
          minZoom: undefined as Nullable<number>,
          maxZoom: undefined as Nullable<number>
        },
        $info: {
          map: { scrollTop: 0 },
          mapLeaflet: { zoom: undefined as Nullable<number> }
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      mapLeaflet (): WritableComputedRef<Nullable<KeyValuePair>> {
        return computed({
          get: () => this.$inputs.mapLeaflet,
          set: (value) => {
            this.$inputs.mapLeaflet = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      tileLayer (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.tileLayer,
          set: (value) => {
            this.$inputs.tileLayer = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      initialCoordinatesMode (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.initialCoordinatesMode,
          set: (value) => {
            this.$inputs.initialCoordinatesMode = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      zoom118 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.zoom118,
          set: (value) => {
            this.$data.zoom118 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      minZoom (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.minZoom,
          set: (value) => {
            this.$data.minZoom = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      maxZoom (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.maxZoom,
          set: (value) => {
            this.$data.maxZoom = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      minusClick () {
        this.$elements['zoom-118'].value += this.$constants.zoom118Value
      },
      /* @ts-ignore: to allow override in your custom file */
      plusClick () {
        this.$elements['zoom-118'].value += this.$constants.zoom118Value1
      },
      /* @ts-ignore: to allow override in your custom file */
      minusIconClick () {
        this.$elements['min-zoom'].value += this.$constants.minZoomValue
      },
      /* @ts-ignore: to allow override in your custom file */
      plusIconClick () {
        this.$elements['min-zoom'].value += this.$constants.minZoomValue1
      },
      /* @ts-ignore: to allow override in your custom file */
      minus1Click () {
        this.$elements['max-zoom'].value += this.$constants.maxZoomValue
      },
      /* @ts-ignore: to allow override in your custom file */
      plus1Click () {
        this.$elements['max-zoom'].value += this.$constants.maxZoomValue1
      },
      /* @ts-ignore: to allow override in your custom file */
      async titreTextClick () {
        await navigateTo({ hash: '#usage--p12' })
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
  return headerWithLeftSidebarMapFactory(storeId)()
}

export const headerWithLeftSidebarMapRaw = headerWithLeftSidebarMapFactory()
export const headerWithLeftSidebarMap = () => headerWithLeftSidebarMapRaw() as MergeCustomStore<typeof headerWithLeftSidebarMapStoreCustom.instance>
