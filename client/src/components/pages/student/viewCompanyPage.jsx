import { Box, Grid, Tab, Tabs, Typography } from '@mui/material'

import PropTypes from 'prop-types'
import MenuIcon from "@mui/icons-material/Menu"
import { CompanyHomeLayout } from "components/templates"

import logo from "components/atoms/logo/upcolor_logo.svg"
import { MainMenuCompanyDrawer } from "components/organisms"


import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CompanyProfile } from '../company'

function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const ViewCompanyPage = (props) => {
    const [value, setValue] = useState(0)
    const companyId = useParams()["viewCompany"]
    const [company, setCompany] = useState([])

    useEffect(() => {
        axios.post("/company/getCompany",
            {companyId: companyId}
        )
        .then((res) => {
            console.log(res.data)
            setCompany(res.data)
        })
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <CompanyHomeLayout>
            {company["company_name"]}
            {/* <Box>
                <Grid
                    container
                    spacing={2}
                    columns={10}
                >
                    <Grid
                        item
                        xs={8}
                    >
                        <CompanyProfile
                            companyName={company["company_name"]}
                        />
                    </Grid>
                </Grid>
            </Box> */}
        </CompanyHomeLayout>
    )
}

export default ViewCompanyPage