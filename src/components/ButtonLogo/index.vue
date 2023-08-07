<template>
  <button
    class="buttonLogo"
    @click="goHome">
    <Logo /><p>KAPIX</p>
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
