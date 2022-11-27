import { Box, Hidden, Stack } from "@mui/material"
import MainMenuCompany from "components/organisms/mainMenuCompany"
import { CompanyProfile } from "components/pages/company"

const CompanyHomeLayout = (props) => {
    return (
        <Box
            bgcolor={"#f5f5f5"}
        >
            <Stack
                direction={"row"}
            >
                <Hidden
                    lgDown
                >
                    <MainMenuCompany
                        company={props.company}
                        companyMenus={props.companyMenus}
                    />
                </Hidden>

                <CompanyProfile
                    company={props.company}
                    companyName={props.companyName}
                    companyOccupation={props.companyOccupation}
                    companyDetailsTabs={props.companyDetailsTabs}
                    companyRecruitmentTabs={props.companyRecruitmentTabs}
                    companyLinksTabs={props.companyLinksTabs}
                />
            </Stack>
        </Box>
    )
}

export default CompanyHomeLayout
