import React from "react";
import { Box } from "@mui/system";

import LandingPageMainComponent from "components/organisms/landingPage/main";
import LandingPageFeatureCards from "components/organisms/landingPage/feature";

const LandingPage = () => {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <LandingPageMainComponent />
      </Box>
      <Box sx={{ mt: 35 }}>
        <LandingPageFeatureCards />
      </Box>
    </>
  );
};

export default LandingPage;
