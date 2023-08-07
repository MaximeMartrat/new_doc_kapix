<template>
  <nav
    :class="theme"
    class="navleft">
    <div
      class="navleftlist"
      :class="theme">
      <ButtonNavLeft
        :index="0"
        text="Start"
        action="link"
        page="pages">
      </ButtonNavLeft>
      <ButtonNavLeft
        :index="1"
        text="Composants"
        action="link"
        page="composants">
      </ButtonNavLeft>
      <ButtonNavLeft
        :index="2"
        text="Composants"
        action="link"
        page="composants">
      </ButtonNavLeft>
    </div>
  </nav>
</template>
<script setup lang="ts">
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'

</script>
