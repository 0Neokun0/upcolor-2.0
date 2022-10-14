import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"

const ViewTimeTableGrid = (props) => {
    return (
        <TableContainer
            component={Paper}
        >
            <Table
                aria-label="simple tabel"
            >
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="center"
                        >
                            時間割
                        </TableCell>
                        {
                            props.days.map((day, index) => {
                                return (
                                    <TableCell
                                        key={index}
                                        align="center"
                                    >
                                        {day}
                                    </TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.timeTable.map((row, period) => {
                            return (
                                <TableRow
                                    key={period}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                        sx={{
                                            width: "5%",
                                        }}
                                    >
                                        {props.periods[period]}
                                    </TableCell>
                                    {
                                        row.map((cell, day) => {
                                            let key = period * 5 + day
                                            if (cell) {
                                                return (
                                                    <TableCell
                                                        key={key}
                                                        align="center"
                                                        sx={{
                                                            width: "19%",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() => props.open(key)}
                                                    >
                                                        {cell["lecture_name"]}
                                                    </TableCell>
                                                )
                                            } else {
                                                return (
                                                    <TableCell
                                                        key={key}
                                                        align="center"
                                                        sx={{
                                                            width: "19%",

                                                        }}
                                                    >
                                                    </TableCell>
                                                )
                                            }
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ViewTimeTableGrid
