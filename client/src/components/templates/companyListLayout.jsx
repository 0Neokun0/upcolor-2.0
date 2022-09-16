import { CompanyGrid } from "components/organisms"

const CompanyListLayout = (props) => {
    return (
        <CompanyGrid
            companies={props.companies}
            searchList={props.searchList}
            regions={props.regions}
        />
    )
}

export default CompanyListLayout
