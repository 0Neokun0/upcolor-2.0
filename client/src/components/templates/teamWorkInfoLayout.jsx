import { Box, Card, CardHeader, Grid } from "@mui/material";

const TeamWorkInfoLayout = (props) => {
  return (
    <Box
      sx={{
        mt: 2,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          mt: 6,
        }}
      >
        <Card>
          <CardHeader title="Student Input" />
        </Card>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}
        marginTop
      >
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.component}
        </Box>
      </Grid>
    </Box>
  );
};

export default TeamWorkInfoLayout;
