import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface FruitSliceState {
  fruits: string[];
}

const initialState: FruitSliceState = {
  fruits: [],
}

export const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: create => ({
    add: create.reducer(
      (state, action: PayloadAction<string>) => {
         state.fruits.push(action.payload)
      },
    ),
  }),
  selectors: {
    selectFruitWithoutApple: state => state.fruits.filter(fruit => fruit !== "Apple")
  },
})

export const { add } = fruitSlice.actions
export const { selectFruitWithoutApple } = fruitSlice.selectors
