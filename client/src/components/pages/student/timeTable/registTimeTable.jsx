import axios from "axios"
import { TimeTableLayout } from "components/templates"
import { useEffect, useState } from "react"

const RegistTimeTable = () => {
    const [viewTimeTable, setViewTimeTable] = useState([])
    const days = ["月", "火", "水", "木", "金"]
    const periods = ["1", "2", "3", "4", "5"]

    useEffect(() => {
        axios.post("/timeTable/getTimeTable")
        .then((res) => {
            const lecturesList = res.data

            let timeTable = new Array(5)
            for (let period = 0; period < 5; period ++) {
                timeTable[period] = new Array(5)
                for (let day = 0; day < 5; day ++) {
                    timeTable[period][day] = false
                }
            }

            for (let i = 0; i < lecturesList.length; i ++) {
                timeTable[lecturesList[i]["lecture_period"]][lecturesList[i]["lecture_day"]] = lecturesList[i]
            }

            setViewTimeTable(timeTable)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [axios])

    return (
        <TimeTableLayout timeTable={viewTimeTable} periods={periods} days={days} />
    )
}

export default RegistTimeTable