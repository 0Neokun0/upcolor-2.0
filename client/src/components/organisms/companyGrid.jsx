import { Box, Grid } from "@mui/material"
import { CompanyCard } from "components/molecules"

const CompanyGrid = (props) => {
    const userPictureUrl = 'https://upload.wikimedia.org/wikipedia/commons/8/88/DXC_Logo_2021_Purple_Black.png'

    return (
        <Box
            sx={{
                justifyItems: "center",
                width: "100%",
                minHeight: "80vh",
                maxHeight: "80vh",
                p: 2,
                overflowY: "auto",
                "::-webkit-scrollbar": {
                    width: "5px",
                },
                "::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0, 0, 50, .5)",
                    borderRadius: "5px",
                },
                "::-webkit-scrollbar-track": {
                    boxShadow: 2,
                },

            }}
        >
            <Grid
                container
                spacing={4}
                mt={0}
                justifyContent="left"
            >
                {
                    props.companies
                    &&
                    props.companies.map((company, index) => {
                        return (
                            company
                            &&
                            <Grid
                                item
                                xs={12}
                                sm={8}
                                md={5}
                                lg={4}
                                xl={3}
                            >
                                <CompanyCard
                                    key={index}
                                    image={userPictureUrl}
                                    name={company["company_name"]}
                                    recruite={"プログラマーなど"}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default CompanyGrid
