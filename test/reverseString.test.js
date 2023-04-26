import { reverseString } from "../modules/reverseString"

test('reverses string', () => {
  expect(reverseString('coding! at suck I')).toBe('I suck at coding!')
})