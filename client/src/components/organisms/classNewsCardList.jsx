import { ClassNewsCard } from "components/molecules"
import { Grid, Typography } from "@mui/material"

const ClassNewsCardList = (props) => {
    return (
        props["classNewsRooms"]
            ?
            <Grid
                container
                sx={{
                    justifyContent: "flex-left",
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
            <Typography>
                クラスが見つかりません
            </Typography>
    )
}

export default ClassNewsCardList