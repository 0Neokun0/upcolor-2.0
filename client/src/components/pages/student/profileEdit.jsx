import { TeamWorkInfoLayout } from "components/templates"
import { ProfileForm } from "components/organisms"

const ProfileEdit = () => {
    return (
        <TeamWorkInfoLayout
            component={<ProfileForm />}
        />
    );
}

export default ProfileEdit