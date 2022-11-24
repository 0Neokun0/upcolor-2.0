import axios from "axios"
import { useEffect, useState } from "react"

import React from "react"
import Select from "react-select"
import { ListLayout } from "components/templates"
import { ListDisplayBox, SearchListBox } from "components/organisms"
import { SearchList } from "components/molecules"
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { Box } from "@mui/material"

const TeamList = () => {
    const [suggestion, setSuggestion] = useState([])
    const [originalTeams, setOriginalTeams] = useState([])
    const [displayTeams, setDisplayTeams] = useState([])
    const [search, setSearch] = useState([])
    const [courses, setCourses] = useState([])
    const [technologies, setTechnologies] = useState([])

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
                    icon={<InboxIcon />}
                    name="course"
                    list={search["courses"]}
                    set={setCourses}
                    sqlId="course_id"
                    sqlName="course_name"
                />
            </SearchListBox>

            <ListDisplayBox>
                {
                    displayTeams
                    &&
                    displayTeams.map((team, index) => {
                        return (
                            <Box
                                item
                                key={index}
                            >
                                {team["team_name"]}
                            </Box>
                        )
                    })
                }
            </ListDisplayBox>
        </ListLayout>

    )
}

export default TeamList
