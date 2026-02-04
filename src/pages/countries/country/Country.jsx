import { useParams } from "react-router";
import { COUNTRIES } from "../../../data/Countries"
import { Navigate } from "react-router";
import CountriesList from "../../../components/countries-list/CountriesList";
import style from "./Country.module.css"

function Country() {
    const { countrySlug } = useParams();
    const country = COUNTRIES.find((c) => c.slug === countrySlug);
    console.log(country)
    console.log(countrySlug)
    if (!country) {
        return <Navigate to={"/not-found"} replace />
    }

    return (
        <>
            <h1>{country.name}</h1>
            <h2>Capital: {country.capital}</h2>
            <h2>{country.landlocked ? "Landlocked" : "Sea Access"}</h2>
            <p>Population: {country.population} Million</p>
            <p>Landarea: {country.landArea} km<sup>2</sup></p>
            <p>{country.desc}</p>
            <div className={style.seeMoreCont}>
                <h2>See More : <CountriesList /></h2>
            </div>
            
        </>
    );
}

export default Country;