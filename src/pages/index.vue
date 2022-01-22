<script setup lang="ts">
const router = useRouter()
const go = (path: string) => {
  if (path)
    router.push(path)
}
</script>

<template>
  <div p-4>
    <PrimeButton class="p-button-raised p-button-text" @click="go('/ishgard-calculator')">
      <div>
        <img m-2 rounded w-320px src="/ishgard-restore-cover.jpg">
        <div text-2xl font-bold>
          重建伊修加德原料计算器
        </div>
      </div>
    </PrimeButton>
  </div>
</template>
