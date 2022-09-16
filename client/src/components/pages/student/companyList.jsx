import axios from "axios"
import { CompanyListLayout } from "components/templates"
import { useState, useEffect, useRef } from "react"

const CompanyList = () => {
    const [companies, setCompanies] = useState([])
    const [occupations, setOccupations] = useState([])
    const [courses, setCourses] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [regions, setRegions] = useState([])
    const [searchList, setSearchList] = useState([])

    const isFirstRender = useRef(false)



    useEffect(() => {
        axios.post("/company/list")
            .then((res) => {
                const list = res.data
                setCompanies(list["company"])
                setRegions(list["region"])
                const searchList = [
                    {
                        title: "業種",
                        selectList: list["occupation"],
                        name: "occupations",
                        sqlId: "occupation_id",
                        sqlName: "occupation_name",
                        set: setOccupations,
                    },
                    {
                        title: "募集専攻",
                        selectList: list["course"],
                        name: "courses",
                        sqlId: "course_id",
                        sqlName: "course_name",
                        set: setCourses,
                    },
                    {
                        title: "地域",
                        selectList: list["prefecture"],
                        name: "prefectures",
                        sqlId: "prefecture_id",
                        sqlName: "prefecture_name",
                        set: setPrefectures,
                    },
                ]
                setSearchList(searchList)
            })
        isFirstRender.current = true
    }, [])





    // const searchList = [
    //     {
    //         title: "業種",
    //         selectList: occupations,
    //         name: "occupations",
    //         sqlId: "occupation_id",
    //         sqlName: "occupation_name",
    //         set: setOccupations,
    //     },
    //     {
    //         title: "募集専攻",
    //         selectList: courses,
    //         name: "courses",
    //         sqlId: "course_id",
    //         sqlName: "course_name",
    //         set: setCourses,
    //     },
    //     {
    //         title: "地域",
    //         selectList: prefectures,
    //         name: "prefectures",
    //         sqlId: "prefecture_id",
    //         sqlName: "prefecture_name",
    //         set: setPrefectures,
    //     },
    // ]

    // useEffect(() => {
    //     axios.post("/company/list")
    //         .then((res) => {
    //             const list = res.data
    //             setCompanies(list["company"])
    //             setOccupations(list["occupation"])
    //             setCourses(list["course"])
    //             setPrefectures(list["prefecture"])
    //             setRegions(list["region"])
    //         })
    //     isFirstRender.current = true
    // }, [])




    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        } else {
            const sqlSelectSearchCompany = `
                SELECT *
                FROM company_profiles
                WHERE
            `
            if (occupations.length) {
                console.log(occupations)
            }
            if (courses.length) {
                console.log(courses)
            }
            if (prefectures.length) {
                console.log(prefectures)
            }
        }
    }, [occupations, courses, prefectures])

    return (
        <CompanyListLayout
            companies={companies}
            searchList={searchList}
            regions={regions}
        />
    )

}

export default CompanyList
