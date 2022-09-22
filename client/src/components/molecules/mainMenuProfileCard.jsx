import React from 'react'
import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  Stack,
  styled,
  Switch,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const CardItems = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  alignContent: 'center',
}))

const MainMenuProfileCard = (props) => {
  console.log(props)
  return (
    <>
      <Card>
        <Box sx={{ p: 2, display: 'flex' }}>

          <Stack direction="row" spacing={2}>

            <CardItems>
              <Avatar />
            </CardItems>

            <CardItems minWidth={100}>
              <Typography overflow="hidden" fontWeight={700}>
                neokun
              </Typography>
            </CardItems>

            <CardItems>
              <IconButton>
                <EditIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </CardItems>

          </Stack>

        </Box>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        >
          <Switch />
          <Chip label="naoko" />
        </Stack>
      </Card>
    </>
  )
}

export default MainMenuProfileCard
