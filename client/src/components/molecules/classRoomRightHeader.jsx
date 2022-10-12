import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const classRoomRightHeader = () => {

  const classRoomLeftHeaderImage = "https://media.sketchfab.com/models/3f49271eb0dc404e87333baebca59886/thumbnails/914bdb37755946e8813325f9592bb0da/c09eace2ef6942268f325c369b1043e3.jpeg"
  const classRoomLeftHeaderTitle = "クラス作成";

  return (
    <>
      <Card
        sx={{
            m: 2,
            mt: 1,
            p: 2,
            borderRadius: '10px',
        }}
      >
        <Box
            sx={{
            position: "relative",
          }}
        >
          <CardMedia
            sx={{
                height: 100,
                borderRadius: 2,
              }}
              component="img"
              src={classRoomLeftHeaderImage}
          />
          <Box
              sx={{
              position: "absolute",
              color: "white",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Typography
                variant="h7"
                gutterBottom
                sx = {{
                    fontWeight: 1000
                }}
                >
                {classRoomLeftHeaderTitle}
            </Typography>
            <CardActions>
            <Button
                sx={{ mt: 2}}
                variant="contained"
                color="success"
                >
                Create
            </Button>
            </CardActions>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default classRoomRightHeader;
