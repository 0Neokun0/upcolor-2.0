import axios from "axios"
import { DevelopMenuList, DevelopManagementBox } from "components/organisms"
import { DevelopMenuLayout } from "components/templates"
import { useState, useEffect } from "react"

const DevelopTabPage = () => {
    const [studentList, setStudentList] = useState([])

    const menuList = [
        { title: "生徒管理", url: "management" },
        { title: "時間割登録", url: "addLectures" },
        { title: "講師登録", url: "genTeacherSign" },
        { title: "企業登録", url: "genCompanySign" },
    ]

    const selectMenu = window.location.href.split("/").slice(-1)[0]

    const [menu, setMenu] = useState(
        menuList.map((menu) => {
            if (menu["url"] === selectMenu) {
                return menu["title"]
            }
            return false
        }).filter(element => element)[0]
    )

    const createData = (ID, image, name, mail, course, year) => {
        return { ID, image, name, mail, course, year }
    }

    useEffect(() => {
        axios.post("/teacher/getStudentList")
            .then((res) => {
                setStudentList(
                    res.data.map((student) => {
                        return createData(student.student_id, student.image, student.name, student.mail, student.course_name, student.year_name)
                    })
                )
            })
    }, [])

    return (
        <DevelopMenuLayout
            menuList={
                <DevelopMenuList
                    toUrl={"/develop"}
                    menuList={menuList}
                    select={menu}
                    set={setMenu}
                />
            }

            developBox={
                <DevelopManagementBox
                    title={menu}
                    studentList={studentList}
                />
            }
        />
    )
}

export default DevelopTabPage
