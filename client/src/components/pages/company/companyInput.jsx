import React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
} from "@mui/material";

import { Footer } from "components/molecules";
import CompanyInputPageTitle from "components/atoms/input-page-title/companyInputPageTItle";
import CompanyGeneralInput from "components/molecules/organisms/company-input/companyGeneralInput";

const CompanyInput = () => {
  const axios = require("axios");

  const [mode] = useState("light");
  const [signinState, setSigninState] = useState("");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    axios.post("/account/signState").then((res) => {
      setSigninState(res.data);
    });
  }, [axios]);

  const companyData = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    axios.post("/account/companyProfileEdit", {
      username: data.get("username"),
      email: data.get("email"),
      companySelfIntroduction: data.get("companyIntroduction"),
    });
  };
  return (
    <>
      <Box sx={{ mt: 2, flexWrap: "wrap" }}>
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <CompanyInputPageTitle />
            <Container component="form" onSubmit={companyData} maxWidth="lg">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <CompanyGeneralInput />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </ThemeProvider>
      </Box>
      <Footer />
    </>
  );
};

export default CompanyInput;
