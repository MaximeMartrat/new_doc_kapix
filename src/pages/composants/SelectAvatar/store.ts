import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarSelectAvatarStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarSelectAvatar'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarSelectAvatarStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarSelectAvatarFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('select-avatar.title', 'Select Avatar'),
        $description: $translate('select-avatar.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-20T09:04:13.605Z'),
        // Constants,
        $constants: {
          avatar: {
            skinColor: 'Light',
            topType: 'ShortHairShortWaved',
            facialHairType: 'Blank',
            eyeType: 'Squint',
            accessoriesType: 'Blank',
            eyebrowType: 'RaisedExcitedNatural',
            mouthType: 'Smile',
            clotheType: 'ShirtCrewNeck',
            graphicType: 'Skull',
            facialHairColor: '#2F7546',
            clotheColor: '#4A4A4AFF',
            hairColor: '#4A4A4AFF',
            topColor: '#70361C'
          }
        },
        // Data,
        $inputs: {
          selectionDavatar: {
            skinColor: 'Light',
            topType: 'LongHairBob',
            facialHairType: 'Blank',
            eyeType: 'Surprised',
            accessoriesType: 'Prescription01',
            eyebrowType: 'Angry',
            mouthType: 'Twinkle',
            clotheType: 'Hoodie',
            graphicType: 'Blank',
            facialHairColor: '#B82257',
            clotheColor: 'black',
            hairColor: '#9A4386',
            topColor: '#038C43'
          },
          showRandomButton: undefined as Nullable<boolean>,
          showCopyPaste: undefined as Nullable<boolean>,
          selectAvatarDisplayGetAvatar: {
            skinColor: 'Tanned',
            topType: 'ShortHairShortCurly',
            facialHairType: 'MoustacheMagnum',
            eyeType: 'Hearts',
            accessoriesType: 'Sunglasses',
            eyebrowType: 'SadConcerned',
            mouthType: 'Serious',
            clotheType: 'BlazerSweater',
            graphicType: 'Pizza',
            facialHairColor: 'black',
            clotheColor: '#FBCF89',
            hairColor: '#1066D8',
            topColor: '#154BAF'
          }
        },
        $info: { selectAvatar: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      selectionDavatar (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.selectionDavatar,
          set: (value) => {
            this.$inputs.selectionDavatar = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      showRandomButton (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.showRandomButton,
          set: (value) => {
            this.$inputs.showRandomButton = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      showCopyPaste (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.showCopyPaste,
          set: (value) => {
            this.$inputs.showCopyPaste = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      selectAvatarDisplayGetAvatar (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.selectAvatarDisplayGetAvatar,
          set: (value) => {
            this.$inputs.selectAvatarDisplayGetAvatar = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
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
  return headerWithLeftSidebarSelectAvatarFactory(storeId)()
}

export const headerWithLeftSidebarSelectAvatarRaw = headerWithLeftSidebarSelectAvatarFactory()
export const headerWithLeftSidebarSelectAvatar = () => headerWithLeftSidebarSelectAvatarRaw() as MergeCustomStore<typeof headerWithLeftSidebarSelectAvatarStoreCustom.instance>
