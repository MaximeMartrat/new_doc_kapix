<template>
  <div
    :class="theme"
    class="navtop">
    <div class="navhead">
      <ButtonLogo class="logo"></ButtonLogo>
      <ButtonSearch></ButtonSearch>
    </div>
    <nav>
      <ul class="navlist">
        <li>
          <ButtonNav
            class="nav-button"
            :index="0"
            text="Start"
            action="link"
            page="pages">
          </ButtonNav>
        </li>
        <li>
          <ButtonNav
            class="nav-button"
            :index="1"
            text="Composants"
            action="link"
            page="composants">
          </ButtonNav>
        </li>
        <li>
          <ButtonNav
            class="nav-button"
            text="redirect"
            action="navigate">
          </ButtonNav>
        </li>
        <li></li>
      </ul>
      <ul class="toolist">
        <li><ButtonStyle></ButtonStyle></li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'

</script>
