import { Box } from "@mui/material"
import { CompanyCard } from "components/molecules"

const CompanyGrid = (props) => {
    const userPictureUrl = 'https://upload.wikimedia.org/wikipedia/commons/8/88/DXC_Logo_2021_Purple_Black.png'

    return (
        <Box
            sx={{
                width: "100%",
                p: 2,
                overflowY: "scroll",
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
