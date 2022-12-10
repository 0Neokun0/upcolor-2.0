import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import React from "react"
import Select from "react-select"
import { ListLayout } from "components/templates"
import { ListDisplayBox, SearchListBox } from "components/organisms"
import { SearchList, TeamViewCard } from "components/molecules"
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'

const TeamList = () => {
    const [suggestion, setSuggestion] = useState([])
    const [originalTeams, setOriginalTeams] = useState([])
    const [displayTeams, setDisplayTeams] = useState([])
    const [search, setSearch] = useState([])
    const [courses, setCourses] = useState([])
    const [technologies, setTechnologies] = useState([])
    const navigate = useNavigate()

    const singleIdCheck = (value, select, flg) => {
        // length: 絞り込み要素が選ばれているか
        // includes: select に value が含まれているか
        if (select.length && !select.includes(value)) {
            flg = false
        }
        return flg
    }

    const technologyCheck = (value, select, flg) => {
        if (value === null || (select && !value.includes(select))) {
            flg = false
        }
        return flg
    }

    useEffect(() => {
        axios.post("/teamWork/getList")
            .then((res) => {
                setOriginalTeams(res.data["team"])
                setSuggestion(res.data["suggest"])
                setSearch(res.data["search"])
            })
    }, [])

    useEffect(() => {
        if (originalTeams) {
            setDisplayTeams(
                originalTeams.map((team) => {
                    var displayFlg = true

                    displayFlg = technologyCheck(team["technology_used"], technologies["label"], displayFlg)
                    displayFlg = singleIdCheck(team["team_work_course"], courses, displayFlg)

                    return displayFlg && team
                }).filter((element) => element)
            )
        }
    }, [technologies, courses, originalTeams])

    console.log(displayTeams)

    return (
        <ListLayout>
            <SearchListBox>
                <Select
                    options={suggestion}
                    onChange={(value) => { setTechnologies(value) }}
                />

                <SearchList
                    title="専攻"
                    icon={<HistoryEduIcon />}
                    name="course"
                    list={search["courses"]}
                    set={setCourses}
                    sqlId="course_id"
                    sqlName="course_name"
                />
            </SearchListBox>

            <ListDisplayBox
                navigate={navigate}
            >
                {
                    displayTeams
                    &&
                    displayTeams.map((team, index) => {
                        return (
                            <TeamViewCard
                                key={index}
                                team={team}
                            />
                        )
                    })
                }
            </ListDisplayBox>
        </ListLayout>

    )
}

export default TeamList
