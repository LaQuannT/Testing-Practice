import { caesarCipher } from "../modules/caesarCipher"

test('returns ciphertext', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza')
})

test('returns ciphertext', () => {
  expect(caesarCipher('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})
