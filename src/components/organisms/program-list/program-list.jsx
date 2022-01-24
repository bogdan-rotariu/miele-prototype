import { ProgramListTopBar } from '../../molecules'
import styles from './program-list.module.scss'

export const ProgramList = () => {
    return <section className={styles.container}>
        <ProgramListTopBar />
        <div>content</div>
        <div>footer</div>
    </section>
}
