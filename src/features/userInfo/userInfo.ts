import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  email?: string,
  firstName?: string,
  lastName?: string,
  isOver18?: boolean
}

const initialState: UserState = {
    email: null,
    firstName: null,
    lastName: null,
    isOver18: null
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    getInfo: (state,action: PayloadAction<UserState>) => {
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.isOver18 = action.payload.isOver18
    },
  },
})

// Action creators are generated for each case reducer function
export const { getInfo } = userSlice.actions

export default userSlice.reducer