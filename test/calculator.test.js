import { calculator } from "../modules/calculator"

test('adds two number positive numbers together', () => {
  expect(calculator.add(36, 6)).toBe(42)
})

test('adds two number negative numbers together', () => {
  expect(calculator.add(-2, -6)).toBe(-8)
})

test('adds float and int together', () => {
  expect(calculator.add(7.5, 9.2)).toBeCloseTo(16.7)
})

test('subtracts two positive numbers', () => {
  expect(calculator.subtract(5, 6)).toBe(-1)
})

test('subtracts two negative numbers', () => {
  expect(calculator.subtract(-3, -10)).toBe(7)
})

test('subtracts a float and int', () => {
  expect(calculator.subtract(7.5, 6)).toBeCloseTo(1.5)
})

test('divides two numbers', () => {
  expect(calculator.divide(3, 3)).toBe(1)
})

test('divides two numbers', () => {
  expect(calculator.divide(-40, 5)).toBe(-8)
})

test('multiplies two numbers', () => {
  expect(calculator.multiply(-12,12)).toBe(-144)
})

test('multiplies two numbers', () => {
  expect(calculator.multiply(6,10)).toBe(60)
})