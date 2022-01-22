<script setup lang="ts">
const menuOptions = ref([{
  label: '重建伊修加德原料计算器',
  icon: 'pi pi-fw pi-percentage',
  to: '/ishgard-calculator',
}])
</script>

<template>
  <PrimeMenubar :model="menuOptions">
    <template #start>
      <router-link to="/">
        <PrimeButton class="p-button-rounded p-button-text">
          <i class="pi pi-home !text-2xl" />
        </PrimeButton>
      </router-link>
    </template>
  </PrimeMenubar>
</template>
