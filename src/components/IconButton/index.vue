<template>
  <button
    class="button-icon"
    :style="buttonStyle"
    :href="href"
    @click="navigate(href)"
  >
    <div
      class="icon-button"
      :class="icon"
      :style="iconStyle">
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '/'
  },
  icon: {
    type: String,
    default: 'i-fa-regular-smile'
  },
  size: {
    type: Number,
    default: 40
  },
  radius: {
    type: Number,
    default: 100
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  background: {
    type: String,
    default: 'currentBackground'
  }
})
const iconStyle = computed(() => {
  const { size } = props
  const sizeInPx = `${size / 2}px`
  return {
    minWidth: sizeInPx,
    width: sizeInPx,
    height: sizeInPx,
    fontSize: sizeInPx
  }
})
const buttonStyle = computed(() => {
  const { size } = props
  const { color } = props
  const { radius } = props
  const { background } = props
  const radiusInPx = `${radius}px`
  const sizeInPx = `${size}px`
  return {
    minWidth: sizeInPx,
    width: sizeInPx,
    height: sizeInPx,
    fontSize: sizeInPx,
    color,
    borderColor: color,
    borderRadius: radiusInPx,
    backgroundColor: background
  }
})
const navigate = function(href) {
  window.location.href = href
}
</script>
<style>
.button-icon{
  border: 1px solid black;
}
.icon-button{
  margin: auto;
}
.icon-container{
}
</style>
