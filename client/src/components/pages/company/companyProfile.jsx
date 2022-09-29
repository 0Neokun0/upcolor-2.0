// import axios from 'axios'
import { CompanyProfilePageLayout } from 'components/templates'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const CompanyProfile = () => {
  const companyDetailsTabs = [
    {
      companyArticleImage:
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg',
      companyArticleData: 'うちの会社は○○です。',
    },
    {
      companyProfileImage:
        'https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg',
      companyProfileData:
        'うちの会社何やっているか分からないですが、是非ご来社宜しくお願い致します。',
    },
    {
      companyLocationImage:
        'https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg',
      companyLocationData: '本社: 火星',
    },
    {
      companyOccupationDetailsImage:
        'https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg',
      companyOccupationDetailsData:
        '火星の人と営業とウェブアプリケーション提供しています。',
    },
  ]
  return (
    <>
      <CompanyProfilePageLayout
        companyDetailsTabs={companyDetailsTabs}
      />
    </>
  )
}

export default CompanyProfile
