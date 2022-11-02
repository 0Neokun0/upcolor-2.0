import { Box, Container, Grid } from "@mui/material"
import ClassNewsHomeHeader from "components/organisms/classNewsHomeHeader"
import ClassNewsRoomCard from "components/organisms/classNewsRoomCard"

const ClassNewsHomeLayout = (props) => {
  return (
    <>
      <Box sx={{
        margin: 'auto',
      }}>
        <ClassNewsHomeHeader
          classNewsTitle={props.classNewsTitle}
          classNewsTitleImage={props.classNewsTitleImage}

          openCreate={props.openCreate}
          setOpenCreate={props.setOpenCreate}
          openJoin={props.openJoin}
          setOpenJoin={props.setOpenJoin}

        />
        <Container
          maxWidth="xl"
          sx={{
            p: 2,
          }}
        >
          <Grid
            container
            spacing={0}
            mb={0}
            justifyContent="left"
          >
            {/* {
              props.classNewsRoomsList.map((classNewsRooms, index) => {
                return (
                  classNewsRooms
                  && */}
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    xl={3}
                  >
                    <ClassNewsRoomCard
                      // key={index}
                      // classId={classNewsRooms["class_id"]}
                      // className={classNewsRooms["class_name"]}
                      // classCreator={classNewsRooms["user_name"]}
                      // onclick={'/classroomFeed'}
                    />
                  </Grid>
                {/* )
              })
            } */}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default ClassNewsHomeLayout
