<template>
  <div v-if="image">
    <img
      class="image-component"
      :src="`/public/work-in-progress.png`"
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

