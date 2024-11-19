import styles from './Header.module.css'
import classNames from 'classnames'

import Logo from '@icons/logo.svg'

const Header = () => {
  return (
    <header className={classNames('content-grid', styles.primary__header)}>
      <img src={Logo} alt="Star Classes logo" />
    </header>
  )
}

export default Header