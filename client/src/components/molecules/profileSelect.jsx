import { FormControl, InputLabel, NativeSelect } from "@mui/material"

const ProfileSelect = (props) => {
    return (
        <FormControl
            fullWidth
        >
            <InputLabel>
                {props["label"]}
            </InputLabel>

            <NativeSelect
                defaultValue={props["defaultValue"]}
                inputProps={{
                    name: props["name"],
                }}
            >
                {
                    props["element"]
                    &&
                    props["element"].map((elem) => {
                        return (
                            <option
                                key={elem[props["valueId"]]}
                                value={elem[props["valueId"]]}
                            >
                                {elem[props["valueColumn"]]}
                            </option>
                        )
                    })
                }
            </NativeSelect>
        </FormControl>
    )
}

export default ProfileSelect
