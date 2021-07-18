import {
  CharacterDispatchTypes,
  Character,
  CHARACTER_GET,
  CHARACTER_LIST_GET,
  CHARACTER_ADD,
  CHARACTER_DELETE
} from '../actions/CharacterActionTypes';

interface DefaultStateI {
  character: Character,
  characters: Character[],
  unsub?: void
}

const defaultState: DefaultStateI = {
  character: {
    id: '',
    name: '',
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
      return { ...state, characters: action.payload.characters, unsub: action.payload.unsub };
    case CHARACTER_GET:
      return { ...state, character: action.payload };
    default:
      return state;
  }
}
