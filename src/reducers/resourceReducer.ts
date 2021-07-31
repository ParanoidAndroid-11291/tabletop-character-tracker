import {
  ResourceDispatchTypes,
  ApiReference,
  CharacterResources,
  Background,
  ClassResources,
  RaceResources,
  EquipmentResources,
  EquipmentCategory,
  Spell,
  GameMechanicResources,
  Rule,
  RuleSection,
  GET_RESOURCE_LIST,
  GET_CHARACTER_RESOURCES,
  GET_BACKGROUNDS,
  GET_CLASS_RESOURCES,
  GET_RACE_RESOURCES,
  GET_EQUIPMENT_RESOURCES,
  GET_EQUIPMENT_CATEGORIES,
  GET_SPELLS,
  GET_GAME_MECHANICS,
  GET_RULE,
  GET_RULE_SECTION,
  SET_RESOURCE_URL
} from '../actions/ResourceActionTypes';

interface DefaultStateI {
  url: string,
  resourceList: ApiReference[];
  character_resources?: CharacterResources;
  background?: Background;
  class_resources?: ClassResources;
  race_resources?: RaceResources;
  equipment_resources?: EquipmentResources;
  equipment_category?: EquipmentCategory;
  spell?: Spell;
  game_mechanics_resources?: GameMechanicResources;
  rule?: Rule;
  rule_section?: RuleSection;
}

const defaultState: DefaultStateI = {
  url: '',
  resourceList: []
}

export default ( state: DefaultStateI = defaultState, action: ResourceDispatchTypes): DefaultStateI => {
  switch(action.type) {
    case GET_RESOURCE_LIST:
      return { ...state, resourceList: action.payload }
    case GET_CHARACTER_RESOURCES:
      return { ...state, character_resources: action.payload }
    case GET_BACKGROUNDS:
      return { ...state, background: action.payload }
    case GET_CLASS_RESOURCES:
      return { ...state, class_resources: action.payload }
    case GET_RACE_RESOURCES:
      return { ...state, race_resources: action.payload }
    case GET_EQUIPMENT_RESOURCES:
      return { ...state, equipment_resources: action.payload }
    case GET_EQUIPMENT_CATEGORIES:
      return { ...state, equipment_category: action.payload }
    case GET_SPELLS:
      return { ...state, spell: action.payload }
    case GET_GAME_MECHANICS:
      return { ...state, game_mechanics_resources: action.payload }
    case GET_RULE:
      return { ...state, rule: action.payload }
    case GET_RULE_SECTION:
      return { ...state, rule_section: action.payload }
    case SET_RESOURCE_URL:
      return { ...state, url: action.payload };
    default:
      return state
  }
}
