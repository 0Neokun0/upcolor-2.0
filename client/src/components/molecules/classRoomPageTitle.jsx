import {
    Card,
    Stack,
    Typography
  } from '@mui/material'
import { ClassRoomDrawer } from 'components/organisms'


  const ClassRoomPageTitle = () => {
    return (



          <Card
            sx={{
              mt: 10,
              p: 2,
              borderRadius: '10px',
            }}
          >
<Stack direction="row" spacing={2}>
<ClassRoomDrawer/>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              >
              ClassRoom
            </Typography>

            </Stack>
          </Card>



    )
  }

  export default ClassRoomPageTitle