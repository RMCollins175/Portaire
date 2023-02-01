import { ApiResponse } from "../../../types";
import { getRandomElement } from "./function";

describe("getRandomElement", () => {
  const items = [
    {
      _id: "1",
      email: "john@doe.com",
      first_name: "Sherlock",
      last_name: "Holmes",
      address_one: "221b Baker St",
      address_two: "London",
      state: "London",
      post_code: "NW1 6XE",
      __v: 0,
    },
    {
      _id: "2",
      email: "Jim@galt.com",
      first_name: "John",
      last_name: "Galt",
      address_one: "221a Baker St",
      address_two: "London",
      state: "London",
      post_code: "SW1 6XE",
      __v: 0,
    },
  ];

  it("should return a random element from the array", () => {
    const randomElement = getRandomElement(items);
    expect(items).toContain(randomElement);
  });

  it("should return the only element in the array if there is only one", () => {
    const moreItems = [items[0]];
    const randomElement = getRandomElement(moreItems);
    expect(randomElement).toEqual(moreItems[0]);
  });

  it("should return undefined if the array is empty", () => {
    const emptyItems: ApiResponse[] = [];
    const randomElement = getRandomElement(emptyItems);
    expect(randomElement).toBeUndefined();
  });
});
