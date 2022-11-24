import { Avatar, Button, Card, Grid, Typography } from "@mui/material"

import BusinessIcon from '@mui/icons-material/Business'

// import { server } from 'components/config'

const CompanyListProfileCard = (props) => {
    return (
        <Grid
            item
        >
            <Card
                variant="outlined"
                sx={{
                    bgcolor: "white",
                    width: 300,
                    height: 150,
                    p: 2,
                    m: 2,
                    overflow: "hidden",
                    borderRadius: "25px",
                    transition: "transform 0.3s, border 0.3s",
                    "&:hover": {
                        transform: "translateY(-2px)",
                    },
                    "& > *": {
                        minWidth: "clamp(0px, (360px - 100%) * 999,100%)"
                    },
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Avatar
                        sx={{
                            m: 1,
                            p: 1,
                        }}
                    />

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {props.value["company_name"]}
                    </Typography>

                    <Button
                        color="inherit"
                        sx={{
                            borderRadius: 3,
                        }}
                        startIcon={<BusinessIcon />}
                        href={"/profile/" + props.value["user_id"]}
                    >
                        会社ページ
                    </Button>
                </Grid>
            </Card>
        </Grid>
    )
}

export default CompanyListProfileCard