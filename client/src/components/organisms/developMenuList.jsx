import { Box } from "@mui/material"
import { DevelopMenu, ReturnButton } from "components/molecules";

const DevelopMenuList = (props) => {
    var { toUrl, menuList, select, set } = props

    var flg = window.location.href.split("/").slice(-1)[0]

    return (
        <Box>
            <ReturnButton
                toUrl={toUrl}
            />
            {
                menuList.map((menu, index) => {
                    return (
                        <DevelopMenu
                            key={index}
                            title={menu["title"]}
                            toUrl={menu["url"]}
                            select={select}
                            set={set}
                        />
                    )
                })
            }
        </Box>
    )
}

export default DevelopMenuList
