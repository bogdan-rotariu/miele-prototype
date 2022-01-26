import { node, bool } from 'prop-types'
import classNames from 'classnames'
import styles from './overlay.module.scss'

export const Overlay = ({ children, isActive }) => (
    <div className={classNames(styles.overlay, { [styles.active]: isActive })}>
        {children}
    </div>
)

Overlay.propTypes = {
    children: node,
    isActive: bool,
}
