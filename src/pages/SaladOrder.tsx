import { List, ListItemButton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadToppings } from "../store/saladSlice";
import { AppDispatch, RootState } from "../store/store";

export function SaladOrder() {
  const toppings = useSelector((state: RootState) => state.salad.toppings)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadToppings())
  }, [dispatch]);

  return (
    <>
      <h2>Salad</h2>
      <List>
        {toppings &&
          toppings.map((topping) => (
            <ListItemButton key={topping.id}>
              {topping.name} ({topping.price}€)
            </ListItemButton>
          ))}
      </List>
    </>
  );
}
