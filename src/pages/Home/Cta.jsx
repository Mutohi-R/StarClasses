import styles from "./Home.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Button from "@ui/Button/Button";
import giggleTextSheet from "@images/giggle-text-sheet.svg";
import journalSquareSticker from "@images/journal-square-sticker.svg";
import doodleBlueScribble from "@images/doodle-blue-scribble.svg";
import energyAquamarineCircleScribble from "@images/energy-aquamarine-circle-scribbles.svg";

const Cta = () => {
  return (
    <section
      className={classNames("full-width", "flex", "justify-center", styles.cta)}
    >
      <img src={giggleTextSheet} alt="" />
      <img src={journalSquareSticker} alt="" />
      <img src={doodleBlueScribble} alt="" />
      <img src={energyAquamarineCircleScribble} alt="" />
      <div className="grid gap-4 justify-items-center">
        <h2 className="fs-800 ff-heading fw-semibold text-align-center">
          Join Star Classes today
        </h2>
        <Link to={"/signup"}>
          <Button label="Sign up with us" type="primary" size="normal" />
        </Link>
      </div>
    </section>
  );
};

export default Cta;
