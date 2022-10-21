<script lang="ts" setup>
import useCounterStore from '@/store/count'

const counter = useCounterStore()
const { count } = storeToRefs(counter)
const { reduceCount } = counter
</script>

<template>
  <div class="text-center">
    <Button
      class="mb-2 w-[100px]"
      color="danger"
      @click="reduceCount"
    >
      reduce
    </Button>
  </div>
</template>
