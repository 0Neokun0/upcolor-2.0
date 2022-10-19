import { Box, Button, TextField } from "@mui/material"
import { CompanyProfileInput } from "components/molecules";
import CompanyProfileSelect from "./companyProfileSelect";
import CompanyProfileSelectChip from "./companyProfileSelectChip";

const CompanyProfileFrom = (props) => {
    return (
            <Box
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
                    <CompanyProfileInput
                        title="一般"
                    >
                        <TextField
                            label="企業名"
                            name="name"
                            fullWidth
                            // defaultValue={info["user_name"]}
                        />

                        <TextField
                            label="企業名"
                            name="name"
                            fullWidth
                            // defaultValue={info["user_name"]}
                        />

                        <Box
                            component="input"
                            type="file"
                            accept="image/*"
                            name="icon"
                            onChange={(e) => props.handleIcon(e)}
                        />
                    </CompanyProfileInput>

                    <CompanyProfileInput
                        title="基本企業情報"
                    >
                        <TextField
                            label="企業紹介"
                            name="introduction"
                            rows={3}
                            fullWidth
                            multiline
                            // defaultValue={info["user_introduction"]}
                        />

                        <TextField
                            label="企業プロフィール"
                            name="introduction"
                            rows={3}
                            fullWidth
                            multiline
                            // defaultValue={info["user_introduction"]}
                        />

                        <TextField
                            label="事業内容"
                            name="introduction"
                            rows={3}
                            fullWidth
                            multiline
                            // defaultValue={info["user_introduction"]}
                        />

                        <TextField
                            label="社長.代表.CEO.メッセージ"
                            name="introduction"
                            rows={3}
                            fullWidth
                            multiline
                            // defaultValue={info["user_introduction"]}
                        />
                    </CompanyProfileInput>

                    <CompanyProfileInput
                        title="本社所在地"
                    >
                        <CompanyProfileSelect />
                    </CompanyProfileInput>

                    <CompanyProfileInput
                        title="採用情報"
                    >
                        <TextField
                            label="配属職種"
                            name="introduction"
                            rows={3}
                            fullWidth
                            multiline
                            // defaultValue={info["user_introduction"]}
                        />
                    </CompanyProfileInput>

                </Box>



    );


}




export default CompanyProfileFrom
