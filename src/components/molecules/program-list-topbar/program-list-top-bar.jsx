import { HomeIcon } from '../../atoms'
import { useCurrentTime } from '../../../hooks'
import styles from './program-list-top-bar.module.scss'

export const ProgramListTopBar = () => {
    const currentTime = useCurrentTime()
    const list = ['Programmes', 'Favorites']

    return (
        <ul className={styles.list}>
            <li>
                <HomeIcon />
            </li>
            {list.map((listItem, idx) => (
                <li key={`${listItem}-${idx}`} className={styles.item}>
                    {listItem}
                </li>
            ))}
            <li className={styles.item}>{currentTime}</li>
        </ul>
    )
}
