import { Hidden, Box } from "@mui/material"

const SearchListBox = (props) => {
    return (
        <Hidden
            lgDown
        >
            <Box
                sx={{
                    width: "20%",
                }}
            >
                {props.children}
            </Box>
        </Hidden>
    )
}

export default SearchListBox
