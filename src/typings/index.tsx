export interface ReduxStore {
  food: {
    foodlist: FoodItem[];
    loading: boolean;
  };
}

export interface FoodItem {
  id: string;
  name: string;
  expires: Date;
  category: string;
}
