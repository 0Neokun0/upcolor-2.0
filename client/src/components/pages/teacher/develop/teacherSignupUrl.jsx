import axios from "axios"
import { TextField } from "@mui/material"

const TeacherSignupUrl = () => {


    return (
        <>
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
        </>
    )
}

export default TeacherSignupUrl