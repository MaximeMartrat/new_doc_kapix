import { ref } from 'vue'
import type { Ref } from 'vue'

// Référence pour l'index du bouton survolé
const isButtonHovered: Ref<number> = ref(-1)
// Référence pour un tableau de booléens pour chaque liste survolée ou non
const isListHovered: Ref<boolean[]> = ref([])
// Référence pour l'index du bouton cliqué
const isButtonClicked = ref(-1)
// Référence pour stocker l'index du bouton supprimé après avoir été cliqué
const clickedRemove = ref(-1)

// Fonction pour afficher la liste d'un index donné
export function showList (index: number) {
  // Vérifier si liste n'est pas déjà survolée
  if (!isListHovered.value[index]) {
    // Maj de la référence pour l'index du bouton survolé
    isButtonHovered.value = index
    // Maj du tableau de booléens pour dir si la liste est survolée
    isListHovered.value[index] = true
    // Maj de la référence pour dir l'index du bouton cliqué
    isButtonClicked.value = index
    // Réinitialiser la référence si aucun bouton n'a été supprimé après avoir été cliqué
    clickedRemove.value = -1
  }
  else {
    // Si liste est déjà survolée, masquer la liste et effectuer les maj
    hideList(index)
    // Réinitialiser la référence si aucun bouton cliqué
    isButtonClicked.value = -1
    // Maj de la référence pour indiquer l'index du bouton supprimé après avoir été cliqué
    clickedRemove.value = index
  }
}

// Fonction pour masquer la liste associée à un index donné
export function hideList (index: number) {
  // Réinitialiser la valeur de la référence pour indiquer qu'aucun bouton n'est survolé (-1)
  isButtonHovered.value = -1

  // Maj du tableau de booléens si la liste n'est plus survolée
  isListHovered.value[index] = false
}

// Export des références
export { clickedRemove, isButtonHovered, isListHovered, isButtonClicked }
