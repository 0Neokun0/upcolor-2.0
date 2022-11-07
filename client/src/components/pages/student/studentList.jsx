import { Paper } from "@mui/material"
import axios from "axios"
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { SearchList } from "components/molecules"
import { ListDisplayBox, SearchListBox } from "components/organisms"
import { ListLayout } from "components/templates"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const StudentList = () => {
    const [originalStudents, setOriginalStudents] = useState(false)
    const [displayStudents, setDisplayStudents] = useState(false)
    const [nullOmitStudent, setNullOmitStudent] = useState([])
    const [searchList, setSearchList] = useState([])
    const [courses, setCourses] = useState([])
    const [years, setYears] = useState([])
    const [qualifications, setQualifications] = useState([])
    const [programs, setPrograms] = useState([])
    const [tools, setTools] = useState([])
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        axios.post("/student/list")
            .then((res) => {
                setOriginalStudents(res.data["students"])
                setNullOmitStudent(res.data["students"].filter((student) => {
                    return student["qualification_ids"] && student["program_ids"] && student["tool_ids"] && student["language_ids"]
                }))
                setDisplayStudents(res.data["students"])
                setSearchList(res.data["search"])
            })
    }, [])

    useEffect(() => {
        // 絞り込みを一つでも選択しているか
        if (courses.length || years.length || qualifications.length || programs.length || tools.length || languages.length) {

            // 絞り込まれた結果を渡す用の配列
            let search = []

            // 絞り込み用の配列を map する
            nullOmitStudent.map((student) => {

                // この生徒を画面に出力するか判別するフラグ
                let displayFlg = true

                // この絞り込みを選択しているか && 絞り込みの要素に生徒が含まれているか
                // length: 絞り込み要素が選ばれているか 選ばれていない場合0を返す
                // includes: student["ids"] の数値型配列に element が含まれている場合 true を返す
                if (courses.length && !courses.includes(student["course_id"])) {
                    displayFlg = false
                }

                if (years.length && !years.includes(student["year_id"])) {
                    displayFlg = false
                }

                // この絞り込みを選択しているか && 絞り込みの要素に生徒が選んだものが一つでも含まれているか
                // length: 絞り込み要素が選ばれているか 選ばれていない場合0を返す
                // some: 絞り込み用配列の要素を (element) に一つずつ渡す
                // split: student["ids"] 文字列なので "," で区切って一文字ずつの配列にする
                // map: split で区切った配列を文字型から数値型に変換する
                // includes: student["ids"] の数値型配列に element が含まれている場合 true を返す
                if (qualifications.length && !qualifications.some(element => student["qualification_ids"].split(",").map(Number).includes(element))) {
                    displayFlg = false
                }

                if (programs.length && !programs.some(element => student["program_ids"].split(",").map(Number).includes(element))) {
                    displayFlg = false
                }

                if (tools.length && !tools.some(element => student["tool_ids"].split(",").map(Number).includes(element))) {
                    displayFlg = false
                }

                if (languages.length && !languages.some(element => student["language_ids"].split(",").map(Number).includes(element))) {
                    displayFlg = false
                }

                // displayFlg が true のままの場合配列に追加する
                if (displayFlg) {
                    search.push(student)
                }

                return 0
            })

            // 画面に表示する生徒が含まれている配列を DisplayStudents に set する
            setDisplayStudents(search)
        } else {
            setDisplayStudents(originalStudents)
        }

        // 絞り込み要素がどれか選択されたときに useEffect が動くようにする
    }, [courses, years, qualifications, programs, tools, languages, originalStudents, nullOmitStudent])

    return (
        displayStudents
        &&
        <ListLayout>
            <SearchListBox>
                <SearchList
                    title="専攻/コース"
                    icon={<InboxIcon />}
                    name="course"
                    list={searchList["courses"]}
                    set={setCourses}
                    sqlId="course_id"
                    sqlName="course_name"
                />

                <SearchList
                    title="学年"
                    icon={<InboxIcon />}
                    name="year"
                    list={searchList["years"]}
                    set={setYears}
                    sqlId="year_id"
                    sqlName="year_name"
                />

                <SearchList
                    title="資格"
                    icon={<InboxIcon />}
                    name="qualification"
                    list={searchList["qualifications"]}
                    set={setQualifications}
                    sqlId="qualification_id"
                    sqlName="qualification_name"
                />

                <SearchList
                    title="プログラミング言語"
                    icon={<InboxIcon />}
                    name="program"
                    list={searchList["programs"]}
                    set={setPrograms}
                    sqlId="program_id"
                    sqlName="program_name"
                />

                <SearchList
                    title="ツール"
                    icon={<InboxIcon />}
                    name="tool"
                    list={searchList["tools"]}
                    set={setTools}
                    sqlId="tool_id"
                    sqlName="tool_name"
                />

                <SearchList
                    title="言語"
                    icon={<InboxIcon />}
                    name="language"
                    list={searchList["languages"]}
                    set={setLanguages}
                    sqlId="language_id"
                    sqlName="language_name"
                />
            </SearchListBox>

            <ListDisplayBox>
                {
                    displayStudents.map((value, index) => {
                        return (
                            <Paper
                                key={index}
                                sx={{
                                    "a,a:visited": {
                                        color: "inherit",
                                    },
                                    "a:hover": {
                                        color: "red",
                                    },
                                }}
                            >
                                <Link
                                    to={"/profile/" + value["user_id"]}
                                >
                                    {value["user_id"] + value["name"] + value["course_name"] + value["year_name"] + value["mail"]}
                                </Link>
                            </Paper>
                        )
                    })
                }
            </ListDisplayBox>
        </ListLayout>
    )
}

export default StudentList
