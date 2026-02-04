import CountriesList from "../../components/countries-list/CountriesList";
import style from "./Countries.module.css"

function Countries() {
    return (
        <div>
            <h1>Countries</h1>
            <div className={style.countriesCont}>
                <CountriesList />
            </div>   
        </div>
    );
}

export default Countries;