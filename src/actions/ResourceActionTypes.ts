/****************************************************************
*                       Character Data                          *
****************************************************************/
export const GET_ABILITY_SCORE = "GET_ABILITY_SCORE";
export const GET_SKILL = "GET_SKILL";
export const GET_PROFICIENCY = "GET_PROFICIENCY";
export const GET_LANGUAGE = "GET_LANGUAGE";
export const GET_ALIGNMENT = "GET_ALIGNMENT";

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
  ability_score: ApiReference;
  url: string;
}

export type Proficiency = {
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

export type CharacterResources = {
  ability_score?: AbilityScore;
  skill?: Skill;
  proficiency?: Proficiency;
  language?: Language;
  alignment?: Alignment;
}

export interface AbilityScoreGet {
  type: typeof GET_ABILITY_SCORE;
  payload: AbilityScore;
}

export interface SkillGet {
  type: typeof GET_SKILL;
  payload: Skill;
}

export interface ProficiencyGet {
  type: typeof GET_PROFICIENCY;
  payload: Proficiency;
}

export interface LanguageGet {
  type: typeof GET_LANGUAGE;
  payload: Language;
}

export interface AlignmentGet {
  type: typeof GET_ALIGNMENT;
  payload: Alignment;
}

/****************************************************************
*                       Backgrounds                             *
****************************************************************/
export const GET_BACKGROUNDS = "GET_BACKGROUNDS";

type BackgroundFeature = {
  desc: string[];
  name: string;
}

export type StartingEquipment = {
  equipment: ApiReference;
  quantity: number;
}

export type Ideal = {
  desc: string;
  alignments: Alignment[];
}

export type Background = {
  index: string;
  name: string;
  starting_proficiencies: ApiReference[];
  language_options: Choice;
  starting_equipment: StartingEquipment[];
  starting_equipment_options: Choice[];
  feature:  BackgroundFeature;
  personality_traits: Choice;
  ideals: Choice;
  bonds: Choice;
  flaws: Choice;
  url: string;
}

export interface BackgroundGet {
  type: typeof GET_BACKGROUNDS;
  payload: Background;
}
/****************************************************************
*                       Classes                                 *
****************************************************************/
export const GET_CLASS_RESOURCES = "GET_CLASS_RESOURCES";

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

export type Feature = {
  index: string;
  name: string;
  level: number;
  class: ApiReference;
  subclass: ApiReference;
  desc: string[];
  feature_specific: FeatureSpecific;
  url: string;
}

export type Spellcasting = {
  level: number;
  spellcasting_ability: ApiReference;
  info: [];
}

export type FeatureSpecific = {
  subfeature_options: Choice;
  expertise_options: Choice;
}

export type ClassResources = {
  class?: Class;
  class_levels?: ClassLevels;
  subclass?: Subclass;
  subclass_levels?: SubclassLevels;
  class_resource?: ClassResource;
  feature?: Feature;
  spell_casting?: Spellcasting;
  feature_specific?: FeatureSpecific;
}

export interface ClassResourcesGet {
  type: typeof GET_CLASS_RESOURCES;
  payload: ClassResources;
}

/****************************************************************
*                       Races                                   *
****************************************************************/
export const GET_RACE_RESOURCES = "GET_RACE_RESOURCES";

export type Race = {
  index: string;
  name: string;
  speed: number;
  ability_bonuses: AbilityBonus[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  starting_proficiencies: ApiReference[];
  starting_proficiency_options: Choice;
  languages: ApiReference[];
  language_desc: string;
  traits: ApiReference[];
  subraces: ApiReference[];
  url: string;
}

export type Subrace = {
  index: string;
  name: string;
  race: ApiReference;
  desc: string;
  ability_bonuses: AbilityBonus[];
  starting_proficiencies: ApiReference[];
  languages: ApiReference[];
  language_options: Choice;
  racial_traits: ApiReference;
  url: string;
}

export type Trait = {
  index: string;
  race: ApiReference[];
  subraces: ApiReference[];
  name: string;
  desc: string[];
  proficiencies: ApiReference[];
  proficiency_choices: Choice;
  trait_specific: TraitSpecific;
  url: string;
}

export type TraitSpecific = {
  subtrait_options: Choice;
  spell_options?: Choice;
  damage_type?: ApiReference;
  breath_weapon?: Object;
}

export type RaceResources = {
  race?: Race;
  subrace?: Subrace;
  trait?: Trait;
  trait_specific?: TraitSpecific;
}

export interface RaceResourcesGet {
  type: typeof GET_RACE_RESOURCES;
  payload: RaceResources;
}

/****************************************************************
*                       Equipment                               *
****************************************************************/
export const GET_EQUIPMENT_RESOURCES = "GET_EQUIPMENT_RESOURCES";
export const GET_EQUIPMENT_CATEGORIES = "GET_EQUIPMENT_CATEGORIES";

export type EquipmentCategory = {
  index: string;
  name: string;
  equipment: ApiReference[];
}

export type Weapon = {
  index: string;
  name: string;
  equipment_category: ApiReference;
  weapon_category: string;
  weapon_range: string;
  category_range: string;
  cost: Cost;
  damage: Object;
  two_handed_damage: Object;
  range: Object;
  weight: number;
  properties: ApiReference[];
  url: string;
}

export type Armor = {
  index: string;
  name: string;
  equipment_category: ApiReference;
  armor_category: string;
  armor_class: Object;
  str_minimum: number;
  stealth_disadvantage: boolean;
  weight: number;
  cost: Cost;
  url: string;
}

export type Gear = {
  index: string;
  name: string;
  equipment_category: ApiReference;
  gear_category: ApiReference;
  cost: Cost;
  weight: number;
  url: string;
}

export type EquipmentPack = {
  index: string;
  name: string;
  equipment_category: ApiReference;
  gear_category: ApiReference;
  cost: Cost;
  contents: ApiReference[];
  url: string;
}

export type MagicItem = {
  index: string;
  name: string;
  equipment_category: ApiReference;
  desc: string[];
}

export type WeaponProperty = {
  index: string;
  name: string;
  desc: string[];
  url: string;
}

export type EquipmentResources = {
  weapon?: Weapon;
  weapon_property?: WeaponProperty;
  armor?: Armor;
  gear?: Gear;
  equipment_pack?: EquipmentPack;
  magic_item?: MagicItem;
}

export interface EquipmentCategoryGet {
  type: typeof GET_EQUIPMENT_CATEGORIES
  payload: EquipmentCategory;
}

export interface EquipmentResourcesGet {
  type: typeof GET_EQUIPMENT_RESOURCES
  payload: EquipmentResources;
}


/****************************************************************
*                       Spells                                  *
* API Params                                                    *
*    level:  Lets you filter spells for specific levels.        *
*            It returns a list with all the spells which        *
*            have this level or an empty list if none can be    *
*            found. Multiple levels are supported.              *
*                                                               *
*    school: Lets you filter spells for specific schools.       *
*            It returns a list with all the spells which        *
*            have this school or an empty list if none can      *
*            be found. Multiple or partial schools are          *
*            supported.                                         *
*                                                               *
****************************************************************/
export const GET_SPELLS = "GET_SPELLS";

export type Spell = {
  index: string;
  name: string;
  desc: [];
  higher_level: [];
  range: string;
  components: [];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: Object;
  school: ApiReference;
  classes: ApiReference;
  subclasses: ApiReference[];
  url: string;
}

export interface SpellGet {
  type: typeof GET_SPELLS;
  payload: Spell;
}

/****************************************************************
*                       Game Mechanics                          *
****************************************************************/
export const GET_GAME_MECHANICS = "GET_GAME_MECHANICS";

//for condition and damage type
export type GameMechanic = {
  index: string;
  name: string;
  desc: string[];
  url: string;
}

export type MagicSchool = {
  index: string;
  name: string;
  desc: string;
  url: string;
}

export type GameMechanicResources = {
  condition?: GameMechanic;
  damage?: GameMechanic;
  magic_school?: MagicSchool;
}

export interface GameMechanicResourcesGet {
  type: typeof GET_GAME_MECHANICS;
  payload: GameMechanicResources;
}


/****************************************************************
*                       Rules                                   *
****************************************************************/
export const GET_RULE = "GET_RULE";
export const GET_RULE_SECTION = "GET_RULE_SECTION";

export type Rule = {
  section: RuleSection;
  subsections: ApiReference;
}

export type RuleSection = {
  index: string;
  name: string;
  desc: string;
  url: string;
}

export interface RuleGet {
  type: typeof GET_RULE;
  payload: Rule;
}

export interface RuleSectionGet {
  type: typeof GET_RULE_SECTION;
  payload: RuleSection;
}
/****************************************************************
*                       Common Models                           *
****************************************************************/
export const GET_RESOURCE_LIST = "GET_RESOURCE_LIST";
export const SET_RESOURCE_URL = "SET_RESOURCE_URL";

export type ApiReference = {
  index?: string;
  type?: string;
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
  from: [];
}

export type Cost = {
  quantity: number;
  unit: string;
}

export type AbilityBonus = {
  bonus: number;
  ability_score: AbilityScore;
}

export interface ResourceListGet {
  type: typeof GET_RESOURCE_LIST;
  payload: ApiReference[];
}

export interface ResourceUrlSet {
  type: typeof SET_RESOURCE_URL;
  payload: string;
}

/***************************** DISPATCH TYPES *****************************/
export type ResourceDispatchTypes =
                        AbilityScoreGet |
                        SkillGet |
                        AlignmentGet |
                        LanguageGet |
                        ProficiencyGet |
                        BackgroundGet |
                        ClassResourcesGet |
                        RaceResourcesGet |
                        EquipmentCategoryGet |
                        EquipmentResourcesGet |
                        SpellGet |
                        GameMechanicResourcesGet |
                        RuleGet |
                        RuleSectionGet |
                        ResourceListGet |
                        ResourceUrlSet;
