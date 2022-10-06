import {
  Grid,
} from '@mui/material'
import { ClassRoomLeftHeader, ClassRoomRightHeader, ClassRoomTitleHeader } from 'components/molecules'

const ClassRoomPageHeader = (props) => {


  return (
    <>
      <Grid container spacing={1} columns={16}>
        <Grid item xs={2}>
            <ClassRoomLeftHeader classRoomPageHeaderContents={props.classRoomPageHeaderContents}/>
        </Grid>
        <Grid item xs={12}>
            <ClassRoomTitleHeader/>
        </Grid>
        <Grid item xs={2}>
            <ClassRoomRightHeader/>
        </Grid>
      </Grid>
    </>
  )
}

export default ClassRoomPageHeader
