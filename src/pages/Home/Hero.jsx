import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Home.module.css";
import Button from "@ui/Button/Button";
import HeroImg from "@images/hero-img.png";

const Hero = () => {
  return (
    <section
      className={classNames(
        "breakout",
        "even-columns",
        "gap-7",
        "align-items-center",
        styles.hero
      )}
    >
      <div className="grid gap-6">
        <h1 className="ff-heading fw-semibold fs-900">
          For every student, <br /> every potential. <br /> Achieve more.
        </h1>
        <p>
          Unlock your potential with courses designed for success. Star Classes
          is here to support every student&apos;s journey with knowledge,
          confidence, and results.
        </p>
        <div
          className={classNames(
            "flex justify-stretch gap-3",
            styles.heroButtonContainer
          )}
        >
          <Link to="/signup">
            <Button label="Get started today" type="primary" size="large" />
          </Link>
          <Link>
            <Button
              label="Download course brochure"
              type="secondary"
              size="large"
            />
          </Link>
        </div>
      </div>
      <div className={classNames(styles.heroImg)}>
        <img src={HeroImg} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
