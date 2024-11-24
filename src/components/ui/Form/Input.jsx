import PropTypes from 'prop-types'
import styles from './Form.module.css';
import classNames from 'classnames';

const Input = ({type, placeHolder, Label}) => {
  return (
    <div className={classNames("grid flow", styles.inputGroup)}>
        <label className='fs-300 text-neutral-400'>{Label}</label>
        <input className='pinline-16 pblock-12 br-1 fs-300' type={type} placeholder={placeHolder} />
    </div>
  )
}

Input.propTypes = {
    placeHolder: PropTypes.string,
    type: PropTypes.string.isRequired,
    Label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
}

Input.defaultProps = {
    type: 'text',
    placeHolder: '',
    label: '',
}

export default Input