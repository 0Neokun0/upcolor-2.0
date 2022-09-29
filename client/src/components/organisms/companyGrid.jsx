import { Box } from "@mui/material"
import { CompanyCard } from "components/molecules"

const CompanyGrid = (props) => {
    const userPictureUrl = 'https://upload.wikimedia.org/wikipedia/commons/8/88/DXC_Logo_2021_Purple_Black.png'

    return (
        <Box
            sx={{
                justifyItems: "center",
                width: "100%",
                minHeight: "90vh",
                maxHeight: "90vh",
                p: 2,
                overflowY: "scroll",
            }}
        >
            {
                props.companies
                &&
                props.companies.map((company, index) => {
                    return (
                        company
                        &&
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
    )
}

export default CompanyGrid
