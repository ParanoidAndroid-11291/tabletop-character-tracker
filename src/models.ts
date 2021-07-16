export interface Auth {
  loggedIn: boolean;
  userId?: string;
}

export interface Character {
  id: string;
  name: string;
  gender: string;
  level: number;
  race: string;
  playerClass: string;
  alignment: string;
  xp: number;
  hit_points: number;
  armor_class: number;
  prof_bonus: number;
  hit_die: string;
  hit_die_mod: number;
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
