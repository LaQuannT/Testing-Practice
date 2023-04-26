import { analyzeArray } from "../modules/analyzeArray"

test('returns avg of array sum', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4)
})
test('returns min number from array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1)
})
test('returns min number from array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8)
})
test('returns length of array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6)
})

test('returns object with avg, min, max, length', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})