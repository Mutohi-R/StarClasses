import styles from './Courses.module.css'
import classNames from 'classnames'
import caret from "@icons/caret.svg";


const AccordionItem = ({ icon, title }) => {
  return (
    <div className={classNames(styles.accordionItem)}>
      <div
        className={classNames(
          "flex align-items-center gap-2 justify-between",
          styles.accordionHeader
        )}
      >
        <div className="flex align-items-center gap-2">
          <div>
            <img src={icon} alt="" />
          </div>
          <p>{title}</p>
        </div>
        <button className={styles.caret}>
          <img src={caret} alt="" />
        </button>
      </div>
    </div>
  );
}

export default AccordionItem