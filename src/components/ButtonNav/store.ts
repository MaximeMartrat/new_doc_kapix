import { ref } from 'vue'
import type { Ref } from 'vue'

// Référence pour stocker l'index du bouton survolé
const isButtonHovered: Ref<number> = ref(-1)
// Référence pour stocker un tableau de booléens indiquant quelle liste est survolée
const isListHovered: Ref<boolean[]> = ref([])
// Fonction pour afficher la liste d'un index donné
export function showList (index: number) {
  // Maj de la référence pour l'index du bouton survolé
  isButtonHovered.value = index
  // Maj du tableau de booléens pour dire que la liste est survolée
  isListHovered.value[index] = true
}

// Fonction pour cacher la liste associée à un index donné
export function hideList (index: number) {
  // Réinitialiser la référence
  isButtonHovered.value = -1
  // Maj du tableau de booléens pour dire que la liste n'est plus survolée
  isListHovered.value[index] = false
}

// Export des références
export { isButtonHovered, isListHovered }
