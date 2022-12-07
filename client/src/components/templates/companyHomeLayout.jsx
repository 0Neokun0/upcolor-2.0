import { Box, Stack } from "@mui/material"
import { ContainerXl } from "."

const CompanyHomeLayout = (props) => {
    return (
        <ContainerXl
            bgcolor={"#f5f5f5"}
        >
            <Stack
                direction={"row"}
            >
                {props["children"]}
            </Stack>
        </ContainerXl>
    )
}

export default CompanyHomeLayout