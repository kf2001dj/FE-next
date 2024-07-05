import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  username: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  username: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
