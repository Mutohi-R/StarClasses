import styles from "./Header.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import VisitorCount from "@components/VisitorCount/VisitorCount";
import Button from "@ui/Button/Button";
import Logo from "@icons/logo.svg";
import Hamburger from "@icons/hamburger.svg";
import Close from "@icons/close.svg";
import { useState } from "react";

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  }

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
          <VisitorCount />
        </div>
        <nav
          className={classNames(
            "flex",
            "align-items-center",
            "gap-9",
            styles.primaryNavigation
          )}
          data-open={isNavOpen}
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
        <button onClick={handleNavToggle} data-sticky={isNavOpen} className={styles.menuToggle}>
          {
            isNavOpen ? <img src={Close} alt="" /> : <img src={Hamburger} alt="" />
          }       
        </button>
      </header>
    </div>
  );
};

export default Header;
