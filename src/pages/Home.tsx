import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setOrderId,
  setStatut,
  setName as setStoreName,
  Statut,
} from "../store/mainSlice";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const startOrder = (e: FormEvent) => {
    e.preventDefault();

    const orderId = Math.random() * 1000;
    dispatch(setOrderId({ orderId }));
    dispatch(setStoreName({ name }));
    dispatch(setStatut({ statut: Statut.OnGoing }));

    navigate(`salad/${orderId}`);
  };

  return (
    <>
      <h2>Welcome, please enter your name :</h2>
      <form onSubmit={startOrder}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-cy="name-form"
        />
        <Button variant="outlined" type="submit" data-cy="name-submit">
          Start order
        </Button>
      </form>
    </>
  );
}
