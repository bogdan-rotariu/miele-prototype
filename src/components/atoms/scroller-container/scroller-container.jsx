import { node } from 'prop-types'
import styles from './scroller-container.module.scss'

export const ScrollerContainer = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

ScrollerContainer.propTypes = {
    children: node.isRequired,
}
