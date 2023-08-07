import { ref } from 'vue'

// Référence pour l'activation du composant de recherche
const isActive = ref(false)
// Référence pour la fermeture du composant de recherche
const isClosing = ref(false)

// Fonction pour afficher le composant de recherche
export function displaySearch () {
  // Maj de la référence pour le composant actif
  isActive.value = true
  // Réinitialiser la référence quand le composant de recherche n'est pas fermé
  isClosing.value = false
}

// Fonction pour cacher le composant de recherche avec une transition
export function hideDisplaySearch () {
  // Maj de la référence quand le composant de recherche se ferme
  isClosing.value = true
  // setTimeout pour attendre la fin de la transition
  setTimeout(() => {
    // Maj de la référence quand le composant de recherche n'est plus actif
    isActive.value = false
    // Réinitialiser la référence quand le composant de recherche n'est pas en cours de fermeture
    isClosing.value = false
  }, 400)
}

// Export des références
export { isActive, isClosing }

