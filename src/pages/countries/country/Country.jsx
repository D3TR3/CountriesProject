import { useParams } from "react-router";
import { COUNTRIES } from "../../../data/Countries";
import { Navigate } from "react-router";
import CountriesList from "../../../components/countries-list/CountriesList";
import style from "./Country.module.css";
import BackBttn from "../../../ui/back-bttn/BackBttn";

function Country() {
  const { countrySlug } = useParams();
  const country = COUNTRIES.find((c) => c.slug === countrySlug);
  console.log(country);
  console.log(countrySlug);
  if (!country) {
    return <Navigate to={"/not-found"} replace />;
  }

  return (
    <>
      <div>
        <BackBttn whereTo={"countries"} />
      </div>
      <div className={style.countryCont}>
        <h1>{country.name}</h1>
        <img
          className={style.countryImg}
          src={`../../../public/assets/${country.slug}/${country.slug}1.jpg`}
        />
        <img
          className={style.countryImg}
          src={`../../../public/assets/${country.slug}/${country.slug}2.jpg`}
        />
        <img
          className={style.countryImg}
          src={`../../../public/assets/${country.slug}/${country.slug}3.jpg`}
        />
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>
          LandArea: {country.landArea} km<sup>2</sup>
        </p>
        <p>
          {country.landlocked ? "Landlocked Country" : "Not Landlocked Country"}
        </p>
        <h2>{country.desc}</h2>
      </div>
    </>
  );
}

export default Country;
