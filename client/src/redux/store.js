import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userSlice.js'

const combinedReducers = {
  user: userReducer
}

const persistConfig = {
  key: 'root',
  storage,
  version: 1
}

const persistedReducers = persistReducers(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export const persistStore = persistStore(store);