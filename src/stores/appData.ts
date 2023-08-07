import type { CustomStoreImplementationOptions, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, toResponsiveTheme } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import appDataStoreStoreCustom from './appData.custom'
import appInfo from '~/app-info.json'

const storeName = 'appData'
const customImplement: CustomStoreImplementationOptions = appDataStoreStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function appDataStoreFactory (storeId?: Nullable<StoreIdentifier>) {
  return defineStore(storeId == null ? storeName : `${storeName}/${storeId}`, {
    state: () => {
      return {
        $aliveStoreIds: aliveStoreIds,
        $subStoreIds: 1,
        $storeId: storeId,
        title: 'Kapix Components Preview',
        icon: 'work',
        name: 'kapixcomponentspreview',
        owner: 'sparda',
        version: 'master',
        copyright: 'copyright © 2022',
        languages: [
          { code: 'fr-FR' },
          {
            default: true,
            code: 'en-US'
          },
          { code: 'en-AU' },
          { code: 'ar-DZ' },
          { code: 'de-DE' },
          { code: 'es-PE' },
          { code: 'ja-JP' }
        ],
        website: {
          name: 'Kapix Components Preview',
          description: 'Kapix Starter Template',
          image: 'https://www.studio.kapix.fr/img/icons/android-chrome-512x512.png'
        },
        pwa: {
          name: 'Kapix Components Preview',
          shortName: 'Kapix Components Preview',
          startUrl: './',
          themeColor: '#ffffff',
          backgroundColor: '#ffffff'
        },
        rawTheme: {
          fontColor: '#222222',
          fontSize: '18px',
          fontFamily: 'Work Sans,sans-serif',
          focusColor: '#FFFFFFFF',
          primaryColor: '#42A5F5',
          secondaryColor: '#ffc107',
          focusBackgroundColor: '#222222',
          backgroundColor: null,
          backgroundImage: null,
          fontColor2: '#000000FF',
          fontFamily2: 'Work Sans,sans-serif',
          backgroundColor2: '#FFFFFF',
          buttonColor: '#FF0000FF',
          buttonColor2: null,
          fontHyperlinkColor: '#8AB4F8',
          fontVisitedHyperlinkColor: '#C58AF9',
          buttonBackgroundColor: '#FFFFFF',
          buttonBackgroundColor2: '#000000'
        },
        hostname: appInfo.hostname,
        twitter: appInfo.twitter as any,
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      theme: (state) => {
        return toResponsiveTheme(state.rawTheme)
      },
      /* @ts-ignore: to allow override in your custom file */
      locale: () => {
        const i18n = useI18n()
        return computed(() => i18n.locale.value)
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
      ...customImplement.actions
    }
  })
}

function getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
  return appDataStoreFactory(storeId)()
}

export const appDataStoreRaw = appDataStoreFactory()
export const appDataStore = () => appDataStoreRaw() as MergeCustomStore<typeof appDataStoreStoreCustom.instance>
