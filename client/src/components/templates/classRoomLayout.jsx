import { Box, Container } from "@mui/material"
import { ClassRoomCard } from "components/molecules"
import ClassRoomPageHeader from "components/organisms/classRoomPageHeader"



const ClassRoomLayout = (props) => {
  return (
    <Box>
        <ClassRoomPageHeader
            classRoomPageHeaderContents={props.classRoomPageHeaderContents}
        />
        <Container
        maxWidth="xl"
        sx={{
          p: 2,

        }}>
        <ClassRoomCard/>
        </Container>
    </Box>
  )
}

export default ClassRoomLayout