import { initialState, selectTotalPrice } from "./saladSlice";
import { initialState as initialMainState } from "./mainSlice";
import { RootState } from "./store";

describe("Salad Slice", () => {
  it("chosenToppings price", () => {
    const chosenToppingsMock = [
      {
        id: 1,
        name: "Cheese",
        price: 2,
      },
      {
        id: 2,
        name: "Bacon",
        price: 2,
      },
      {
        id: 3,
        name: "Pineapple",
        price: 4,
      },
    ];

    const stateMock: RootState = {
      salad: {
        ...initialState,
        chosenToppings: chosenToppingsMock,
      },
      main: {
        ...initialMainState,
      },
    };

    const price = selectTotalPrice(stateMock);

    expect(price).toEqual(8);
  });
});
