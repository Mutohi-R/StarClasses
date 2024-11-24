import classNames from "classnames"
import styles from "./Form.module.css"
import PropTypes from 'prop-types'

const Checkbox = ({label}) => {
  return (
    <div className={classNames("", styles.checkbox)}>
        <input type="checkbox" name="" id="" />
        <label className="fs-300" htmlFor="">{label}</label>
    </div>
  )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Checkbox