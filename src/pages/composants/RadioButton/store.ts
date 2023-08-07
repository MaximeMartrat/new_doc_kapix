import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarRadioButtonStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarRadioButton'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarRadioButtonStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarRadioButtonFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('radio-button.title', 'Radio button'),
        $description: $translate('radio-button.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-27T15:46:21.013Z'),
        // Constants,
        $constants: {
          radioButtons1Items: [
            {
              value: 'Of course it\'s Google',
              label: 'Of course it\'s Google'
            },
            {
              value: 'Definitely Duckduckgo',
              label: 'Definitely Duckduckgo'
            }
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
        $info: { radioButton: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
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
  return headerWithLeftSidebarRadioButtonFactory(storeId)()
}

export const headerWithLeftSidebarRadioButtonRaw = headerWithLeftSidebarRadioButtonFactory()
export const headerWithLeftSidebarRadioButton = () => headerWithLeftSidebarRadioButtonRaw() as MergeCustomStore<typeof headerWithLeftSidebarRadioButtonStoreCustom.instance>
