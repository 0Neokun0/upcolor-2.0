import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import React from "react";

import { Footer } from "components/molecules";
import { Box, Container, Grid } from "@mui/material";

import StudentInputPageTitle from "components/atoms/input-page-title/studentInputPageTitle";
import {
  StudentCourseAndYearInput,
  StudentGeneralInput,
  StudentGitHub,
  StudentIntroductionInput,
} from "components/molecules/student-input";
import { SubmitButton } from "components/atoms/button";
import { SkillsInput } from "components/molecules/skills-input";

const StudentInput = () => {
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

  const studentData = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    axios.post("/account/studentProfileEdit", {
      username: data.get("username"),
      email: data.get("email"),
      course: data.get("course"),
      studentYear: data.get("studentYear"),
      studentSelfIntroduction: data.get("studentSelfIntroduction"),
      programmingLanguage: data.get("programmingLanguage"),
      programmingToolsAndFramework: data.get("programmingToolsAndFramework"),
      languageSkills: data.get("languageSkills"),
      qualification: data.get("qualification"),
      githubLink: data.get("githubLink"),
    });
  };

  return (
    <>
      <Box sx={{ mt: 2, flexWrap: "wrap" }}>
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <StudentInputPageTitle />
            <Container component="form" onSubmit={studentData} maxWidth="lg">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <StudentGeneralInput />
                </Grid>
                <Grid item xs={12}>
                  <StudentCourseAndYearInput />
                </Grid>
                <Grid item xs={12}>
                  <StudentIntroductionInput />
                </Grid>
                <Grid item xs={12}>
                  <SkillsInput />
                </Grid>
                <Grid item xs={12}>
                  <StudentGitHub />
                </Grid>
                <Grid item xs={12}>
                  <SubmitButton />
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

export default StudentInput;
