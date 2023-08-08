<template>
  <div
    :class="theme"
    class="accueil-container">
    <div class="container-logo">
      <logo class="img-accueil"></logo>
      <h1 class="big-title">
        Kapix Documentation
      </h1>
    </div>
    <div class="start-navigation-container">
      <ButtonNav class="start-button"></ButtonNav>
      <ButtonNav class="start-button"></ButtonNav>
      <ButtonNav class="start-button"></ButtonNav>
    </div>
    <div class="start-footer-container">
      <img
        class="image-footer"
        src="/public/kapix.png">
      <IconButton
        class="social-icon"
        icon="i-bi-instagram"
        color="white"
        background="black"
        href="https://www.instagram.com/kapix.studio/?igshid=MjEwN2IyYWYwYw%3D%3D"
      ></IconButton>
      <IconButton
        class="social-icon"
        icon="i-bi-linkedin"
        color="white"
        background="black"
        href="https://www.linkedin.com/company/kapix-app/"
      ></IconButton>
      <IconButton
        class="social-icon"
        icon="i-bi-tiktok"
        color="white"
        background="black"
        href="https://www.tiktok.com/@kapix.studio?_t=8dKQQeFwZC7&_r=1"
      ></IconButton>
      <IconButton
        class="social-icon"
        icon="i-bi-youtube"
        color="white"
        background="black"
        href="https://www.youtube.com/channel/UCVsIPVo3HzTgXNzBlr5lYMQ/featured"
      ></IconButton>
      <div class="footer-end-link">
        <p>© 2023 Sparda SAS Tous droits réservés</p>
        <p><span><a href="/Politiques">Politiques de confidentialité</a></span>.<span><a>Termes et conditions</a></span></p>
      </div>
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
import { theme } from '~/components/ButtonStyle/store'
</script>

