<template>
  <main container m-auto font-sans p="4" text="center gray-700 dark:gray-200">
    <AppMenuBar />
    <router-view />
    <Footer />
  </main>
</template>

<script lang="ts" setup>
import lightTheme from 'primevue/resources/themes/bootstrap4-light-purple/theme.css'
import darkTheme from 'primevue/resources/themes/bootstrap4-dark-purple/theme.css'
import { isDark } from '~/composables'

const themeEle = document.createElement('style')
themeEle.textContent = isDark.value ? darkTheme : lightTheme
document.head.append(themeEle)
watch(isDark, (isNewValDark) => {
  themeEle.textContent = isNewValDark ? darkTheme : lightTheme
})
</script>
