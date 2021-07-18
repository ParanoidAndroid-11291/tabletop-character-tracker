//imports
import _ from 'lodash';
//interfaces

//objects
const xpLvlObj = [
  {
    xp: 0,
    level: 1,
    prof_bonus: 2
  },
  {
    xp: 300,
    level: 2,
    prof_bonus: 2
  },
  {
    xp: 900,
    level: 3,
    prof_bonus: 2
  },
  {
    xp: 2700,
    level: 4,
    prof_bonus: 2
  },
  {
    xp: 6500,
    level: 5,
    prof_bonus: 3
  },
  {
    xp: 14000,
    level: 6,
    prof_bonus: 3
  },
  {
    xp: 23000,
    level: 7,
    prof_bonus: 3
  },
  {
    xp: 34000,
    level: 8,
    prof_bonus: 3
  },
  {
    xp: 48000,
    level: 9,
    prof_bonus: 4
  },
  {
    xp: 64000,
    level: 10,
    prof_bonus: 4
  },
  {
    xp: 85000,
    level: 11,
    prof_bonus: 4
  },
  {
    xp: 100000,
    level: 12,
    prof_bonus: 4
  },
  {
    xp: 120000,
    level: 13,
    prof_bonus: 5
  },
  {
    xp: 140000,
    level: 14,
    prof_bonus: 5
  },
  {
    xp: 165000,
    level: 15,
    prof_bonus: 5
  },
  {
    xp: 195000,
    level: 16,
    prof_bonus: 5
  },
  {
    xp: 225000,
    level: 17,
    prof_bonus: 6
  },
  {
    xp: 265000,
    level: 18,
    prof_bonus: 6
  },
  {
    xp: 305000,
    level: 19,
    prof_bonus: 6
  },
  {
    xp: 355000,
    level: 20,
    prof_bonus: 6
  }
];

//functions
export const abilityScoreMod = (score: number) => {
  if (score == 30) { return 10 };
  if (score == 29 || score == 28) { return 9 };
  if (score == 27 || score == 26) { return 8 };
  if (score == 25 || score == 24) { return 7 };
  if (score == 23 || score == 22) { return 6 };
  if (score == 21 || score == 20) { return 5 };
  if (score == 19 || score == 18) { return 4 };
  if (score == 17 || score == 16) { return 3 };
  if (score == 15 || score == 14) { return 2 };
  if (score == 13 || score == 12) { return 1 };
  if (score == 11 || score == 10) { return 0 };
  if (score == 9 || score == 8) { return -1 };
  if (score == 7 || score == 6) { return -2 };
  if (score == 5 || score == 4) { return -3 };
  if (score == 3 || score == 2) { return -4 };
  return -5;
};

export const charLvlXp = (level: number): any => {
  if (!level) {
    return { xp: 0, level: 1, prof_bonus: 2 }
  }
  return _.find(xpLvlObj, ['level', level]);
}
