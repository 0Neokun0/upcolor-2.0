import { Box, Container, List, ListSubheader, Stack } from "@mui/material"
import { CompanyCard, ListOccupation } from "components/molecules"

const CompanyGrid = (props) => {
    const userPictureUrl = 'https://upload.wikimedia.org/wikipedia/commons/8/88/DXC_Logo_2021_Purple_Black.png'

    return (
        <Container
            maxWidth="xl"
        >
            <Stack direction="row" spacing={2}>
                <List
                    sx={{
                        width: "20%",
                        maxWidth: 360,
                        p: 2,
                        minHeight: "89vh",
                        bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            絞り込み
                        </ListSubheader>
                    }
                >
                    {
                        props.searchList
                        &&
                        props.searchList.map((search, index) => {
                            return (
                                <ListOccupation
                                    key={index}
                                    title={search.title}
                                    select={search.selectList}
                                    name={search.name}
                                    sqlId={search.sqlId}
                                    sqlName={search.sqlName}
                                    set={search.set}
                                />
                            )
                        })
                    }
                </List>
                <Box>
                    {
                        props.companies
                        &&
                        props.companies.map((company, index) => {
                            return (
                                <CompanyCard
                                    key={index}
                                    image={userPictureUrl}
                                    name={company["company_name"]}
                                    recruite={"プログラマーなど"}
                                />
                            )
                        })
                    }
                </Box>
            </Stack>
        </Container>
    )
}

export default CompanyGrid
