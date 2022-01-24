import { useState } from 'react'
import { ProgramItem } from '../../atoms/program-item/program-item'
import { ScrollerContainer } from '../../atoms/scroller-container'
import { ProgramListTopBar } from '../../molecules'
import { ProgramListFooter } from '../../molecules/program-list-footer'
import { listOfPrograms } from './program-list-mock'
import styles from './program-list.module.scss'

export const ProgramList = () => {
    const [activeItem, setActiveItem] = useState(null)

    return (
        <section className={styles.container}>
            <ProgramListTopBar />
            <ScrollerContainer>
                {listOfPrograms.map(({ icon, label, subLabel }, index) => {
                    const key = `${label}-${index}`
                    return (
                        <ProgramItem
                            key={key}
                            icon={icon}
                            label={`${label} ${index}`}
                            subLabel={subLabel}
                            isActive={activeItem === key}
                            onClick={() => setActiveItem(key)}
                        />
                    )
                })}
            </ScrollerContainer>
            <ProgramListFooter />
        </section>
    )
}
