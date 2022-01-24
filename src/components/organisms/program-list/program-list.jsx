import { ProgramListTopBar } from '../../molecules'
import { ProgramListFooter } from '../../molecules/program-list-footer'
import styles from './program-list.module.scss'

export const ProgramList = () => {
    return (
        <section className={styles.container}>
            <ProgramListTopBar />
            <div>content</div>
            <ProgramListFooter />
        </section>
    )
}
