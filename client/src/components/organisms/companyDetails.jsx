import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Stack, styled } from '@mui/material'
import { useState } from 'react'

const CompanyArticleBox = styled(Box)({
  border: '1px solid black',
  margin: '1rem',
  padding: '2rem 2rem',
  textAlign: 'center',
})

function createData(name) {
  return {
    name,
  }
}

function Row(props) {
  const { row } = props
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell
            component="th"
            scope="row"
        >
          {row.name}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell
            style={{
                paddingBottom: 2,
                paddingTop: 2
            }}
            colSpan={6}
            >
          <Collapse
            in={open}
            timeout="auto" unmountOnExit
          >
            <Stack
                direction="row" spacing={3}
                justifyContent="flex-start"
             >
              <CompanyArticleBox
              flex={1}
              >
                <Box>
                  <img
                    alt="companyAriticleImage"
                    width={100}
                    height={70}
                    src={props.image}
                  />
                </Box>
              </CompanyArticleBox>

              <CompanyArticleBox
              flex={7}
              >
                <Typography>
                    {props.text}
                </Typography>
              </CompanyArticleBox>

            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const rows = [
  createData('会社紹介記事'),
  createData('プロフィール'),
  createData('本社所在地'),
  createData('事業内容'),
]

const CompanyDetails = (props) => {
  return (
    <TableContainer
    component={Paper}
    >
      <Table
      aria-label="collapsible table"
      >
        <TableHead>
          <TableRow>
            <TableCell />

            <TableCell>
              <Typography
              variant="h5"
              >
                会社基本情報と会社理念についての情報
              </Typography>
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              key={row.name}
              row={row}
              image={props.companyDetailsTabs[0].companyArticleImage}
              text={props.companyDetailsTabs[0].companyArticleData}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default CompanyDetails
