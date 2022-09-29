import { TeacherNewsLayout } from "components/templates"

const TeacherNews = () => {
    const type = window.location.pathname.split("/")[1]
    console.log(type)

    return (
        <TeacherNewsLayout>
            aaaa
        </TeacherNewsLayout>
    )
}

export default TeacherNews