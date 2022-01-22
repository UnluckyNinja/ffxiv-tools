const level_exp = [
  300,
  600,
  1100,
  1700,
  2300,
  4200,
  6000,
  7350,
  9930,
  11800,
  15600,
  19600,
  23700,
  26400,
  30500,
  35400,
  40500,
  45700,
  51000,
  56600,
  63900,
  71400,
  79100,
  87100,
  95200,
  109800,
  124800,
  140200,
  155900,
  162500,
  175900,
  189600,
  203500,
  217900,
  232320,
  249900,
  267800,
  286200,
  304900,
  324000,
  340200,
  356800,
  373700,
  390800,
  408200,
  437600,
  467500,
  498000,
  529000,
  864000,
  1058400,
  1267200,
  1555200,
  1872000,
  2217600,
  2592000,
  2995200,
  3427200,
  3888000,
  4470000,
  4873000,
  5316000,
  5809000,
  6364000,
  6995000,
  7722000,
  8575000,
  9593000,
  10826000,
  12449000,
  13881000,
  15556000,
  17498600,
  19750000,
  22330000,
  25340000,
  28650000,
  32750000,
  37650000,
]

/**
 * calculate total exp needed to level from a level to another
 * @param from 0~78
 * @param to 1~79
 * @param existing to deduct from total
 */
function totalExp(from: number, to: number, existing = 0) {
  if (from === to) return 0
  const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)
  return sum(level_exp.slice(from, to)) - existing
}

export { level_exp, totalExp }
