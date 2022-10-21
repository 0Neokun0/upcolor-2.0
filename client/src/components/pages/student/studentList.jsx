import axios from "axios"
import { MainMenuProfileCard, SearchList } from "components/molecules"
import { ListDisplayBox, SearchListBox } from "components/organisms"
import { ListLayout } from "components/templates"
import { useRef, useState, useEffect } from "react"

const StudentList = () => {
    const isFirstRender = useRef(false)

    const [originalStudents, setOriginalStudents] = useState(false)
    const [displayStudents, setDisplayStudents] = useState([])
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
                setDisplayStudents(res.data["students"])
                setSearchList(res.data["search"])
            })

        isFirstRender.current = true
    }, [])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        } else {
            let search = []

            originalStudents.map((student) => {
                let displayFlg = true

                if (courses.length && !courses.some(element => student["student_course_id"].includes(element))) {
                    displayFlg = false
                }
                if (years.length && !years.some(element => student["student_year"].includes(element))) {
                    displayFlg = false
                }
                if (qualifications.length && !qualifications.some(element => student["student_qualifications_id"].includes(element))) {
                    displayFlg = false
                }
                if (programs.length && !programs.some(element => student["student_programming_languages"].includes(element))) {
                    displayFlg = false
                }
                if (tools.length && !tools.some(element => student["student_tool_and_framework"].includes(element))) {
                    displayFlg = false
                }
                if (languages.length && !languages.some(element => student["student_country_language"].includes(element))) {
                    displayFlg = false
                }

                if (displayFlg) {
                    search.push(student)
                }

                return 0
            })

            setDisplayStudents(search)
        }
    }, [courses, years, qualifications, programs, tools, languages])

    return (
        originalStudents
        &&
        <ListLayout>
            <SearchListBox>
                <SearchList
                    title="専攻/コース"
                    name="course"
                    list={searchList["courses"]}
                    set={setCourses}
                    sqlId="course_id"
                    sqlName="course_name"
                />

                <SearchList
                    title="学年"
                    name="year"
                    list={searchList["years"]}
                    set={setYears}
                    sqlId="year_id"
                    sqlName="year_name"
                />

                <SearchList
                    title="資格"
                    name="qualification"
                    list={searchList["qualifications"]}
                    set={setQualifications}
                    sqlId="qualification_id"
                    sqlName="qualification_name"
                />

                <SearchList
                    title="プログラミング言語"
                    name="programs"
                    list={searchList["programs"]}
                    set={setPrograms}
                    sqlId="program_id"
                    sqlName="program_name"
                />

                <SearchList
                    title="ツール"
                    name="tool"
                    list={searchList["tools"]}
                    set={setTools}
                    sqlId="tool_id"
                    sqlName="tool_name"
                />

                <SearchList
                    title="言語"
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
                            <MainMenuProfileCard
                                key={index}
                                displayValue={value}
                            />
                        )
                    })
                }
            </ListDisplayBox>
        </ListLayout>
    )
}

export default StudentList
