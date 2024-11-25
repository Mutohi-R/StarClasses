import classNames from "classnames";
import styles from "./Home.module.css";
import TeachersSlider from "./TeachersSlider";
import Button from "@ui/Button/Button";
import { Link } from "react-router-dom";

const Teachers = () => {
  return (
    <section className={classNames("breakout", styles.teachers)}>
      <div className="grid gap-4">
        <p className="fs-300 text-neutral-400">TEACHERS</p>
        <h2 className="fs-800 ff-heading fw-semibold">
          The team behind your success.
        </h2>
        <p>
          Our experienced and passionate faculty are the backbone of Star
          Classes. With a deep understanding of their subjects and a commitment
          to excellence, they guide students toward success every step of the
          way.
        </p>
        <Link to={'/signup'}>
          <Button label="Register now" type="primary" size="large" />
        </Link>
      </div>
      <TeachersSlider />
    </section>
  );
};

export default Teachers;
