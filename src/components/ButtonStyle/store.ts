import { ref } from 'vue'

const theme = ref('light')
const icone = ref('i-fa-moon-o')
export function changeTheme () {
  if (theme.value === 'light' && icone.value === 'i-fa-moon-o') {
    theme.value = 'dark'
    icone.value = 'i-fa-sun-o'
  }
  else {
    theme.value = 'light'
    icone.value = 'i-fa-moon-o'
  }
}
export { theme, icone }
