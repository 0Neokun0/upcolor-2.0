import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CompanyPageTitle from 'components/molecules/companyPageTitle'
import { ContainerXl } from 'components/templates'
import CompanyProfileTabs from 'components/organisms/companyProfileTabs'



const ViewCompanyPage = (props) => {
    const companyId = useParams()["viewCompany"]
    const [company, setCompany] = useState([])

    useEffect(() => {
        axios.post("/company/getCompany",
            { companyId: companyId }
        )
            .then((res) => {
                console.log(res.data)
                setCompany(res.data)
            })
    }, [])


    return (
        <ContainerXl>
            {
                company
                    ?

                    (
                        <Box
                            sx={{
                                p: 2,
                                width: 1,
                            }}
                        >
                            <Grid
                                container
                                direction="row"
                                spacing={3}
                            >
                                <Box
                                    sx={{
                                        p: 2,
                                        width: 1,
                                    }}
                                >
                                    {company["company_name"]}
                                    <CompanyPageTitle
                                        company={company}
                                    />
                                    <Grid
                                        item
                                        xs={12}
                                        sx={{ mt: 2 }}
                                    >

                                        <CompanyProfileTabs />

                                    </Grid>
                                </Box>
                            </Grid>
                        </Box>

                    )


                    :
                    (
                        <Typography>
                            企業プロフィールが見つかりません
                        </Typography>
                    )
            }
        </ContainerXl>
    )
}

export default ViewCompanyPage