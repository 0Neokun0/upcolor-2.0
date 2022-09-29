import { Box,  Stack } from "@mui/material"
import { CompanyGrid, CompanySearch } from "components/organisms"

const CompanyListLayout = (props) => {
    return (
        <Box sx={{ p: 2 }}
        >
            <Stack
                direction="row"
                spacing={2}
            >
                <CompanySearch
                    searchList={props.searchList}
                />

                <CompanyGrid
                    companies={props.companies}
                />
            </Stack>
        </Box>
    )
}

export default CompanyListLayout
