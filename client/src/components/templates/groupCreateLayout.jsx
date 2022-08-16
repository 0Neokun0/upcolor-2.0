import { useOutletContext } from "react-router-dom"
import GroupCreateForm from "components/organisms/groupCreateForm"

const GroupCreateLayout = () => {
    const handleCreateSubmit = useOutletContext()["handleCreateSubmit"]

    return (
        <GroupCreateForm
            handleCreateSubmit={handleCreateSubmit}
        />
    )
}

export default GroupCreateLayout