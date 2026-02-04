import style from "./BackBttn.module.css";
import { NavLink } from "react-router";

function BackBttn({ whereTo }) {
  return (
    <NavLink to={`/${whereTo}`}>
      <div className={style.backBttnCont}>Back</div>
    </NavLink>
  );
}

export default BackBttn;
