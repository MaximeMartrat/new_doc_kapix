import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarIconStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarIcon'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarIconStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarIconFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('icon.title', 'Icon'),
        $description: $translate('icon.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-19T09:20:40.074Z'),
        // Constants,
        $constants: { applyAccessibility: 'Apply accessibility attributes to the <a href=\'https://v2.vuetifyjs.com/en/components/icons/\'>v-icon</a> component, such as role="img", to give it a semantic meaning.' },
        // Data,
        $data: {
          size: 'medium',
          color: 'default',
          icon: 'mdi-plus',
          reverseColor: false,
          previewCode: false,
          reverseColor2: false,
          reverseColor3Copy: false,
          codePreview2Copy: false,
          reverseColor4: false,
          previewCode3: false,
          reverseColor5: false,
          previewCode4: false,
          reverseColor6: false,
          previewCode5: false
        },
        $inputs: {
          size: undefined as Nullable<string>,
          color: undefined as Nullable<string>,
          iconSelectInput: undefined as Nullable<string>
        },
        $info: { icon: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      size (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.size,
          set: (value) => {
            this.$data.size = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      color (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.color,
          set: (value) => {
            this.$data.color = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      iconSelectInput (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.icon,
          set: (value) => {
            this.$data.icon = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      boutonDefaultClick () {
        this.$data.size = 'medium'
        this.$data.color = 'default'
        this.$data.icon = 'mdi-plus'
      },
      /* @ts-ignore: to allow override in your custom file */
      reverseColorClick () {
        this.$data.reverseColor = true
      },
      /* @ts-ignore: to allow override in your custom file */
      reverseColorClickWhenSelected () {
        this.$data.reverseColor = false
      },
      /* @ts-ignore: to allow override in your custom file */
      codePreviewIconClick () {
        this.$data.previewCode = true
      },
      /* @ts-ignore: to allow override in your custom file */
      codePreviewIconClickWhenSelected () {
        this.$data.previewCode = false
      },
      /* @ts-ignore: to allow override in your custom file */
      reverseColor2Click () {
        this.$data.reverseColor2 = true
      },
      /* @ts-ignore: to allow override in your custom file */
      reverseColor2ClickWhenSelected () {
        this.$data.reverseColor2 = false
      },
      /* @ts-ignore: to allow override in your custom file */
      codePreview2Click () {
        this.$data.previewCode = true
      },
      /* @ts-ignore: to allow override in your custom file */
      codePreview2ClickWhenSelected () {
        this.$data.previewCode = false
      },
      /* @ts-ignore: to allow override in your custom file */
      reverseColor2IconClick () {
        this.$data.reverseColor3Copy = true
      },
      /* @ts-ignore: to allow override in your custom file */
      reverseColor2IconClickWhenSelected () {
        this.$data.reverseColor3Copy = false
      },
      /* @ts-ignore: to allow override in your custom file */
      codePreview2IconClick () {
        this.$data.codePreview2Copy = true
      },
      /* @ts-ignore: to allow override in your custom file */
      codePreview2IconClickWhenSelected () {
        this.$data.codePreview2Copy = false
      },
      /* @ts-ignore: to allow override in your custom file */
      colorIconClick () {
        this.$data.reverseColor4 = true
      },
      /* @ts-ignore: to allow override in your custom file */
      colorIconClickWhenSelected () {
        this.$data.reverseColor4 = false
      },
      /* @ts-ignore: to allow override in your custom file */
      codeClick () {
        this.$data.previewCode3 = true
      },
      /* @ts-ignore: to allow override in your custom file */
      codeClickWhenSelected () {
        this.$data.previewCode3 = false
      },
      /* @ts-ignore: to allow override in your custom file */
      color1Click () {
        this.$data.reverseColor5 = true
      },
      /* @ts-ignore: to allow override in your custom file */
      color1ClickWhenSelected () {
        this.$data.reverseColor5 = false
      },
      /* @ts-ignore: to allow override in your custom file */
      codeIconClick () {
        this.$data.previewCode4 = true
      },
      /* @ts-ignore: to allow override in your custom file */
      codeIconClickWhenSelected () {
        this.$data.previewCode4 = false
      },
      /* @ts-ignore: to allow override in your custom file */
      color2Click () {
        this.$data.reverseColor6 = true
      },
      /* @ts-ignore: to allow override in your custom file */
      color2ClickWhenSelected () {
        this.$data.reverseColor6 = false
      },
      /* @ts-ignore: to allow override in your custom file */
      code1Click () {
        this.$data.previewCode5 = true
      },
      /* @ts-ignore: to allow override in your custom file */
      code1ClickWhenSelected () {
        this.$data.previewCode5 = false
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre2Click () {
        await navigateTo({ hash: '#usage--p6' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre3Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre4Click () {
        await navigateTo({ hash: '#exemple--p6' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes--p6' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreTextClick () {
        await navigateTo({ hash: '#couleurs--p6' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre1Click () {
        await navigateTo({ hash: '#valeurs--p6' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre2Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async icon11Click (event: KaElementClickEvent) {
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
  return headerWithLeftSidebarIconFactory(storeId)()
}

export const headerWithLeftSidebarIconRaw = headerWithLeftSidebarIconFactory()
export const headerWithLeftSidebarIcon = () => headerWithLeftSidebarIconRaw() as MergeCustomStore<typeof headerWithLeftSidebarIconStoreCustom.instance>
