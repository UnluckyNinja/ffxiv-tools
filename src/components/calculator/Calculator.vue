<script setup lang="ts">
import CalculatorItem from './CalculatorItem.vue'
import MaterialTable from './MaterialTable.vue'
import { totalExp } from '~/data/leveling'
import { recipe, recipe_exp } from '~/data/ishgard'
interface Item {
  job: number
  from: number
  to: number
  existing: number
  recipeLevel: 20 | 40 | 60 | 70
  rewardLevel: number
  symbol: symbol
}

const list = ref<Item[]>([])

function add(item: Item) {
  list.value.push({ ...item, symbol: Symbol('item') })
}
function mergeObj(A: any, B: any) {
  return Object.keys(A).reduce((obj, k) => {
    obj[k] = (obj[k] || 0) + A[k]
    return obj
  }, Object.assign({}, B))
}

const turnInTimes = computed(() => {
  return list.value.map((item) => {
    const neededExp = totalExp(item.from, item.to, item.existing)
    const turnInExp = recipe_exp[item.recipeLevel][item.rewardLevel]
    return Math.ceil(neededExp / turnInExp)
  })
})

function calcMaterial(item: Item) {
  const neededExp = totalExp(item.from, item.to, item.existing)
  const turnInExp = recipe_exp[item.recipeLevel][item.rewardLevel]
  const times = Math.ceil(neededExp / turnInExp)
  const material = recipe.filter((it) => {
    return it.job === item.job
      && it.level === item.recipeLevel
  }).map((it) => {
    return {
      [it.material]: it.count * times,
    }
  }).reduce((a, b) => mergeObj(a, b), {})

  return material
}

const allMaterial = computed(() => {
  const mlist = list.value.map((it) => {
    return calcMaterial(it)
  }).reduce((a, b) => mergeObj(a, b), {})
  return Object.entries(mlist).map(([key, value]) => {
    return {
      name: key,
      count: value,
    }
  })
})

</script>

<template>
  <div>
    <CalculatorItem m-auto icon="plus" @action="add" />
    <PrimeFieldset mt-8 legend="已添加">
      <div
        v-for="item,i in list"
        :key="item.symbol"
        grid grid-cols-11
        place-items-center
      >
        <CalculatorItem
          v-model:job="item.job"
          v-model:from="item.from"
          v-model:to="item.to"
          v-model:recipe-level="item.recipeLevel"
          v-model:reward-level="item.rewardLevel"
          class="col-start-2"
          col-span-8
          inline-block
          m-auto
          :enable-delete="true"
          @delete="list.splice(i, 1)"
        />
        <div
          col-span-1 inline-block pt-28px
        >
          需提交{{ turnInTimes[i] }}次
        </div>
      </div>
    </PrimeFieldset>
    <PrimeFieldset mt-8 legend="原料">
      <MaterialTable v-if="list.length > 0" inline-block m-auto :data="(allMaterial as any)" />
    </PrimeFieldset>
  </div>
</template>
