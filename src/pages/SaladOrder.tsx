import { List, ListItemButton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadToppings, selectTopping } from "../store/saladSlice";
import { AppDispatch, RootState } from "../store/store";
import { Topping } from "../models/Topping.model";

export function SaladOrder() {
  const toppings = useSelector((state: RootState) => state.salad.toppings);
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
    </>
  );
}
