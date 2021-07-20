/****************************************************************
*                       Character Data                          *
****************************************************************/
export const GET_SKILLS = "GET_SKILLS";
export const GET_ABILITY_SCORES = "GET_ABILITY_SCORES";
export const GET_PROFICIENCIES = "GET_PROFICIENCIES";
export const GET_LANGUAGES = "GET_LANGUAGES";
export const GET_ALIGNMENTS = "GET_ALIGNMENTS";

export type AbilityScore = {
  index: string;
  name: string;
  full_name: string;
  desc: string[];
  skills: ApiReference[];
  url: string;
}

export type Skill = {
  index: string;
  name: string;
  desc: string[];
  ability_score: ApiReference[];
  url: string;
}

export type Proficiencies = {
  index: string;
  type: string;
  name: string;
  classes: ApiReference[];
  races: ApiReference[];
  url: string;
  references: ApiReference[];
}

export type Language = {
  index: string;
  name: string;
  type: string;
  typical_speakers: string[];
  script: string;
  url: string;
}

export type Alignment = {
  index: string;
  name: string;
  abbreviation: string;
  desc: string[];
  url: string;
}

/****************************************************************
*                       Backgrounds                             *
****************************************************************/
export const GET_BACKGROUNDS = "GET_BACKGROUNDS";

type BackgroundFeature = {
  desc: string[];
  name: string;
}

export type Background = {
  index: string;
  name: string;
  starting_proficiencies: Proficiencies[];
  language_options: Choice[];
  starting_equipment: ApiReference[];
  starting_equipment_options: Choice[];
  feature:  BackgroundFeature;
  personality_traits: Choice;
  ideals: Choice;
  bonds: Choice;
  flaws: Choice;
  url: string;
}
/****************************************************************
*                       Classes                                 *
****************************************************************/
export const GET_CLASSES = "GET_CLASSES";
export const GET_SUBCLASSES = "GET_SUBCLASSES";
export const GET_FEATURES = "GET_FEATURES";
export const GET_STARTING_EQUIPMENT = "GET_STARTING_EQUIPMENT";

export type Class = {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: Choice[];
  proficiencies: ApiReference[];
  saving_throws: ApiReference[];
  starting_equipment: Object;
  class_levels: string;
  subclasses: ApiReference[];
  spellcasting: Object;
  spells: string;
  url: string;
}

export type Subclass = {
  index: string;
  class: ApiReference;
  name: string;
  subclass_flavor: string;
  desc: string[];
  spells: [];
  subclass_levels: string;
  url: string;
}

export type SubclassLevels = {
  index: string;
  level: number;
  feature_choices: ApiReference[];
  features: ApiReference[];
  class: ApiReference;
  subclass: ApiReference;
  url: string;
}

//Class Features, Class Spells, Class Proficiencies, ect,...
export type ClassResource = {
  count: number;
  results: ApiReference[];
}

export type ClassLevels = {
  index: string;
  level: number;
  ability_score_bonuses: number;
  prof_bonus: number;
  feature_choices: ApiReference[];
  features: ApiReference[];
  spellcasting: Object;
  class_specific: Object;
  class: ApiReference;
  url: string;
}

/****************************************************************
*                       Races                                   *
****************************************************************/
/****************************************************************
*                       Equipment                               *
****************************************************************/
/****************************************************************
*                       Spells                                  *
****************************************************************/
export type Spellcasting = {
  level: number;
  spellcasting_ability: ApiReference[];
  info: [];
}

/****************************************************************
*                       Game Mechanics                          *
****************************************************************/
/****************************************************************
*                       Rules                                   *
****************************************************************/
/****************************************************************
*                       Common Models                           *
****************************************************************/
export type ApiReference = {
  index: string;
  name: string;
  url: string;
}

export type ClassApiResource = {
  index: string;
  class: string;
  url: string;
}

export type Choice = {
  choose: number;
  type: string;
  from: any;
}

export type Cost = {
  quantity: number;
  unit: string;
}

export type AbilityBonus = {
  bonus: number;
  ability_score: AbilityScore;
}
