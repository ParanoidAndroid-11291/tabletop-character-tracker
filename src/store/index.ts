import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const wrappedThunk = composeWithDevTools(
  applyMiddleware(thunk)
);

export const store = createStore(reducers, wrappedThunk);

//export root reducers
export type RootStore = ReturnType<typeof reducers>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
