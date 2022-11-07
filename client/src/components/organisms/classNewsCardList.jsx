import { ClassNewsCard } from "components/molecules"
import { Grid, Typography } from "@mui/material"

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
                    props["classNewsRooms"].map((classNewsRoom) => {
                        return (
                            <Grid
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
            <Typography>
                クラスが見つかりません
            </Typography>
    )
}

export default ClassNewsCardList