import axios from "axios"
import { TimeTableLayout } from "components/templates"
import { useEffect, useState } from "react"

const RegistTimeTable = () => {
    const [viewTimeTable, setViewTimeTable] = useState([])
    const [registTimeTable, setRegistTimeTable] = useState([])
    const [overWrite, setOverWrite] = useState(true)

    const days = ["月", "火", "水", "木", "金"]
    const periods = ["1", "2", "3", "4", "5"]

    useEffect(() => {
        axios.post("/timeTable/getLecturesList")
        .then((res) => {
            const lecturesList = res.data

            let timeTable = new Array(5)
            for (let period = 0; period < 5; period ++) {
                timeTable[period] = new Array(5)
                for (let day = 0; day < 5; day ++) {
                    timeTable[period][day] = false
                }
            }

            let lecturesIdList = []
            for (let i = 0; i < lecturesList.length; i ++) {
                timeTable[lecturesList[i]["lecture_period"]][lecturesList[i]["lecture_day"]] = lecturesList[i]
                const key = lecturesList[i]["lecture_period"] * 5 + lecturesList[i]["lecture_day"]
                lecturesIdList[key] = lecturesList[i]["lecture_id"]
            }

            setViewTimeTable(timeTable)
            setRegistTimeTable(lecturesIdList)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleChange = (e, key) => {
        setRegistTimeTable(
            registTimeTable.map((id, index) => (index === key ? e.target.value : id))
        )
    }

    const handleSubmit = () => {
        setRegistTimeTable(
            registTimeTable.filter((s) => { return s[0] !== "" })
        )

        axios.post("/timeTable/addTimeTable", {timeTable: registTimeTable})
        .then((res) => {
            if (res.data) {
                console.log("登録完了")
            } else {
                setOverWrite(false)
            }
        })
    }

    const toggleAlertClose = () => {
        setOverWrite(true)
    }

    const toggleOverWrite = () => {
        toggleAlertClose()
        axios.post("/timeTable/overWriteTimeTable", {timeTable: registTimeTable})
        .then((res) => {
            console.log("登録完了")
        })
    }

    return (
        <TimeTableLayout
            viewTimeTable={viewTimeTable}
            overWrite={overWrite}
            periods={periods}
            days={days}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            toggleOverWrite={toggleOverWrite}
        />
    )
}

export default RegistTimeTable