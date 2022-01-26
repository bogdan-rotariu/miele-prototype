import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { node } from 'prop-types'
import { Overlay, Button } from '../../atoms'
import styles from './pulldown.module.scss'

//I have used fixed sizes for offsetting, while being in a rush to learn the @use-gesture API. It would be of course a good idea to ref an element and get the proper height and offsets from the element
const OFFSET = 229

export const Pulldown = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [{ y }, api] = useSpring(() => ({ y: -OFFSET }))
    const closePulldown = () => api.start({ y: -OFFSET })

    const bind = useDrag(
        ({ last, movement: [, my] }) => {
            if (last) {
                if (my < OFFSET / 2) {
                    setToggle(false)
                    return closePulldown()
                }
                setToggle(true)
                return api.start({ y: 0 })
            }

            api.start({ y: -OFFSET + my })
        },
        { bounds: { top: 0 }, filterTaps: true, threshold: 10 },
    )

    return (
        <Overlay isActive={toggle}>
            <animated.div
                {...bind()}
                style={{
                    transform: y.interpolate((y) => `translateY(${y}px)`),
                }}
                className={styles.pulldown}
            >
                <div className={styles.body}>{children}</div>
                <footer className={styles.footer}>
                    <Button onClick={() => closePulldown()}>Close</Button>
                </footer>
                <button className={styles.handle} />
            </animated.div>
        </Overlay>
    )
}

Pulldown.propTypes = {
    children: node,
}
