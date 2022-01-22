<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <a
      class="icon-btn"
      href="https://unlucky.ninja/"
      mr-4
      target="_blank"
      text-base
      title="Personal site"
    >© UnluckyNinja</a>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>
    <a
      class="icon-btn"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/UnluckyNinja/ffxiv-tools"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
