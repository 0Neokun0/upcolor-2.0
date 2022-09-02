import { Button, Box } from "@mui/material"

const DevelopHome = () => {

    return (
        <Box
            sx={{
                width: "80%",
                mx: "auto",
                textAlign: "center",
                "a": {
                    width: "40vh",
                    height: "40vh",
                    mx: 1,
                    mt: 2,
                    fontSize: "3em"
                }
            }}
        >
            <Button
                variant="contained"
                color="primary"
                href="teacherSignupUrl"
            >
                企業登録
            </Button>
        
            <Button
                variant="contained"
                color="primary"
                href="addLectures"
            >
                時間割登録
            </Button>
        
            <Button
                variant="contained"
                color="primary"
                href="teacherSignupUrl"
            >
                企業登録
            </Button>
        </Box>
    )
}

export default DevelopHome