
import { toUpperCase } from "../modules/capitalize";

test('Capitalize string', () => {
  expect(toUpperCase('i am very hungry right now!!')).toBe('I AM VERY HUNGRY RIGHT NOW!!')
})