import { Box, Grid, Hidden } from "@mui/material";
import MainMenuCompany from "components/organisms/mainMenuCompany";
import { CompanyProfile } from "components/pages/company";

const CompanyHomeLayout = (props) => {
    return (
        <Box
            sx={{
                p: 2,
            }}
        >
            <Box>
                <Grid
                    container
                    spacing={2}
                    columns={10}
                >
                    <Grid
                        item
                        xs={2}
                    >
                        <Hidden
                            xlDown
                        >
                            <MainMenuCompany
                                company={props.company}
                                companyMenus={props.companyMenus}
                            />
                        </Hidden>
                    </Grid>

                    <Grid
                        item
                        xs={8}
                    >
                        <CompanyProfile
                            handleDrawerToggle={props.handleDrawerToggle}
                            company={props.company}
                            companyName={props.companyName}
                            companyOccupation={props.companyOccupation}
                            companyDetailsTabs={props.companyDetailsTabs}
                            companyRecruitmentTabs={props.companyRecruitmentTabs}
                            companyLinksTabs={props.companyLinksTabs}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default CompanyHomeLayout;