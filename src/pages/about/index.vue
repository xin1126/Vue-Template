<script lang="ts" setup>
import useCounterStore from '@/store/count'

const counter = useCounterStore()
const { count } = storeToRefs(counter)
</script>

<template>
  <div class="flex justify-center">
    <AddCount class="mr-2" />
    <ReduceCount />
  </div>
  <p class="relative -top-32 text-center text-3xl">
    {{ count }}
  </p>
</template>
