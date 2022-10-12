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

const classRoomLeftHeader = (props) => {
  const classRoomLeftHeaderImage = "https://i.pinimg.com/originals/04/ff/b9/04ffb96016eaba8635718f0f85bbbb99.jpg"
  const classRoomLeftHeaderTitle = "クラス参加";

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
                Join
            </Button>
            </CardActions>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default classRoomLeftHeader;
