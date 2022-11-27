import axios from "axios"

import { SearchList, StudentListProfileCard } from "components/molecules"
import { ListDisplayBox, SearchListBox } from "components/organisms"
import { ListLayout } from "components/templates"
import { useState, useEffect } from "react"

import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import ApprovalRoundedIcon from '@mui/icons-material/ApprovalRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';

// String.prototype.nullSplit = function (sep) {
//     if (!this) {
//         return [""]
//     }
//     return this.split(sep)
// }

const StudentList = () => {
    const [originalStudents, setOriginalStudents] = useState(false)
    const [displayStudents, setDisplayStudents] = useState(false)
    const [searchList, setSearchList] = useState([])
    const [courses, setCourses] = useState([])
    const [years, setYears] = useState([])
    const [qualifications, setQualifications] = useState([])
    const [programs, setPrograms] = useState([])
    const [tools, setTools] = useState([])
    const [languages, setLanguages] = useState([])

    const singleIdCheck = (value, select, flg) => {
        // length: 絞り込み要素が選ばれているか
        // includes: select に value が含まれているか
        if (select.length && !select.includes(value)) {
            flg = false
        }
        return flg
    }

    const multiIdCheck = (value, select, flg) => {
        // length: 絞り込み要素が選ばれているか
        // some: 絞り込み用配列の要素を (element) に一つずつ渡す 一つでも条件をクリアしたら true を返す
        // split: student["ids"] 文字列なので "," で区切って一文字ずつの配列にする
        // map: split で区切った配列を文字型から数値型に変換する
        // includes: student["ids"] の数値型配列に element が含まれている場合 true を返す
        if (select.length && !select.some((num) => value ? value.split(",").map(Number).includes(num) : false)) {
            flg = false
        }
        return flg
    }

    useEffect(() => {
        axios.post("/student/list")
            .then((res) => {
                setOriginalStudents(res.data["students"])
                setDisplayStudents(res.data["students"])
                setSearchList(res.data["search"])
            })
    }, [])

    useEffect(() => {
        // 絞り込みを一つでも選択しているか
        if (originalStudents) {

            // 絞り込み用の配列を map する
            setDisplayStudents(originalStudents.map((student) => {

                // この生徒を画面に出力するか判別するフラグ
                var displayFlg = true

                // この絞り込みを選択しているか && 絞り込みの要素に生徒が含まれているか
                displayFlg = singleIdCheck(student["course_id"], courses, displayFlg)
                displayFlg = singleIdCheck(student["year_id"], years, displayFlg)

                // この絞り込みを選択しているか && 絞り込みの要素に生徒が選んだものが一つでも含まれているか
                displayFlg = multiIdCheck(student["qualification_ids"], qualifications, displayFlg)
                displayFlg = multiIdCheck(student["program_ids"], programs, displayFlg)
                displayFlg = multiIdCheck(student["tool_ids"], tools, displayFlg)
                displayFlg = multiIdCheck(student["language_ids"], languages, displayFlg)

                return displayFlg && student
            }).filter((element) => element))
        }

        // 絞り込み要素がどれか選択されたときに useEffect が動くようにする
    }, [courses, years, qualifications, programs, tools, languages, originalStudents])

    return (
        displayStudents
        &&
        <ListLayout>
            <SearchListBox>
                <SearchList
                    title="専攻/コース"
                    icon={<SubjectRoundedIcon />}
                    name="course"
                    list={searchList["courses"]}
                    set={setCourses}
                    sqlId="course_id"
                    sqlName="course_name"
                />

                <SearchList
                    title="学年"
                    icon={<FormatListNumberedRoundedIcon />}
                    name="year"
                    list={searchList["years"]}
                    set={setYears}
                    sqlId="year_id"
                    sqlName="year_name"
                />

                <SearchList
                    title="資格"
                    icon={<ApprovalRoundedIcon />}
                    name="qualification"
                    list={searchList["qualifications"]}
                    set={setQualifications}
                    sqlId="qualification_id"
                    sqlName="qualification_name"
                />

                <SearchList
                    title="プログラミング言語"
                    icon={<CodeRoundedIcon />}
                    name="program"
                    list={searchList["programs"]}
                    set={setPrograms}
                    sqlId="program_id"
                    sqlName="program_name"
                />

                <SearchList
                    title="ツール"
                    icon={<TerminalRoundedIcon />}
                    name="tool"
                    list={searchList["tools"]}
                    set={setTools}
                    sqlId="tool_id"
                    sqlName="tool_name"
                />

                <SearchList
                    title="言語"
                    icon={<TranslateRoundedIcon />}
                    name="language"
                    list={searchList["languages"]}
                    set={setLanguages}
                    sqlId="language_id"
                    sqlName="language_name"
                />
            </SearchListBox>

            <ListDisplayBox>
                {
                    displayStudents.map((student, index) => {
                        return (
                            <StudentListProfileCard
                                key={index}
                                student={student}
                            />
                        )
                    })
                }
            </ListDisplayBox>
        </ListLayout>
    )
}

export default StudentList
