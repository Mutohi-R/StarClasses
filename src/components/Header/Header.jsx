import styles from "./Header.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import Button from "@ui/Button/Button";
import Logo from "@icons/logo.svg";
import Hamburger from "@icons/hamburger.svg";

const Header = () => {
  return (
    <div className="content-grid">
      <header
        className={classNames(
          "breakout",
          "flex",
          "justify-between",
          "align-items-center",
          styles.primaryHeader
        )}
      >
        <div className={styles.logo}>
          <img src={Logo} alt="Star Classes logo" />
        </div>
        <nav
          className={classNames(
            "flex",
            "align-items-center",
            "gap-9",
            styles.primaryNavigation
          )}
        >
          <ul role="list" className="flex gap-6">
            <li>
              <NavLink className={classNames(styles.navLink, "active")} to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink className={styles.navLink}>Courses</NavLink>
            </li>
            <li>
              <NavLink className={styles.navLink}>Pricing</NavLink>
            </li>
            <li>
              <NavLink className={styles.navLink}>Resources</NavLink>
            </li>
          </ul>

          <ul role="list" className="flex align-items-center gap-6">
            <li>
              <NavLink to={"/login"}>
                <Button label="Log in" type="link" />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/signup"}>
                <Button label="Signup" type="primary" size="normal" />
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.hamburger}>
          <img src={Hamburger} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
