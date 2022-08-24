import { configureStore, combineReducers } from "@reduxjs/toolkit";

export function createStore() {
  let store = configureStore({
    reducer: createReducer({}),
  });

  let asyncReducers: any = {};

  const injectReducer = (key: string | number, asyncReducer: any) => {
    asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(asyncReducers));
  };

  let addedStore = { ...store, injectReducer };
  return addedStore;
}

function createReducer(asyncReducers: {}) {
  return combineReducers({
    ...asyncReducers,
  });
}

export const store = createStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
