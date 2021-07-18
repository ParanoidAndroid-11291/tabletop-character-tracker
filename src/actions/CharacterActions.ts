import { Dispatch } from 'redux';
import { firestore } from '../firebase';
import {
  CharacterDispatchTypes,
  Character,
  CHARACTER_GET,
  CHARACTER_LIST_GET,
  CHARACTER_ADD,
  CHARACTER_DELETE
} from './CharacterActionTypes';

export const getCharacters = (userId: string ) => (dispatch: Dispatch<CharacterDispatchTypes>) => {
  const charactersRef = firestore.collection('users').doc(userId)
    .collection('characters');
  const characters = charactersRef.limit(10).onSnapshot(({ docs }) => {
    const flatCharList = docs.map((doc) => ({ id: doc.id, ...doc.data() } as Character ));
    dispatch({
      type: CHARACTER_LIST_GET,
      payload: { characters: flatCharList, unsub: characters() }
    })
  }, (error) => { console.log(error) });
}

export const getCharacter = (userId: string, id: string ) => (dispatch: Dispatch<CharacterDispatchTypes>) => {
  const characterRef = firestore.collection('users').doc(userId)
    .collection('characters').doc(id);
  characterRef.get().then((doc) => {
    const flatChar = { id: doc.id, ...doc.data() } as Character
    dispatch({
      type: CHARACTER_GET,
      payload: flatChar
    })
  })
}

export const addCharacter = (data: Character, userId: string) => async (dispatch: Dispatch<CharacterDispatchTypes>) => {
  const charactersRef = firestore.collection('users').doc(userId)
    .collection('characters');
  const entryData = data;
  const entryRef = await charactersRef.add(entryData);
  console.log('entry saved:', entryRef.id);
  dispatch({
    type: CHARACTER_ADD
  })
}
