import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarSelectsStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarSelects'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarSelectsStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarSelectsFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('selects.title', 'Selects'),
        $description: $translate('selects.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-27T16:06:17.476Z'),
        // Constants,
        $constants: {
          choixSimpleItems: [
            'Foo',
            'Bar',
            'Fizz',
            'Buzz'
          ],
          choixSimpleSelectInputItems: [
            'Foo',
            'Bar',
            'Fizz',
            'Buzz'
          ],
          choixSimple1Items: [
            'Foo',
            'Bar',
            'Fizz',
            'Buzz'
          ],
          choixSimple2Items: [
            'Foo',
            'Bar',
            'Fizz',
            'Buzz'
          ],
          choixSimple3Items: [
            'Foo',
            'Bar',
            'Fizz',
            'Buzz'
          ]
        },
        // Data,
        $data: {
          reverseColor: 'Default',
          previewCode: 'Default',
          previewCode2: 'Default',
          reverseColor3: 'Default',
          previewCode3: 'Default',
          reverseColor4: 'Default',
          previewCode4: 'Default',
          reverseColor5: 'Default',
          previewCode5: 'Default'
        },
        $inputs: {
          choixSimple: undefined as Nullable<string>,
          choixSimpleSelectInput: undefined as Nullable<string>,
          choixSimple1: undefined as Nullable<string>,
          choixSimple2: undefined as Nullable<string>
        },
        $info: { selects: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      choixSimple (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixSimple,
          set: (value) => {
            this.$inputs.choixSimple = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      choixSimpleSelectInput (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixSimpleSelectInput,
          set: (value) => {
            this.$inputs.choixSimpleSelectInput = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      choixSimple1 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixSimple1,
          set: (value) => {
            this.$inputs.choixSimple1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      choixSimple2 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixSimple2,
          set: (value) => {
            this.$inputs.choixSimple2 = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      iconClick () {
        this.$data.reverseColor = 'Colored'
      },
      /* @ts-ignore: to allow override in your custom file */
      iconClickWhenSelected () {
        this.$data.reverseColor = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon1Click () {
        this.$data.previewCode = 'Clicked'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon1ClickWhenSelected () {
        this.$data.previewCode = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon2Click () {
        this.$data.reverseColor3 = 'Colored'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon2ClickWhenSelected () {
        this.$data.reverseColor3 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon3Click () {
        this.$data.previewCode3 = 'Clicked'
      },
      /* @ts-ignore: to allow override in your custom file */
      icon3ClickWhenSelected () {
        this.$data.previewCode3 = 'Default'
      },
      /* @ts-ignore: to allow override in your custom file */
      async titreClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async titreTextClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre1Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreTextClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre1Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre2Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async icon4Click (event: KaElementClickEvent) {
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
  return headerWithLeftSidebarSelectsFactory(storeId)()
}

export const headerWithLeftSidebarSelectsRaw = headerWithLeftSidebarSelectsFactory()
export const headerWithLeftSidebarSelects = () => headerWithLeftSidebarSelectsRaw() as MergeCustomStore<typeof headerWithLeftSidebarSelectsStoreCustom.instance>
