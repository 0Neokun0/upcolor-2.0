import { FormControl, InputLabel, NativeSelect } from "@mui/material"

const ProfileSelect = (props) => {
    return (
        <FormControl fullWidth>
            <InputLabel>
                {props["label"]}
            </InputLabel>

            <NativeSelect
                label={props["label"]}
                value={props["value"]}
                onChange={props["onChange"]}
            >
                {
                    props.items.map((item) => {
                        return (
                            <option
                                key={item[props.id]}
                                value={item[props.id]}
                            >
                                {item[props.column]}
                            </option>
                        )
                    })
                }
            </NativeSelect>
        </FormControl>
    );
}

export default ProfileSelect