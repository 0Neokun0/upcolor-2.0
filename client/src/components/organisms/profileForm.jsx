import { Box, Button, TextField } from "@mui/material"
import { ProfileInput, ProfileSelect, ProfileSelectChip } from "components/molecules"

const ProfileForm = (props) => {
    return (
        props.profile.map((info, index) => {
            console.log(info)
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
                            defaultValue={info["student_course_id"]}
                            name="course"
                            element={props["courses"]}
                            valueId="course_id"
                            valueColumn="course_name"
                        />

                        <ProfileSelect
                            label="学年"
                            defaultValue={info["student_year"]}
                            name="year"
                            element={props["years"]}
                            valueId="value"
                            valueColumn="item"
                        />
                    </ProfileInput>

                    {/* <ProfileInput
                        title="専攻情報"
                    >
                        <ProfileSelect
                            label="専攻"
                            value={info["student_course_id"]}
                            onChange={props["handleCourse"]}
                            items={props["courses"]}
                            id="course_id"
                            column="course_name"
                        />

                        <ProfileSelect
                            label="学年"
                            value={info["student_year"]}
                            onChange={props["handleYear"]}
                            items={props.years}
                            id="value"
                            column="item"
                        />
                    </ProfileInput> */}

                    <ProfileInput
                        title="自己紹介・自己アピール"
                    >
                        <TextField
                            label="自己紹介・自己アピール"
                            name="introduction"
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