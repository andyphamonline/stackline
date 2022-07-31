import { GRAPH_MONTHS_LABELS } from "../../../shared/constants"

export const getMonthLabels = sales => {
  const weeksPerMonth = []
  let monthLabels = []

  sales.forEach(sale => {
    const dashIndex = sale.weekEnding.indexOf('-')
    const curMonth = parseInt(sale.weekEnding.slice(dashIndex + 1, dashIndex + 3)) - 1
    weeksPerMonth[curMonth] ? weeksPerMonth[curMonth]++ : weeksPerMonth[curMonth] = 1
  })

  weeksPerMonth.forEach((weeks, idx) => {
    const weeksLabel = Array(weeks).fill('')
    weeksLabel[0] = GRAPH_MONTHS_LABELS[idx]
    monthLabels = monthLabels.concat(weeksLabel)
  })

  return monthLabels
}

