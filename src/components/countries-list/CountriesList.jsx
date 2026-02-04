import { NavLink } from "react-router";
import { COUNTRIES } from "../../data/Countries"

function CountriesList() {
    return (
        <>
            {COUNTRIES.map((c,i) =>
            <NavLink key={i} to={`/countries/${c.slug}`}>
                {c.name}
            </NavLink>
            )}
        </>
    );
}

export default CountriesList;