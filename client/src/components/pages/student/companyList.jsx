import axios from "axios"
import { useState, useEffect } from "react"
import { CompanyListProfileCard, SearchList } from "components/molecules"
import { ListDisplayBox, SearchListBox } from "components/organisms"
import { ListLayout } from "components/templates"

import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity'
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

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
                    icon={<ReduceCapacityIcon />}
                    name="course"
                    list={searchList["courses"]}
                    set={setCourses}
                    sqlId="course_id"
                    sqlName="course_name"
                />

                <SearchList
                    title="業種"
                    icon={<LocalConvenienceStoreIcon />}
                    name="occupation"
                    list={searchList["occupations"]}
                    set={setOccupations}
                    sqlId="occupation_id"
                    sqlName="occupation_name"
                />

                <SearchList
                    title="都道府県"
                    icon={<TravelExploreIcon />}
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
                            <CompanyListProfileCard
                                key={index}
                                value={value}
                            />
                        )
                    })
                }
            </ListDisplayBox>
        </ListLayout>
    )
}

export default CompanyList
