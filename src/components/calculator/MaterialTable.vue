<script setup lang="ts">
import { materialRef } from '~/data/ishgard'

const props = defineProps<{
  data: {
    name: number
    count: number
  }[]
}>()
const bought = ref({} as any)

</script>

1<template>
  <PrimeDataTable :value="props.data" responsive-layout="scroll" :auto-layout="true">
    <PrimeColumn field="name" header="原料">
      <template #body="slotProps">
        {{ materialRef[slotProps.data.name] }}
      </template>
    </PrimeColumn>
    <PrimeColumn field="count" header="数量">
      <template #body="slotProps">
        {{ slotProps.data.count }}
      </template>
    </PrimeColumn>
    <PrimeColumn field="mark" header="临时标记">
      <template #body="slotProps">
        <PrimeCheckbox v-model="bought[slotProps.data.name]" :binary="true" />
      </template>
    </PrimeColumn>
  </PrimeDataTable>
</template>
