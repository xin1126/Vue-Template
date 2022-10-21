<script lang="ts" setup>
import useCounterStore from '../store/count'

const counter = useCounterStore()
const { count } = storeToRefs(counter)
const { setCount } = counter
</script>

<template>
  {{ count }}
  <button @click="setCount">
    add
  </button>
  <router-view />
</template>
