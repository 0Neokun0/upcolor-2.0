import { Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogTitle } from '@mui/material'


const TimeTableLayout = (props) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>時間割</TableCell>
                            {props.days.map((day, index) => {
                                return (
                                    <TableCell key={index} align="right">{day}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    {props.viewTimeTable.length > 0 &&
                        <TableBody>
                            {props.viewTimeTable.map((row, period) => {
                                return (
                                    <TableRow key={period}>
                                        <TableCell component="th" scope="row">{period + 1}</TableCell>
                                        {row.map((cell, day) => {
                                            let key = period * 5 + day
                                            if (cell) {
                                                return (
                                                    <TableCell key={key} align="right">
                                                        <Select
                                                            defaultValue={cell["lecture_id"]}
                                                            onChange={(e) => props.handleChange(e, key)}
                                                        >
                                                            <MenuItem value={cell["lecture_id"]}>{cell["lecture_name"]}</MenuItem>
                                                            <MenuItem value=""><em>None</em></MenuItem>
                                                        </Select>
                                                    </TableCell>
                                                )
                                            } else {
                                                return (
                                                    <TableCell key={key} align="right"></TableCell>
                                                )
                                            }
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    }
                </Table>
            </TableContainer>
            <Button variant="outlined" onClick={props.handleSubmit}>履修登録</Button>

            <Dialog open={Boolean(!props.overWrite)} onClose={props.toggleAlertClose}>
                <DialogTitle>上書きしますか?</DialogTitle>

                <DialogActions>
                    <Button onClick={props.toggleAlertClose}>キャンセル</Button>

                    <Button onClick={props.toggleOverWrite} autoFocus>上書き保存</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TimeTableLayout