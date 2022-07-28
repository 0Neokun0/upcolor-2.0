import { Button } from "@mui/material";
import React from "react";

const SignUpButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{ fontWeight: "bold", margin: 1 }}
      color="secondary"
      size="large"
      href="http://localhost:3000/signup"
    >
      サインアップ
    </Button>
  );
};

export default SignUpButton;
