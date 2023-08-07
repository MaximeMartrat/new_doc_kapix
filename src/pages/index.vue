<template>
  <div class="accueil-container">
    <div>
      <logo class="img-accueil"></logo>
    </div>
    <h1 class="big-title">
      Kapix Documentation
    </h1>
    <div class="start-navigation-container">
      <ButtonNav class="start-button"></ButtonNav>
      <ButtonNav class="start-button"></ButtonNav>
      <ButtonNav class="start-button"></ButtonNav>
    </div>
  </div>
</template>
<route>
  {
    "meta": {
      "layout": "Header"
    }
  }
</route>
<script setup lang="ts">
import './Index/style.scss'
</script>

