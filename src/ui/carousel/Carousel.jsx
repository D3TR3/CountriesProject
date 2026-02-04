import style from "./Carousel.module.css";
import { NavLink } from "react-router";
import { COUNTRIES } from "../../data/Countries";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useState } from "react";

function Carousel({ slugName, countryName }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === 3 - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? 3 - 1 : slide - 1);
  };

  return (
    <div className={style.carouselCont}>
      <GrFormPrevious
        className={`${style.arrow} ${style.arrowLeft}`}
        onClick={previousSlide}
      />
      {[1, 2, 3].map((n, i) => (
        <img
          key={i}
          className={slide === i ? style.carouselImg : style.carouselImgHidden}
          src={`../../../public/assets/${slugName}/${slugName}${n}.jpg`}
        />
      ))}
      <div className={style.descCont}>
        <NavLink to={`/countries/${slugName}`}>
          <h2>Learn More about {countryName}</h2>
        </NavLink>
      </div>

      <GrFormNext
        className={`${style.arrow} ${style.arrowRight}`}
        onClick={nextSlide}
      />
      <span className={style.indicators}>
        {[1, 2, 3].map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={
                slide === i ? style.indicator : style.indicatorInactive
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
