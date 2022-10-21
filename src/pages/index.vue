<script lang="ts" setup>
const test = ref(0)
</script>

<template>
  <p @click="test++">
    Hello world!
  </p>
  {{ count }}
  {{ test }}
</template>
