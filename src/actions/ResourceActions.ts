import { Dispatch } from 'redux';
import dndapi from '../apis/dndapi';
import {
  ResourceDispatchTypes,
  GET_RESOURCE_LIST,
  GET_ABILITY_SCORE,
  GET_SKILL,
  GET_LANGUAGE,
  GET_ALIGNMENT,
  GET_PROFICIENCY,
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
} from './ResourceActionTypes';

export const setResourceUrl = (url: string) => (dispatch: Dispatch<ResourceDispatchTypes>) => {
  dispatch({ type: SET_RESOURCE_URL, payload: url });
}

export const getResourceList = (endpoint: string) => async (dispatch: Dispatch<ResourceDispatchTypes>) => {
  try {
    const res = await dndapi.get(`/api/${endpoint}`);
    dispatch({
      type: GET_RESOURCE_LIST,
      payload: res.data.results
    });
  } catch (e) {
    console.log('DND API Error', e.message);
  }
}

export const getResource = (endpoint: string, url: string) => async (dispatch: Dispatch<ResourceDispatchTypes>) => {
  try {
    const res = await dndapi.get(url);
    switch (endpoint){
      case 'ability-scores':
        dispatch({
          type: GET_ABILITY_SCORE,
          payload: res.data
        })
        break;
      case 'skills':
        dispatch({
          type: GET_SKILL,
          payload: res.data
        })
          break;
      case 'proficiencies':
        dispatch({
          type: GET_PROFICIENCY,
          payload: res.data
        })
          break;
      case 'languages':
        dispatch({
          type: GET_LANGUAGE,
          payload: res.data
        })
          break;
        case 'alignment':
          dispatch({
            type: GET_ALIGNMENT,
            payload: res.data
        })
          break;
        case 'backgrounds':
          dispatch({
            type: GET_BACKGROUNDS,
            payload: res.data
          })
            break;
        case 'classes':
          dispatch({
            type: GET_CLASS_RESOURCES,
            payload: {
              class: res.data
            } })
            break;
        case 'subclasses':
          dispatch({
            type: GET_CLASS_RESOURCES,
            payload: {
              subclass: res.data
            } })
            break;
        case 'features':
          dispatch({
            type: GET_CLASS_RESOURCES,
            payload: {
              feature: res.data
            } })
            break;
        case 'races':
          dispatch({
            type: GET_RACE_RESOURCES,
            payload: {
              race: res.data
            } })
            break;
        case 'subraces':
          dispatch({
            type: GET_RACE_RESOURCES,
            payload: {
              subrace: res.data
            } })
            break;
        case 'traits':
          dispatch({
            type: GET_RACE_RESOURCES,
            payload: {
              trait: res.data
            } })
            break;
        case 'equipment-categories':
          dispatch({
            type: GET_EQUIPMENT_CATEGORIES,
            payload: res.data
          })
          break;
    }
  } catch (e) {
    console.log('DND API Error', e.message);
  }
}
