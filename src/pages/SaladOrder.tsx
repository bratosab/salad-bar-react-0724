import { List, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Topping } from "../models/Topping.model";
import { getToppings } from "../services/saladService";

export function SaladOrder() {
  const [toppings, setToppings] = useState<Topping[]>([]);

  useEffect(() => {
    getToppings().then((toppings) => {
      setToppings(toppings);
    });
  }, []);

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
