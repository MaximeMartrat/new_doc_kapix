<template>
  <div class="main-container-confidential">
    <h1 class="main-title-confidential">
      Politique de Confidentialité
    </h1>
    <div>
      <nav class="nav-confidential">
        <router-link
          class="nav-link-confidential"
          to="/Politiques/Mentions">
          Mentions
        </router-link>
        <router-link
          class="nav-link-confidential"
          to="/Politiques/Confidentialite">
          Confidentialité
        </router-link>
        <router-link
          class="nav-link-confidential"
          to="/Politiques/RGPD">
          RGPD
        </router-link>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
</script>
