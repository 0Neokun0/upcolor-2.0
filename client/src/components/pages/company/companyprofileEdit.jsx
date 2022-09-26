import { useEffect, useState } from "react"
import CompanyProfileForm from 'components/organisms/companyProfileForm';
import { TeamWorkInfoLayout } from 'components/templates';
import React from 'react';

const CompanyprofileEdit = () => {
    const [profile, setProfile] = useState([])


    
    return (
        profile.length
        &&
        <TeamWorkInfoLayout
            component={
                <CompanyProfileForm

                />
            }
        />

    );
}

export default CompanyprofileEdit;
