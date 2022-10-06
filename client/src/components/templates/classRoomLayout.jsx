import ClassRoomPageHeader from "components/organisms/classRoomPageHeader"



const ClassRoomLayout = (props) => {
  return (
    <>
        <ClassRoomPageHeader
            classRoomPageHeaderContents={props.classRoomPageHeaderContents}
        />
    </>
  )
}

export default ClassRoomLayout