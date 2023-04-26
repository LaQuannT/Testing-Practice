export const analyzeArray = (array) => {
  const average = array.reduce((prev, current) => current + prev, 0) / array.length
  const min = Math.min(...array)
  const max = Math.max(...array)
  const length = array.length
  return { average, min, max, length}
} 