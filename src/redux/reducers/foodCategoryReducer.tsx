import { initialState } from "../store";
import { actionTypesEnums } from "../../typings/actionTypeConstants";
import { AnyAction } from "redux";

export const foodCategoryReducer = (
  state = initialState.food,
  action: AnyAction
) => {
  switch (action.type) {
    case actionTypesEnums.ADD_FOOD_ITEM:
      return {
        ...state,
        foodlist: action.payload,
      };
    case actionTypesEnums.LOAD_FOOD_LIST:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
