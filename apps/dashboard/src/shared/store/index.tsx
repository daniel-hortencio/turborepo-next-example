import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from './modules/user'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export const useAuthenticateUser = (state: { user: any | null }) => {
  return state.user
}

export const { authenticateUser, getUserByCookies, logout } = userSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
