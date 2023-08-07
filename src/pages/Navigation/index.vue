<template>
  <div
    :class="theme"
  >
    <Contenu></Contenu>
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

import { theme } from '~/components/ButtonStyle/store'
defineOptions({
  name: 'HomePage'
})

</script>
