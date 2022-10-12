import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

const classRoomTitleHeader = () => {

    const classRoomTitle = 'Classroom'
    const classRoomImage = 'https://wallpaperaccess.com/full/859076.jpg'

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
                position: 'relative',
              }}
            >
              <CardMedia
                sx={{
                  height: 100,
                  borderRadius: 2,
                }}
                component="img"
                src={classRoomImage}
              />
              <Box
                sx={{
                  position: 'absolute',
                  color: 'white',
                  top: 8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <Typography variant="h3">{classRoomTitle}</Typography>
              </Box>
            </Box>
          </Card>
    </>
  );
};

export default classRoomTitleHeader;
