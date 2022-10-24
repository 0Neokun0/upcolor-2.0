import { Box, Container } from "@mui/material"
import { ClassRoomCard } from "components/molecules"
import ClassRoomPageHeader from "components/molecules/classRoomPageHeader"
import { useState } from "react"

const ClassRoomLayout = (props) => {

    const classRoomTitle = "Classroom"
    const classRoomTitleImage = "https://wallpaperaccess.com/full/859076.jpg"

    const [openCreate, setOpenCreate] = useState(false);
    const [openJoin, setOpenJoin] = useState(false);
    const handleOpenClassRoomCreate = () => setOpenCreate(true);
    const handleCloseClassRoomCreate = () => setOpenCreate(false);
    const handleOpenClassRoomJoin = () => setOpenJoin(true);
    const handleCloseClassRoomJoin = () => setOpenJoin(false);

    return (
        <Box>
            <ClassRoomPageHeader
                classRoomTitle={classRoomTitle}
                classRoomTitleImage={classRoomTitleImage}
                openCreate={openCreate}
                openJoin={openJoin}
                handleOpenClassRoomCreate={handleOpenClassRoomCreate}
                handleCloseClassRoomCreate={handleCloseClassRoomCreate}
                handleOpenClassRoomJoin={handleOpenClassRoomJoin}
                handleCloseClassRoomJoin={handleCloseClassRoomJoin}
            />
            <Container
                maxWidth="xl"
                sx={{
                    p: 2,

                }}>
                <Box>
                    {/* {classes.length === 0 ? (
                        <Typography>
                            クラスは無いです。! 参加 or 作成 してください!
                      </Typography>
                      ) : (
                    //     props.classRooms.map((class, index) => {
                    //   <ClassRoomCard />
                        // })
                      )} */}
                    <ClassRoomCard />



                </Box>

            </Container>
        </Box>
    )
}

export default ClassRoomLayout