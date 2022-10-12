// import axios from 'axios'
import { CompanyProfilePageLayout } from 'components/templates'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const CompanyProfile = () => {

    const companyDetailsTabs = [
        {
            companyDetailsTabsRow: '会社紹介記事',
            companyDetailsImage:
                'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg',
            companyDetailsData: '本社には「デジタル工房」を設置。デジタルトランスフォーメーションを加速させる実験的な取り組みを、顧客にアピールする場として活用されている。',
        },
        {
            companyDetailsTabsRow: 'プロフィール',
            companyDetailsImage:
                'https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg',
            companyDetailsData:
                'DXCテクノロジーは、フォーチュン500にランクインするITサービス市場のグローバルリーダーです。世界70カ国以上、130,000人以上の従業員が、お客様にとって重要なサービスを提供し、信頼を獲得しています。私たちはテクノロジーの力を活用して、ミッションクリティカルなITサービスをエンタープライズテクノロジースタック全体で提供し、お客様のビジネスを支えています。。',
        },
        {
            companyDetailsTabsRow: '本社所在地',
            companyDetailsImage:
                'https://job.mynavi.jp/common/img23/advance/228893-01ol.jpg',
            companyDetailsData: '本社: 火星',
        },
        {
            companyDetailsTabsRow: '事業内容',
            companyDetailsImage:
                'https://job.mynavi.jp/common/img23/crp_thumb/228893-thumb1_0001.jpg',
            companyDetailsData:
                '・保険業界向けBPaaSとBPO,顧客満足度の向上、ビジネスプロセスの最適化、コストの削減、機敏性の向上を実現するビジネスプロ',
        },
        {
            companyDetailsTabsRow: '社長.代表.CEO.メッセージ',
            companyDetailsImage:
                'https://job.mynavi.jp/common/img23/crp_thumb/228893-thumb4_0002.jpg',
            companyDetailsData:
                'ITサービスのグローバルリーダーであるDXC Technologyのミッションは、「お客様の成功と従業員の成長を実現すること」です。全社のミッションのひとつとして「従業員の成長」を掲げる理由は、ITサービスがまさにピープルビジネスであり、人材が価値の源泉となるからです。社員一人ひとりが自己実現に向けて挑戦し成長することで、人材としての価値が高まり、会社の成長にダイレクトにつながります。',
        },


  ]

    const companyRecruitmentTabs = [
        {
            companyRecruitmentRow: '募集要項',
            companyRecruitmentImage:
                'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg',
            companyRecruitmentData: 'うちの会社は○○です。',
        },
        {
            companyRecruitmentRow: '採用フロー',
            companyRecruitmentImage:
                'https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg',
            companyRecruitmentData:
                'うちの会社何やっているか分からないですが、是非ご来社宜しくお願い致します。',
        },
        {
            companyRecruitmentRow: '問合せ先',
            companyRecruitmentImage:
                'https://slidemodel.com/wp-content/uploads/30050-01-company-profile-powerpoint-template-1.jpg',
            companyRecruitmentData: '本社: 火星',
        },
    ]

    const companyLinksTabs = [
        {
            companyLinksRow: '学内説明会',
            companyLinksData: 'うちの会社は○○です。',
        },
        {
            companyLinksRow: 'マイナビ．リクナビ',
            companyLinksData:
            'うちの会社何やっているか分からないですが、是非ご来社宜しくお願い致します。',
        },
        {
            companyLinksRow: 'ホームページ',
            companyLinksData: '本社: 火星',
        },
        {
            companyLinksRow: 'SNS',
            companyLinksData: '本社: 火星',
        },
  ]

  return (
    <>
      <CompanyProfilePageLayout
            companyDetailsTabs={companyDetailsTabs}
            companyRecruitmentTabs={companyRecruitmentTabs}
            companyLinksTabs={companyLinksTabs}
       />
    </>
  )
}

export default CompanyProfile
