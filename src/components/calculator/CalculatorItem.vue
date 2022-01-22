<script setup lang="ts">
import { jobRef } from '~/data/ishgard'

interface Props {
  job?: number // from jobRef
  from?: number // 20 - 79
  to?: number // 21 - 80
  existing?: number
  recipeLevel?: 20 | 40 | 60 | 70 // 20 40 60 70
  rewardLevel?: number // 0 1 2\
  icon?: string
  enableDelete?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  job: 0,
  from: 19,
  to: 39,
  existing: 0,
  recipeLevel: 20,
  rewardLevel: 2,
})

const job = ref(props.job)
const from = ref(props.from)
const to = ref(props.to)
const existing = ref(props.existing)
const recipeLevel = ref(props.recipeLevel)
const rewardLevel = ref(props.rewardLevel)
const emits = defineEmits<{
  (e: 'update:job', value: any): void
  (e: 'update:from', value: any): void
  (e: 'update:to', value: any): void
  (e: 'update:existing', value: any): void
  (e: 'update:recipeLevel', value: any): void
  (e: 'update:rewardLevel', value: any): void
  (e: 'action', value: any): void
  (e: 'delete', value: any): void
}>()

const jobIdx = Array.from(jobRef.keys()).map(it => it + 1)

function pack() {
  return {
    job: unref(job),
    from: unref(from),
    to: unref(to),
    existing: unref(existing),
    recipeLevel: unref(recipeLevel),
    rewardLevel: unref(rewardLevel),
  }
}
</script>

<template>
  <div m-auto pt-28px class="space-x-2">
    <div inline-block class="p-float-label field">
      <PrimeDropdown
        w-36
        text-left
        :model-value="job + 1"
        :options="jobIdx"
        @update:model-value="job = $event as any - 1; emits('update:job', $event as any - 1)"
      >
        <template #value="slotProps">
          <div v-if="slotProps.value >= 0" class="p-dropdown-car-value">
            <span>{{ jobRef[slotProps.value - 1] }}</span>
          </div>
        </template>
        <template #option="slotProps">
          <div class="p-dropdown-car-option">
            <span>{{ jobRef[slotProps.option - 1] }}</span>
          </div>
        </template>
      </PrimeDropdown>
      <label>职业</label>
    </div>
    <div inline-block class="p-float-label field">
      <PrimeInputNumber
        :model-value="from + 1"
        w-20
        mode="decimal"
        show-buttons
        :min="1"
        :max="79"
        @update:model-value="from = $event - 1; emits('update:from', $event - 1)"
      />
      <label>起始级别</label>
    </div>
    <div inline-block class="p-float-label field">
      <PrimeInputNumber
        :model-value="to + 1"
        w-20
        mode="decimal"
        show-buttons
        :min="2"
        :max="80"
        @update:model-value="to = $event - 1; emits('update:to', $event - 1)"
      />
      <label>目标级别</label>
    </div>
    <div inline-block class="p-float-label field">
      <PrimeInputNumber
        :model-value="existing"
        :use-grouping="false"
        mode="decimal"
        @update:model-value="existing = $event; emits('update:existing', $event)"
      />
      <label>已有经验</label>
    </div>
    <div inline-block class="p-float-label field">
      <PrimeDropdown
        w-24
        text-left
        :options="[20, 40, 60, 70]"
        :model-value="recipeLevel"
        @update:model-value="recipeLevel = $event as any; emits('update:recipeLevel', $event)"
      />
      <label>配方级别</label>
    </div>
    <div inline-block class="p-float-label field">
      <PrimeDropdown
        w-20
        text-left
        :options="[1, 2, 3]"
        :model-value="rewardLevel + 1"
        @update:model-value="rewardLevel = $event as any - 1; emits('update:rewardLevel', $event as any - 1)"
      />
      <label>奖励档级</label>
    </div>
    <PrimeButton v-if="props.icon" inline-block @click="emits('action', pack())">
      <i v-if="props.icon === 'plus'" class="pi pi-fw pi-plus" />
      <i v-if="props.icon === 'copy'" class="pi pi-fw pi-copy" />
    </PrimeButton>
    <PrimeButton v-if="props.enableDelete" class="p-button-danger" inline-block @click="emits('delete', pack())">
      <i class="pi pi-fw pi-trash" />
    </PrimeButton>
  </div>
</template>
