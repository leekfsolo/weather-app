import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface weatherState {
  city: string;
  unit: string;
}

const initialState: weatherState = {
  city: "Ho Chi Minh",
  unit: "℃",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    celsius: (state: weatherState) => {
      state.unit = "℃";
    },
    fahrenheit: (state: weatherState) => {
      state.unit = "℉";
    },
    changeCity: (state: weatherState, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { celsius, fahrenheit, changeCity } = weatherSlice.actions;

export default weatherSlice.reducer;
