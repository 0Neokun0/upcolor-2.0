import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    Divider,
    Grid,
    Stack,
    Typography,
  } from '@mui/material'
  import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

  const companyRecruitment = (props) => {
      return (
          <Card>
          {props.companyRecruitmentTabs.map((companyElem) => {
              return (
              <Accordion key={companyElem['companyRecruitmentRow']}>
                  <AccordionSummary
                      sx={{
                          bgcolor: '#f5f5f5',
                      }}
                      expandIcon={<ExpandMoreRoundedIcon />}
                  >
                      <Grid
                          container
                          direction="row"
                          alignItems="center"
                      >
                          <Grid
                              item
                              sx={{
                                  mr: 2,
                                  }}
                          >
                              {companyElem['companyRecruitmentIcon']}
                          </Grid>

                          <Divider
                              orientation="vertical"
                              flexItem
                              sx={{
                                  mr: 2,
                              }}
                          />

                          <Grid item>
                              <Typography>
                                  {companyElem['companyRecruitmentRow']}
                              </Typography>
                          </Grid>
                  </Grid>
                  </AccordionSummary>

                  <Divider />

                  <AccordionDetails
                      sx={{
                          p: 4,
                      }}
                  >
                      <Stack
                          direction="row"
                          spacing={3}
                          justifyContent="flex-start"
                      >
                          <Box
                              component="img"
                              alt="companyAriticleImage"
                              src={companyElem['companyRecruitmentImage']}
                              sx={{
                                  width: '150px',
                                  height: '120px',
                              }}
                          />
                          <Box
                              sx={{
                                  borderLeftStyle: 'inset',
                                  p: 4,
                              }}
                          >
                          <Typography>
                              {companyElem['companyRecruitmentData']}
                          </Typography>
                          </Box>
                      </Stack>
                  </AccordionDetails>
              </Accordion>
              )
          })}
          </Card>
      )
  }

  export default companyRecruitment