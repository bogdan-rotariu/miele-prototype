import classNames from 'classnames'
import { bool, node, func } from 'prop-types'
import styles from './styled-button.module.scss'

export const Button = ({ children, isDisabled, onClick, isActive }) => (
    <button
        onClick={onClick}
        disabled={isDisabled}
        className={classNames(
            styles.button,
            { [styles.disabled]: isDisabled },
            { [styles.active]: isActive },
        )}
    >
        {children}
    </button>
)

Button.propTypes = {
    children: node.isRequired,
    isDisabled: bool,
    isActive: bool,
    onClick: func,
}
