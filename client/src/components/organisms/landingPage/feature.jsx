import React from "react";
import { Stack, Box } from "@mui/material";
import StudentFeatureCard from "components/molecules/landingPageFeatureCards/studentCard";
import TeacherFeatureCard from "components/molecules/landingPageFeatureCards/teacherCard";
import CompanyFeatureCard from "components/molecules/landingPageFeatureCards/companyCard";

const LandingPageFeatureCard = () => {
  return (
    <Box sx={{ flexGrow: 1 }} container spacing={2} alignItems="center">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
        sx={{ mt: 5 }}
      >
        <StudentFeatureCard />
        <TeacherFeatureCard />
        <CompanyFeatureCard />
      </Stack>
    </Box>
  );
};

export default LandingPageFeatureCard;
