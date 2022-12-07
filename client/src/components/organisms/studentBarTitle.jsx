import { Table, TableBody, TableContainer, TableHead, TableRow, styled, TableCell, tableCellClasses } from "@mui/material"
import { Link } from "react-router-dom";

const StudentBarTitle = (props) => {
    var studentList = props

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        height: "44px",
        fontSize: "24px",
        border: 0,
        textAlign: "center",
        whiteSpace: "pre-wrap",
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#f8f8f8",
            fontWeight: "bold",
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(even)': {
            backgroundColor: "#f8f8f8",
        },
        "&:hover": {
            backgroundColor: "#D9D9D9",
        },
    }));

    function createData(ID, name, mail, image, course, year) {
        return { ID, image, name, mail, course, year };
    }

    const rows = [
        createData(1, "genki", "genki", "userIcon.png", "本科/システム系", "1年"),
        createData(2, "isida", "isida", "userIcon.png", "情報処理NW専攻\nシステムエンジニアコース", "2年"),
        createData(3, "kamizaki", "kamizaki", "userIcon.png", "デザイン専攻\nゲームグラフィック・アニメーションコース", "2年"),
        createData(4, "tukada", "tukada", "userIcon.png", "情報処理NW専攻\nIT総合コース\nITビジネスクラス", "3年"),
        createData(5, "nakao", "nakao", "userIcon.png", "デザイン・イラスト専攻", "3年"),
        createData(6, "kurokawa", "kurokawa", "userIcon.png", "本科/システム系", "1年"),
        createData(7, "kojima", "kojima", "userIcon.png", "本科/システム系", "1年"),
        createData(8, "arao", "arao", "userIcon.png", "本科/システム系", "1年"),
    ]

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell sx={{ p: 1 }}>ID</StyledTableCell>
                        <StyledTableCell sx={{ p: 1 }}>ユーザー名</StyledTableCell>
                        <StyledTableCell sx={{ p: 1 }}>メールアドレス</StyledTableCell>
                        <StyledTableCell sx={{ p: 1 }}>アイコン</StyledTableCell>
                        <StyledTableCell sx={{ p: 1 }}>専攻</StyledTableCell>
                        <StyledTableCell sx={{ p: 1 }}>学年</StyledTableCell>
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {
                        studentList
                        &&
                        rows.map((row) => (
                            <StyledTableRow key={row.ID}>
                                <StyledTableCell sx={{ p: 1 }}>
                                    {row.ID}
                                </StyledTableCell>

                                <StyledTableCell sx={{ p: 1 }}>
                                    {row.name}
                                </StyledTableCell>

                                <StyledTableCell sx={{ p: 1 }}>
                                    {row.mail}
                                </StyledTableCell>

                                <StyledTableCell sx={{ p: 1 }}>
                                    {row.image}
                                </StyledTableCell>

                                <StyledTableCell sx={{ p: 1, fontSize: "14px", fontWeight: 600 }}>
                                    {row.course}
                                </StyledTableCell>

                                <StyledTableCell sx={{ p: 1 }}>
                                    {row.year}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>

        // <TableContainer>
        //     <Table aria-label="customized table">
        //         <TableHead>
        //             <TableRow>
        //                 <StyledTableCell injectFirst align="center">ID</StyledTableCell>
        //                 <StyledTableCell injectFirst align="center">ユーザー名</StyledTableCell>
        //                 <StyledTableCell injectFirst align="center">メールアドレス</StyledTableCell>
        //                 <StyledTableCell injectFirst align="center">アイコン</StyledTableCell>
        //                 <StyledTableCell injectFirst align="center">専攻</StyledTableCell>
        //                 <StyledTableCell injectFirst align="center">学年</StyledTableCell>
        //             </TableRow>
        //         </TableHead>

        //         <TableBody>
        //             {rows.map((row, index) => (
        //                 <StyledTableRow key={index}>
        //                     <StyledTableCell component="th" scope="row" align="center">
        //                         {row.ID}
        //                     </StyledTableCell>

        //                     <StyledTableCell align="center">
        //                         {row.name}
        //                     </StyledTableCell>

        //                     <StyledTableCell align="center">
        //                         {row.mail}
        //                     </StyledTableCell>

        //                     <StyledTableCell align="center">
        //                         {row.image}
        //                     </StyledTableCell>

        //                     <StyledTableCell sx={{p: 0, fontSize: "14px", fontWeight: 650}} align="center">
        //                         {row.course}
        //                     </StyledTableCell>

        //                     <StyledTableCell align="center">
        //                         {row.year}
        //                     </StyledTableCell>
        //                 </StyledTableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>


        // <Box
        //     sx={{
        //         width: "calc(100% - 16px)",
        //         height: "60px",
        //         px: 1,
        //         display: "flex",
        //         alignItems: "center",
        //         textAlign: "center",
        //         backgroundColor: "#f8f8f8",
        //     }}
        // >
        //     <Typography
        //         sx={{
        //             minWidth: "60px",
        //             mx: 1,
        //             color: "#808080",
        //             fontWeight: "bold",
        //             fontSize: "24px",
        //         }}
        //     >
        //         ID
        //     </Typography>
        //     <Typography
        //         sx={{
        //             minWidth: "120px",
        //             mx: 1,
        //             color: "#808080",
        //             fontWeight: "bold",
        //             fontSize: "24px",
        //         }}
        //     >
        //         アイコン
        //     </Typography>
        //     <Typography
        //         sx={{
        //             width: "calc((100% - 360px) / 3)",
        //             minWidth: "180px",
        //             mx: 1,
        //             color: "#808080",
        //             fontWeight: "bold",
        //             fontSize: "24px",
        //         }}
        //     >
        //         ユーザー名
        //     </Typography>
        //     <Typography
        //         sx={{
        //             width: "calc((100% - 360px) / 3)",
        //             minWidth: "240px",
        //             mx: 1,
        //             color: "#808080",
        //             fontWeight: "bold",
        //             fontSize: "24px",
        //         }}
        //     >
        //         メールアドレス
        //     </Typography>
        //     <Typography
        //         sx={{
        //             width: "calc((100% - 360px) / 3)",
        //             minWidth: "240px",
        //             mx: 1,
        //             color: "#808080",
        //             fontWeight: "bold",
        //             fontSize: "24px",
        //         }}
        //     >
        //         専攻
        //     </Typography>
        //     <Typography
        //         sx={{
        //             minWidth: "120px",
        //             mx: 1,
        //             color: "#808080",
        //             fontWeight: "bold",
        //             fontSize: "24px",
        //         }}
        //     >
        //         学年
        //     </Typography>
        // </Box>
    )
}

export default StudentBarTitle
