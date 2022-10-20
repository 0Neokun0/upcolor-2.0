import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
}

const MultipleSelectChip = (props) => {
    const handleChange = (event) => {
        const value = event.target.value
        console.log(value.slice(-1)[0])
        if (!value.includes(NaN)) {
            props["setSelect"] (
                typeof value === 'string' ? value.split(',') : value,
            )
        } else {
            if (value.slice(-1)[0] === NaN) {
                props["setSelect"] ([])
            } else {
                value.shift()
                props["setSelect"] (
                    typeof value === 'string' ? value.split(',') : value,
                )
            }
        }
    }

    console.log(Boolean(props.select[0]))

    return (
        <FormControl fullWidth>
            <InputLabel>{props["label"]}</InputLabel>

            <Select
                multiple
                value={props["select"]}
                onChange={handleChange}
                input={<OutlinedInput label={props["label"]} />}
                renderValue={(selected) => (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 0.5
                        }}
                    >
                        {selected.map((value, index) => (
                            !Boolean(value) ?
                            <Chip
                                key={index}
                                label="なし"
                                sx={{
                                    mt: "0 !important"
                                }}
                            />
                            :
                            <Chip
                                key={index}
                                label={props.lists[value - 1][props["name"]]}
                                sx={{
                                    mt: "0 !important"
                                }}
                            />
                        ))}
                    </Box>
                )}
                MenuProps={MenuProps}
            >
                <MenuItem
                    value={NaN}
                >
                    なし
                </MenuItem>

                {props.lists.map((item, index) => (
                    <MenuItem
                        key={index}
                        value={item[props["id"]]}
                    >
                        {item[props["name"]]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default MultipleSelectChip