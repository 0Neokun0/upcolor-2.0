import { ClassNewsCard } from "components/molecules"
import { Box, Grid, Typography } from "@mui/material"

const ClassNewsCardList = (props) => {
    return (
        props["classNewsRooms"]
            ?

            <Grid
                container
                sx={{
                    justifyContent: "space-between",
                }}
            >
                {
                    props["classNewsRooms"].map((classNewsRoom, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                            >
                                <ClassNewsCard
                                    classNewsRoom={classNewsRoom}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>

            :
            <Box
                sx={{
                    p: 2,
                    height:"100%",
                    display: "flex",
                    justifyContent: 'center',

                }}>
                <Typography
                    variant= "h6"
                    sx= {{
                        fontWeight: 600,
                    }}>
                クラスが見つかりません
            </Typography>
            </Box>

    )
}

export default ClassNewsCardList