import style from "./Card.module.css";
import { NavLink } from "react-router";
import { COUNTRIES } from "../../data/Countries";
import Carousel from "../../ui/carousel/Carousel";

function Card() {
  return (
    <>
      <div>
        <Carousel
          slugName={COUNTRIES[0].slug}
          countryName={COUNTRIES[0].name}
        />
        <Carousel
          slugName={COUNTRIES[1].slug}
          countryName={COUNTRIES[1].name}
        />
        <Carousel
          slugName={COUNTRIES[2].slug}
          countryName={COUNTRIES[2].name}
        />
        <Carousel
          slugName={COUNTRIES[3].slug}
          countryName={COUNTRIES[3].name}
        />
      </div>
    </>
  );
}

export default Card;
