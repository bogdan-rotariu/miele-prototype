import { useState } from 'react'
import classNames from 'classnames'
import { node } from 'prop-types'
import { Button, Overlay } from '../../atoms'
import styles from './pulldown.module.scss'

export const Pulldown = ({ children }) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <Overlay isActive={isActive}>
            <div
                className={classNames(styles.pulldown, {
                    [styles.pulldownActive]: isActive,
                })}
            >
                <div className={styles.body}>{children}</div>
                <footer className={styles.footer}>
                    <Button onClick={() => setIsActive(false)}>Close</Button>
                </footer>
                <button
                    className={styles.handle}
                    onClick={() => setIsActive(!isActive)}
                />
            </div>
        </Overlay>
    )
}

Pulldown.propTypes = {
    children: node,
}
