import { DevelopMenus } from "components/organisms"
import { DevelopLayout } from "components/templates"

const TeacherHome = () => {
    const menus = [
        {
            value: "ニュース",
            url: "./teachernews",
        },
    ]

    const sx = [{
        width: "40vh",
        height: "40vh",
        mx: 1,
        mt: 2,
        fontSize: "3em"
    }]

    return (
        <DevelopLayout
            component={
                <DevelopMenus
                    menus={menus}
                    sx={sx}
                />
            }
        />
    )
}

export default TeacherHome
