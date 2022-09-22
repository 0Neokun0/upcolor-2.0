import axios from "axios"
import { CompanyListLayout } from "components/templates"
import { useState, useEffect, useRef } from "react"

const CompanyList = () => {
    const [companies, setCompanies] = useState([])
    const [viewCompanies, setViewCompanies] = useState([])
    const [occupations, setOccupations] = useState([])
    const [courses, setCourses] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [searchList, setSearchList] = useState([])

    const isFirstRender = useRef(false)

    useEffect(() => {
        axios.post("/company/list")
            .then((res) => {
                const list = res.data
                setCompanies(list["company"])
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

    // 初回動かない useEffect
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        } else {
            let search = []

            // 登録されている企業をすべて map する
            companies.map((company) => {
                let searchFlg = true

                // 絞り込み要素が選択されていて、選択した要素と企業が登録している要素が一致しなかった場合 searchFlg を false にする
                if (occupations.length && !occupations.some(element => company["company_occupation"].includes(element))) {
                    searchFlg = false
                }
                if (courses.length && !courses.some(element => company["company_course_preference_id"].includes(element))) {
                    searchFlg = false
                }
                if (prefectures.length && !prefectures.some(element => company["company_location"].includes(element))) {
                    searchFlg = false
                }

                // searchFlg が true の場合に企業を配列に追加する
                if (searchFlg) {
                    search.push(company)
                }

                return 0
            })

            // 配列に入っている企業を表示用 useState にセットする
            setViewCompanies(search)
        }

        // 下記に書いてある変数が変更される度に useEffect が動作する
    }, [occupations, courses, prefectures, companies])

    return (
        <CompanyListLayout
            companies={viewCompanies}
            searchList={searchList}
        />
    )
}

export default CompanyList
