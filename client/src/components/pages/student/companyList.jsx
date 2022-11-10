import axios from "axios"
import { Paper } from "@mui/material"
import { useState, useEffect } from "react"
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { SearchList } from "components/molecules"
import { ListDisplayBox, SearchListBox } from "components/organisms"
import { ListLayout } from "components/templates"
import { Link } from "react-router-dom"

const CompanyList = () => {
    const [originalCompanies, setOriginalCompanies] = useState(false)
    const [displayCompanies, setDisplayCompanies] = useState(false)
    const [courses, setCourses] = useState([])
    const [occupations, setOccupations] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [searchList, setSearchList] = useState([])

    const multiIdCheck = (value, select, flg) => {
        if (select.length && !select.some((num) => value ? value.split(",").map(Number).includes(num) : false)) {
            flg = false
        }
        return flg
    }

    useEffect(() => {
        axios.post("/company/list")
            .then((res) => {
                setOriginalCompanies(res.data["companies"])
                setSearchList(res.data["search"])
            })
    }, [])

    useEffect(() => {
        if (originalCompanies) {
            setDisplayCompanies(originalCompanies.map((company) => {
                var displayFlg = true

                displayFlg = multiIdCheck(company["course_ids"], courses, displayFlg)
                displayFlg = multiIdCheck(company["occupation_ids"], occupations, displayFlg)
                displayFlg = multiIdCheck(company["prefecture_ids"], prefectures, displayFlg)

                return displayFlg && company
            }).filter((element) => element))
        }
    }, [courses, occupations, prefectures, originalCompanies])

    return (
        displayCompanies
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
                    title="業種"
                    icon={<InboxIcon />}
                    name="occupation"
                    list={searchList["occupations"]}
                    set={setOccupations}
                    sqlId="occupation_id"
                    sqlName="occupation_name"
                />

                <SearchList
                    title="都道府県"
                    icon={<InboxIcon />}
                    name="prefecture"
                    list={searchList["prefectures"]}
                    set={setPrefectures}
                    sqlId="prefecture_id"
                    sqlName="prefecture_name"
                />
            </SearchListBox>

            <ListDisplayBox>
                {
                    displayCompanies.map((value, index) => {
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
                                    {value["user_id"] + value["company_name"]}
                                </Link>
                            </Paper>
                        )
                    })
                }
            </ListDisplayBox>
        </ListLayout>
    )
}

export default CompanyList
