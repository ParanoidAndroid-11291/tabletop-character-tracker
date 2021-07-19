import { Dispatch } from 'redux';
import { firestore } from '../firebase';
import {
  CharacterDispatchTypes,
  Character,
  CHARACTER_GET,
  CHARACTER_LIST_GET,
  CHARACTER_ADD,
  CHARACTER_DELETE,
  STATE_RESET,
  CHARACTER_LOADING
} from './CharacterActionTypes';

export const getCharacters = (userId: string ) => (dispatch: Dispatch<CharacterDispatchTypes>) => {
  dispatch({ type: CHARACTER_LOADING, payload: true });
  const charactersRef = firestore.collection('users').doc(userId)
    .collection('characters');
  const characters = charactersRef.limit(10).onSnapshot(({ docs }) => {
    const flatCharList = docs.map((doc) => ({ id: doc.id, ...doc.data() } as Character ));
    dispatch({
      type: CHARACTER_LIST_GET,
      payload: { characters: flatCharList, unsub: characters }
    })
  }, (error) => { console.log(error) });
  dispatch({ type: CHARACTER_LOADING, payload: false });
}

export const getCharacter = (userId: string, id: string ) => (dispatch: Dispatch<CharacterDispatchTypes>) => {
  dispatch({ type: CHARACTER_LOADING, payload: true });
  const characterRef = firestore.collection('users').doc(userId)
    .collection('characters').doc(id);
  characterRef.get().then((doc) => {
    const flatChar = { id: doc.id, ...doc.data() } as Character
    dispatch({
      type: CHARACTER_GET,
      payload: flatChar
    })
  })
  dispatch({ type: CHARACTER_LOADING, payload: false });
}

export const addCharacter = (data: Character, userId: string) => async (dispatch: Dispatch<CharacterDispatchTypes>) => {
  const charactersRef = firestore.collection('users').doc(userId)
    .collection('characters');
  const entryData = data;
  await charactersRef.add(entryData);
  dispatch({
    type: CHARACTER_ADD
  })
}

export const deleteCharacter = (userId: string, id: string) => async (dispatch: Dispatch) => {
  const entryRef = firestore.collection('users').doc(userId)
    .collection('characters').doc(id);
  await entryRef.delete();
  dispatch({ type: CHARACTER_DELETE });
}

export const resetCharacterState = () => (dispatch: Dispatch<CharacterDispatchTypes>) => {
  dispatch({ type: STATE_RESET });
}
