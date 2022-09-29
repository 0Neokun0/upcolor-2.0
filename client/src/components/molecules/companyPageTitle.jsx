import { Card, Chip, Grid, Stack, Typography } from '@mui/material'

const company_name = '会社名'
const company_occupation = '業種'

const CompanyPageTitle = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          mt: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: '100%',
            p: 2,
            borderRadius: '10px',
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            >
            {company_name}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
          >
            <Chip
            color="info"
            label={company_occupation}
            />
          </Stack>
        </Card>
      </Grid>
    </>
  )
}

export default CompanyPageTitle
