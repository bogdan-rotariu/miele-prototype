import { array } from 'prop-types'
import { HomeIcon } from '../../atoms/icons'
import { useCurrentTime } from '../../../hooks'
import styles from './program-list-top-bar.module.scss'

const listOfItems = ['Programmes', 'Favorites']

export const ProgramListTopBar = ({ list = listOfItems }) => {
    const currentTime = useCurrentTime()

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

ProgramListTopBar.propTypes = {
    list: array,
}
