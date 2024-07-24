import { Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

export function Home() {
  const [name, setName] = useState<string>("");

    const startOrder = (e: FormEvent) => {
        e.preventDefault()
        console.log(name)
    }

  return (
    <>
      <h2>Welcome, please enter your name :</h2>
      <form onSubmit={startOrder}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="outlined" type="submit">Start order</Button>
      </form>
    </>
  );
}
