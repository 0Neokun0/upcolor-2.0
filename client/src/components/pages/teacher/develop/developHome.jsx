import { DevelopLayout } from "components/templates"
import { DevelopMenus } from "components/organisms"

const DevelopHome = () => {
    const menus = [
        {
            value: "講師登録",
            url: "./genTeacherSign",
        },
        {
            value: "時間割登録",
            url: "./addLectures",
        },
        {
            value: "企業登録",
            url: "./genCompanySign",
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
        <DevelopLayout>
            <DevelopMenus
                menus={menus}
                sx={sx}
            />
        </DevelopLayout>
    )
}

export default DevelopHome