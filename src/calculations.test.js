import { abilityScoreMod, charAdvancement } from './calculations';

it('returns ability score modifier', () => {
  const result = abilityScoreMod(22);
  expect(result).toEqual(6);
})

const expected = {
  level: 6,
  prof_bonus: 3
}

it('calculates level and prof bonus', () => {
  const result = charAdvancement(14000);
  expect(result).toMatchObject(expected);
})
