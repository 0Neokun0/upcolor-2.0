// import axios from 'axios'
import { CompanyProfilePageLayout } from 'components/templates'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const Home = () => {
  const companyDetailsTabs = [
    { company: 'marumarukaisha' },
    {
      companyArticleImage:
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg',
      companyArticleData: 'うちの会社は○○です。',
    },
  ]
  return (<CompanyProfilePageLayout companyDetailsTabs={companyDetailsTabs} />)
}

export default Home
