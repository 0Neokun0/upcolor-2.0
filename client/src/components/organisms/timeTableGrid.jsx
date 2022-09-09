import { Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper } from "@mui/material"
import { SelectBox } from "components/molecules"

const TimeTableGrid = (props) => {
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
                        props.viewTimeTable.map((row, period) => {
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
                                            return (
                                                <TableCell
                                                    key={key}
                                                    align="right"
                                                    sx={{
                                                        width: "19%",
                                                    }}
                                                >
                                                    {
                                                        cell
                                                        &&
                                                        <SelectBox
                                                            id={cell["lecture_id"]}
                                                            change={(e) => props.change(e, key)}
                                                            menus={
                                                                [
                                                                    {
                                                                        value: cell["lecture_id"],
                                                                        name: cell["lecture_name"]
                                                                    },
                                                                    {
                                                                        value: "",
                                                                        name: <em>None</em>
                                                                    }
                                                                ]
                                                            }
                                                            style={
                                                                {
                                                                    width: "100%",
                                                                    textAlign: "left",
                                                                }
                                                            }
                                                        />
                                                    }
                                                </TableCell>
                                            )
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

export default TimeTableGrid