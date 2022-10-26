import { Box, Container, Grid } from "@mui/material"
import { ClassRoomCard } from "components/molecules"
import ClassRoomPageHeader from "components/molecules/classRoomPageHeader"

const ClassRoomLayout = (props) => {

    return (
        <Box>
            <ClassRoomPageHeader
                classRoomTitle={props.classRoomTitle}
                classRoomTitleImage={props.classRoomTitleImage}
                openCreate={props.openCreate}
                openJoin={props.openJoin}
                setOpenCreate={props.setOpenCreate}
                setOpenJoin={props.setOpenJoin}

                createClass={props.createClass}
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
                    {
                        props.classRoomList.map((classRoom, index) => {
                            return (
                                classRoom
                                &&
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    lg={4}
                                    xl={3}
                                >
                                    <ClassRoomCard
                                        key={index}
                                        className={classRoom["class_name"]}
                                        onclick={'/classroomFeed'}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default ClassRoomLayout