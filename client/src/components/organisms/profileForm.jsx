import { Box, Button, TextField } from "@mui/material"
import { ProfileInput, ProfileSelect, ProfileSelectChip } from "components/molecules"


const ProfileForm = (props) => {
    return (
        props.profile.map((info, index) => {
            return (
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
                    <ProfileInput
                        title="一般"
                    >
                        <TextField
                            label="ユーザー名"
                            name="name"
                            fullWidth
                            defaultValue={info["user_name"]}
                        />

                        <TextField
                            label="メールアドレス"
                            name="mail"
                            fullWidth
                            defaultValue={info["user_mail"]}
                        />
                    </ProfileInput>

                    <ProfileInput
                        title="専攻情報"
                    >
                        <ProfileSelect
                            label="専攻"
                            value={props["course"]}
                            onChange={props["handleCourse"]}
                            items={props.courses}
                            id="course_id"
                            column="course_name"
                            defaultValue={props["student_course_id"]}
                        />

                        <ProfileSelect
                            label="学年"
                            value={props["year"]}
                            onChange={props["handleYear"]}
                            items={props.years}
                            id="value"
                            column="item"
                            defaultValue={props["student_year"]}
                        />
                    </ProfileInput>

                    <ProfileInput
                        title="自己紹介・自己アピール"
                    >
                        <TextField
                            label="ユーザー名"
                            name="name"
                            rows={3}
                            fullWidth
                            multiline
                            defaultValue={info["user_introduction"]}
                        />
                    </ProfileInput>

                    <ProfileInput
                        title="スキル(未実装)"
                    >
                        <ProfileSelectChip
                            label="資格"
                            lists={props["programs"]}
                        />

                        <ProfileSelectChip
                            label="プログラミング言語"
                            lists={props["programs"]}
                        />

                        <ProfileSelectChip
                            label="ツール・フレームワーク"
                            lists={props["programs"]}
                        />

                        <ProfileSelectChip
                            label="言語"
                            lists={props["programs"]}
                        />
                    </ProfileInput>

                    <ProfileInput
                        title="Github"
                    >
                        <TextField
                            label="Github"
                            name="github"
                            fullWidth
                            defaultValue={info["student_github"]}
                        />
                    </ProfileInput>

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
                    </Button>
                </Box>
            )
        })
    );
}

export default ProfileForm