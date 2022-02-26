import { actionTypesEnums } from "../../typings/actionTypeConstants";
import { Dispatch } from "redux";
import { FoodItem } from "../../typings";

export const addFoodItem = (food_item: FoodItem) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: actionTypesEnums.LOAD_FOOD_LIST,
        payload: true,
      });
      dispatch({
        type: actionTypesEnums.ADD_FOOD_ITEM,
        payload: food_item,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
