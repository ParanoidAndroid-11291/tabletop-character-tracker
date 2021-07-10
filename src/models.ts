export interface Character {
  id: string;
  name: string;
  gender: string;
  level: number;
  race: string;
  class: string;
  alignment: string;
  xp: number;
}

export interface Stats {
  hit_points: number;
  armor_class: number;
  prof_bonus: number;
  hit_die: string;
  hit_die_mod: number;
}

export interface AbilityScores {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export const toCharacter = (doc: any): Character => {
  return { id: doc.id, ...doc.data() };
};

export const toStats = (doc: any): Stats => {
  return {id: doc.id, ...doc.data()};
};

export const toScores = (doc: any): AbilityScores => {
  return { id: doc.id, ...doc.data() };
};
