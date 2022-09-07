import { Box } from "@mui/material"
import { ProfileInput } from "."

const ProfileForm = (props) => {
    const forms = [
        {
            title: "一般",
            content: {
                labels: {
                    
                }
            }
        }
    ]

    return (
        props.profile.map((info) => {
            return (
                <Box
                    sx={{
                        width: "70%",
                    }}
                >
                    {
                        forms.map((form, index) => {
                            return (
                                <ProfileInput
                                    title={form["title"]}
                                />
                            )
                        })
                    }


                    {/* <TextField
                        size="small"
                        label="自己紹介"
                        name="introduction"
                        fullWidth
                        multiline
                        rows={3}
                        defaultValue={info["user_introduction"]}
                    />

                    <TextField
                        size="small"
                        label="取得資格"
                        name="qualifications"
                        fullWidth
                        defaultValue={info["student_qualifications"]}
                    />

                    <TextField
                        size="small"
                        label="プログラミング言語"
                        name="programming"
                        fullWidth
                        defaultValue={info["student_programming_languages"]}
                    />

                    <TextField
                        size="small"
                        label="github"
                        name="github"
                        fullWidth
                        defaultValue={info["student_github"]}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        fullWidth
                        sx={{
                            mt: 5,
                        }}
                    >
                        保存
                    </Button> */}
                </Box>
            )
        })
    );
}

export default ProfileForm