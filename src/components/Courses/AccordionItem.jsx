import styles from './Courses.module.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import caret from "@icons/caret.svg";
import { useState } from 'react';


const AccordionItem = ({ icon, title, children }) => {

  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <div className={classNames(styles.accordionItem, "grid gap-3")}>
      <div
        className={classNames(
          "flex align-items-center gap-2 justify-between",
          styles.accordionHeader
        )}
        onClick={toggleAccordion}
      >
        <div className="flex align-items-center gap-2">
          <div>
            <img src={icon} alt="" />
          </div>
          <p>{title}</p>
        </div>
        <button data-open={isAccordionOpen} className={styles.caret}>
          <img src={caret} alt="" />
        </button>
      </div>
      <div data-open={isAccordionOpen} className={classNames(styles.accordionContent)}>
        {children}
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
}

export default AccordionItem