import { createSelector, type PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface FruitSliceState {
  fruits: string[];
}

const initialState: FruitSliceState = {
  fruits: [],
}

export const fruitSlice = createAppSlice({
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
    selectFruitWithoutApple: createSelector(
      (state: FruitSliceState) => state.fruits,
      fruits => fruits.filter(fruit => fruit !== "Apple")
    ),
  },
})

export const { add } =
  fruitSlice.actions

export const { selectFruitWithoutApple } = fruitSlice.selectors
