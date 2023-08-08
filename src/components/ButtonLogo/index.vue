<template>
  <button
    class="buttonLogo"
    @click="goHome">
    <Logo /><img
      class="image-text"
      src="/public/kapix.png">
  </button>
</template>

<script setup lang="ts">
import './style.scss'
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome () {
  router.push('/')
}
</script>
