import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  styled,
  Container,
  Divider,
} from "@mui/material";

import SignUpButton from "components/atoms/landingPageButtons/signUpButton";
import SignInButton from "components/atoms/landingPageButtons/signInButton";

const ContainerMain = styled(Container)(({ theme }) => ({
  justifyContent: "center",
  width: "1000px",
  height: "300px",
  borderRadius: 25,
  color: theme.palette.text.secondary,
}));

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
      font-size: ${theme.typography.pxToRem(50)};
  `
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
      font-size: ${theme.typography.pxToRem(17)};
      
  `
);

const LandingPageMainComponent = () => {
  return (
    <ContainerMain
      maxWidth="lg"
      sx={{ textAlign: "center", alignItems: "center" }}
    >
      <Card
        variant="outlined"
        color="#f4f4f4"
        sx={{
          maxWidth: "md",
          CardShadow: 10,
          mt: 3,
          textAlign: "center",
          p: 1,
          borderRadius: "100px",
        }}
      >
        <input
          width="80"
          height="80"
          type="image"
          alt="photo"
          src={require("../../atoms/logo/upcolor_logo.png")}
        />
        <Grid
          spacing={{ xs: 6, md: 10 }}
          justifyContent="center"
          alignItems="center"
          container
        >
          <Grid item md={10} lg={8}>
            <Box
              sx={{
                backgroundColor: "#64dd17",
                color: "white",
                fontWeight: "bold",
                borderRadius: "16px",
                display: "inline",
                pr: 0.8,
                pl: 0.8,
              }}
            >
              Version 2.0
            </Box>

            <TypographyH1 sx={{ mb: 3, mt: 3 }} variant="h1">
              Upcolor 2.0
              <Box>学内交流ウェブアプリ。</Box>
            </TypographyH1>
            <TypographyH2
              sx={{ lineHeight: 1.5, pb: 4 }}
              variant="h4"
              color="text.secondary"
              fontWeight="normal"
            >
              去年の引き続きUpColorをバージョンアップして、学内交流アプリケーションにしました。
            </TypographyH2>
            <SignUpButton />
            <SignInButton />

            <Grid container spacing={3} mt={5}></Grid>
          </Grid>
        </Grid>
      </Card>
      <Grid sx={{ mt: 5 }}>
        <Typography sx={{ mb: 3, mt: 3, fontWeight: 200 }} variant="h4">
          <Divider>Upcolor 2.0を使用する機能</Divider>
        </Typography>
      </Grid>
    </ContainerMain>
  );
};

export default LandingPageMainComponent;
