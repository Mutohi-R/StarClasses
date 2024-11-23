import styles from "./Header.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import Button from "@ui/Button/Button";
import Logo from "@icons/logo.svg";

const Header = () => {
  return (
    <div className="content-grid">
      <header className={classNames("breakout", "flex", "justify-between", "align-items-center", styles.primaryHeader)}>
        <div className={styles.logo}>
          <img src={Logo} alt="Star Classes logo" />
        </div>
        <nav className={classNames("flex", "align-items-center", "gap-9", styles.primaryNavigation)}>
          <ul role="list" className="flex gap-6">
            <li>
              <NavLink>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink>
                Resources
              </NavLink>
            </li>
          </ul>

          <ul role="list" className="flex align-items-center gap-6">
            <li>
              <Button label="Log in" type="link"/>
            </li>
            <li>
              <Button label="Signup" type="primary" size="normal"/>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
