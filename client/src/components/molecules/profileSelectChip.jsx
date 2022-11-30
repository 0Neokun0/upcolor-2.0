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
        if (!value.includes(-1)) {
            props["setSelect"](
                typeof value === 'string' ? value.split(',') : value,
                )
        } else if (value.slice(-1)[0] === -1) {
            props["setSelect"]([value.slice(-1)[0]])
        } else if (value.length === 1) {
            props["setSelect"]([])
        } else {
            props["setSelect"]([value[1]])
        }
    }

    props["select"].sort((a,b) => {
        if( a < b ) return -1
        if( a > b ) return 1
        return 0
    })

    return (
        props.lists
        &&
        <FormControl fullWidth size="small">
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
                        {
                            selected.map((value, index) => (
                                value !== -1 ?
                                    <Chip
                                        key={index}
                                        label={props.lists[value - 1][props["sqlName"]]}
                                        size="small"
                                        sx={{
                                            mt: "0 !important"
                                        }}
                                    />
                                    :
                                    <Chip
                                        key={index}
                                        label="なし"
                                        size="small"
                                        sx={{
                                            mt: "0 !important"
                                        }}
                                    />
                            ))

                        }

                    </Box>
                )}
                MenuProps={MenuProps}
            >
                <MenuItem
                    value={-1}
                >
                    なし
                </MenuItem>

                {props.lists.map((item, index) => (
                    <MenuItem
                        key={index}
                        value={item[props["sqlId"]]}
                    >
                        {item[props["sqlName"]]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default MultipleSelectChip