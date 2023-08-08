<template>
  <div v-if="image">
    <img
      class="image-component"
      :src="getImageSrc(link)"
      @click="checkLink(link)"
    />
    <button
      :class="theme"
      @click="checkLink(link)">
      {{ link }}
    </button>
  </div>
  <div
    v-else>
    <button
      :class="theme"
      @click="checkLink(link)">
      {{ link }}
    </button>
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import { checkLink } from './store'
import { theme } from '~/components/ButtonStyle/store'

// Fonction pour obtenir le chemin de l'image à afficher
function getImageSrc (link: any) {
  const imagePath = `/public/${link}.png`
  const defaultImagePath = '/public/work-in-progress.png'
  const xhr = new XMLHttpRequest()
  xhr.open('HEAD', imagePath.toLowerCase(), false)
  xhr.send()

  if (xhr.status === 404) {
    return defaultImagePath
  }
  else {
    return imagePath
  }
}

defineProps({
  link: {
    type: String,
    default: 'accueil'
  },
  image: {
    type: String,
    default: ''
  }
})

</script>

