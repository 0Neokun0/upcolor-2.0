import { Button } from "@mui/material";
import React from "react";

const SignInButton = () => {
  return (
    <Button
      sx={{ ml: 2, fontWeight: "bold" }}
      component="a"
      href="http://localhost:3000/signin"
      size="large"
      variant="outlined"
    >
      サインイン
    </Button>
  );
};

export default SignInButton;
