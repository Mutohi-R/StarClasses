import PropTypes from 'prop-types'
import styles from './Button.module.css';

const Button = ({label, type, size}) => {
  return (
    <button className={styles.button} data-type={type} data-size={size} >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['normal', 'large', 'xlarge'])
}

Button.defaultProps = {
  type: 'primary',
  size: 'normal'
}

export default Button