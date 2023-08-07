<template>
  <div class="pagination">
    <button
      v-if="composants[currentPageIndex - 1]"
      class="previous"
      :disabled="!hasPrevious"
      @click="goToPreviousComposant">
      <i class="i-fa-solid-chevron-left" /><span>{{ composants[currentPageIndex - 1] }}</span>
    </button>
    <button
      v-if="composants[currentPageIndex + 1]"
      class="next"
      :disabled="!hasNext"
      @click="goToNextComposant">
      <span>{{ composants[currentPageIndex + 1] }}</span><i class="i-fa-solid-chevron-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import { ref, watch } from 'vue'
import type { PropType } from 'vue'

const emit = defineEmits(['change-composant'])
// importattion du router
const router = useRouter()
// récupération de toutes les pages
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
const exceptionsPage = ['all', 'index']
// filtre pour ignorer les pages inutiles
const pageLocales = ['en-US', 'fr-FR', 'en-AU', 'ja-JP', 'es-PE', 'de-DE', 'ar-DZ']
const pages = allPages.map(page => page?.toString()).sort().filter(page => page !== undefined && !pageLocales.some(locale => page.endsWith(locale)) && !exceptionsPage.includes(page as string))

// pages de composants
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants')).map(page => page?.replace('composants-', ''))

const props = defineProps({
  currentComposant: {
    type: String as PropType<string>,
    required: true
  }
})
// Déclaration des ref pour currentPageIndex, hasPrevious, hasNext
const currentPageIndex = ref(composants.indexOf(props.currentComposant))
const hasPrevious = ref(currentPageIndex.value > 0)
const hasNext = ref(currentPageIndex.value < composants.length - 1)

// Surveiller les changements de currentComposant
watch(() => props.currentComposant, (newComposant) => {
  // Maj de currentPageIndex avec l'index du nouveau composant
  currentPageIndex.value = composants.indexOf(newComposant)
  // Maj de hasPrevious et hasNext en fonction de currentPageIndex
  hasPrevious.value = currentPageIndex.value > 0
  hasNext.value = currentPageIndex.value < composants.length - 1
})

// Fonction pour passer au composant précédent
const goToPreviousComposant = () => {
  if (hasPrevious.value) {
    // nom du composant précédent à partir du tableau composants
    const previousComposant = composants[currentPageIndex.value - 1]
    // événement pour le changement de composant
    emit('change-composant', previousComposant)
  }
}

// Fonction pour passer au composant suivant
const goToNextComposant = () => {
  if (hasNext.value) {
    // nom du composant suivant à partir du tableau composants
    const nextComposant = composants[currentPageIndex.value + 1]
    // événement pour le changement de composant
    emit('change-composant', nextComposant)
  }
}

</script>
