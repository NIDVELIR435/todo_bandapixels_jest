import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const sliceName: string = "ThemeModeSlice";

const initialState: boolean = false;

export const ThemeModeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<boolean>) =>
      (state = action.payload),
  },
});
export const {
  actions: { changeMode },
  reducer: ThemeModeReducer,
} = ThemeModeSlice;
