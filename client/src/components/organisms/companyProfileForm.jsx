import { Box, TextField } from "@mui/material";
import { CompanyInput } from "components/molecules";


const CompanyProfileForm = (props) => {
    props.profile.map((info, index) => {
        return (
            <>
                <Box
                    key={index}
                    component={"form"}
                    onSubmit={props["handleSubmit"]}
                    sx={{
                        width: "70%",
                        maxWidth: "700px",
                        "div + div": {
                            mt: 2,
                        }
                    }}
                >
                    <CompanyInput  title="基本">
                    <TextField
                            label="ユーザー名"
                            name="name"
                            fullWidth
                            
                        />
                    </CompanyInput>

                </Box>

            </>

        )
    }
    )

}


export default CompanyProfileForm;
