import type { WritableComputedRef } from 'vue'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarSocialNetworksStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarSocialNetworks'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarSocialNetworksStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarSocialNetworksFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('social-networks.title', 'Social Networks'),
        $description: $translate('social-networks.description', ''),
        $publishedTime: new Date('2023-07-13T07:49:57.057Z'),
        $modifiedTime: new Date('2023-07-21T14:59:19.784Z'),
        // Constants,
        $constants: {
          choixSimpleItems: [
            'email',
            'reddit',
            'facebook',
            'google+',
            'line',
            'linkedin',
            'pinterest',
            'telegram',
            'tumblr',
            'twitter',
            'viber',
            'whatsapp',
            'moi-mir'
          ]
        },
        // Data,
        $inputs: {
          saisieDeTexte: undefined as Nullable<string>,
          choixSimple: undefined as Nullable<string>,
          caseACocherOui: undefined as Nullable<boolean>
        },
        $info: { socialNetworks: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      saisieDeTexte (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.saisieDeTexte,
          set: (value) => {
            this.$inputs.saisieDeTexte = value
          }
        })
      },
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
      caseACocherOui (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui,
          set: (value) => {
            this.$inputs.caseACocherOui = value
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
  return headerWithLeftSidebarSocialNetworksFactory(storeId)()
}

export const headerWithLeftSidebarSocialNetworksRaw = headerWithLeftSidebarSocialNetworksFactory()
export const headerWithLeftSidebarSocialNetworks = () => headerWithLeftSidebarSocialNetworksRaw() as MergeCustomStore<typeof headerWithLeftSidebarSocialNetworksStoreCustom.instance>
