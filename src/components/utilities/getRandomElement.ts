import { ApiResponse } from "../../App";

// returns a random element fromm response array
export const getRandomElement = (items: ApiResponse[]) => {
  if (items.length > 1) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  } else {
    return items[0];
  }
};
