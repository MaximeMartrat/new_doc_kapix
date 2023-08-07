<template>
  <button
    :class="icone"
    @click="changeTheme">
  </button>
</template>
<script setup lang="ts">
import { changeTheme, icone } from './store'
import './style.scss'
</script>
