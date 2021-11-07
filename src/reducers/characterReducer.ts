import {
  CharacterDispatchTypes,
  Character,
  CHARACTER_GET,
  CHARACTER_LIST_GET,
  STATE_RESET
} from '../actions/CharacterActionTypes';

interface DefaultStateI {
  character: Character,
  characters: Character[],
  unsub?: () => void
}

const defaultState: DefaultStateI = {
  character: {
    id: '',
    name: '',
    age: 0,
    eye_color: "",
    height: 0,
    weight: 0,
    gender: '',
    level: 0,
    race: '',
    playerClass: '',
    alignment: '',
    xp: 0,
    hit_points: 0,
    armor_class: 0,
    prof_bonus: 0,
    hit_die: '',
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  },
  characters: []
}

export default ( state: DefaultStateI = defaultState, action: CharacterDispatchTypes): DefaultStateI => {
  switch(action.type) {
    case CHARACTER_LIST_GET:
      return { ...state, characters: action.payload };
    case CHARACTER_GET:
      return { ...state, character: action.payload };
    case STATE_RESET:
      return { ...state, character: defaultState.character, characters: defaultState.characters };
    default:
      return state;
  }
}
