import { List, ListItem, ListItemButton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadToppings, selectTopping, selectTotalPrice, selectTotalPriceMemo } from "../store/saladSlice";
import { AppDispatch, RootState } from "../store/store";
import { Topping } from "../models/Topping.model";
import "../styles/SaladOrder.css";

export function SaladOrder() {
  const toppings = useSelector((state: RootState) => state.salad.toppings);
  const chosenToppings = useSelector(
    (state: RootState) => state.salad.chosenToppings
  );
  const totalPrice = useSelector(selectTotalPrice)
  const totalPriceMemo = useSelector(selectTotalPriceMemo)

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadToppings());
  }, [dispatch]);

  const handleSelectTopping = (topping: Topping) => {
    dispatch(selectTopping({ topping }));
  };

  return (
    <>
      <h2>Salad</h2>
      <p>Total price : { totalPrice }€</p>
      <p>Total price : { totalPriceMemo }€</p>
      <div className="toppings-lists">
        <List>
          {toppings &&
            toppings.map((topping) => (
              <ListItemButton
                key={topping.id}
                onClick={() => handleSelectTopping(topping)}
              >
                {topping.name} ({topping.price}€)
              </ListItemButton>
            ))}
        </List>

        <List>
          {chosenToppings &&
            chosenToppings.map((topping) => (
              <ListItem key={topping.id}>
                {topping.name} ({topping.price}€)
              </ListItem>
            ))}
        </List>
      </div>
    </>
  );
}
