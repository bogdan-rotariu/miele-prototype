import { useState } from 'react'
import { Button } from '../../atoms'
import styles from './program-list-footer.module.scss'

export const ProgramListFooter = () => {
    const [isActiveBtn, setIsActiveBtn] = useState(false)

    return (
        <footer className={styles.footer}>
            <Button
                onClick={() => setIsActiveBtn(!isActiveBtn)}
                isActive={isActiveBtn}
            >
                Back
            </Button>
            <Button isDisabled>Inactive Button</Button>
        </footer>
    )
}
