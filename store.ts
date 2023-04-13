import { configureStore } from '@reduxjs/toolkit'
import userReducer from './src/features/userInfo/userInfo'
import fundReducer from './src/features/fundInfo/fundInfo'


export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    fundInfo: fundReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch