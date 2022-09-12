import axios from "axios"
import { ViewTimeTableLayout } from "components/templates"
import { useEffect, useState } from "react"

const ShowTimeTable = () => {
    const [timeTable, setTimeTable] = useState([])
    const [timeTableId, setTimeTableId] = useState([])
    const [lecture, setLecture] = useState([])
    const [dialog, setDialog] = useState(-1)

    const days = ["月", "火", "水", "木", "金"]
    const periods = ["1", "2", "3", "4", "5"]

    useEffect(() => {
        axios.post("/timeTable/getTimeTable")
        .then((res) => {
            const response = res.data

            let list = new Array(5)
            for (let period = 0; period < 5; period ++) {
                list[period] = new Array(5)
                for (let day = 0; day < 5; day ++) {
                    list[period][day] = false
                }
            }

            let idList = []
            for (let i = 0; i < response.length; i ++) {
                list[response[i]["lecture_period"]][response[i]["lecture_day"]] = response[i]
                const key = response[i]["lecture_period"] * 5 + response[i]["lecture_day"]
                idList[key] = response[i]
            }

            setTimeTable(list)
            setTimeTableId(idList)
        })
    }, [])

    const handleOpenToggle = (key) => {
        setLecture(timeTableId[key])
        setDialog(key)
    }

    const handleCloseToggle = () => {
        setDialog(-1)
    }

    return (
        <ViewTimeTableLayout
            timeTable={timeTable}
            lecture={lecture}
            days={days}
            periods={periods}
            dialog={dialog}
            open={handleOpenToggle}
            close={handleCloseToggle}
        />
    )

}

export default ShowTimeTable