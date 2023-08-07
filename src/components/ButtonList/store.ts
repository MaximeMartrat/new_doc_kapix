import './style.scss'
import { ref } from 'vue'

export const Link = ref('accueil')

export function checkLink (link: string) {
  Link.value = link
}
