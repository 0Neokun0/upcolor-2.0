import { ClassRoomLayout } from "components/templates"

const TeacherHome = () => {
    const classRoomPageHeaderContents = [
        {
            classRoomCardContentId: 1,
            classRoomLeftHeadertitle: "クラス参加",
            classRoomLeftHeaderImage: "https://images.unsplash.com/photo-1617721926586-4eecce739745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsYXNzcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
        },
        {
            classRoomCardContentId: 1,
            classRoomRightHeadertitle: "クラス参加",
            classRoomRightHeaderImage: "再度体調チェックアンケートを実施する事となりました。本日の9:20までに回答お願いします。※授業が無い学生も回答お願いします。",
        },
    ]

    const classRoomTitle = "Classroom"
    const classRoomImage = "https://www.w3schools.com/css/img_lights.jpg"

    return (
        <>
            <ClassRoomLayout
                classRoomPageHeaderContents={classRoomPageHeaderContents}
                />
        </>
    )
}

export default TeacherHome
