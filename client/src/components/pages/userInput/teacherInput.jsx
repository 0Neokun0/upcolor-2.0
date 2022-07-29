import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { SubmitButton } from "components/atoms/button";

import TeacherInputPageTitle from "components/atoms/input-page-title/teacherInputPageTitle";

import { Footer } from "components/molecules";
import { SkillsInput } from "components/molecules/skills-input";
import { TeacherFacultyInput, TeacherGeneralInput, TeacherIntroductionInput } from "components/molecules/teacher-input";




import React, { useEffect, useState } from "react";

const TeacherInput = () => {
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

  const teacherData = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    axios.post("/account/teacherProfileEdit", {
      username: data.get("username"),
      email: data.get("email"),
      course: data.get("course"),
      teacherSelfIntroduction: data.get("teacherSelfIntroduction"),
      programmingLanguage: data.get("programmingLanguage"),
      programmingToolsAndFramework: data.get("programmingToolsAndFramework"),
      languageSkills: data.get("languageSkills"),
      qualification: data.get("qualification"),
    });
  };

  return (
    <>
      <Box sx={{ mt: 2, flexWrap: "wrap" }}>
        <ThemeProvider theme={darkTheme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            
            <TeacherInputPageTitle />
            <Container component="form" onSubmit={teacherData} maxWidth="lg">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <TeacherGeneralInput/>
                </Grid>
                <Grid item xs={12}>
                  <TeacherFacultyInput />
                </Grid>
                <Grid item xs={12}>
                  <TeacherIntroductionInput />
                </Grid>
                <Grid item xs={12}>
                  <SkillsInput />
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
}

export default TeacherInput;
