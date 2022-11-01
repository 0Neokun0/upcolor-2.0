import axios from "axios"
import { useState } from "react"

const AddLectures = () => {

    const [csvFile, setCsvFile] = useState(null)

    const handleOnChange = (e) => {
        if (e.target.files) {
            setCsvFile(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        if (csvFile.type === "text/csv") {

            // ファイルを読み込んだ後の処理
            const reader = new FileReader()
            reader.onload = () => {

                // csvテキストを改行で分けて配列に保存
                let csv = reader.result.split("\r\n")

                // ヘッダー3行（専攻名、コース名、学年）を配列に保存
                let courses = csv[0].split(",")
                let subCourses = csv[1].split(",")
                let years = csv[2].split(",")

                // ヘッダー3行を削除
                csv.splice(0, 3)
                csv.pop()

                csv = csv.map((row) => {
                    return row.split(",")
                })

                let classFrame = csv.length / 3 * csv[0].length
                let timeTable = new Array(classFrame)
                for (let i = 0; i < classFrame; i++) {
                    timeTable[i] = new Array(7)
                }

                for (let i = 0; i < csv.length; i += 3) {
                    for (let j = 0; j < csv[0].length; j++) {
                        let n = i / 3 * csv[0].length + j

                        for (let k = 0; k < 3; k ++) {
                            timeTable[n][k] = csv[i + k][j]
                        }

                        timeTable[n][3] = Math.floor(i / 15)
                        timeTable[n][4] = Math.floor(i % 15 / 3)

                        if (subCourses[j].length) {
                            timeTable[n][5] = courses[j] + "/" + subCourses[j]
                        } else {
                            timeTable[n][5] = courses[j]
                        }

                        timeTable[n][6] = years[j].replace(/年/g, "")
                    }
                }

                /*
                配列がこの形になるならok
                timeTable[0]: 授業名 csv[i][j]
                timeTable[1]: 授業教室 csv[i + 1][j]
                timeTable[2]: 授業講師 csv[i + 2][j]
                timeTable[3]: 授業曜日 Math.floor(i / 15)
                timeTable[4]: 授業時間 Math.floor(i % 15 / 3)
                timeTable[5]: 対象専攻・コース courses[j] + "/" + subCourses[j]
                timeTable[6]: 対象学年 years[j].replace(/年/g, "")
                */

                timeTable = timeTable.filter((s) => { return s[0] !== "" })

                axios.post("/timeTable/addLectures", {
                    timeTable: timeTable,
                })
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
            }

            // ファイルの読み込み
            reader.readAsText(csvFile)
        }
    }

    return (
        <div>
            <input type="file" onChange={handleOnChange}/>
            <button type="submit" onClick={handleSubmit}>登録</button>
        </div>
    )
}

export default AddLectures