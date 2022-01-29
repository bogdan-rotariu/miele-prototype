import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { node } from 'prop-types'
import { Overlay, Button } from '../../atoms'
import styles from './pulldown.module.scss'

// I have used fixed offset value, while being in a rush to learn the @use-gesture API.
// It would be of course a good idea to ref an element and get the proper height and offsets from the element
const OFFSET = 230
export const Pulldown = ({ children }) => {
    const [toggle, setToggle] = useState(false)
    const [{ y }, api] = useSpring(() => ({ y: -OFFSET }))
    
    const close = () => {
        setToggle(false)
        api.start({ y: -OFFSET })
    }

    const open = () => {
        setToggle(true)
        api.start({ y: 0 })
    }

    const bind = useDrag(
        ({ last, movement: [, my], tap }) => {
            if(tap && !toggle) return open()
            if (tap && toggle) return close()

            if (last) {
                if (my < OFFSET / 2) {
                    return close()
                }
                return open()
            }
            api.start({ y: -OFFSET + my })
        },
        { bounds: { top: 0 }, filterTaps: true, threshold: 10 },
    )

    return (
        <Overlay isActive={toggle}>
            <animated.div
                style={{
                    transform: y.to((y) => `translateY(${y}px)`),
                }}
                className={styles.pulldown}
            >
                <div className={styles.body}>{children}</div>
                <footer className={styles.footer}>
                    <Button onClick={() => close()}>Close</Button>
                </footer>
                <button {...bind()} className={styles.handle} />
            </animated.div>
        </Overlay>
    )
}

Pulldown.propTypes = {
    children: node,
}
