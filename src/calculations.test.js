import { abilityScoreMod, charLvlXp } from './calculations';

it('returns ability score modifier', () => {
  const result = abilityScoreMod(22);
  expect(result).toEqual(6);
})

const expected = {
  xp: 48000,
  prof_bonus: 4
}

it('looks up xp and prof bonus', () => {
  const result = charLvlXp(9);
  expect(result).toMatchObject(expected);
})
