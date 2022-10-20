import { Box, Button } from "@mui/material"

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

                        <Box
                            component="input"
                            type="file"
                            accept="image/*"
                            name="icon"
                            onChange={(e) => props.handleIcon(e)}
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
                        title="スキル・経歴"
                    >
                        <TextField
                        //user_introductionの変更忘れずにする
                        //10/19
                            label="スキル・経歴"
                            name="skillsCareer"
                            rows={3}
                            fullWidth
                            multiline
                            defaultValue={info["user_introduction"]}
                        />
                    </ProfileInput>





                    <ProfileInput
                        title="スキル"
                    >
                        <ProfileSelectChip
                            label="資格"
                            lists={props["qualifications"]}
                            select={props["selectQualifications"]}
                            setSelect={props["setSelectQualifications"]}
                        />

                        <ProfileSelectChip
                            label="プログラミング言語"
                            lists={props["programs"]}
                            select={props["selectPrograms"]}
                            setSelect={props["setSelectPrograms"]}
                        />

                        <ProfileSelectChip
                            label="ツール・フレームワーク"
                            lists={props["tools"]}
                            select={props["selectTools"]}
                            setSelect={props["setSelectTools"]}
                        />

                        <ProfileSelectChip
                            label="言語"
                            lists={props["languages"]}
                            select={props["selectLanguages"]}
                            setSelect={props["setSelectLanguages"]}
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
