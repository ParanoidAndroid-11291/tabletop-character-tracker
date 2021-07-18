export const CHARACTER_GET = "CHARACTER_GET";
export const CHARACTER_LIST_GET = "CHARACTER_LIST_GET";
export const CHARACTER_ADD = "CHARACTER_ADD";
export const CHARACTER_DELETE = "CHARACTER_DELETE";

export type Character = {
  id?: string;
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
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

type CharacterSnapshot = {
  characters: Character[],
  unsub: void;
}

export interface CharacterGet {
  type: typeof CHARACTER_GET;
  payload: Character;
}

export interface CharacterListGet {
  type: typeof CHARACTER_LIST_GET;
  payload: CharacterSnapshot;
}

export interface CharacterAdd {
  type: typeof CHARACTER_ADD;
}

export interface CharacterDelete {
  type: typeof CHARACTER_DELETE;
}

export type CharacterDispatchTypes =
                                  CharacterGet |
                                  CharacterListGet |
                                  CharacterAdd |
                                  CharacterDelete
