import type { WritableComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo, remove } from 'kapix-components-vue3'
import headerWithLeftSidebarToggleButtonsStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarToggleButtons'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarToggleButtonsStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarToggleButtonsFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('toggle-buttons.title', 'ToggleButtons'),
        $description: $translate('toggle-buttons.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-12T15:18:10.846Z'),
        // Constants,
        $constants: {
          choixAvecBoutonsItems: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          choixAvecBoutonsToggleButtonItems: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          choixAvecBoutons1Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          choixAvecBoutons2Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          choixAvecBoutons3Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: 'RIGHT',
              value: 'RIGHT',
              description: 'RIGHT',
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'JUSTIFY',
              value: 'JUSTIFY',
              description: 'JUSTIFY',
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          choixAvecBoutons4Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: 'RIGHT',
              value: 'RIGHT',
              description: 'RIGHT',
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: 'JUSTIFY',
              value: 'JUSTIFY',
              description: 'JUSTIFY',
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          mandatoryToggleButtonItems: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          multipleToggleButtonItems: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          roundedToggleButtonItems: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ]
        },
        // Data,
        $inputs: {
          choixAvecBoutons: 'Align left',
          choixAvecBoutonsToggleButton: 'Align left',
          choixAvecBoutons1: 'Align left',
          choixAvecBoutons2: 'Align left',
          choixAvecBoutons3: 'Align left',
          choixAvecBoutons4: 'Align left',
          mandatoryToggleButton: 'Align left',
          multipleToggleButton: 'Align left',
          roundedToggleButton: 'edit'
        },
        $info: { toggleButtons: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your custom file */
      choixAvecBoutons (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixAvecBoutons,
          set: (value) => {
            this.$inputs.choixAvecBoutons = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      choixAvecBoutonsToggleButton (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixAvecBoutonsToggleButton,
          set: (value) => {
            this.$inputs.choixAvecBoutonsToggleButton = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      choixAvecBoutons1 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixAvecBoutons1,
          set: (value) => {
            this.$inputs.choixAvecBoutons1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      choixAvecBoutons2 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixAvecBoutons2,
          set: (value) => {
            this.$inputs.choixAvecBoutons2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      choixAvecBoutons3 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixAvecBoutons3,
          set: (value) => {
            this.$inputs.choixAvecBoutons3 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      choixAvecBoutons4 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixAvecBoutons4,
          set: (value) => {
            this.$inputs.choixAvecBoutons4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      mandatoryToggleButton (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.mandatoryToggleButton,
          set: (value) => {
            this.$inputs.mandatoryToggleButton = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      multipleToggleButton (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.multipleToggleButton,
          set: (value) => {
            this.$inputs.multipleToggleButton = value
          }
        })
      },
      /* @ts-ignore: to allow override in your custom file */
      roundedToggleButton (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.roundedToggleButton,
          set: (value) => {
            this.$inputs.roundedToggleButton = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your custom file */
      async titreTextClick () {
        await navigateTo({ hash: '#utilisation--p7' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre1Click () {
        await navigateTo({ hash: '#api--p7' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async titre2Click () {
        await navigateTo({ hash: '#example--p7' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreClick () {
        await navigateTo({ hash: '#props--p7' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitreTextClick () {
        await navigateTo({ hash: '#mandatory-container--p7' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre1Click () {
        await navigateTo({ hash: '#multiple-container--p7' })
      },
      /* @ts-ignore: to allow override in your custom file */
      async sousTitre2Click () {
        await navigateTo({ hash: '#rounded--p7' })
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
  return headerWithLeftSidebarToggleButtonsFactory(storeId)()
}

export const headerWithLeftSidebarToggleButtonsRaw = headerWithLeftSidebarToggleButtonsFactory()
export const headerWithLeftSidebarToggleButtons = () => headerWithLeftSidebarToggleButtonsRaw() as MergeCustomStore<typeof headerWithLeftSidebarToggleButtonsStoreCustom.instance>
