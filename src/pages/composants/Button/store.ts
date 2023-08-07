import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { $first, initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarButtonStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarButton'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarButtonStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarButtonFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('button.title', 'Button'),
        $description: $translate('button.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-27T07:48:52.968Z'),
        // Constants,
        $constants: {
          button: [
            1,
            1,
            1,
            1
          ],
          buttonRounded: [
            9999,
            9999,
            9999,
            9999
          ],
          buttonTile: [
            0,
            0,
            0,
            0
          ],
          button1: [
            7,
            7,
            7,
            7
          ],
          colorItems: [
            'primary',
            'secondary',
            'lostark'
          ]
        },
        // Data,
        $data: {
          outlined: 'default',
          rounded: 'default',
          color: '',
          tile: 'default',
          disabled: 'default'
        },
        $inputs: {
          caseACocherOui: false,
          color: undefined as Nullable<string>
        },
        $info: { button: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
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
      color (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.color || $first([
            this.$data.color === 'primary' ? 'primary' : undefined,
            this.$data.color === 'secondary' ? 'secondary' : undefined,
            'lostark'
          ]),
          set: (value) => {
            this.$inputs.color = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      outlinedClick () {
        this.$data.outlined = 'outlined'
      },
      /* @ts-ignore: to allow override in your custom file */
      outlinedClickWhenSelected () {
        this.$data.outlined = 'default'
      },
      /* @ts-ignore: to allow override in your custom file */
      roundedClick () {
        this.$data.rounded = 'rounded'
      },
      /* @ts-ignore: to allow override in your custom file */
      roundedClickWhenSelected () {
        this.$data.rounded = 'default'
      },
      /* @ts-ignore: to allow override in your custom file */
      tileClick () {
        this.$data.rounded = 'Tile'
      },
      /* @ts-ignore: to allow override in your custom file */
      tileClickWhenSelected () {
        this.$data.rounded = 'default'
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOuiClick () {
        this.$data.disabled = 'disable'
      },
      /* @ts-ignore: to allow override in your custom file */
      caseACocherOuiClickWhenSelected () {
        this.$data.disabled = 'default'
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre3Click () {
        await navigateTo({ hash: '#usage--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre4Click () {
        await navigateTo({ hash: '#api--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre5Click () {
        await navigateTo({ hash: '#api--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreTextClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre1Click () {
        await navigateTo({ hash: '#props-depressed--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre2Click () {
        await navigateTo({ hash: '#props-outlined--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre3Click () {
        await navigateTo({ hash: '#props-rounded--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre4Click () {
        await navigateTo({ hash: '#props-sizing--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre5Click () {
        await navigateTo({ hash: '#props-text--p5' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre6Click () {
        await navigateTo({ hash: '#props-tile--p5' })
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
  return headerWithLeftSidebarButtonFactory(storeId)()
}

export const headerWithLeftSidebarButtonRaw = headerWithLeftSidebarButtonFactory()
export const headerWithLeftSidebarButton = () => headerWithLeftSidebarButtonRaw() as MergeCustomStore<typeof headerWithLeftSidebarButtonStoreCustom.instance>
