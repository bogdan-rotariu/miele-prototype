import classNames from 'classnames'
import { string, func, bool, node } from 'prop-types'
import styles from './program-item.module.scss'

export const ProgramItem = ({ label, onClick, icon, subLabel, isActive }) => {
    if (!label || !icon) {
        return null
    }

    return (
        <button
            className={classNames(styles.container, {
                [styles.active]: isActive,
            })}
            onClick={onClick}
        >
            <span className={styles.icon}>{icon}</span>
            <span className={styles.label}>{label}</span>
            {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
        </button>
    )
}

ProgramItem.propTypes = {
    label: string.isRequired,
    onClick: func.isRequired,
    icon: node.isRequired,
    subLabel: string,
    isActive: bool,
}
